"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    details: "+1 (555) 123-4567",
    description: "Available Mon-Fri, 9AM-6PM"
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    details: "hello@leadboostx.com",
    description: "I'll respond within 24 hours"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location",
    details: "Remote Worldwide",
    description: "Working with clients globally"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Response Time",
    details: "< 24 hours",
    description: "Quick turnaround guaranteed"
  }
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    
    // Reset submission status after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-generalsans">
            Ready to bring your vision to life? I'm here to help you create something extraordinary.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-up">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 font-generalsans">
                Get in Touch
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Whether you have a project in mind or just want to chat about possibilities, 
                I'd love to hear from you. Let's discuss how we can work together.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-red-500 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 font-generalsans">
                        {info.title}
                      </h4>
                      <p className="text-white mb-1 font-generalsans">
                        {info.details}
                      </p>
                      <p className="text-white/60 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 font-generalsans">
                Send a Message
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2 font-generalsans">
                    Message Sent!
                  </h4>
                  <p className="text-white/60">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2 font-generalsans">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-red-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2 font-generalsans">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-red-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white mb-2 font-generalsans">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-red-500"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2 font-generalsans">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-red-500 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-generalsans"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4 font-generalsans">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/60 mb-6">
              Let's schedule a call to discuss your requirements and explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-generalsans"
              >
                Schedule a Call
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 text-white font-generalsans"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
