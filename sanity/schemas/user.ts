import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(), // Ensures this field is mandatory
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.required().email(), // Validates proper email format
    }),
    defineField({
      name: 'mobileNumber',
      title: 'Mobile Number',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{10}$/, {
            name: 'mobileNumber', // Name for this validation rule
            invert: false, // Disallow anything not matching
          })
          .error('Mobile number must be 10 digits'),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(), // Auto-set current date/time
      readOnly: true, // Make this field read-only
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
    },
  },
});
