import Link from 'next/link'

const footerLinks = {
  Services: [
    { label: 'Penetration Testing', href: '/services' },
    { label: 'Threat Intelligence', href: '/services' },
    { label: 'Incident Response', href: '/services' },
    { label: 'Security Consulting', href: '/services' },
  ],
  Training: [
    { label: 'Microsoft Security', href: '/training?category=microsoft-security' },
    { label: 'Azure Security', href: '/training?category=microsoft-azure' },
    { label: 'DevSecOps', href: '/training?category=devsecops' },
    { label: 'All Courses', href: '/training' },
  ],
  Company: [
    { label: 'About', href: '/company' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insight', href: '/insight' },
    { label: 'Careers', href: '/careers' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c43ff] to-[#a855f7]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-white">RedBlueDefence</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Advanced cybersecurity solutions protecting your organization at every layer.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-500 hover:text-[#7c43ff] transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#7c43ff] transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="mb-4 text-sm font-semibold text-white">{section}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-gray-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} RedBlueDefence Ltd. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Registered in England & Wales
          </p>
        </div>
      </div>
    </footer>
  )
}
