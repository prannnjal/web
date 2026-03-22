"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Smartphone, Globe, BarChart3, Zap, Database } from "lucide-react"

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimized"]
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces that enhance user experience and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: ["React Native", "Native iOS/Android", "App Store Optimization", "Performance"]
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that increase visibility and drive conversions.",
    features: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics"]
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Business Intelligence",
    description: "Data-driven insights and analytics to help you make informed business decisions.",
    features: ["Data Analysis", "Dashboard Design", "KPI Tracking", "Reporting"]
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Performance Optimization",
    description: "Speed up your applications and improve user experience through optimization.",
    features: ["Code Optimization", "Database Tuning", "CDN Setup", "Monitoring"]
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Custom ERP Software",
    description: "Tailored Enterprise Resource Planning solutions to streamline your business operations.",
    features: ["Inventory Management", "HR & Payroll", "CRM Integration", "Automated Workflows"]
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Our Architecture
          </div>
          <h2 className="text-4xl md:text-6xl font-generalsans font-bold text-white mb-6 tracking-tight">
            Precision <span className="gradient-text">Engineering</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-3xl mx-auto font-generalsans leading-relaxed">
            Building performance-first digital infrastructure that transforms operations into unfair competitive advantages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-10 group overflow-hidden border-white/5 bg-white/[0.01] backdrop-blur-2xl transition-all duration-500 hover:border-red-500/40 hover:translate-y-[-8px] rounded-[2.5rem]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-generalsans group-hover:text-red-500 transition-colors">
                {service.title}
              </h3>

              <p className="text-white/40 mb-8 leading-relaxed font-generalsans text-sm font-medium">
                {service.description}
              </p>

              <div className="space-y-3 mb-10">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-white/60 text-xs font-generalsans">
                    <div className="w-1 h-1 bg-red-600 rounded-full mr-3 shadow-[0_0_5px_rgba(239,68,68,0.8)]" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                className="text-white/40 hover:text-white group/btn p-0 h-auto font-generalsans text-xs font-bold uppercase tracking-widest transition-all"
              >
                Explore System
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section - Integrated */}
        <div className="mt-24 text-center">
          <div className="inline-flex glass-card p-2 rounded-2xl bg-white/[0.02] border-white/5">
            <div className="px-8 py-4">
              <span className="text-white/40 text-sm font-generalsans mr-6 italic">Ready to optimize your tech stack?</span>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-2 rounded-xl transition-all shadow-lg active:scale-95 text-xs uppercase tracking-widest"
              >
                Initiate Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
