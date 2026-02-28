import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const services = [
  {
    icon: '🛡️',
    title: 'Penetration Testing',
    desc: 'Identify vulnerabilities before attackers do with our expert red team assessments.',
  },
  {
    icon: '🔍',
    title: 'Threat Intelligence',
    desc: 'Stay ahead of emerging threats with real-time intelligence and proactive monitoring.',
  },
  {
    icon: '⚡',
    title: 'Incident Response',
    desc: '24/7 rapid response to contain, investigate, and recover from security incidents.',
  },
  {
    icon: '🎓',
    title: 'Security Training',
    desc: 'Upskill your team with industry-recognized certification tracks and hands-on labs.',
  },
  {
    icon: '☁️',
    title: 'Cloud Security',
    desc: 'Secure your AWS, Azure, and GCP environments with architecture reviews and hardening.',
  },
  {
    icon: '🔒',
    title: 'Compliance & GRC',
    desc: 'Navigate ISO 27001, SOC 2, GDPR and more with our compliance experts.',
  },
]

const stats = [
  { value: '500+', label: 'Clients Protected' },
  { value: '99.9%', label: 'Threat Detection Rate' },
  { value: '24/7', label: 'SOC Monitoring' },
  { value: '15+', label: 'Years Experience' },
]

const trainingCategories = [
  { code: 'SC-200', name: 'Security Operations Analyst', category: 'microsoft-security' },
  { code: 'SC-300', name: 'Identity & Access Administrator', category: 'microsoft-security' },
  { code: 'AZ-500', name: 'Azure Security Engineer', category: 'microsoft-azure' },
  { code: 'DevSecOps', name: 'DevSecOps Practitioner', category: 'devsecops' },
  { code: 'Kubernetes', name: 'Container Security', category: 'linux-containers' },
  { code: 'Python', name: 'Security Automation', category: 'scripting-automation' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-pattern py-32 md:py-44">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7c43ff]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div data-aos="fade-down">
            <Badge variant="purple" className="mb-6">
              Trusted by 500+ enterprises worldwide
            </Badge>
          </div>
          <h1
            data-aos="fade-up"
            className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            The{' '}
            <span className="gradient-text">Cyber Defence</span>{' '}
            Platform for Modern Enterprises
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
          >
            RedBlueDefence delivers end-to-end cybersecurity — from penetration testing and threat
            intelligence to certification training and incident response.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/contact" size="lg">
              Get a Free Assessment
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center" data-aos="fade-up">
                <div className="gradient-text text-4xl font-bold">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-aos="fade-up">
            <Badge variant="purple" className="mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-white">
              Complete Cybersecurity Coverage
            </h2>
            <p className="mt-4 text-gray-400">
              From red team to blue team, we cover every aspect of your security posture.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Card key={service.title} data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="mb-4 text-3xl">{service.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="secondary">
              View All Services →
            </Button>
          </div>
        </div>
      </section>

      {/* Training CTA */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#7c43ff]/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center" data-aos="fade-up">
            <Badge variant="purple" className="mb-4">Training Courses</Badge>
            <h2 className="text-4xl font-bold text-white">
              Build Your Security Expertise
            </h2>
            <p className="mt-4 text-gray-400">
              Microsoft certifications, DevSecOps, cloud security, and more.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
            {trainingCategories.map((course) => (
              <Link
                key={course.code}
                href={`/training?category=${course.category}`}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#7c43ff]/40 hover:bg-white/8"
              >
                <span className="rounded-lg bg-[#7c43ff]/20 px-3 py-1 text-sm font-bold text-[#a855f7]">
                  {course.code}
                </span>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {course.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/training" size="lg">
              Browse All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center" data-aos="fade-up">
          <div className="rounded-3xl border border-[#7c43ff]/30 bg-gradient-to-br from-[#7c43ff]/10 to-[#a855f7]/5 p-12 glow">
            <h2 className="text-4xl font-bold text-white">
              Ready to Secure Your Organization?
            </h2>
            <p className="mt-4 text-gray-400">
              Talk to our experts and get a tailored security assessment within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Book a Free Consultation
              </Button>
              <Button href="/faqs" variant="secondary" size="lg">
                Read FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
