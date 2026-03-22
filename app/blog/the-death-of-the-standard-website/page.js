"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, MessageCircle } from "lucide-react"

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
            Web Strategy
          </span>
          <h1 className="text-4xl md:text-6xl font-generalsans font-bold mb-8 leading-tight">
            The Death of the “Standard” Website: Why Your ₹50K Landing Page is Now Worthless
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/60 font-generalsans border-b border-white/10 pb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mr-3 text-white font-bold">
                X
              </div>
              <span>Xylotek Team</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>March 23, 2026</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>7 min read</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 glass-card border-white/10">
          <Image
            src="/assets/images/blog/standard-website-death.png"
            alt="Standard vs Modern Website"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-red max-w-none font-generalsans">
          <div className="space-y-8 text-white/80 text-lg leading-relaxed">
            <p className="text-xl text-white font-medium">
              There was a time when just <em>having</em> a website felt like a big deal.
            </p>
            
            <p>
              You hired a developer, paid ₹30k–₹50k, got a clean-looking landing page, added a contact form—and that was enough. It gave your business credibility. It made you look “serious.”
            </p>

            <p>
              But that version of the internet is gone.
            </p>

            <div className="bg-red-600/10 border-l-4 border-red-600 p-6 my-12">
              <p className="text-white text-2xl font-bold mb-2">In 2026, a standard website isn’t an asset anymore.</p>
              <p className="text-white/60 italic text-xl">It’s just… background noise.</p>
            </div>

            <hr className="border-white/10 my-12" />

            <h2 className="text-3xl font-bold text-white mb-6">The Problem Isn’t Your Website—It’s What It <em>Doesn’t</em> Do</h2>
            <p>
              Most ₹50k landing pages look decent on the surface:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nice hero section</li>
              <li>A few services listed</li>
              <li>Maybe some testimonials</li>
              <li>A contact form at the bottom</li>
            </ul>
            <p>
              Nothing is <em>technically wrong</em>. But nothing is really working either.
            </p>
            <p className="text-white font-medium">
              Because today, a website isn’t judged by how it looks—it’s judged by what it <strong>does</strong>.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Everyone Has a Website Now</h2>
            <p>
              A few years ago, having a website made you stand out.
            </p>
            <p className="text-xl">Now? It’s the bare minimum.</p>
            <p>
              Your competitor has one. And the one after that. And probably 50 more in your niche. So if your site looks like a template—and functions like one—you’re not competing. You’re blending in.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Design is No Longer a Differentiator</h2>
            <p>
              A “good-looking website” is no longer impressive.
            </p>
            <p>
              With tools like modern builders, templates, and AI design assistants, anyone can create a visually clean website in a few hours. So if your entire investment went into design…
            </p>
            <p className="text-2xl font-bold text-red-500">You paid ₹50k for something that can now be replicated for ₹2k.</p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Static Pages Don’t Convert Anymore</h2>
            <p>
              Most standard landing pages are static: One message for everyone, same layout for every visitor, no personalization.
            </p>
            <p>
              But users in 2026 expect more. They've seen smart recommendations, personalized experiences, and instant responses.
            </p>
            <p className="italic text-white/60">
              When they land on a generic page that says “Welcome to our website…” they leave.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 text-center py-12 glass-card border-red-500/20">
              Attention Spans Are Brutal Now
            </h2>
            <p>
              You don’t have minutes. You have seconds. If your landing page doesn’t clearly explain what you do, show why you’re different, and guide the user to take action, you’ve already lost them.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">No Strategy = No Results</h2>
            <p>
              Building a website ≠ building a system. A real high-performing website includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clear messaging</li>
              <li>User journey planning</li>
              <li>Conversion tracking</li>
              <li>SEO foundation</li>
              <li>Speed and performance optimization</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Rise of “Conversion-First” Websites</h2>
            <p>
              The businesses that are winning right now aren’t just building websites. They’re building <strong>systems that convert</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-2">Targeted Messaging</h3>
                <p className="text-sm">Speak directly to a specific audience and their pain points.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-2">Reduced Friction</h3>
                <p className="text-sm">Remove every possible barrier between the user and their goal.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Your Website Needs to Work Like a Salesperson</h2>
            <p>
              If your website was your employee, would you keep them? 
            </p>
            <p className="text-xl text-red-500 font-bold">
              A modern website should: Capture leads, qualify visitors, build trust instantly, and drive conversions.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Actually Works in 2026</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-white">Clarity Over Creativity</h4>
                  <p className="text-sm text-white/60">Users should understand what you do in 3 seconds.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-white">Conversion Over Design</h4>
                  <p className="text-sm text-white/60">Every section should move the user closer to action.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-white">Speed Over Complexity</h4>
                  <p className="text-sm text-white/60">Slow websites lose users instantly.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/30 to-transparent p-8 rounded-2xl border border-red-600/20 mt-16">
              <h3 className="text-2xl font-bold text-white mb-4">Final Thought</h3>
              <p>
                The “standard” website isn’t dead because websites don’t matter. It’s dead because <strong>expectations have changed</strong>.
              </p>
              <p className="mt-4 font-bold text-white text-xl">
                Is your website just online… or is it actually working for you?
              </p>
            </div>
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
