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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'mobileNumber',
      title: 'Mobile Number',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{10}$/, {
            name: 'mobileNumber',
            invert: false,
          })
          .error('Mobile number must be 10 digits'),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
      name: 'reasonForEnquire',
      title: 'Reason for Enquire',
      type: 'string',
    }),
    defineField({
      name: 'requirement',
      title: 'Requirement',
      type: 'text',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
    },
  },
});
