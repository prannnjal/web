import { TrendingUp, Users, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: "500+",
    label: "Projects Completed",
    description: "Successfully delivered across various industries"
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: "98%",
    label: "Client Satisfaction",
    description: "Consistently exceeding expectations"
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "3.2x",
    label: "Average ROI",
    description: "Measurable business impact for clients"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    value: "24/7",
    label: "Support Available",
    description: "Always here when you need us"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "LeadBoostX transformed our digital presence completely. The results exceeded our expectations and our conversion rates increased by 300%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    content: "Working with LeadBoostX was a game-changer. Their attention to detail and technical expertise delivered exactly what we needed.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    content: "The level of professionalism and quality of work is outstanding. LeadBoostX consistently delivers beyond expectations.",
    rating: 5
  }
]

export default function ResultsSection() {
  return (
    <section id="results" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-generalsans">
            Numbers that speak for themselves. Here's what I've achieved for my clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-6 sm:p-8 text-center group hover:bg-white/5 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-generalsans">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-2 font-generalsans">
                {stat.label}
              </div>
              <p className="text-white/60 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12 fade-in-up">
          <h3 className="text-3xl font-semibold text-white mb-4 font-generalsans">
            What Clients Say
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto font-generalsans">
            Don't just take my word for it. Here's what my clients have to say about working together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-6 sm:p-8 hover:bg-white/5 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-red-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-semibold text-white font-generalsans">
                  {testimonial.name}
                </div>
                <div className="text-red-500 text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4 font-generalsans">
              Ready to See Similar Results?
            </h3>
            <p className="text-white/60 mb-6">
              Let's work together to achieve exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-generalsans transition-colors">
                View Portfolio
              </button>
              <button className="border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-lg font-generalsans transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
