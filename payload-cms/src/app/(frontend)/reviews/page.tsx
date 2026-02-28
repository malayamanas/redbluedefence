import type { Metadata } from 'next'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'What our clients say about RedBlueDefence cybersecurity services.',
}

const testimonials = [
  {
    author: 'Sarah Mitchell',
    jobTitle: 'CISO',
    company: 'FinTech Corp',
    rating: 5,
    content:
      'RedBlueDefence identified critical vulnerabilities in our payment infrastructure that our internal team had missed for months. Their report was clear and actionable.',
  },
  {
    author: 'James Okafor',
    jobTitle: 'Head of IT Security',
    company: 'NHS Trust',
    rating: 5,
    content:
      'The incident response team was exceptional. They contained the ransomware attack within hours and had us back online with minimal data loss.',
  },
  {
    author: 'Emma Chen',
    jobTitle: 'Security Manager',
    company: 'Global Logistics Ltd',
    rating: 5,
    content:
      'Their Microsoft Security training transformed our team. All six candidates passed SC-200 on their first attempt.',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-amber-400' : 'text-gray-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center" data-aos="fade-up">
        <Badge variant="purple" className="mb-4">Reviews</Badge>
        <h1 className="text-4xl font-bold text-white">
          What Our Clients Say
        </h1>
        <p className="mt-4 text-gray-400">
          Trusted by security teams across finance, healthcare, and technology.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card key={i} data-aos="fade-up" data-aos-delay={i * 50}>
            <StarRating rating={t.rating} />
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">&ldquo;{t.content}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#7c43ff] to-[#a855f7] flex items-center justify-center text-white font-semibold text-sm">
                {t.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{t.author}</div>
                <div className="text-xs text-gray-500">{t.jobTitle}, {t.company}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
