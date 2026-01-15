"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSectionHeading } from "@/components/animated-section-heading"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-[#6fbf73]/5 rounded-full blur-3xl top-1/4 left-1/4" />
          <div className="absolute w-96 h-96 bg-[#4b2e83]/5 rounded-full blur-3xl bottom-1/4 right-1/4" />
        </div>

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <h1 className="text-9xl md:text-[10rem] font-bold mb-6 bg-gradient-to-r from-[#6fbf73] via-[#4b2e83] to-[#e07a5f] bg-clip-text text-transparent">
              404
            </h1>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <AnimatedSectionHeading className="text-5xl md:text-6xl font-bold mb-6">
              Page Not Found
            </AnimatedSectionHeading>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist. Let's get
              you back on track.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={300}>
            <Link href="/">
              <Button size="lg" className="bg-[#6fbf73] hover:bg-[#5aa85c] text-black font-bold h-14 px-10 text-lg">
                Go Back Home
              </Button>
            </Link>
          </ScrollFadeIn>
        </div>
      </section>
      <Footer />
    </main>
  )
}
