import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product-category',
  title: 'Product Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(50),
      description: 'Enter the name of the category.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'category', // Corrected to match the category field
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'The URL-friendly version of the category name.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Provide an alternative description for the image.',
        },
      ],
      description: 'Upload the main image for this category.',
    }),
  ],
  preview: {
    select: {
      title: 'category',
      media: 'mainImage',
    },
  },
});
