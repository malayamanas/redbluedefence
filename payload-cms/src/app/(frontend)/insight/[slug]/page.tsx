import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return {
    title: slug.replace(/-/g, ' '),
  }
}

export default async function InsightPostPage({ params }: Props) {
  const { slug } = await params

  // In production this would fetch from Payload local API
  // const payload = await getPayload({ config: payloadConfig })
  // const { docs } = await payload.find({ collection: 'posts', where: { slug: { equals: slug } } })
  // if (!docs[0]) notFound()

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-bold text-white mb-6">
        {slug.replace(/-/g, ' ')}
      </h1>
      <p className="text-gray-400">This post will be available once content is added via the admin panel.</p>
    </article>
  )
}
