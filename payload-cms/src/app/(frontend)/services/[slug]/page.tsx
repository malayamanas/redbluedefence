import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return { title: slug.replace(/-/g, ' ') }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const title = slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
      <p className="text-gray-400">Detailed service information will appear here once configured in the admin panel.</p>
    </article>
  )
}
