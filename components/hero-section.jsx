"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Globe, Users, BarChart3 } from "lucide-react"
import { Suspense, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import the 3D model with no SSR
const ThreeDModel = dynamic(() => import("./3d-model"), {
  ssr: false,
  loading: () => <ThreeDModelFallback />
})

// Fallback component for when 3D model fails to load
function ThreeDModelFallback() {
  return (
    <div className="relative h-[600px] w-full bg-black flex items-center justify-center">
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
    <div className="relative h-[600px] w-full bg-black flex items-center justify-center">
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

  return (
    <section className="min-h-screen w-full flex flex-col relative bg-black" id="home">
      {/* Text Content - Top Section */}
      <div className="w-full mx-auto flex flex-col mt-36 lg:mt-20 text-center gap-3 z-10">
        <p className="sm:text-3xl text-xl font-medium text-white font-generalsans">
          Welcome to LeadBoostX
        </p>
        <p className="hero_tag text-white font-thin text-6xl lg:text-7xl">
          We craft next-gen UX.
        </p>
      </div>

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
      <div className="absolute bottom-5 left-0 right-0 w-full z-10 text-center">
        <Button 
          size="lg" 
          className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4 pulse-glow"
        >
          Let's work together
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
