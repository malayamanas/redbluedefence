import { HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'purple'
}

export function Badge({ children, variant = 'default', className = '', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-white/10 text-gray-300',
    outline: 'border border-white/20 text-gray-400',
    purple: 'bg-[#7c43ff]/20 text-[#a855f7] border border-[#7c43ff]/30',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
