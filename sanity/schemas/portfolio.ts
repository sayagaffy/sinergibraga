import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'portfolio',
    title: 'Portfolio Item',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'client',
            title: 'Client',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'number',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'challenge',
            title: 'Challenge',
            type: 'text',
        }),
        defineField({
            name: 'solution',
            title: 'Solution',
            type: 'text',
        }),
        defineField({
            name: 'result',
            title: 'Result',
            type: 'text',
        }),
        defineField({
            name: 'expert',
            title: 'Related Expert',
            type: 'reference',
            to: [{ type: 'expert' }],
        }),
        defineField({
            name: 'citations',
            title: 'Citations / Regulations',
            type: 'array',
            of: [{ type: 'citation' }],
        }),
    ],
})
