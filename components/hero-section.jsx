"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Send, X, Zap, Globe, Users, BarChart3 } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [quickFormData, setQuickFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    services: "",
    budget: ""
  })
  const [isQuickSubmitted, setIsQuickSubmitted] = useState(false)
  const [showQuickForm, setShowQuickForm] = useState(true)

  // Reopen the quick form 20s after user closes it
  useEffect(() => {
    if (!showQuickForm) {
      const timerId = setTimeout(() => setShowQuickForm(true), 20000)
      return () => clearTimeout(timerId)
    }
  }, [showQuickForm])

  const handleQuickChange = (e) => {
    setQuickFormData({
      ...quickFormData,
      [e.target.name]: e.target.value
    })
  }

  const handleQuickSubmit = async (e) => {
    e.preventDefault()
    console.log("Hero quick quote submitted:", quickFormData)

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ ...quickFormData, formType: "Hero Quick Quote" })
        })
      } else {
        console.warn("Google Script URL is not set. Mock submission successful.")
      }
    } catch (error) {
      console.error("Quick quote submission error:", error)
    }

    setIsQuickSubmitted(true)
    setQuickFormData({ name: "", businessName: "", phone: "", services: "", budget: "" })
    setTimeout(() => setIsQuickSubmitted(false), 3000)
  }

  return (
    <section className="min-h-screen w-full flex flex-col relative bg-black" id="home">
      {/* Text & CTA Content - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-6 z-10 px-4 fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-generalsans">
          Welcome to <br className="sm:hidden" />
          <span className="text-[#D4AF37] font-light">Xylotek Solutions</span>
        </h1>
        <p className="hero_tag text-white/90 font-thin text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-2xl mt-2">
          We craft digital solutions that help businesses grow
        </p>
        <Button
          size="lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-red-600 flex items-center justify-center hover:bg-red-700 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 pulse-glow mt-4 md:mt-8 rounded-xl font-generalsans"
        >
          Let's work together
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Quick Quote Form - Pinned to bottom right */}
      <div className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-40 flex flex-col items-end">
        {showQuickForm ? (
          <div className="w-[calc(100vw-2rem)] sm:w-[380px] mb-2 fade-in-up">
            <div className="glass-card bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-6 sm:p-8 relative max-h-[70vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setShowQuickForm(false)}
                aria-label="Minimize quick quote form"
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
              <h4 className="text-xl font-semibold text-white mb-4 font-generalsans">Quick Quote</h4>
              {isQuickSubmitted ? (
                <div className="text-center py-4">
                  <div className="h-10 w-10 rounded-full bg-red-600/20 border border-red-600/30 mx-auto mb-2 flex items-center justify-center">✅</div>
                  <p className="text-white/80">Thanks! We'll reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="hero-name" className="block text-white mb-2 font-generalsans">Name</label>
                    <Input
                      id="hero-name"
                      name="name"
                      type="text"
                      value={quickFormData.name}
                      onChange={handleQuickChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-red-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="hero-businessName" className="block text-white mb-2 font-generalsans">Business Name</label>
                    <Input
                      id="hero-businessName"
                      name="businessName"
                      type="text"
                      value={quickFormData.businessName}
                      onChange={handleQuickChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-red-500"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="hero-phone" className="block text-white mb-2 font-generalsans">Phone Number</label>
                    <Input
                      id="hero-phone"
                      name="phone"
                      type="tel"
                      pattern="[0-9]{10}"
                      value={quickFormData.phone}
                      onChange={handleQuickChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-red-500"
                      placeholder="10-digit phone number"
                      title="Please enter exactly 10 digits"
                      maxLength={10}
                    />
                  </div>
                  <div>
                    <label htmlFor="hero-services" className="block text-white mb-2 font-generalsans">What services do you want?</label>
                    <select
                      id="hero-services"
                      name="services"
                      value={quickFormData.services}
                      onChange={handleQuickChange}
                      required
                      className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-red-500 rounded-md px-3 py-2"
                    >
                      <option value="" className="text-black">Select a service</option>
                      <option value="Web Development" className="text-black">Web Development</option>
                      <option value="Google Business Profile" className="text-black">Google Business Profile & SEO</option>
                      <option value="Mobile Development" className="text-black">Mobile Development</option>
                      <option value="Digital Marketing" className="text-black">Digital Marketing</option>
                      <option value="Business Intelligence" className="text-black">Business Intelligence</option>
                      <option value="Performance Optimization" className="text-black">Performance Optimization</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="hero-budget" className="block text-white mb-2 font-generalsans">Budget</label>
                    <select
                      id="hero-budget"
                      name="budget"
                      value={quickFormData.budget}
                      onChange={handleQuickChange}
                      required
                      className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-red-500 rounded-md px-3 py-2"
                    >
                      <option value="" className="text-black">Select a range</option>
                      <option value="₹4,999 - ₹10,000" className="text-black">₹4,999 - ₹10,000</option>
                      <option value="₹10,000 - ₹50,000" className="text-black">₹10,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000" className="text-black">₹50,000 - ₹1,00,000</option>
                      <option value="> ₹1,00,000" className="text-black">&gt; ₹1,00,000</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-generalsans">
                    Get Quote
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowQuickForm(true)}
            className="bg-red-600 hover:bg-red-700 text-white p-3 w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center relative group pulse-glow mb-2"
            aria-label="Open Quick Quote"
            title="Get a Quick Quote"
          >
            <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative z-10 flex items-center justify-center">
              <Send className="h-6 w-6 ml-[-2px]" />
            </div>
          </button>
        )}
      </div>


    </section>
  )
}
