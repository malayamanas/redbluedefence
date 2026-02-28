import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'RedBlueDefence',
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Advanced Cybersecurity Solutions',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'navLinks',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'footerLinks',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        {
          name: 'twitter',
          type: 'text',
        },
        {
          name: 'linkedin',
          type: 'text',
        },
        {
          name: 'github',
          type: 'text',
        },
        {
          name: 'youtube',
          type: 'text',
        },
      ],
    },
    {
      name: 'contactEmail',
      type: 'email',
      defaultValue: 'info@redbluedefence.com',
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'defaultTitle',
          type: 'text',
          defaultValue: 'RedBlueDefence | Advanced Cybersecurity Solutions',
        },
        {
          name: 'defaultDescription',
          type: 'textarea',
          defaultValue:
            'RedBlueDefence provides enterprise-grade cybersecurity services, training, and consulting to protect your organization.',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
