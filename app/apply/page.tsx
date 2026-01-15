"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Upload, ArrowRight } from "lucide-react"
import { AnimatedSectionHeading } from "@/components/animated-section-heading"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { useState } from "react"

export default function ApplyPage() {
  const [formStep, setFormStep] = useState(1)

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-[#6fbf73]/5 rounded-full blur-3xl top-10 right-20" />
          <div className="absolute w-96 h-96 bg-[#4b2e83]/5 rounded-full blur-3xl -bottom-20 -left-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-[#6fbf73]/10 rounded-full border border-[#6fbf73]/30 mb-8">
                <span className="text-sm font-medium text-[#6fbf73]">Join NEO Institute</span>
              </div>

              <h1
                className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Your Creative
                <br />
                <span className="bg-gradient-to-r from-[#6fbf73] via-[#4b2e83] to-[#e07a5f] bg-clip-text text-transparent">
                  Journey Starts
                </span>
                <br />
                Here
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Apply now to become part of NEO Institute's creative community. Fill out your application and show us
                your creative potential.
              </p>
            </div>
          </ScrollFadeIn>

          {/* Torn Paper Style Text */}
          <ScrollFadeIn delay={200} className="relative mt-20">
            <div className="relative max-w-3xl mx-auto">
              <div
                className="relative bg-gradient-to-br from-[#6fbf73]/20 to-[#4b2e83]/20 rounded-lg p-12 border-2 border-dashed border-[#6fbf73]/40 backdrop-blur-sm"
                style={{
                  clipPath:
                    "polygon(0% 1%, 2% 0%, 4% 1%, 6% 0%, 8% 1%, 10% 0%, 12% 1%, 14% 0%, 16% 1%, 18% 0%, 20% 1%, 22% 0%, 24% 1%, 26% 0%, 28% 1%, 30% 0%, 32% 1%, 34% 0%, 36% 1%, 38% 0%, 40% 1%, 42% 0%, 44% 1%, 46% 0%, 48% 1%, 50% 0%, 52% 1%, 54% 0%, 56% 1%, 58% 0%, 60% 1%, 62% 0%, 64% 1%, 66% 0%, 68% 1%, 70% 0%, 72% 1%, 74% 0%, 76% 1%, 78% 0%, 80% 1%, 82% 0%, 84% 1%, 86% 0%, 88% 1%, 90% 0%, 92% 1%, 94% 0%, 96% 1%, 98% 0%, 100% 1%, 100% 3%, 99% 5%, 100% 7%, 99% 9%, 100% 11%, 99% 13%, 100% 15%, 99% 17%, 100% 19%, 99% 21%, 100% 23%, 99% 25%, 100% 27%, 99% 29%, 100% 31%, 99% 33%, 100% 35%, 99% 37%, 100% 39%, 99% 41%, 100% 43%, 99% 45%, 100% 47%, 99% 49%, 100% 51%, 99% 53%, 100% 55%, 99% 57%, 100% 59%, 99% 61%, 100% 63%, 99% 65%, 100% 67%, 99% 69%, 100% 71%, 99% 73%, 100% 75%, 99% 77%, 100% 79%, 99% 81%, 100% 83%, 99% 85%, 100% 87%, 99% 89%, 100% 91%, 99% 93%, 100% 95%, 99% 97%, 100% 99%, 98% 100%, 96% 99%, 94% 100%, 92% 99%, 90% 100%, 88% 99%, 86% 100%, 84% 99%, 82% 100%, 80% 99%, 78% 100%, 76% 99%, 74% 100%, 72% 99%, 70% 100%, 68% 99%, 66% 100%, 64% 99%, 62% 100%, 60% 99%, 58% 100%, 56% 99%, 54% 100%, 52% 99%, 50% 100%, 48% 99%, 46% 100%, 44% 99%, 42% 100%, 40% 99%, 38% 100%, 36% 99%, 34% 100%, 32% 99%, 30% 100%, 28% 99%, 26% 100%, 24% 99%, 22% 100%, 20% 99%, 18% 100%, 16% 99%, 14% 100%, 12% 99%, 10% 100%, 8% 99%, 6% 100%, 4% 99%, 2% 100%, 0% 99%)",
                }}
              >
                <p className="text-center text-gray-300 text-lg font-semibold leading-relaxed">
                  "Every great artist started as a student. Show us your vision, your passion, and your unique
                  perspective. We're here to help you grow."
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-32 bg-gradient-to-b from-black via-[#4b2e83]/5 to-black border-t border-[#6fbf73]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn className="mb-16">
            <AnimatedSectionHeading className="text-5xl md:text-6xl font-bold text-center mb-4">
              Application Form
            </AnimatedSectionHeading>
            <p className="text-center text-gray-400 text-lg">Complete the form below. It takes about 10 minutes.</p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-[#6fbf73]/20 backdrop-blur-sm">
              {/* Form Progress */}
              <div className="mb-12">
                <div className="flex justify-between mb-4">
                  <span className="text-sm font-semibold text-[#6fbf73]">Step {formStep} of 3</span>
                  <span className="text-sm text-gray-400">{Math.round((formStep / 3) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#6fbf73]/20">
                  <div
                    className="h-full bg-gradient-to-r from-[#6fbf73] to-[#4b2e83] transition-all duration-500"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              <form className="space-y-8">
                {/* Step 1: Personal Information */}
                {formStep === 1 && (
                  <ScrollFadeIn>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-300">First Name *</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#6fbf73]/20 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition"
                            placeholder="Your first name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-300">Last Name *</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#6fbf73]/20 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition"
                            placeholder="Your last name"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-300">Email *</label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#6fbf73]/20 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-300">Phone Number *</label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#6fbf73]/20 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition"
                            placeholder="+91 XXXXX XXXXX"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-300">Date of Birth *</label>
                          <input
                            type="date"
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#6fbf73]/20 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-300">Education Level *</label>
                          <select className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#6fbf73]/20 text-white focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition cursor-pointer">
                            <option>Select education level</option>
                            <option>10th Pass</option>
                            <option>12th Pass</option>
                            <option>Graduate</option>
                            <option>Post-Graduate</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </ScrollFadeIn>
                )}

                {/* Step 2: Course Selection */}
                {formStep === 2 && (
                  <ScrollFadeIn>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Course Selection</h3>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-300 mb-4">
                          Primary Course Interest *
                        </label>
                        <select className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#6fbf73]/20 text-white focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition cursor-pointer mb-4">
                          <option>Select a course</option>
                          <option>Applied Art</option>
                          <option>Intermediate Elementary Grade Exam Classes</option>
                          <option>J J School of Arts Entrance Exam Preparation</option>
                          <option>Basics and Advance Photography Course</option>
                          <option>Basics and Advance Calligraphy Course</option>
                          <option>UI / UX Course</option>
                          <option>360 Portfolio Course</option>
                          <option>Graphic Design Course</option>
                          <option>Film Making Course</option>
                          <option>Digital Painting Course</option>
                          <option>Software Training Course</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-300">
                          Tell us why you're interested in this course
                        </label>
                        <textarea
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#6fbf73]/20 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition resize-none"
                          placeholder="Share your passion and goals..."
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-300">
                          Have you done any creative work before?
                        </label>
                        <div className="space-y-3">
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="experience" className="w-4 h-4 accent-[#6fbf73]" />
                            <span className="text-gray-300">Yes, I have experience</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="experience" className="w-4 h-4 accent-[#6fbf73]" />
                            <span className="text-gray-300">No, I'm a beginner</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="experience" className="w-4 h-4 accent-[#6fbf73]" />
                            <span className="text-gray-300">I have some basic skills</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </ScrollFadeIn>
                )}

                {/* Step 3: Portfolio & Submission */}
                {formStep === 3 && (
                  <ScrollFadeIn>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Portfolio & Submission</h3>
                      </div>

                      <div className="space-y-4">
                        <label className="block text-sm font-semibold text-gray-300 mb-3">
                          Upload Your Portfolio (Optional)
                        </label>
                        <div className="border-2 border-dashed border-[#6fbf73]/40 rounded-xl p-8 text-center hover:border-[#6fbf73]/60 transition">
                          <Upload className="w-12 h-12 text-[#6fbf73] mx-auto mb-4" />
                          <p className="text-white font-semibold mb-2">Drop your portfolio files here</p>
                          <p className="text-sm text-gray-400 mb-4">or click to browse (Max 10MB)</p>
                          <input type="file" multiple className="hidden" />
                          <Button variant="outline" className="border-[#6fbf73] text-[#6fbf73] bg-transparent">
                            Choose Files
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-300">Additional Comments</label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#6fbf73]/20 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition resize-none"
                          placeholder="Anything else you'd like us to know?"
                        />
                      </div>

                      <div className="space-y-3 bg-[#4b2e83]/10 rounded-lg p-6 border border-[#4b2e83]/20">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 mt-1 accent-[#6fbf73]" />
                          <span className="text-sm text-gray-300">
                            I confirm that the information provided is accurate and complete
                          </span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 mt-1 accent-[#6fbf73]" />
                          <span className="text-sm text-gray-300">
                            I agree to the NEO Institute terms and conditions
                          </span>
                        </label>
                      </div>
                    </div>
                  </ScrollFadeIn>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 pt-8 border-t border-[#6fbf73]/10">
                  {formStep > 1 && (
                    <Button
                      onClick={() => setFormStep(formStep - 1)}
                      variant="outline"
                      className="border-[#6fbf73] text-[#6fbf73] hover:bg-[#6fbf73]/10 flex-1"
                    >
                      Previous
                    </Button>
                  )}
                  {formStep < 3 ? (
                    <Button
                      onClick={() => setFormStep(formStep + 1)}
                      className="bg-[#6fbf73] hover:bg-[#5aa85c] text-black font-bold flex-1 flex items-center justify-center gap-2"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-[#6fbf73] hover:bg-[#5aa85c] text-black font-bold flex-1 text-base"
                    >
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Torn Paper Style Section - What Happens Next */}
      <section className="py-32 bg-black border-t border-[#6fbf73]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn className="mb-16">
            <AnimatedSectionHeading className="text-5xl md:text-6xl font-bold text-center mb-12">
              What Happens Next?
            </AnimatedSectionHeading>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Application Review",
                desc: "Our team reviews your application within 48 hours",
              },
              {
                step: "02",
                title: "Portfolio Evaluation",
                desc: "We evaluate your creative work and background",
              },
              {
                step: "03",
                title: "Interview Call",
                desc: "Get invited for an interview to discuss your goals",
              },
            ].map((item, idx) => (
              <ScrollFadeIn key={idx} delay={idx * 50}>
                <div className="relative">
                  {/* Torn edge effect */}
                  <div
                    className="bg-gradient-to-br from-[#6fbf73]/10 to-[#4b2e83]/10 rounded-lg p-8 border-2 border-[#6fbf73]/30 text-center"
                    style={{
                      clipPath:
                        "polygon(0% 2%, 3% 0%, 6% 1%, 9% 0%, 12% 1%, 15% 0%, 18% 2%, 21% 0%, 24% 1%, 27% 0%, 30% 2%, 33% 0%, 36% 1%, 39% 0%, 42% 2%, 45% 0%, 48% 1%, 51% 0%, 54% 2%, 57% 0%, 60% 1%, 63% 0%, 66% 2%, 69% 0%, 72% 1%, 75% 0%, 78% 2%, 81% 0%, 84% 1%, 87% 0%, 90% 2%, 93% 0%, 96% 1%, 100% 0%, 100% 3%, 99% 6%, 100% 9%, 99% 12%, 100% 15%, 99% 18%, 100% 21%, 99% 24%, 100% 27%, 99% 30%, 100% 33%, 99% 36%, 100% 39%, 99% 42%, 100% 45%, 99% 48%, 100% 51%, 99% 54%, 100% 57%, 99% 60%, 100% 63%, 99% 66%, 100% 69%, 99% 72%, 100% 75%, 99% 78%, 100% 81%, 99% 84%, 100% 87%, 99% 90%, 100% 93%, 99% 96%, 100% 100%, 97% 99%, 94% 100%, 91% 99%, 88% 100%, 85% 99%, 82% 100%, 79% 99%, 76% 100%, 73% 99%, 70% 100%, 67% 99%, 64% 100%, 61% 99%, 58% 100%, 55% 99%, 52% 100%, 49% 99%, 46% 100%, 43% 99%, 40% 100%, 37% 99%, 34% 100%, 31% 99%, 28% 100%, 25% 99%, 22% 100%, 19% 99%, 16% 100%, 13% 99%, 10% 100%, 7% 99%, 4% 100%, 1% 99%)",
                    }}
                  >
                    <div className="text-4xl font-bold text-[#6fbf73] mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
