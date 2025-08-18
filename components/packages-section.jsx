import { Button } from "@/components/ui/button"
import { Check, Star, ArrowRight } from "lucide-react"

const packages = [
  {
    name: "Starter",
    price: "$299",
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
    price: "$599",
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
    price: "$999",
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
    <section id="packages" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">
            Choose Your <span className="gradient-text">Growth</span> Package
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-generalsans">
            Flexible packages designed to scale with your business. All plans include our core digital expertise 
            and proven results.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative group fade-in-up ${
                pkg.popular ? "sm:scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                    <Star className="h-4 w-4 mr-2 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`glass-card p-8 h-full transition-all duration-300 hover:bg-white/5 ${
                pkg.popular ? "ring-2 ring-red-500/50" : ""
              }`}>
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4 font-generalsans">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white font-generalsans">
                      {pkg.price}
                    </span>
                    <span className="text-white/60 text-lg ml-1">
                      {pkg.period}
                    </span>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full font-generalsans ${
                    pkg.popular 
                      ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800" 
                      : "bg-white/10 hover:bg-white/20 border border-white/20"
                  } text-white transition-all duration-300`}
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="text-center fade-in-up">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4 font-generalsans">
              Need a Custom Solution?
            </h3>
            <p className="text-white/60 mb-6 font-generalsans">
              Every business is unique. Let's create a tailored package that perfectly fits your specific 
              requirements and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-generalsans"
              >
                Request Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 text-white font-generalsans"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 fade-in-up">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="text-lg font-semibold text-white mb-2 font-generalsans">
                Fast Setup
              </h4>
              <p className="text-white/60 text-sm">
                Get started within 48 hours of signing up
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-2">📈</div>
              <h4 className="text-lg font-semibold text-white mb-2 font-generalsans">
                Proven Results
              </h4>
              <p className="text-white/60 text-sm">
                Average 3.2x ROI increase for our clients
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-2">🔄</div>
              <h4 className="text-lg font-semibold text-white mb-2 font-generalsans">
                Flexible Plans
              </h4>
              <p className="text-white/60 text-sm">
                Upgrade, downgrade, or cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
