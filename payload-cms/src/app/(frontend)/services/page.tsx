import type { Metadata } from 'next'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Enterprise cybersecurity services from penetration testing to cloud security.',
}

const services = [
  {
    slug: 'penetration-testing',
    icon: '🛡️',
    title: 'Penetration Testing',
    tagline: 'Find vulnerabilities before attackers do',
    features: ['Web app testing', 'Network infrastructure', 'Social engineering', 'Red team ops'],
  },
  {
    slug: 'threat-intelligence',
    icon: '🔍',
    title: 'Threat Intelligence',
    tagline: 'Real-time threat visibility and analysis',
    features: ['Dark web monitoring', 'IOC feeds', 'Threat hunting', 'SIEM integration'],
  },
  {
    slug: 'incident-response',
    icon: '⚡',
    title: 'Incident Response',
    tagline: '24/7 rapid breach containment and recovery',
    features: ['Immediate triage', 'Forensic analysis', 'Remediation', 'Post-incident review'],
  },
  {
    slug: 'cloud-security',
    icon: '☁️',
    title: 'Cloud Security',
    tagline: 'Secure your cloud-native infrastructure',
    features: ['Azure/AWS/GCP review', 'IAM hardening', 'CSPM', 'Container security'],
  },
  {
    slug: 'compliance-grc',
    icon: '📋',
    title: 'Compliance & GRC',
    tagline: 'Navigate regulatory requirements with confidence',
    features: ['ISO 27001', 'SOC 2', 'GDPR', 'Cyber Essentials'],
  },
  {
    slug: 'managed-security',
    icon: '🔒',
    title: 'Managed Security',
    tagline: 'Round-the-clock SOC protection',
    features: ['24/7 monitoring', 'SIEM management', 'Vulnerability management', 'Monthly reporting'],
  },
]

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center" data-aos="fade-up">
        <Badge variant="purple" className="mb-4">Services</Badge>
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          End-to-End Cybersecurity Services
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          From offensive red team engagements to defensive blue team operations, we provide comprehensive
          security coverage for your organization.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Card key={service.slug} data-aos="fade-up" data-aos-delay={i * 50} className="flex flex-col">
            <div className="mb-4 text-3xl">{service.icon}</div>
            <h2 className="text-xl font-bold text-white">{service.title}</h2>
            <p className="mt-2 text-sm text-[#a855f7]">{service.tagline}</p>
            <ul className="mt-4 space-y-2 flex-1">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7c43ff]" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href={`/services/${service.slug}`} variant="secondary" size="sm" className="w-full">
                Learn More →
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-20 text-center" data-aos="fade-up">
        <div className="rounded-3xl border border-[#7c43ff]/30 bg-gradient-to-br from-[#7c43ff]/10 to-transparent p-12">
          <h2 className="text-3xl font-bold text-white">Not sure where to start?</h2>
          <p className="mt-4 text-gray-400">Our experts will assess your environment and recommend the right services.</p>
          <Button href="/contact" size="lg" className="mt-8">
            Get a Free Assessment
          </Button>
        </div>
      </div>
    </div>
  )
}
