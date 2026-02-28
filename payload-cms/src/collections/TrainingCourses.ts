import type { CollectionConfig } from 'payload'

export const TrainingCourses: CollectionConfig = {
  slug: 'training-courses',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'level', 'status'],
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return { status: { equals: 'published' } }
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Microsoft Security', value: 'microsoft-security' },
        { label: 'Microsoft Azure', value: 'microsoft-azure' },
        { label: 'DevSecOps / SecOps / DevOps', value: 'devsecops' },
        { label: 'Linux & Containers', value: 'linux-containers' },
        { label: 'Scripting & Automation', value: 'scripting-automation' },
        { label: 'Data, ML & AI', value: 'data-ml-ai' },
      ],
    },
    {
      name: 'certificationCode',
      type: 'text',
      admin: {
        description: 'e.g. SC-200, AZ-500',
      },
    },
    {
      name: 'level',
      type: 'select',
      required: true,
      options: [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Advanced', value: 'advanced' },
      ],
    },
    {
      name: 'duration',
      type: 'text',
      admin: {
        description: 'e.g. 40 hours',
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'curriculum',
      type: 'array',
      fields: [
        {
          name: 'moduleTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'topics',
          type: 'array',
          fields: [
            {
              name: 'topic',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'duration',
          type: 'text',
        },
      ],
    },
    {
      name: 'prerequisites',
      type: 'textarea',
    },
    {
      name: 'instructor',
      type: 'text',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'price',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: '0 = free',
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
