"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, MessageCircle, AlertCircle, Search, Info, TrendingDown, IndianRupee, MousePointerClick, Smartphone, Zap } from "lucide-react"

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
            Strategy
          </span>
          <h1 className="text-4xl md:text-6xl font-generalsans font-bold mb-8 leading-tight">
            Your ₹10,000 Website is Costing You ₹10 Lakhs in Lost Revenue
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
              <span>11 min read</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 glass-card border-white/10">
          <Image
            src="/assets/images/blog/the-cost-of-a-10k-website.png"
            alt="The financial cost of low-quality websites"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-red max-w-none font-generalsans">
          <div className="space-y-8 text-white/80 text-lg leading-relaxed">
            <p className="text-xl text-white font-medium italic">
              There’s a very familiar conversation that happens in almost every small or mid-sized business in India.
            </p>
            
            <p>
              Someone says, “We need a website.” <br />
              Another person asks, “Kitne ka banega?” <br />
              And within minutes, a number appears—<strong>₹10,000.</strong>
            </p>

            <p>
              It sounds reasonable. In fact, it sounds smart. Why spend more when the job looks simple? A homepage, a few sections, some images, a contact form. Done.
            </p>

            <div className="bg-red-600/10 border-l-4 border-red-600 p-8 my-16 rounded-r-xl">
              <h3 className="text-white text-2xl font-bold mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3 text-red-500" />
                The Illusion of Value
              </h3>
              <p className="text-white/80">
                The site gets built. It goes live. Everyone is happy for a few days. And then slowly, quietly, things begin to feel off.
              </p>
            </div>

            <p>
              People visit the website, but they don’t stay. Ads are running, but leads are weak. Enquiries are inconsistent. Sometimes there’s traffic, but it doesn’t turn into business. At first, it’s easy to blame marketing. Then competition. Then maybe pricing.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What if the Website Itself is the Problem?</h2>
            <p>
              Not because it looks bad. In fact, most ₹10,000 websites today look perfectly fine. Clean layout, decent fonts, nice colors. On the surface, nothing feels broken.
            </p>
            <p>
              But performance isn’t about how something looks. It’s about <strong>what it does</strong> when a real user interacts with it under real conditions.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center">
              <Smartphone className="w-8 h-8 mr-4 text-red-500" />
              Users Are Not Sitting in Ideal Conditions
            </h2>
            <p>
              Most low-cost websites are built to exist, not to perform. They are assembled quickly, often using pre-built themes, heavy templates, and minimal optimization. On a developer’s laptop, everything seems smooth. But your actual users are on mobile data, using mid-range devices, sometimes in areas with unstable networks.
            </p>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl my-16">
              <h3 className="text-2xl font-bold text-white mb-4">The Three-Second Rule</h3>
              <p>
                Imagine what happens when someone clicks your ad. The page begins to load. Images are large. Scripts take time. Three seconds pass. Then four. Then five. The user doesn’t wait. They leave.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center">
              <TrendingDown className="w-8 h-8 mr-4 text-red-500" />
              The Ad Budget Drain
            </h2>
            <p>
              When you run Google Ads, you’re not just paying for visibility. You’re paying for <strong>attention</strong>. Every click has a cost. If users land on your site and leave immediately, Google notices.
            </p>
            <p>
              Over time, your cost per click increases. Your positions drop. You start paying more money to get the same—or worse—results. Because the problem isn’t the ad. It’s where the ad is sending people.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Friction is the Enemy of Conversion</h2>
            <p>
              In India, most users are on mobile. They are fast, impatient, and unforgiving. If something feels slow or unclear, they move on.
            </p>
            <ul className="list-disc list-inside space-y-4 text-white/70">
              <li>A button that takes an extra second to respond.</li>
              <li>A page that shifts while loading.</li>
              <li>A form that feels slightly difficult to fill.</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 outline-text">The Hidden Math of Lost Revenue</h2>
            <p>
              Let’s say a thousand people land on your website in a month. With a well-optimized experience, maybe 5% convert. But when speed is poor and usability is weak, that percentage drops to 1% or less.
            </p>
            <p className="text-2xl font-bold bg-white/5 p-6 rounded-lg border border-white/10 leading-tight">
              "You don’t just lose a few leads. You lose a significant portion of potential customers. Revenue that never shows up."
            </p>

            <div className="bg-gradient-to-br from-red-600 to-red-800 p-10 rounded-3xl mt-20 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 flex items-center">
                <Zap className="w-8 h-8 mr-4" />
                The Mindset Shift
              </h3>
              <p className="mb-6 text-xl opacity-90">
                It’s no longer “How much does a website cost?” It becomes “How much is my website helping me earn?”
              </p>
              <p className="text-sm opacity-80 italic">
                A high-performing website is built around how users behave, how quickly they decide, and what they need to feel before taking action.
              </p>
            </div>

            <p className="mt-16 text-center text-white/40 italic">
              The ₹10,000 website didn’t fail because it was cheap. It failed because it was never built to handle the responsibility you gave it.
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
