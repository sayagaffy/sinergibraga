import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
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
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'geoFacts',
            title: 'Geo Facts',
            type: 'text',
            description: 'JSON string of geo facts (legacy) or rewrite as object',
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            description: 'Lucide icon name',
        }),
        defineField({
            name: 'statistics',
            title: 'Statistics',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string' },
                        { name: 'value', type: 'string' },
                    ],
                },
            ],
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
