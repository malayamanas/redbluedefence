import type { Metadata } from 'next'
import { Badge } from '@/components/ui/Badge'
import { Accordion } from '@/components/ui/Accordion'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about RedBlueDefence services and training.',
}

const faqs = [
  {
    question: 'What types of penetration testing do you offer?',
    answer:
      'We offer web application, network, cloud infrastructure, mobile, and social engineering assessments. All engagements follow CREST/OWASP methodology and include a detailed report with prioritised remediation guidance.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Scope varies by engagement type. A standard web app pentest typically takes 3-5 days. Network assessments range from 5-10 days. We provide a detailed scoping call to give you an accurate estimate.',
  },
  {
    question: 'Are your training courses suitable for beginners?',
    answer:
      'Yes. We offer courses from beginner to advanced levels. SC-900 and AZ-900 are great starting points for those new to Microsoft security and Azure.',
  },
  {
    question: 'Do you provide certifications upon course completion?',
    answer:
      'Yes, all course completions are recognized with a RedBlueDefence certificate. Our courses also prepare you for official Microsoft, CompTIA, and other vendor certifications.',
  },
  {
    question: 'How quickly can you respond to a security incident?',
    answer:
      'Our incident response team is available 24/7. We aim to begin triage within 2 hours of engagement for critical incidents.',
  },
  {
    question: 'Do you work with SMBs or only enterprises?',
    answer:
      'We work with organizations of all sizes. We have flexible service tiers designed for SMBs that need enterprise-grade security without enterprise budgets.',
  },
]

export default function FAQsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-16 text-center" data-aos="fade-up">
        <Badge variant="purple" className="mb-4">FAQs</Badge>
        <h1 className="text-4xl font-bold text-white">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-gray-400">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="/contact" className="text-[#a855f7] hover:underline">Contact us</a>.
        </p>
      </div>

      <div data-aos="fade-up">
        <Accordion items={faqs} />
      </div>
    </div>
  )
}
