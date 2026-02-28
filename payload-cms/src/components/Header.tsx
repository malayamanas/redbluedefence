import Link from 'next/link'

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Training', href: '/training' },
  { label: 'Insight', href: '/insight' },
  { label: 'Careers', href: '/careers' },
  { label: 'Company', href: '/company' },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c43ff] to-[#a855f7]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
          </div>
          <span className="font-heading text-lg font-bold text-white">RedBlueDefence</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="rounded-lg bg-gradient-to-r from-[#7c43ff] to-[#a855f7] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <label htmlFor="nav-toggle" className="cursor-pointer md:hidden">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
      </div>

      {/* Mobile Menu */}
      <input type="checkbox" id="nav-toggle" className="peer hidden" />
      <nav className="hidden flex-col gap-2 border-t border-white/10 px-6 py-4 peer-checked:flex md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-2 rounded-lg bg-gradient-to-r from-[#7c43ff] to-[#a855f7] px-5 py-2 text-center text-sm font-semibold text-white"
        >
          Get Started
        </Link>
      </nav>
    </header>
  )
}
