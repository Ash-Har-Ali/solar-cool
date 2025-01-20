import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'product-category' },
    }),
    defineField({
      name: 'productName',
      title: 'Product Name',
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
      media: 'imagesGallery.0',    // Select the first image in the gallery
      price: 'Price',
      category: 'category.title', // Reference the category title
    },
    prepare(selection) {
      const { price, category } = selection;
      return {
        ...selection,
        subtitle: `${price ? `₹${price}` : 'Price not set'} | ${category || 'No category'}`, // Format the subtitle with price and category
      };
    },
  },
});
