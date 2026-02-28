import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { s3Storage } from '@payloadcms/storage-s3'
import { Posts } from './collections/Posts'
import { CaseStudies } from './collections/CaseStudies'
import { Services } from './collections/Services'
import { Careers } from './collections/Careers'
import { FAQs } from './collections/FAQs'
import { Reviews } from './collections/Reviews'
import { TrainingCourses } from './collections/TrainingCourses'
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { SiteSettings } from './globals/SiteSettings'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Posts,
    CaseStudies,
    Services,
    Careers,
    FAQs,
    Reviews,
    TrainingCourses,
    Categories,
    Media,
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [],
    },
  ],
  globals: [SiteSettings],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'change-me-min-32-chars-secret!!',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || ':memory:',
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
    blocksAsJSON: true,
  }),
  plugins: [
    ...(process.env.S3_ENDPOINT
      ? [
          s3Storage({
            collections: {
              media: {
                prefix: 'media',
              },
            },
            bucket: process.env.S3_BUCKET || 'redbluedefence-media',
            config: {
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.S3_SECRET || '',
              },
              region: 'auto',
              endpoint: process.env.S3_ENDPOINT || '',
            },
          }),
        ]
      : []),
  ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
})
