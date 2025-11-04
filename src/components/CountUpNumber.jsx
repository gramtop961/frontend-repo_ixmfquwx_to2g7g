import { useEffect, useRef, useState } from 'react'

/**
 * Lightweight count-up component with intersection observer trigger
 */
export default function CountUpNumber({ from = 0, to = 100, duration = 1200, className = '' }) {
  const [value, setValue] = useState(from)
  const elRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const node = elRef.current
    if (!node) return

    const start = () => {
      if (startedRef.current) return
      startedRef.current = true
      const startTime = performance.now()
      const diff = to - from

      const tick = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(1, elapsed / duration)
        const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
        const current = Math.round(from + diff * eased)
        setValue(current)
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) start()
        })
      },
      { threshold: 0.3 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [from, to, duration])

  return (
    <span ref={elRef} className={className}>
      {value.toLocaleString()}
    </span>
  )
}
