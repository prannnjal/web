"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, Share2, Search, Filter, ChevronRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const blogPosts = [
  {
    id: 1,
    title: "Stop Paying for SEO: Why Most Agencies Are Wasting Your Money in 2026",
    excerpt: "The SEO industry is changing. Most agencies are still using 2020 tactics in a 2026 world. Learn how to stop the bleed.",
    image: "/assets/images/blog/seo-post-image.png",
    author: "Xylotek",
    date: "March 23, 2026",
    readTime: "6 min read",
    category: "Marketing Strategy",
    slug: "stop-paying-for-seo",
    featured: true
  },
  {
    id: 2,
    title: "The Death of the Standard Website: Why UX Design is the New SEO",
    excerpt: "Google no longer just reads your keywords—it feels your user experience. Here is why your bounce rate is killing your rankings.",
    image: "/assets/images/blog/standard-website-death.png",
    author: "Xylotek",
    date: "March 22, 2026",
    readTime: "5 min read",
    category: "UX Design",
    slug: "the-death-of-the-standard-website"
  },
  {
    id: 3,
    title: "Your Digital Agency is Using ChatGPT to Write Your Strategy (And It’s Quietly Killing Your Brand)",
    excerpt: "Generic AI output is the new commodity. Real strategy requires human depth that AI simply cannot replicate yet.",
    image: "/assets/images/blog/ai-strategy-killing-brand.png",
    author: "Xylotek",
    date: "March 21, 2026",
    readTime: "8 min read",
    category: "Strategy",
    slug: "agency-chatgpt-strategy"
  },
  {
    id: 4,
    title: "Google is De-indexing “AI Slop”: Is Your Website About to Vanish?",
    excerpt: "What’s happening right now in 2026 isn’t a typical “update.” It’s a structural shift in how Google treats content.",
    image: "/assets/images/blog/google-deindexing-ai-slop.png",
    author: "Xylotek",
    date: "March 20, 2026",
    readTime: "7 min read",
    category: "Marketing Strategy",
    slug: "google-deindexing-ai-slop"
  },
  {
    id: 5,
    title: "Your ₹10,000 Website is Costing You ₹10 Lakhs in Lost Revenue",
    excerpt: "Kitne ka banega? The hidden price of low-cost websites in India isn't just the invoice—it's the millions in lost revenue.",
    image: "/assets/images/blog/the-cost-of-a-10k-website.png",
    author: "Xylotek",
    date: "March 23, 2026",
    readTime: "11 min read",
    category: "Strategy",
    slug: "the-cost-of-a-10k-website"
  },
  {
    id: 6,
    title: "The WordPress Death-Watch: Why We’re Refusing WordPress Projects in 2026",
    excerpt: "WordPress powers 40% of the internet. That logic made sense in 2016. In 2026, it hides a reality most agencies won't say out loud.",
    image: "/assets/images/blog/wordpress-legacy.svg",
    author: "Xylotek",
    date: "March 23, 2026",
    readTime: "12 min read",
    category: "Technology",
    slug: "wordpress-death-watch-2026"
  }
]

const categories = ["All", "Strategy", "Marketing Strategy", "UX Design", "Technology"]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-red-900/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Navigation Spacer */}
        <div className="h-24" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Journal Style */}
          <div className="mb-20 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              The Intelligence Engine
            </div>
            <h1 className="text-6xl md:text-8xl font-generalsans font-bold tracking-tighter mb-12">
              Engineering <span className="gradient-text italic">Growth.</span>
            </h1>
            
            {/* Search & Filter Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative flex items-center glass-card bg-white/[0.02] border-white/5 p-2 rounded-2xl backdrop-blur-3xl">
                <Search className="ml-4 h-5 w-5 text-white/30" />
                <Input 
                  type="text"
                  placeholder="Scan documentation..."
                  className="bg-transparent border-none focus-visible:ring-0 placeholder:text-white/20 font-generalsans text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="hidden md:flex bg-red-600 hover:bg-red-700 text-white font-black px-6 rounded-xl text-xs uppercase tracking-widest">
                  Execute
                </Button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-red-600 border-red-600 text-white shadow-[0_5px_15px_rgba(239,68,68,0.3)]" 
                    : "bg-white/5 border-white/5 text-white/40 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article Grid - Artistic Editorial Style */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
            {filteredPosts.map((post, index) => {
              const isFirst = index === 0 && activeCategory === "All" && searchQuery === ""
              
              return (
                <div 
                  key={post.id}
                  className={`${
                    isFirst ? "md:col-span-12" : index % 3 === 0 ? "md:col-span-7" : "md:col-span-5"
                  } group`}
                >
                  <Link href={`/blog/${post.slug}`} className="block relative">
                    <div className="glass-card bg-white/[0.01] border-white/5 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:translate-y-[-8px] hover:border-red-500/30 hover:shadow-[0_30px_60px_rgba(239,68,68,0.05)]">
                      <div className={`flex flex-col ${isFirst ? "md:flex-row" : ""}`}>
                        {/* Image Container */}
                        <div className={`relative overflow-hidden ${isFirst ? "md:w-1/2" : "aspect-[16/9]"}`}>
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill={!isFirst}
                            width={isFirst ? 800 : undefined}
                            height={isFirst ? 500 : undefined}
                            className={`object-cover transition-transform duration-1000 group-hover:scale-105 ${isFirst ? "h-full min-h-[350px]" : ""}`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                          <div className="absolute top-6 left-6">
                            <span className="bg-red-600 text-white text-[8px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest shadow-xl">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Content Container */}
                        <div className={`p-8 md:p-10 flex flex-col justify-center ${isFirst ? "md:w-1/2" : ""}`}>
                          <div className="flex items-center gap-4 text-white/30 text-[9px] font-black uppercase tracking-widest mb-4">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-red-600 rounded-full" />
                            <span>{post.readTime}</span>
                          </div>
                          
                          <h3 className={`${isFirst ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} font-bold mb-4 font-generalsans leading-tight group-hover:text-red-500 transition-colors duration-500`}>
                            {post.title}
                          </h3>

                          <p className="text-white/40 text-xs md:text-sm mb-8 leading-relaxed font-medium line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-3">
                              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-600 to-red-900 border border-white/10 flex items-center justify-center text-[9px] font-black uppercase tracking-widest">Xy</div>
                              <span className="text-white/60 text-[9px] font-black uppercase tracking-widest">{post.author}</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Newsletter - Immersive Style */}
          <div className="relative mb-32">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent blur-3xl opacity-30" />
            <div className="relative glass-card bg-white/[0.02] border-white/5 p-12 md:p-20 rounded-[4rem] text-center overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Mail className="w-64 h-64 text-red-600" />
              </div>
              <div className="max-w-2xl mx-auto relative z-10">
                <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Direct Connection</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 font-generalsans">Join the <span className="italic text-red-500">Growth Protocol.</span></h2>
                <p className="text-white/40 text-lg mb-12 font-medium">
                  Receive high-frequency mental models, deployment strategies, and market signals delivered directly to your inbox. No fluff, just raw engineering.
                </p>
                <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                  <Input 
                    placeholder="Enter system email..."
                    className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-red-500/50 transition-all text-white font-medium"
                    type="email"
                  />
                  <Button className="h-14 bg-red-600 hover:bg-red-700 text-white font-black px-10 rounded-2xl text-[10px] uppercase tracking-widest transition-all active:scale-95 shadow-[0_10px_30px_rgba(239,68,68,0.3)]">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
