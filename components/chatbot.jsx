"use client"

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'

// Bot responses with comprehensive coverage
const botResponses = {
  greeting: [
    "Hello! Welcome to LeadBoostX. How can I help you today?",
    "Hi there! I'm here to assist you with any questions about our services.",
    "Welcome! I'm your AI assistant. What would you like to know?",
    "Greetings! I'm the LeadBoostX AI assistant, ready to help with any questions you have."
  ],
  services: [
    "We specialize in crafting next-generation UX experiences. Our services include web development, mobile apps, and digital solutions.",
    "At LeadBoostX, we create cutting-edge user experiences with modern technologies and innovative design approaches.",
    "Our team crafts exceptional digital experiences using the latest technologies and design principles.",
    "LeadBoostX offers comprehensive digital solutions: web development, mobile apps, UI/UX design, and digital transformation services."
  ],
  contact: [
    "You can reach us through our contact form or email us directly. We'd love to hear about your project!",
    "Feel free to use our contact section or send us a message. We're always excited to discuss new opportunities.",
    "Get in touch with us through the contact form on our website. Let's discuss how we can help bring your vision to life!",
    "Contact us anytime! We're here to help turn your ideas into reality."
  ],
  pricing: [
    "Our pricing varies based on project scope and requirements. We offer competitive rates and flexible packages. Would you like to discuss your specific project?",
    "We provide transparent pricing with no hidden costs. Each project is unique, so we'd love to understand your needs and provide a custom quote.",
    "Our pricing is project-based and depends on complexity, timeline, and features. Let's schedule a consultation to discuss your requirements."
  ],
  technology: [
    "We use cutting-edge technologies including React, Next.js, Node.js, Python, and modern cloud platforms. Our tech stack is always up-to-date with industry best practices.",
    "Our technology stack includes modern frameworks, cloud solutions, and the latest development tools to ensure scalable and maintainable solutions.",
    "We leverage the latest technologies in web development, mobile development, and cloud infrastructure to deliver robust solutions."
  ],
  experience: [
    "Our team has extensive experience across various industries including e-commerce, healthcare, finance, and education. We've successfully delivered 100+ projects.",
    "With years of experience in digital transformation, we've helped businesses of all sizes achieve their digital goals and improve user experiences.",
    "We have a proven track record of delivering successful projects across multiple sectors, from startups to enterprise-level organizations."
  ],
  timeline: [
    "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our consultation.",
    "We work efficiently to deliver quality results. Most projects are completed within 4-12 weeks, depending on scope and requirements.",
    "Timelines are project-specific. We'll create a detailed project plan with milestones to keep you informed throughout the development process."
  ],
  process: [
    "Our development process includes discovery, planning, design, development, testing, and deployment. We maintain clear communication at every stage.",
    "We follow an agile methodology with regular updates and feedback loops. This ensures your project stays on track and meets your expectations.",
    "Our process is collaborative and transparent. We involve you in key decisions and provide regular progress updates throughout development."
  ],
  portfolio: [
    "We have an extensive portfolio showcasing our work across various industries. You can see examples of our projects on our website.",
    "Our portfolio demonstrates our expertise in creating user-friendly, scalable solutions. We'd be happy to share relevant case studies for your industry.",
    "We've successfully delivered projects for clients in healthcare, finance, e-commerce, and more. Each project showcases our commitment to quality and innovation."
  ],
  team: [
    "Our team consists of experienced developers, designers, and project managers who are passionate about creating exceptional digital experiences.",
    "We have a diverse team of experts in frontend development, backend development, UI/UX design, and project management.",
    "Our team brings together years of experience in digital development, ensuring we deliver solutions that exceed expectations."
  ],
  support: [
    "We provide ongoing support and maintenance for all our projects. We're here to help ensure your digital solution continues to perform optimally.",
    "Post-launch support is included in our service. We offer maintenance, updates, and technical support to keep your solution running smoothly.",
    "We believe in building long-term relationships with our clients. Our support team is always available to help with any questions or issues."
  ],
  default: [
    "That's an interesting question! Let me connect you with our team for more specific information.",
    "I'd be happy to help with that. Would you like to schedule a consultation with our experts?",
    "Great question! Our team has extensive experience in that area. Let's discuss your specific needs.",
    "That's a great topic to discuss. We'd love to explore this further during a consultation.",
    "Excellent question! Our experts would be happy to provide detailed information about this.",
    "We have experience with that! Let's schedule a call to discuss how we can help."
  ]
}

