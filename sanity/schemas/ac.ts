import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ac',
  title: 'AC',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
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
      name: 'imagesGallery',
      title: 'Product Images',
      type: 'array',
      of: [
        {
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
        },
      ],
    }),
    defineField({
      title: 'Price',
      name: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'categories',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product-category' } }],
    }),
    // Checkbox Field for BLDC
    defineField({
      name: 'bldc',
      title: 'BLDC',
      type: 'boolean',
      description: 'Check this box if the product is a BLDC type',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      price: 'Price',
      media: 'imagesGallery.0', // Use the first image from imagesGallery
      bldc: 'bldc',
    },
    prepare({ title, price, media, bldc }) {
      return {
        title: title || 'No title',
        subtitle: `${price ? `${price}/-` : 'Price not set'} | ${bldc ? 'BLDC Type' : 'Non-BLDC Type'}`,
        media: media,
      };
    },
  },
});
