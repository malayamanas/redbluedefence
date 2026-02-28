import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return { title: slug.replace(/-/g, ' ') }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold text-white mb-6">
        {slug.replace(/-/g, ' ')}
      </h1>
      <p className="text-gray-400">This case study will be available once added via the admin panel.</p>
    </article>
  )
}
