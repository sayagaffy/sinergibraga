import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'glossary',
    title: 'Glossary Term',
    type: 'document',
    fields: [
        defineField({
            name: 'term',
            title: 'Term',
            type: 'string',
        }),
        defineField({
            name: 'definition',
            title: 'Definition',
            type: 'text',
        }),
        defineField({
            name: 'relatedServices',
            title: 'Related Services',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'service' }] }],
        }),
    ],
})
