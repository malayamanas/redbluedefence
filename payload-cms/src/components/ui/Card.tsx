import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ children, hover = true, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm ${
        hover ? 'transition-all hover:border-[#7c43ff]/40 hover:bg-white/8' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
