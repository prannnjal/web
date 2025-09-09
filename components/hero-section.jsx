"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Send, X, Zap, Globe, Users, BarChart3 } from "lucide-react"
import { Suspense, useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Dynamically import the 3D model with no SSR
const ThreeDModel = dynamic(() => import("./3d-model"), {
  ssr: false,
  loading: () => <ThreeDModelFallback />
})

// Fallback component for when 3D model fails to load
function ThreeDModelFallback() {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] w-full bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-500 mx-auto mb-4"></div>
        <h3 className="text-xl font-bold mb-2">Loading 3D Computer</h3>
        <p className="text-gray-400">Preparing interactive 3D model...</p>
      </div>
    </div>
  )
}

// Error fallback component
function ThreeDModelError() {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] w-full bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <div className="text-6xl mb-4">🖥️</div>
        <h3 className="text-xl font-bold mb-2">3D Computer Setup</h3>
        <p className="text-gray-400 mb-4">Interactive 3D model of a complete computer workstation</p>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-2xl mb-2">🖥️</div>
            <p className="text-sm">Monitor & Tower</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-2xl mb-2">⌨️</div>
            <p className="text-sm">Keyboard & Mouse</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-2xl mb-2">🪑</div>
            <p className="text-sm">Office Chair</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-2xl mb-2">🪵</div>
            <p className="text-sm">Wooden Desk</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const [modelError, setModelError] = useState(false)
  const [quickFormData, setQuickFormData] = useState({
    name: "",
    businessName: "",
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

  const handleQuickSubmit = (e) => {
    e.preventDefault()
    console.log("Hero quick quote submitted:", quickFormData)
    setIsQuickSubmitted(true)
    setQuickFormData({ name: "", businessName: "", services: "", budget: "" })
    setTimeout(() => setIsQuickSubmitted(false), 3000)
  }

  return (
    <section className="min-h-screen w-full flex flex-col relative bg-black" id="home">
      {/* Text Content - Top Section */}
      <div className="w-full mx-auto flex flex-col mt-28 sm:mt-32 md:mt-36 lg:mt-20 text-center gap-3 z-10 px-4">
        <p className="sm:text-3xl text-xl font-medium text-white font-generalsans">
          Welcome to Xylotek
        </p>
        <p className="hero_tag text-white font-thin text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          We craft next-gen UX.
        </p>
      </div>

      {/* Quick Quote Form - Pinned to left */}
      {showQuickForm && (
        <div className="lg:absolute lg:left-0 lg:top-28 z-10 w-full lg:w-auto px-4 sm:px-6 lg:px-0">
          <div className="w-full max-w-none lg:max-w-md">
            <div className="glass-card p-6 sm:p-8 relative max-h-[70vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setShowQuickForm(false)}
                aria-label="Close quick quote form"
                className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
              <h4 className="text-xl font-semibold text-white mb-4 font-generalsans">Quick Quote</h4>
              {isQuickSubmitted ? (
                <div className="text-center py-4">
                  <div className="h-10 w-10 rounded-full bg-red-600/20 border border-red-600/30 mx-auto mb-2 flex items-center justify-center">✅</div>
                  <p className="text-white/80">Thanks! I'll reach out shortly.</p>
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
                      <option value="UI/UX Design" className="text-black">UI/UX Design</option>
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
                      <option value="< $1,000" className="text-black">&lt; $1,000</option>
                      <option value="$1,000 - $5,000" className="text-black">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000" className="text-black">$5,000 - $10,000</option>
                      <option value="> $10,000" className="text-black">&gt; $10,000</option>
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
        </div>
      )}
      {/* 3D Model Section - Bottom Section */}
      <div className="w-full h-full absolute inset-0">
        {modelError ? (
          <ThreeDModelError />
        ) : (
          <Suspense fallback={<ThreeDModelFallback />}>
            <ThreeDModel 
              className="w-full h-full" 
              onError={() => setModelError(true)}
            />
          </Suspense>
        )}
      </div>

      {/* Call to Action Button - Bottom */}
      <div className="absolute bottom-5 left-0 right-0 w-full z-10 text-center pb-[env(safe-area-inset-bottom)]">
        <Button 
          size="lg" 
          className="bg-red-600 hover:bg-red-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 pulse-glow"
        >
          Let's work together
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
