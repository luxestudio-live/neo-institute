"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Calendar, FileText, Award, Palette, Users } from "lucide-react"
import { AnimatedSectionHeading } from "@/components/animated-section-heading"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    description: "Fill out the online application form with your details.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Portfolio Review",
    description: "Submit your sample work for evaluation.",
    icon: Palette,
  },
  {
    step: 3,
    title: "Interview Round",
    description: "Participate in a one-on-one interview.",
    icon: Users,
  },
  {
    step: 4,
    title: "Admission Decision",
    description: "Receive your admission decision.",
    icon: Award,
  },
]

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Page Header */}
      <section className="relative py-32 pt-40 overflow-hidden bg-gradient-to-r from-[#4b2e83] via-[#6fbf73]/20 to-[#4b2e83] border-b border-[#6fbf73]/10">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-[#6fbf73]/20 rounded-full blur-3xl top-0 left-0" />
          <div className="absolute w-96 h-96 bg-[#4b2e83]/20 rounded-full blur-3xl bottom-0 right-0" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Admissions
              <br />
              2025-26
            </AnimatedSectionHeading>
            <p className="text-xl text-gray-200 max-w-3xl">
              Join us and start your journey toward a successful career in applied art and advertising.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="py-32 bg-black border-t border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold mb-16">
              Eligibility
              <br />
              Criteria
            </AnimatedSectionHeading>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <ScrollFadeIn className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Basic Requirements</h3>
              <div className="space-y-3">
                {[
                  "10th Pass and above",
                  "Age: Minimum 14 years",
                  "Valid ID proof required",
                  "Genuine interest in applied art and design",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#6fbf73] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">What We Look For</h3>
              <div className="space-y-3">
                {[
                  "Creative thinking and innovation",
                  "Communication and collaboration skills",
                  "Portfolio or sample artwork",
                  "Passion for creative fields",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#e07a5f] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-32 bg-gradient-to-b from-black via-[#4b2e83]/5 to-black border-t border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn className="mb-16">
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold text-center">
              Application
              <br />
              Process
            </AnimatedSectionHeading>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((item, idx) => {
              const Icon = item.icon
              return (
                <ScrollFadeIn key={item.step} delay={idx * 50}>
                  <div className="relative">
                    <div className="bg-[#0a0a0a] rounded-lg p-8 border border-[#6fbf73]/20 hover:border-[#6fbf73]/60 text-center h-full transition-all">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#6fbf73]/20 mb-4 mx-auto">
                        <Icon className="w-7 h-7 text-[#6fbf73]" />
                      </div>

                      <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-[#6fbf73] text-black flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </ScrollFadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-black border-t border-[#6fbf73]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn className="mb-16">
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold text-center">
              Timeline
            </AnimatedSectionHeading>
          </ScrollFadeIn>

          <div className="space-y-6">
            {[
              { title: "Applications Open", desc: "January 2025 - Submission period begins" },
              { title: "Portfolio Review", desc: "February 2025 - Evaluation of submitted portfolios" },
              { title: "Interview Round", desc: "March 2025 - One-on-one interviews conducted" },
              { title: "Classes Begin", desc: "April 2025 - Academic year starts" },
            ].map((item, idx) => (
              <ScrollFadeIn key={idx} delay={idx * 50}>
                <div className="flex gap-6 pb-6 border-l-2 border-[#6fbf73] pl-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#6fbf73] text-black -ml-11">
                      <Calendar size={18} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-32 bg-gradient-to-r from-[#4b2e83] via-[#6fbf73]/20 to-[#4b2e83] border-t border-[#6fbf73]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Ready to Apply?
            </AnimatedSectionHeading>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Contact us via WhatsApp or phone to submit your application or ask any questions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-[#4b2e83] font-bold">
                Apply Online
              </Button>
              <Button size="lg" className="border-2 border-white text-white hover:bg-white/10 bg-transparent">
                WhatsApp Us
              </Button>
            </div>

            <p className="text-gray-300 text-sm">📞 9970352380 • 9004072938 • 8329573722</p>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
