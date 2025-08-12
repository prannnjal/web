"use client"

import Image from "next/image"

export default function Logo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-8 w-8",
    default: "h-10 w-10", 
    large: "h-12 w-12",
    xlarge: "h-16 w-16",
    favicon: "h-20 w-20"
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <Image
          src="/Screenshot_2025-08-13_023958-removebg-preview.png"
          alt="LeadBoostX Logo"
          width={80}
          height={80}
          className="w-full h-full object-contain drop-shadow-lg"
          priority
          quality={95}
        />
        
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-sm opacity-50 pointer-events-none"></div>
      </div>
      
      {/* Text Logo */}
      <div className="flex flex-col flex-shrink-0">
        <span className="text-xl font-bold text-white font-generalsans leading-none">
          LeadBoostX
        </span>
        <span className="text-xs text-gray-400 font-medium tracking-wider">
          NEXT-GEN UX
        </span>
      </div>
    </div>
  )
}

// Alternative Minimal Logo (just icon)
export function LogoIcon({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-6 w-6",
    default: "h-8 w-8",
    large: "h-10 w-10",
    xlarge: "h-14 w-14",
    favicon: "h-20 w-20"
  }

  return (
    <div className={`relative ${sizeClasses[size]} flex-shrink-0 ${className}`}>
      <Image
        src="/Screenshot_2025-08-13_023958-removebg-preview.png"
        alt="LeadBoostX Logo"
        width={80}
        height={80}
        className="w-full h-full object-contain drop-shadow-lg"
        priority
        quality={95}
      />
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-sm opacity-50 pointer-events-none"></div>
    </div>
  )
}

// Compact Logo for mobile/small spaces
export function CompactLogo({ className = "" }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative h-8 w-8 flex-shrink-0">
        <Image
          src="/Screenshot_2025-08-13_023958-removebg-preview.png"
          alt="LeadBoostX"
          width={32}
          height={32}
          className="w-full h-full object-contain drop-shadow-lg"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-sm opacity-50 pointer-events-none"></div>
      </div>
      <span className="text-lg font-bold text-white font-generalsans">
        LeadBoostX
      </span>
    </div>
  )
}

// Large Favicon Logo for better visibility
export function FaviconLogo({ className = "" }) {
  return (
    <div className={`relative h-24 w-24 flex-shrink-0 ${className}`}>
      <Image
        src="/Screenshot_2025-08-13_023958-removebg-preview.png"
        alt="LeadBoostX Favicon"
        width={96}
        height={96}
        className="w-full h-full object-contain drop-shadow-xl"
        priority
        quality={100}
      />
      
      {/* Enhanced Glow Effect for Favicon */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-md opacity-60 pointer-events-none"></div>
    </div>
  )
}
