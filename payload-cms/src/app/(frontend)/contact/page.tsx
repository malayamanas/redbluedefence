import type { Metadata } from 'next'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the RedBlueDefence team.',
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center" data-aos="fade-up">
        <Badge variant="purple" className="mb-4">Contact</Badge>
        <h1 className="text-4xl font-bold text-white">
          Get in Touch
        </h1>
        <p className="mt-4 text-gray-400">
          Ready to strengthen your security posture? Our team responds within 24 hours.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2" data-aos="fade-up">
        {/* Contact form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-xl font-bold text-white mb-6">Send us a message</h2>
          <form action="mailto:info@redbluedefence.com" method="post" encType="text/plain" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-400">First name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[#7c43ff] focus:outline-none"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-400">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[#7c43ff] focus:outline-none"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-400">Work email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[#7c43ff] focus:outline-none"
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-400">Company</label>
              <input
                type="text"
                name="company"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[#7c43ff] focus:outline-none"
                placeholder="Acme Corp"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-400">Service interest</label>
              <select
                name="service"
                className="w-full rounded-lg border border-white/10 bg-[#0a0a0f] px-4 py-2.5 text-sm text-white focus:border-[#7c43ff] focus:outline-none"
              >
                <option value="">Select a service...</option>
                <option value="pentest">Penetration Testing</option>
                <option value="threat-intel">Threat Intelligence</option>
                <option value="incident-response">Incident Response</option>
                <option value="cloud-security">Cloud Security</option>
                <option value="training">Training & Certifications</option>
                <option value="compliance">Compliance & GRC</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-400">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[#7c43ff] focus:outline-none resize-none"
                placeholder="Tell us about your security needs..."
              />
            </div>
            <Button size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Other ways to reach us</h2>
            <div className="space-y-4">
              {[
                { icon: '📧', label: 'Email', value: 'info@redbluedefence.com', href: 'mailto:info@redbluedefence.com' },
                { icon: '🚨', label: 'Incident Response Hotline', value: '24/7 emergency support', href: '/contact' },
                { icon: '💼', label: 'Careers', value: 'careers@redbluedefence.com', href: 'mailto:careers@redbluedefence.com' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#7c43ff]/40"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-sm text-gray-400">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#7c43ff]/30 bg-gradient-to-br from-[#7c43ff]/10 to-transparent p-6">
            <h3 className="font-bold text-white mb-2">Response Guarantee</h3>
            <p className="text-sm text-gray-400">
              We respond to all enquiries within <strong className="text-white">24 business hours</strong>.
              Emergency incident response is available 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
