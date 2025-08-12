"use client"

import Image from "next/image"

// This component shows how your logo will look as a favicon
// To create actual favicon files, you'll need to resize your logo image
export default function FaviconGenerator() {
  return (
    <div className="p-8 bg-gray-900 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Favicon Preview</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* 16x16 Favicon */}
        <div className="text-center">
          <div className="bg-white p-2 rounded mb-2 inline-block">
            <Image
              src="/Screenshot_2025-08-13_023958-removebg-preview.png"
              alt="16x16 Favicon"
              width={16}
              height={16}
              className="w-4 h-4 object-contain"
            />
          </div>
          <p className="text-sm text-gray-400">16x16</p>
        </div>
        
        {/* 32x32 Favicon */}
        <div className="text-center">
          <div className="bg-white p-2 rounded mb-2 inline-block">
            <Image
              src="/Screenshot_2025-08-13_023958-removebg-preview.png"
              alt="32x32 Favicon"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <p className="text-sm text-gray-400">32x32</p>
        </div>
        
        {/* 48x48 Favicon */}
        <div className="text-center">
          <div className="bg-white p-2 rounded mb-2 inline-block">
            <Image
              src="/Screenshot_2025-08-13_023958-removebg-preview.png"
              alt="48x48 Favicon"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
          <p className="text-sm text-gray-400">48x48</p>
        </div>
        
        {/* Apple Touch Icon */}
        <div className="text-center">
          <div className="bg-white p-2 rounded mb-2 inline-block">
            <Image
              src="/Screenshot_2025-08-13_023958-removebg-preview.png"
              alt="180x180 Apple Touch Icon"
              width={180}
              height={180}
              className="w-16 h-16 object-contain"
            />
          </div>
          <p className="text-sm text-gray-400">180x180</p>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-400 mb-2">How to Create Favicon Files:</h3>
        <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
          <li>Use an image editor (Photoshop, GIMP, or online tools like favicon.io)</li>
          <li>Open your logo: <code className="bg-gray-800 px-1 rounded">Screenshot_2025-08-13_023958-removebg-preview.png</code></li>
          <li>Resize to these dimensions:</li>
          <ul className="ml-6 mt-1 space-y-1 text-gray-400">
            <li>• <code className="bg-gray-800 px-1 rounded">favicon.ico</code> - 16x16, 32x32, 48x48 (multi-size ICO)</li>
            <li>• <code className="bg-gray-800 px-1 rounded">favicon-16x16.png</code> - 16x16 PNG</li>
            <li>• <code className="bg-gray-800 px-1 rounded">favicon-32x32.png</code> - 32x32 PNG</li>
            <li>• <code className="bg-gray-800 px-1 rounded">apple-touch-icon.png</code> - 180x180 PNG</li>
          </ul>
          <li>Save all files in your <code className="bg-gray-800 px-1 rounded">public/</code> folder</li>
        </ol>
      </div>
    </div>
  )
}
