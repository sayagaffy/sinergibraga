import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'citation',
    title: 'Citation',
    type: 'object',
    fields: [
        defineField({
            name: 'sourceTitle',
            title: 'Source Title',
            type: 'string',
        }),
        defineField({
            name: 'sourceUrl',
            title: 'Source URL',
            type: 'url',
        }),
        defineField({
            name: 'contextClause',
            title: 'Context / Clause',
            type: 'text',
            rows: 3,
        }),
    ],
})
