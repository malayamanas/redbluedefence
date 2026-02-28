import type { Metadata } from 'next'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Company',
  description: 'About RedBlueDefence — our mission, values, and team.',
}

const values = [
  {
    icon: '🛡️',
    title: 'Integrity First',
    desc: 'We operate with full transparency. Our assessments are honest, our advice is unbiased.',
  },
  {
    icon: '🎯',
    title: 'Mission-Driven',
    desc: 'Every engagement is designed to genuinely improve your security, not tick a box.',
  },
  {
    icon: '🔬',
    title: 'Always Learning',
    desc: "The threat landscape never stands still. Neither do we.",
  },
  {
    icon: '🤝',
    title: 'Partnership',
    desc: "We're not a vendor, we're an extension of your security team.",
  },
]

export default function CompanyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="grid-pattern py-32 text-center">
        <div className="mx-auto max-w-4xl px-6" data-aos="fade-up">
          <Badge variant="purple" className="mb-6">About Us</Badge>
          <h1 className="text-5xl font-bold text-white">
            Defending Organizations,<br />
            <span className="gradient-text">One Layer at a Time</span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            RedBlueDefence was founded by experienced red and blue team operators who saw a gap between
            security theatre and genuine protection. We exist to bridge that gap.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div data-aos="fade-right">
              <Badge variant="purple" className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl font-bold text-white mb-4">
                Making enterprise-grade security accessible to every organization
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We believe security should be a business enabler, not a barrier. Whether you&apos;re a
                FTSE 100 enterprise or a growing startup, you deserve the same calibre of protection.
                That&apos;s why we&apos;ve built a platform that combines elite offensive security expertise
                with practical, actionable guidance.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Our training programmes are designed to upskill your internal teams so they can sustain
                and build on the work we do together.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {[
                { value: '500+', label: 'Clients Protected' },
                { value: '15+', label: 'Years Experience' },
                { value: '2,000+', label: 'Vulnerabilities Found' },
                { value: '98%', label: 'Client Retention' },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <div className="gradient-text text-3xl font-bold">{stat.value}</div>
                  <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#7c43ff]/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center" data-aos="fade-up">
            <Badge variant="purple" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl font-bold text-white">What We Stand For</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Card key={v.title} data-aos="fade-up" data-aos-delay={i * 50} className="text-center">
                <div className="mb-3 text-3xl">{v.icon}</div>
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white">Ready to work together?</h2>
          <p className="mt-4 text-gray-400">Let&apos;s start with a conversation.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Book a Consultation</Button>
            <Button href="/careers" variant="secondary" size="lg">Join Our Team</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
