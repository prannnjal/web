import { Button } from "@/components/ui/button"
import { Check, Star, ArrowRight } from "lucide-react"

const packages = [
  {
    name: "Basic",
    price: "₹4,999",
    period: "",
    description: "We build a basic website to get your business online",
    features: [
      "Custom website design",
      "Mobile responsive layout",
      "Contact form integration",
      "Domain & hosting assistance",
    ],
    popular: false,
    color: "from-gray-400 to-gray-500"
  },
  {
    name: "Starter",
    price: "₹24,999",
    period: "/month",
    description: "Perfect for small businesses getting started with digital presence",
    features: [
      "Website maintenance & updates",
      "Social media posting (8/month)",
      "Basic ad campaign management",
      "CRM setup & training",
      "Monthly performance reports",
      "Email support (24h response)",
    ],
    popular: false,
    color: "from-gray-600 to-gray-700"
  },
  {
    name: "Growth",
    price: "₹49,999",
    period: "/month",
    description: "Ideal for growing businesses ready to scale their digital operations",
    features: [
      "Website + landing page updates",
      "Social media posting (15/month)",
      "Google + Meta ad management",
      "Email & WhatsApp marketing",
      "Advanced analytics reports",
      "CRM automation setup",
      "Priority support (12h response)",
    ],
    popular: true,
    color: "from-red-600 to-red-700"
  },
  {
    name: "Premium",
    price: "₹82,999",
    period: "/month",
    description: "Complete solution for established businesses with complex needs",
    features: [
      "Custom web/app development",
      "Multi-platform ad campaigns",
      "Full social media management",
      "Custom CRM + automation",
      "Content production (videos, blogs)",
      "Monthly strategy meetings",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    popular: false,
    color: "from-purple-600 to-purple-700"
  },
]

export default function PackagesSection() {
  return (
    <section id="packages" className="section-padding bg-black relative overflow-hidden pb-40">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Scalable Solutions
          </div>
          <h2 className="text-4xl md:text-6xl font-generalsans font-bold text-white mb-6">
            Select Your <span className="gradient-text">Trajectory</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-3xl mx-auto font-generalsans">
            Precision-engineered growth models designed to scale seamlessly with your market ambitions.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative group fade-in-up transition-all duration-700 ${
                pkg.popular ? "lg:scale-110 z-20" : "z-10"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="bg-red-600 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center shadow-[0_10px_30px_rgba(239,68,68,0.4)] ring-4 ring-black">
                    <Star className="h-3 w-3 mr-2 fill-current" />
                    Market Standard
                  </div>
                </div>
              )}

              <div className={`glass-card p-10 h-full flex flex-col transition-all duration-500 border-white/5 group-hover:border-red-500/30 rounded-[2.5rem] ${
                pkg.popular ? "bg-white/[0.03] backdrop-blur-3xl shadow-[0_30px_60px_rgba(239,68,68,0.05)]" : "bg-white/[0.01]"
              }`}>
                {/* Package Header */}
                <div className="mb-10">
                  <h3 className="text-white/50 text-xs font-black uppercase tracking-[0.2em] mb-4">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl xl:text-5xl font-bold text-white font-generalsans tracking-tighter">
                      {pkg.price}
                    </span>
                    <span className="text-white/30 text-sm font-medium tracking-tight">
                      {pkg.period}
                    </span>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed font-medium">
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-12 flex-1 pt-6 border-t border-white/5">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-xs font-generalsans">
                      <div className="w-4 h-4 rounded-full bg-red-600/10 flex items-center justify-center mr-3 mt-0.5 border border-red-500/20">
                        <Check className="h-2.5 w-2.5 text-red-500 stroke-[4px]" />
                      </div>
                      <span className="text-white/60 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full font-black py-4 rounded-2xl transition-all duration-500 active:scale-95 text-[10px] uppercase tracking-widest ${
                    pkg.popular
                      ? "bg-red-600 hover:bg-red-700 text-white shadow-[0_10px_30px_rgba(239,68,68,0.2)]"
                      : "bg-white/5 hover:bg-white/10 text-white/80 border border-white/10"
                  }`}
                >
                  Initiate Plan
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution + Extra Info Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Custom Quote Card */}
          <div className="glass-card p-12 md:p-16 rounded-[3rem] border-red-500/20 bg-gradient-to-br from-red-600/5 to-transparent relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Star className="w-24 h-24 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 font-generalsans">
              Bespoke <br /> <span className="text-red-500 italic">Engineering.</span>
            </h3>
            <p className="text-white/40 mb-10 text-lg font-generalsans leading-relaxed">
              For enterprises requiring specialized infrastructure or high-frequency deployment cycles. We build what others can't.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-6 rounded-2xl text-[10px] uppercase tracking-widest transition-all">
                Request Custom Architecture
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white/60 font-black px-8 py-6 rounded-2xl text-[10px] uppercase tracking-widest transition-all">
                System Brief
              </Button>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Rapid Deploy", desc: "48h activation cycle." },
              { icon: "📊", title: "3.2x ROI", desc: "Average client delta." },
              { icon: "🔒", title: "Secure Ops", desc: "Bank-grade protocols." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 flex flex-col items-center text-center rounded-[2rem] border-white/5 bg-white/[0.01] hover:border-red-500/20 transition-all">
                <span className="text-3xl mb-6 grayscale hover:grayscale-0 transition-all duration-300">{item.icon}</span>
                <h4 className="text-white/80 font-bold mb-2 font-generalsans text-xs uppercase tracking-widest">
                  {item.title}
                </h4>
                <p className="text-white/30 text-[10px] font-medium leading-relaxed uppercase tracking-wider">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
