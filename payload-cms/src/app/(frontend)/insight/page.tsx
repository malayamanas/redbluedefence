import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Insight',
  description: 'Cybersecurity insights, research, and news from the RedBlueDefence team.',
}

export default function InsightPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center" data-aos="fade-up">
        <Badge variant="purple" className="mb-4">Insight</Badge>
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Cybersecurity Research & News
        </h1>
        <p className="mt-4 text-gray-400">
          Thought leadership, threat analysis, and security best practices from our team.
        </p>
      </div>

      <div className="text-center py-20 text-gray-500">
        <p className="text-lg">No posts published yet.</p>
        <p className="mt-2 text-sm">Check back soon for the latest cybersecurity insights.</p>
      </div>
    </div>
  )
}
