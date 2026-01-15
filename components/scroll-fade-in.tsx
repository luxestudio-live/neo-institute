"use client"

import { useInView } from "@/hooks/use-in-view"
import type { ReactNode } from "react"

interface ScrollFadeInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollFadeIn({ children, className = "", delay = 0 }: ScrollFadeInProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}
      `}
      style={{
        transitionDelay: isInView ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  )
}
