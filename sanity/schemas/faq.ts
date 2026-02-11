import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
        }),
        defineField({
            name: 'answer',
            title: 'Answer',
            type: 'text',
        }),
        defineField({
            name: 'service',
            title: 'Related Service',
            type: 'reference',
            to: [{ type: 'service' }],
        }),
    ],
})
