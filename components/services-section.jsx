"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Smartphone, Globe, BarChart3, Zap } from "lucide-react"

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
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">
            What I <span className="gradient-text">Create</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-generalsans">
            Comprehensive digital solutions that transform ideas into powerful, user-centric experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:bg-white/5 transition-all duration-300 group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4 font-generalsans">
                {service.title}
              </h3>
              
              <p className="text-white/60 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/70">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="ghost" 
                className="text-red-500 hover:text-red-400 hover:bg-red-500/10 p-0 h-auto font-generalsans"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4 font-generalsans">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/60 mb-6">
              Let's discuss how I can help bring your vision to life with cutting-edge technology and design.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-generalsans"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
