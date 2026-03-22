"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, MessageCircle, AlertTriangle, Lightbulb, Zap } from "lucide-react"

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
            Marketing Strategy
          </span>
          <h1 className="text-4xl md:text-6xl font-generalsans font-bold mb-8 leading-tight">
            Your Digital Agency is Using ChatGPT to Write Your Strategy (And It’s Quietly Killing Your Brand)
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
              <span>8 min read</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 glass-card border-white/10">
          <Image
            src="/assets/images/blog/ai-strategy-killing-brand.png"
            alt="AI vs Human Strategy"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-red max-w-none font-generalsans">
          <div className="space-y-8 text-white/80 text-lg leading-relaxed">
            <p className="text-xl text-white font-medium">
              There’s something slightly uncomfortable happening in the digital marketing world right now—and most business owners can feel it, even if they can’t fully explain it.
            </p>
            
            <p>
              On the surface, everything looks better than ever. Strategies come faster. Documents look cleaner. Plans feel structured, polished, and professional. Turnaround times have shrunk. Agencies sound more confident. Deliverables look… impressive.
            </p>

            <p>
              And yet, underneath all of that, results feel strangely flat.
            </p>

            <div className="bg-red-600/10 border-l-4 border-red-600 p-6 my-12">
              <p className="text-white text-xl italic font-medium">
                Campaigns don’t hit as hard. Messaging doesn’t stick. Websites look good but don’t convert. Content gets published, but nothing really moves.
              </p>
            </div>

            <p>
              It’s not loud. It’s not obvious. But something is off.
            </p>

            <p>
              And a big part of that “something” is this: strategy has quietly been outsourced to AI—without the depth, context, or thinking that real strategy actually requires.
            </p>

            <hr className="border-white/10 my-12" />

            <h2 className="text-3xl font-bold text-white mb-6">When Strategy Becomes Output Instead of Understanding</h2>
            <p>
              Good strategy has never been about how it looks on a document. It comes from painfully specific, sometimes uncomfortable understanding.
            </p>
            <p>It comes from sitting with questions like:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Why do customers <em>actually</em> choose us?</li>
              <li>Where exactly are we losing them?</li>
              <li>What do they hesitate about before buying?</li>
              <li>What do competitors do better—and why?</li>
            </ul>
            <p>
              When agencies replace that process with AI-generated strategy, the focus shifts from <strong>understanding the business</strong> to <strong>producing the document</strong>.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Illusion of Depth</h2>
            <p>
              AI is incredibly good at sounding right. It knows the language of marketing. It understands structure. But what it cannot do is <em>care</em>.
            </p>
            <p>
              It doesn’t know your customer’s hesitation. It hasn’t sat through your sales calls. So it fills in the gaps with what is most statistically likely to make sense.
            </p>
            <p className="text-2xl font-bold text-red-500">That’s why so many strategies today feel interchangeable.</p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">How Brands Slowly Lose Their Voice</h2>
            <p>
              Your brand begins to sound like every other brand in your space. The language becomes safer. More neutral. Less specific.
            </p>
            <p>
              You stop saying anything that might alienate someone… and in doing so, you stop resonating deeply with anyone.
            </p>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl my-16 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-red-500" />
                The Comfort of “Good Enough”
              </h3>
              <p>
                From an agency’s perspective, AI reduces effort and speeds up delivery. But “good enough” strategy rarely creates meaningful growth. It maintains presence, but it doesn’t create momentum.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What’s Missing Isn’t Skill—It’s Friction</h2>
            <p>
              Real strategy requires pushing back on assumptions. AI removes that friction. It gives you fast clarity—even when that clarity hasn’t been earned.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Difference You Can Feel</h2>
            <p>Most business owners say things like:</p>
            <ul className="list-disc pl-6 space-y-2 italic text-white/60">
              <li>“It just doesn’t feel like us.”</li>
              <li>“Something is missing.”</li>
              <li>“We’re doing everything, but not seeing results.”</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center">
              <Lightbulb className="w-8 h-8 mr-4 text-red-500" />
              What Real Strategy Feels Like
            </h2>
            <p>
              When strategy is done properly, it feels sharper. More focused. Sometimes even a bit uncomfortable—because it forces choices.
            </p>
            <p>
              It makes you say, “Yes, this is exactly how our customers think.”
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">AI Isn’t the Problem—Replacing Thinking Is</h2>
            <p>
              AI should sit <em>after</em> thinking—not in place of it. The moment AI becomes the source of strategy instead of a support tool, depth starts to disappear.
            </p>

            <div className="bg-gradient-to-r from-red-600/30 to-transparent p-10 rounded-2xl border border-red-600/20 mt-16">
              <h3 className="text-2xl font-bold text-white mb-6">Final Thought</h3>
              <p className="mb-4">
                The only thing that truly stands out anymore is <strong>original thinking backed by real understanding</strong>.
              </p>
              <p className="font-bold text-red-500 text-xl">
                Everything else just sounds good. Until it doesn’t work.
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
