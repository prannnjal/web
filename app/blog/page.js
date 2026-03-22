"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Stop Paying for SEO: Why Most Agencies Are Wasting Your Money in 2026",
    excerpt: "If you’ve been paying an SEO agency for months—and you’re still not seeing real business growth—you’re probably starting to feel something’s off. You’re not wrong.",
    date: "March 23, 2026",
    author: "Xylotek Team",
    readTime: "6 min read",
    image: "/assets/images/blog/seo-post-image.png",
    slug: "stop-paying-for-seo",
    category: "SEO & Growth"
  },
  {
    id: 2,
    title: "The Death of the “Standard” Website: Why Your ₹50K Landing Page is Now Worthless",
    excerpt: "In 2026, a standard website isn’t an asset anymore. It’s just… background noise. If your site looks like a template and functions like one, you’re not competing. You’re blending in.",
    date: "March 23, 2026",
    author: "Xylotek Team",
    readTime: "7 min read",
    image: "/assets/images/blog/standard-website-death.png",
    slug: "the-death-of-the-standard-website",
    category: "Web Strategy"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-generalsans font-bold mb-6">
            Our <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-generalsans">
            Thoughts, stories and ideas from the Xylotek team on design, development, and digital growth.
          </p>
        </div>

        {/* Featured Post */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-20">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="glass-card overflow-hidden transition-all duration-500 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-white/40 text-sm mb-6 font-generalsans">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-generalsans font-bold mb-6 group-hover:text-red-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/60 text-lg mb-8 line-clamp-3 font-generalsans">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-white font-bold group-hover:gap-2 transition-all duration-300">
                      Read Full Story <ArrowRight className="ml-2 w-5 h-5 text-red-500" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Categories / Newsletter placeholder */}
        <div className="glass-card p-12 text-center">
          <h3 className="text-2xl font-generalsans font-bold mb-4">Stay ahead of the curve</h3>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Get our latest insights on design and digital strategy delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="bg-white/5 border border-white/10 rounded-lg px-6 py-3 text-white focus:outline-none focus:border-red-500 transition-colors flex-grow"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
