"use client"

import { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// Error boundary component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">3D Earth Error</h3>
        <p className="text-gray-400 mb-4">Failed to load Earth model</p>
        <button 
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

// Loading component
function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Loading Earth...</p>
      </div>
    </div>
  )
}

// Simple Earth Component using GLB model
function Earth({ position, rotation = [0, 0, 0] }) {
  const earthRef = useRef()
  
  // Load the GLB model
  const glbData = useGLTF('/earth_our_fragile_home.glb')
  
  useFrame((state) => {
    if (earthRef.current) {
      const time = state.clock.getElapsedTime()
      earthRef.current.rotation.y = rotation[1] + time * 0.05
    }
  })

  return (
    <group 
      ref={earthRef} 
      position={position} 
      rotation={rotation}
    >
      {/* GLB Earth Model */}
      <primitive 
        object={glbData.nodes.Earth || glbData.nodes.earth || glbData.nodes.scene || Object.values(glbData.nodes)[0]} 
        scale={[4.5, 4.5, 4.5]}
      />
    </group>
  )
}

// Simple Earth Scene
function EarthScene() {
  return (
    <>
      {/* Basic Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[15, 15, 10]} intensity={1} color="#ffffff" />
      
      {/* Earth - positioned further down and larger */}
      <Earth position={[0, -6, 0]} rotation={[0, 0, 0]} />
    </>
  )
}

// Error boundary wrapper
function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const handleError = (error) => {
      console.error('Earth Error:', error)
      setError(error)
      setHasError(true)
    }

    const handleUnhandledRejection = (event) => {
      console.error('Unhandled Promise Rejection:', event.reason)
      setError(event.reason)
      setHasError(true)
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    
    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  if (hasError) {
    return <ErrorFallback error={error} resetErrorBoundary={() => setHasError(false)} />
  }

  return children
}

// Main 3D Earth Model component
export default function ThreeDModel({ className = "" }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <LoadingFallback />
  }

  return (
    <ErrorBoundary>
      <div className={`w-full h-full ${className}`}>
        <Suspense fallback={<LoadingFallback />}>
          <Canvas
            camera={{ position: [0, 8, 20], fov: 55 }}
            style={{ background: 'linear-gradient(to bottom, #000011, #000044, #000011)' }}
            onError={(error) => {
              console.error('Canvas error:', error)
            }}
            gl={{ 
              antialias: true,
              alpha: false,
              powerPreference: "high-performance"
            }}
          >
            <EarthScene />
            <OrbitControls 
              enableZoom={false} 
              enablePan={true}
              autoRotate={false}
              minDistance={10}
              maxDistance={40}
              enableDamping={true}
              dampingFactor={0.05}
            />
          </Canvas>
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}

