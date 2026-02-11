import fs from 'fs';
import { createRequire } from 'module';
import { createClient } from 'next-sanity';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const { loadEnvConfig } = require('@next/env');

const projectDir = process.cwd()
loadEnvConfig(projectDir)

// Environment variables should be loaded by sanity exec or next
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const token = process.env.SANITY_API_TOKEN!

if (!projectId || !dataset || !token) {
    console.error('Missing environment variables. Make sure NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_TOKEN are set.')
    process.exit(1)
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-02-11',
    useCdn: false,
    token,
})

// Define types for our data
type ServiceItem = {
    title: string
    description: string
    icon: string
    imagePage: number
}

type ServiceGroup = {
    type: 'service'
    data: ServiceItem[]
}

type PortfolioItem = {
    client: string
    title: string
    category: string
}

type PortfolioGroup = {
    type: 'portfolio'
    year: number
    data: PortfolioItem[]
}

type DataGroup = ServiceGroup | PortfolioGroup

async function uploadImage(imagePath: string) {
    try {
        if (!fs.existsSync(imagePath)) {
            console.error(`Image not found: ${imagePath}`)
            return null
        }
        const buffer = fs.readFileSync(imagePath)
        const asset = await client.assets.upload('image', buffer, {
            filename: path.basename(imagePath),
        })
        return asset
    } catch (error) {
        console.error(`Failed to upload image: ${imagePath}`, error)
        return null
    }
}

async function seed() {
    console.log('Seeding data...')

    // Read data using fs to avoid module import issues
    const dataPath = path.join(__dirname, 'seed-data.json')
    const rawData = fs.readFileSync(dataPath, 'utf-8')
    const seedData: DataGroup[] = JSON.parse(rawData)

    // 1. Seed Services
    const servicesGroup = seedData.find((d): d is ServiceGroup => d.type === 'service')
    const servicesData = servicesGroup?.data || []

    for (const service of servicesData) {
        console.log(`Processing service: ${service.title}`)

        // Construct image path for the page
        // Format: SBM COMPANY PROFILE 2024 _page-00XX.jpg
        const pageNum = service.imagePage.toString().padStart(4, '0')
        const imagePath = path.join(__dirname, '..', 'docs', `SBM COMPANY PROFILE 2024 _page-${pageNum}.jpg`)

        let imageAsset = null
        if (service.imagePage) {
            imageAsset = await uploadImage(imagePath)
        }

        const doc = {
            _type: 'service',
            title: service.title,
            slug: { _type: 'slug', current: service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') },
            description: service.description,
            icon: service.icon,
            image: imageAsset ? {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: imageAsset._id,
                },
            } : undefined,
        }

        // Check if exists
        const existing = await client.fetch(`*[_type == "service" && title == $title][0]`, { title: service.title })
        if (existing) {
            console.log(`Service ${service.title} already exists. Skipping...`)
        } else {
            await client.create(doc)
            console.log(`Created service: ${service.title}`)
        }
    }

    // 2. Seed Portfolio
    const portfolioGroup = seedData.find((d): d is PortfolioGroup => d.type === 'portfolio')
    const portfolioData = portfolioGroup?.data || []
    const year = portfolioGroup?.year || 2023

    // For portfolio, we don't have specific images for each project in the PDF images
    // We will upload page 16 as a generic image for now, or just leave it blank
    const portfolioPageNum = '0016'
    const portfolioImagePath = path.join(__dirname, '..', 'docs', `SBM COMPANY PROFILE 2024 _page-${portfolioPageNum}.jpg`)
    const portfolioAsset = await uploadImage(portfolioImagePath)

    for (const item of portfolioData) {
        console.log(`Processing portfolio: ${item.title}`)

        const doc = {
            _type: 'portfolio',
            title: item.title,
            slug: { _type: 'slug', current: item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') },
            description: `Project for ${item.client}. Category: ${item.category}`,
            client: item.client,
            year: year,
            category: item.category,
            // Use the list page image as placeholder
            image: portfolioAsset ? {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: portfolioAsset._id,
                },
            } : undefined,
        }

        const existing = await client.fetch(`*[_type == "portfolio" && title == $title][0]`, { title: item.title })
        if (existing) {
            console.log(`Portfolio ${item.title} already exists. Skipping...`)
        } else {
            await client.create(doc)
            console.log(`Created portfolio: ${item.title}`)
        }
    }

    console.log('Seeding complete!')
}

seed().catch(err => {
    console.error(err)
    process.exit(1)
})
