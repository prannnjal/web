/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Netlify
  output: 'export',
  
  // Disable server-side features for static export
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Existing configuration
  experimental: {
    // Add any experimental features here
  },
  
  // Custom webpack configuration to handle Jarvis integration
  webpack: (config, { isServer }) => {
    // Add any custom webpack configuration here
    return config
  },
  
  // Environment variables for Jarvis
  env: {
    JARVIS_ENDPOINT: process.env.JARVIS_ENDPOINT || 'http://localhost:5000',
    JARVIS_AUTO_START: process.env.JARVIS_AUTO_START || 'false'
  },
  
  // Note: rewrites() don't work with static export
  // We'll handle API calls directly in the frontend
}

export default nextConfig
