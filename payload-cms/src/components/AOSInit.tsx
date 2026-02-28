'use client'

import { useEffect } from 'react'

export function AOSInit() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js'
    script.onload = () => {
      if (typeof (window as unknown as Record<string, unknown>).AOS !== 'undefined') {
        const AOS = (window as unknown as Record<string, { init: (opts: object) => void }>).AOS
        AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' })
      }
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return null
}
