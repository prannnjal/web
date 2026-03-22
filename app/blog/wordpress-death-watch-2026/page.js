"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, MessageCircle, AlertCircle, Search, Info, TrendingDown, Terminal, ShieldAlert, Cpu, Globe, Zap, Code2 } from "lucide-react"

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20 overflow-hidden">
      {/* Background Motion */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ef4444_0,transparent_50%)] blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Technology
          </span>
          <h1 className="text-4xl md:text-7xl font-generalsans font-bold mb-8 leading-tight tracking-tighter">
            The WordPress <span className="text-red-500 italic">Death-Watch.</span>
          </h1>
          <p className="text-2xl text-white/40 mb-12 font-generalsans leading-relaxed italic">
            Why we are officially refusing WordPress projects in 2026.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-white/60 font-generalsans border-b border-white/10 pb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mr-3 text-white font-bold uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                Xy
              </div>
              <span>Xylotek</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-red-500" />
              <span>March 23, 2026</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-red-500" />
              <span>12 min read</span>
            </div>
          </div>
        </div>

        {/* Specialized CSS Hero Section */}
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-16 glass-card border-white/10 flex items-center justify-center bg-gradient-to-br from-red-600/10 to-black p-1">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 text-center px-8">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full border border-red-500/30 flex items-center justify-center bg-red-500/5 backdrop-blur-xl animate-bounce duration-[3000ms]">
                <ShieldAlert className="w-10 h-10 text-red-500" />
              </div>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
              <div className="w-20 h-20 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/5 backdrop-blur-xl opacity-30">
                <Globe className="w-10 h-10 text-blue-500" />
              </div>
            </div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.5em] opacity-40">Systemic Obsolescence Detected</h4>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent flex justify-center gap-10">
             <div className="flex items-center gap-2 text-[10px] text-red-500 font-bold tracking-widest uppercase">
               <Cpu className="w-3 h-3" /> Performance Lag
             </div>
             <div className="flex items-center gap-2 text-[10px] text-red-500 font-bold tracking-widest uppercase">
               <ShieldAlert className="w-3 h-3" /> Security Debt
             </div>
             <div className="flex items-center gap-2 text-[10px] text-red-500 font-bold tracking-widest uppercase opacity-20">
               <Globe className="w-3 h-3" /> Legacy Stack
             </div>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-red max-w-none font-generalsans">
          <div className="space-y-8 text-white/80 text-lg leading-relaxed">
            <p className="text-xl text-white font-medium">
              “WordPress powers 40% of the internet.”
            </p>
            
            <p>
              It’s one of those lines that sounds reassuring the moment you hear it. It gives a sense of safety. Scale. Trust. If that many websites are running on it, it must be the right choice.
            </p>

            <p>
              That logic made perfect sense ten years ago. It even made sense five years ago. But in 2026, that same statement hides a reality most agencies won’t say out loud—because their entire business model depends on you continuing to believe it.
            </p>

            <div className="bg-red-600/10 border-l-4 border-red-600 p-8 my-16 rounded-r-xl">
              <h3 className="text-white text-2xl font-bold mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3 text-red-500" />
                The Illusion of "It Works Fine"
              </h3>
              <p className="text-white/80">
                Most business owners don’t see a problem with their website. The site opens. Pages load. Forms submit. So the assumption becomes: <strong>“If it’s working, it must be fine.”</strong>
              </p>
            </div>

            <p>
              But performance problems in modern websites are rarely obvious. They don’t crash your site. They quietly reduce its effectiveness.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What’s Really Happening Under the Hood</h2>
            <p>
              To understand the problem, you have to stop looking at the design and start looking at the structure. A typical WordPress site isn’t built from the ground up for your business. <strong>It’s assembled.</strong>
            </p>
            <p>
              A theme is installed. A page builder is added. Multiple plugins are introduced. Each piece solves a problem in isolation, but none of them are designed to work together as a single, optimized system.
            </p>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl my-16">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Terminal className="w-6 h-6 mr-3 text-red-500" />
                The Execution Debt
              </h3>
              <p>
                Every time your website loads, it has to call multiple scripts, load stylesheets, and execute plugin logic before the user even sees your content. Under real-world conditions, this introduces fatal delays.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Speed Is Not a Feature—It’s a Filter</h2>
            <p>
              In 2026, users don’t evaluate your website’s speed. They feel it. If something hesitates, even slightly, they disengage. They don't think "this site is slow." They think, <strong>"this doesn't feel right."</strong> And they leave.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center">
              <Cpu className="w-8 h-8 mr-4 text-red-500" />
              The Maintenance Cycle Nobody Talks About Honestly
            </h2>
            <p>
              WordPress websites require attention. Plugins need updates. Themes need updates. Security needs to be checked. Each update carries risk—update something, and another component might break. It’s never truly stable.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why This Model Still Exists</h2>
            <p>
              Because the current model works—for agencies. WordPress allows faster delivery. Lower development effort. Recurring revenue through maintenance and fixes. It’s efficient from a business standpoint, but not for the client.
            </p>

            <div className="bg-gradient-to-br from-red-600 to-red-800 p-10 rounded-3xl mt-20 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Code2 className="w-48 h-48" />
               </div>
              <h3 className="text-3xl font-bold mb-6 flex items-center">
                <Zap className="w-8 h-8 mr-4" />
                Start With Performance
              </h3>
              <p className="mb-6 text-xl opacity-90">
                When a website is built with performance as the foundation—using modern stacks like Next.js—the system is not assembled. It is designed.
              </p>
              <p className="text-sm opacity-80 italic">
                Each line of code serves a purpose. There are no unnecessary layers. The result is clarity, speed, and conversion.
              </p>
            </div>

            <p className="mt-16 text-center text-white/40 italic">
              "Fine" is usually where growth starts to stall. The real question isn’t whether your website works. It’s whether it’s working as hard as your business needs it to.
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
