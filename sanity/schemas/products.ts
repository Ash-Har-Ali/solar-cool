import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'products',
  title: 'Products',
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
        source: 'productName',
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
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'string',
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
      name: 'bldc',
      title: 'BLDC',
      type: 'boolean',
      description: 'Check this box if the product is a BLDC type',
    }),
  ],
  preview: {
    select: {
      title: 'productName',
      media: 'mainimage',
      price: 'Price',
      category: 'category',
    },
    prepare({ title, media, price, category }) {
      return {
        title: title,
        subtitle: `${price ? `₹${price}` : 'Price not set'} | ${category || 'No category assigned'}`,
        media: media,
      };
    },
  },
});
