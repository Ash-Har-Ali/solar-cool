import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'serviceLocations',
  title: 'Service Locations',
  type: 'document',
  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'number',
      validation: (Rule) =>
        Rule.min(1000000000)
          .max(9999999999)
          .error('Contact must be a valid 10-digit number'),
    }),
  ],
  preview: {
    select: {
      title: 'location',
      subtitle: 'contact',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `Contact: ${subtitle || 'Not Provided'}`,
      };
    },
  },
});
