import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return { title: slug.replace(/-/g, ' ') }
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params
  const title = slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <Badge variant="purple" className="mb-4">Job Opening</Badge>
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <div className="flex flex-wrap gap-3 mb-8">
        <Badge>Full-time</Badge>
        <Badge>Remote</Badge>
        <Badge>London, UK</Badge>
      </div>
      <p className="text-gray-400 mb-8">
        Full job description will be available once published via the admin panel.
      </p>
      <Button href="mailto:careers@redbluedefence.com" size="lg">
        Apply Now
      </Button>
    </div>
  )
}
