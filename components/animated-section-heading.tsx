"use client"

import { useInView } from "@/hooks/use-in-view"
import type { ReactNode } from "react"

interface AnimatedSectionHeadingProps {
  children: ReactNode
  className?: string
}

export function AnimatedSectionHeading({ children, className = "" }: AnimatedSectionHeadingProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out font-bold
        ${isInView ? "opacity-100" : "opacity-50"}
        ${className}
      `}
      style={{
        WebkitTextFillColor: isInView ? "#6fbf73" : "transparent",
        WebkitTextStrokeWidth: isInView ? "0px" : "1.5px",
        WebkitTextStrokeColor: "#6fbf73",
        color: isInView ? "#6fbf73" : "transparent",
        transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
        letterSpacing: "-0.02em",
        textRendering: "optimizeLegibility",
      }}
    >
      {children}
    </div>
  )
}
