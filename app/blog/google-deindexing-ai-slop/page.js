"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, MessageCircle, AlertCircle, Search, Info, TrendingDown } from "lucide-react"

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-white/60 hover:text-white mb-12 transition-colors group font-generalsans"
        >
          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Insights
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 inline-block">
            SEO Trends
          </span>
          <h1 className="text-4xl md:text-6xl font-generalsans font-bold mb-8 leading-tight">
            Google is De-indexing “AI Slop”: Is Your Website About to Vanish?
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/60 font-generalsans border-b border-white/10 pb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mr-3 text-white font-bold uppercase tracking-widest text-xs">
                Xy
              </div>
              <span>Xylotek</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>March 23, 2026</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>9 min read</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 glass-card border-white/10">
          <Image
            src="/assets/images/blog/google-deindexing-ai-slop.png"
            alt="Google Filtering AI Slop"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-red max-w-none font-generalsans">
          <div className="space-y-8 text-white/80 text-lg leading-relaxed">
            <p className="text-xl text-white font-medium italic">
              There’s a moment every website owner remembers. You open your analytics, expecting the usual pattern—steady clicks, familiar pages pulling traffic—and instead, something feels off.
            </p>
            
            <p>
              At first, you look for a technical issue. Then you check for penalties. Then you blame the algorithm.
            </p>

            <p>
              But what’s happening right now in 2026 isn’t a typical “update.” It’s a structural shift in how Google treats content—and more importantly, what it chooses to <strong>ignore</strong>.
            </p>

            <div className="bg-red-600/10 border-l-4 border-red-600 p-8 my-16 rounded-r-xl">
              <h3 className="text-white text-2xl font-bold mb-4 flex items-center">
                <TrendingDown className="w-6 h-6 mr-3 text-red-500" />
                This Isn’t About AI—It’s About Saturation
              </h3>
              <p className="text-white/80">
                To understand what’s happening, you need to step back. Over the last few years, the cost of producing content dropped to almost zero. Businesses scaled it. Blogs multiplied. Landing pages exploded.
              </p>
            </div>

            <p>
              We’re not talking about hundreds of articles. We’re talking about millions of near-identical pages competing for the same queries.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why “Good Enough” Content Is Now Invisible</h2>
            <p>
              There was a time when being decent was enough. Now, that same level of effort places you in the middle of a massive crowd. And the middle is the worst place to be.
            </p>
            <p>
              When fifty or a hundred pages all say roughly the same thing, Google has to make a choice. Not based on correctness—but on <strong>comparative usefulness</strong>.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center">
              <Search className="w-8 h-8 mr-4 text-red-500" />
              The Silent Shift From Ranking to Filtering
            </h2>
            <p>
              Google is doing something different. Instead of just ranking everything it indexes, it’s becoming far more selective about what enters—and stays in—the index in the first place.
            </p>
            <p>
              From your side, it feels like disappearance. From Google’s side, it’s <strong>filtration</strong>.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 outline-text">What Makes Content Replaceable</h2>
            <p>
              👉 <em>If your content can be easily recreated, it can be easily replaced.</em>
            </p>
            <p>
              This is where most AI-heavy strategies struggle. Even when the writing is clean, the underlying content often follows common patterns and avoids strong, unique perspectives.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center">
              <Info className="w-8 h-8 mr-4 text-red-500" />
              The Role of “Information Gain”
            </h2>
            <p>
              Just ask: “If someone reads this page, do they walk away with something new?”
            </p>
            <p>That could be a real-world example, a personal insight, or a perspective shaped by experience. This is what separates content that survives from content that fades.</p>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl my-16">
              <h3 className="text-2xl font-bold text-white mb-4">Why Scaling Content Is Starting to Backfire</h3>
              <p>
                Scale without depth can dilute overall quality and reduce trust signals. When a large portion of your site consists of low-value content, it affects how the entire domain is perceived by Google’s crawlers.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Engagement Layer Most People Ignore</h2>
            <p>
              Google observes patterns like how long people stay, whether they scroll, and whether they return to search results. Low-value content leads to weaker engagement. And over time, weaker visibility.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 underline decoration-red-600 decoration-4 underline-offset-8">The Only Question That Matters Now</h2>
            <p className="text-2xl font-bold bg-white/5 p-6 rounded-lg border border-white/10 leading-tight">
              "If your content vanished tomorrow… Would anyone notice the difference?"
            </p>
            <p>If the answer is unclear, that’s where your focus needs to be.</p>

            <div className="bg-gradient-to-br from-red-600 to-red-800 p-10 rounded-3xl mt-20 text-white">
              <h3 className="text-3xl font-bold mb-6">What You Should Be Doing Instead</h3>
              <p className="mb-6 text-xl opacity-90">
                You don’t need to stop using AI. But you do need to use it to structure, refine, and expand—not to replace thinking.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                  <h4 className="font-bold mb-2">Focus on Insights</h4>
                  <p className="text-sm opacity-80">What do you know that others don't?</p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                  <h4 className="font-bold mb-2">Build Depth</h4>
                  <p className="text-sm opacity-80">Fewer, higher-quality pages win.</p>
                </div>
              </div>
            </div>

            <p className="mt-16 text-center text-white/40 italic">
              In a world where content is unlimited, attention is not. Google’s job is to protect that attention.
            </p>
          </div>
        </article>

        {/* Share & Author Bio */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-4">
            <span className="text-white/40 font-generalsans">Share:</span>
            <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-red-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-red-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-red-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
          
          <Link href="/blog" className="text-white hover:text-red-500 font-bold font-generalsans transition-colors">
            All Articles
          </Link>
        </div>
      </div>
    </div>
  )
}