// Enhanced AI response logic with comprehensive question handling
function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase()
  
  // Greetings and introductions
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon') || message.includes('good evening')) {
    return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)]
  }
  
  // Services and what we do
  if (message.includes('service') || message.includes('what do you do') || message.includes('work') || message.includes('offer') || message.includes('provide') || message.includes('specialize')) {
    return botResponses.services[Math.floor(Math.random() * botResponses.services.length)]
  }
  
  // Contact and communication
  if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('phone') || message.includes('call') || message.includes('message') || message.includes('get in touch')) {
    return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)]
  }
  
  // Pricing and costs
  if (message.includes('price') || message.includes('cost') || message.includes('how much') || message.includes('quote') || message.includes('budget') || message.includes('afford') || message.includes('expensive')) {
    return botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)]
  }
  
  // Technology and technical details
  if (message.includes('technology') || message.includes('tech') || message.includes('framework') || message.includes('stack') || message.includes('programming') || message.includes('code') || message.includes('development') || message.includes('platform')) {
    return botResponses.technology[Math.floor(Math.random() * botResponses.technology.length)]
  }
  
  // Experience and track record
  if (message.includes('experience') || message.includes('years') || message.includes('track record') || message.includes('success') || message.includes('clients') || message.includes('projects') || message.includes('portfolio')) {
    return botResponses.experience[Math.floor(Math.random() * botResponses.experience.length)]
  }
  
  // Timeline and project duration
  if (message.includes('timeline') || message.includes('how long') || message.includes('duration') || message.includes('time') || message.includes('deadline') || message.includes('schedule') || message.includes('when')) {
    return botResponses.timeline[Math.floor(Math.random() * botResponses.timeline.length)]
  }
  
  // Process and methodology
  if (message.includes('process') || message.includes('methodology') || message.includes('approach') || message.includes('how do you work') || message.includes('steps') || message.includes('procedure')) {
    return botResponses.process[Math.floor(Math.random() * botResponses.process.length)]
  }
  
  // Portfolio and examples
  if (message.includes('portfolio') || message.includes('examples') || message.includes('show me') || message.includes('previous work') || message.includes('case studies') || message.includes('projects')) {
    return botResponses.portfolio[Math.floor(Math.random() * botResponses.portfolio.length)]
  }
  
  // Team and people
  if (message.includes('team') || message.includes('people') || message.includes('developers') || message.includes('designers') || message.includes('staff') || message.includes('who')) {
    return botResponses.team[Math.floor(Math.random() * botResponses.team.length)]
  }
  
  // Support and maintenance
  if (message.includes('support') || message.includes('maintenance') || message.includes('help') || message.includes('after') || message.includes('ongoing') || message.includes('future')) {
    return botResponses.support[Math.floor(Math.random() * botResponses.support.length)]
  }
  
  // Industry-specific questions
  if (message.includes('industry') || message.includes('sector') || message.includes('business') || message.includes('company') || message.includes('startup') || message.includes('enterprise')) {
    return "We work across various industries including healthcare, finance, e-commerce, education, and more. Each industry has unique requirements, and we tailor our solutions accordingly. What industry are you in?"
  }
  
  // Quality and standards
  if (message.includes('quality') || message.includes('standard') || message.includes('best practice') || message.includes('reliable') || message.includes('trust') || message.includes('guarantee')) {
    return "Quality is our top priority. We follow industry best practices, conduct thorough testing, and maintain high standards throughout development. We're committed to delivering reliable, scalable solutions that exceed expectations."
  }
  
  // Innovation and trends
  if (message.includes('innovation') || message.includes('trend') || message.includes('latest') || message.includes('modern') || message.includes('cutting edge') || message.includes('future')) {
    return "We stay ahead of industry trends and continuously innovate our approach. We leverage the latest technologies and methodologies to ensure your solution is future-ready and competitive in the market."
  }
  
  // Customization and flexibility
  if (message.includes('custom') || message.includes('tailor') || message.includes('specific') || message.includes('unique') || message.includes('personalize') || message.includes('flexible')) {
    return "Every project is unique, and we customize our approach to meet your specific needs. We're flexible and adapt our solutions to align with your business goals, timeline, and budget requirements."
  }
  
  // Default response for other questions
  return botResponses.default[Math.floor(Math.random() * botResponses.default.length)]
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hello! Welcome to LeadBoostX. I'm here to help you learn more about our services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Handle sending message
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Next-Gen Chat Icon - Fixed Position */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/25 group"
          aria-label="Open chat"
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
          
          {/* Icon with glow effect */}
          <div className="relative z-10">
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </div>
          
          {/* Floating particles effect */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          )}
        </button>
      </div>

      {/* Next-Gen Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 z-50 flex flex-col overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl pointer-events-none"></div>
          
          {/* Chat Header */}
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-t-2xl border-b border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Bot className="h-6 w-6 text-cyan-400" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">LeadBoostX Assistant</h3>
                  <p className="text-xs text-gray-400">AI-powered support</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700/50 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-900/50 to-black/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-md shadow-lg'
                      : 'bg-gray-800/80 text-gray-100 rounded-bl-md border border-gray-700/50 backdrop-blur-sm'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {message.sender === 'bot' && (
                      <div className="relative">
                        <Bot className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-1" />
                        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-60 mt-2">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <User className="h-4 w-4 text-blue-200 flex-shrink-0 mt-1" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Next-Gen Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800/80 text-gray-100 rounded-2xl rounded-bl-md border border-gray-700/50 p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Bot className="h-4 w-4 text-cyan-400" />
                      <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Next-Gen Input Area */}
          <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700/50 rounded-b-2xl">
            <div className="flex space-x-3">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm transition-all"
                  disabled={isTyping}
                />
                {/* Input glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl pointer-events-none opacity-0 focus-within:opacity-100 transition-opacity"></div>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-600 text-white p-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-cyan-500/25"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
