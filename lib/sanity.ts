import createImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const apiVersion = '2024-02-11'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false to get fresh data
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}
