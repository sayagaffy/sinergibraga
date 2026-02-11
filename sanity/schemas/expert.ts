import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'expert',
    title: 'Expert',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'expertQuote',
            title: 'Expert Quote',
            type: 'text',
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'linkedinUrl',
            title: 'LinkedIn URL',
            type: 'url',
        }),
        defineField({
            name: 'credentials',
            title: 'Credentials',
            type: 'string',
        }),
    ],
})
