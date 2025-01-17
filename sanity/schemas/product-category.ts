import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product-category',
  title: 'Product Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'category', // Corrected to match the category field
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainimage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'category',
      media: 'mainimage',
    },
  },
});
