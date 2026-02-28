import type { Metadata } from 'next'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world cybersecurity outcomes from RedBlueDefence client engagements.',
}

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center" data-aos="fade-up">
        <Badge variant="purple" className="mb-4">Case Studies</Badge>
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Real Results, Real Impact
        </h1>
        <p className="mt-4 text-gray-400">
          See how we've helped organizations across industries strengthen their security posture.
        </p>
      </div>

      <div className="text-center py-20 text-gray-500">
        <p className="text-lg">No case studies published yet.</p>
        <p className="mt-2 text-sm">Add case studies via the admin panel to display them here.</p>
      </div>
    </div>
  )
}
