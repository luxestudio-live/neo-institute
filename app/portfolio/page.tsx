"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { AnimatedSectionHeading } from "@/components/animated-section-heading"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const portfolioItems = [
    { id: 1, title: "Photography Project", course: "Photography", category: "Photography" },
    { id: 2, title: "UI Design System", course: "UI/UX", category: "Digital Design" },
    { id: 3, title: "Graphic Design Campaign", course: "Graphic Design", category: "Design" },
    { id: 4, title: "Digital Painting Artwork", course: "Digital Painting", category: "Art" },
    { id: 5, title: "Film Production", course: "Film Making", category: "Video" },
    { id: 6, title: "Brand Identity", course: "Applied Art", category: "Design" },
    { id: 7, title: "Calligraphy Collection", course: "Calligraphy", category: "Traditional Art" },
    { id: 8, title: "Photography Series", course: "Photography", category: "Photography" },
    { id: 9, title: "Motion Graphics", course: "Software Training", category: "Digital" },
  ]

  const categories = ["All", "Photography", "Digital Design", "Design", "Video", "Art", "Traditional Art"]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Page Header */}
      <section className="relative py-32 pt-40 overflow-hidden bg-gradient-to-b from-black via-[#6fbf73]/10 to-black border-b border-[#6fbf73]/10">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-[#6fbf73]/5 rounded-full blur-3xl top-0 right-0" />
          <div className="absolute w-96 h-96 bg-[#4b2e83]/5 rounded-full blur-3xl bottom-0 left-0" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold mb-6">
              Student
              <br />
              Portfolio
            </AnimatedSectionHeading>
            <p className="text-xl text-gray-400 max-w-3xl">
              Outstanding work created by our talented students across all creative disciplines.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="py-12 border-b border-[#6fbf73]/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-[#6fbf73] text-black"
                    : "bg-[#1a1a1a] text-gray-300 hover:bg-[#6fbf73]/20 hover:text-[#6fbf73]"
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollFadeIn>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32 bg-black border-t border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, idx) => (
              <ScrollFadeIn key={item.id} delay={idx * 30}>
                <div className="group relative overflow-hidden rounded-lg aspect-square bg-[#0a0a0a] cursor-pointer border border-[#6fbf73]/20 hover:border-[#6fbf73]/60 transition-all">
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4b2e83]/20 to-[#6fbf73]/20 flex items-center justify-center group-hover:from-[#6fbf73]/30 group-hover:to-[#4b2e83]/30 transition">
                    <div className="text-center">
                      <div className="text-5xl mb-2">🎨</div>
                      <p className="text-gray-500 font-medium">{item.category}</p>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{item.course}</p>
                    <button className="px-6 py-2 bg-[#6fbf73] text-black rounded-lg font-semibold text-sm hover:bg-[#5aa85c] transition">
                      View Project
                    </button>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-b from-black via-[#4b2e83]/10 to-black border-t border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold mb-6">
              Your Work
              <br />
              Could Be Here
            </AnimatedSectionHeading>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join our courses and build an impressive portfolio that showcases your creative talent to the world.
            </p>
            <Button size="lg" className="bg-[#6fbf73] hover:bg-[#5aa85c] text-black font-bold h-14 px-10 text-lg">
              Explore Programs
            </Button>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
