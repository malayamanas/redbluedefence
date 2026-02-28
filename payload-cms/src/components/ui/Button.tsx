import Link from 'next/link'
import { HTMLAttributes, AnchorHTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  variant = 'primary',
  href,
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-[#7c43ff] to-[#a855f7] text-white hover:opacity-90',
    secondary: 'border border-white/20 text-white hover:bg-white/10',
    ghost: 'text-gray-400 hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  const base = `inline-flex items-center justify-center rounded-lg font-semibold transition-all ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  )
}
