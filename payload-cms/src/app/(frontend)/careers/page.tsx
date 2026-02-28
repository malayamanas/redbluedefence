import type { Metadata } from 'next'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the RedBlueDefence team — career opportunities in cybersecurity.',
}

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center" data-aos="fade-up">
        <Badge variant="purple" className="mb-4">Careers</Badge>
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Join Our Team
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          We're building the next generation of cybersecurity experts. If you're passionate about
          security, we want to hear from you.
        </p>
      </div>

      <div className="text-center py-20 text-gray-500">
        <p className="text-lg">No open positions at the moment.</p>
        <p className="mt-2 text-sm mb-8">Check back soon or send a speculative application.</p>
        <Button href="mailto:careers@redbluedefence.com" variant="secondary">
          Send Speculative Application
        </Button>
      </div>
    </div>
  )
}
