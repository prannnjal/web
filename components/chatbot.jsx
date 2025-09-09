"use client"

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap, Settings, Mic, MicOff, Volume2, VolumeX } from 'lucide-react'

// Bot responses with comprehensive coverage including normal conversations
const botResponses = {
  // Business-related responses
  greeting: [
    "Hello! Welcome to Xylotek. How can I help you today?",
    "Hi there! I'm here to assist you with any questions about our services.",
    "Welcome! I'm your AI assistant. What would you like to know?",
    "Greetings! I'm the Xylotek AI assistant, ready to help with any questions you have."
  ],
  services: [
    "We specialize in crafting next-generation UX experiences. Our services include web development, mobile apps, and digital solutions.",
    "At Xylotek, we create cutting-edge user experiences with modern technologies and innovative design approaches.",
    "Our team crafts exceptional digital experiences using the latest technologies and design principles.",
    "Xylotek offers comprehensive digital solutions: web development, mobile apps, UI/UX design, and digital transformation services."
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
  
  // Normal conversation responses
  casual_greeting: [
    "Hey there! How's your day going so far?",
    "Hi! Nice to meet you. How are you doing today?",
    "Hello! Hope you're having a great day!",
    "Hey! What's up? How's everything?",
    "Hi there! How's life treating you today?"
  ],
  casual_how_are_you: [
    "I'm functioning well, thank you for asking! As an AI assistant, I don't experience emotions the same way humans do, but I'm here and ready to help. How are you doing today?",
    "I'm operating at full capacity and ready to assist you! While I don't have feelings in the human sense, I'm designed to be helpful and engaging. How's your day going?",
    "All systems are running smoothly! I'm here to chat, help, and learn from our conversation. How are you feeling today?",
    "I'm doing well, thanks! As an AI, I'm always ready to engage in meaningful conversations. How about yourself?",
    "I'm functioning perfectly and excited to continue our conversation! How are you doing?"
  ],
  casual_mood: [
    "That's awesome! I'm glad to hear you're in a good mood.",
    "Nice! Everyone deserves a chill day once in a while. What's your favorite way to relax?",
    "That sounds lovely! What made your day so good?",
    "Great to hear! What's been the highlight of your day so far?",
    "That's wonderful! I hope the rest of your day is just as good."
  ],
  casual_bored: [
    "Hmm, maybe I can help! Want to play a quick trivia game or hear a random fun fact?",
    "Boredom can be tough! What usually helps you pass the time?",
    "I can tell you a joke or share an interesting fact if you'd like!",
    "How about we chat about something interesting? What topics do you enjoy?",
    "I've got plenty of random knowledge to share if you're interested!"
  ],
  casual_music: [
    "Same here! Music can change the whole mood. What kind of music do you usually listen to?",
    "Music is amazing! What's your favorite genre or artist?",
    "I love that! Music has such a powerful effect on our emotions. What's currently on your playlist?",
    "Great choice! Music is like therapy for the soul. What's your go-to when you need a mood boost?",
    "Awesome! Music can make any day better. What's the last song you listened to?"
  ],
  casual_movies: [
    "While I can't watch movies in the traditional sense, I have extensive knowledge about films, directors, genres, and cinematic history. I'd love to discuss movies with you! What genres or films interest you most?",
    "I have access to information about countless movies, from classics to contemporary films. I can discuss plot analysis, cinematography, acting performances, and more. What type of films do you enjoy?",
    "I'm well-versed in film theory, movie trivia, and cinematic techniques. I can help you discover new films, analyze classics, or discuss your favorite movies. What would you like to talk about?",
    "I can provide insights about movies, including behind-the-scenes information, critical analysis, and recommendations. What's your favorite genre or the last film that really impressed you?",
    "I have knowledge about films across all eras and genres. I can discuss everything from silent films to modern blockbusters. What kind of movies capture your interest?"
  ],
  casual_jokes: [
    "Sure! Why don't skeletons fight each other? Because they don't have the guts. 😂",
    "Here's one: What do you call a fake noodle? An impasta! 😄",
    "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
    "What do you call a bear with no teeth? A gummy bear! 🐻",
    "Why don't eggs tell jokes? They'd crack each other up! 🥚"
  ],
  casual_fun_facts: [
    "Here's a fascinating fact: Honey never spoils! Archaeologists have discovered 3,000-year-old honey in Egyptian tombs that was still perfectly edible. This is due to honey's unique chemical composition and low moisture content.",
    "Here's an incredible astronomical fact: A day on Venus is longer than its year! Venus takes 243 Earth days to complete one rotation on its axis, but only 225 Earth days to orbit the Sun. This makes Venus the only planet where a day is longer than a year.",
    "Here's a remarkable historical fact: The shortest war in recorded history lasted only 38 minutes! It occurred between Britain and Zanzibar on August 27, 1896, when Zanzibar surrendered after a brief naval bombardment.",
    "Here's a surprising botanical fact: Bananas are technically berries, while strawberries are not! In botanical terms, a berry is a fruit produced from a single ovary, which applies to bananas but not to strawberries.",
    "Here's a myth-busting fact: The Great Wall of China is not visible from space with the naked eye, despite the popular belief. While it's an impressive structure, it's not wide enough to be seen from low Earth orbit without magnification."
  ],
  casual_weather: [
    "Weather can really affect our mood, can't it? What's the weather like where you are?",
    "I hope the weather is treating you well today! What's it like outside?",
    "Weather talk is always a good conversation starter! How's the day looking where you are?",
    "I'm curious about your weather! What's the forecast like today?",
    "Weather can make or break a day! What's the sky showing you today?"
  ],
  casual_hobbies: [
    "That sounds really interesting! How did you get into that?",
    "Hobbies are so important for mental health! What do you enjoy most about it?",
    "That's awesome! How long have you been doing that?",
    "I love hearing about people's hobbies! What's your favorite part of it?",
    "That sounds like a great way to spend time! What got you interested in that?"
  ],
  casual_food: [
    "Food is one of life's great pleasures! What's your favorite cuisine?",
    "I'd love to hear about your food preferences! What do you enjoy eating?",
    "Food can bring so much joy! What's your go-to comfort food?",
    "I'm curious about your taste in food! What's your favorite type of cuisine?",
    "Food is such a universal language! What do you love to eat?"
  ],
  casual_goodbye: [
    "Take care! It was nice chatting with you!",
    "Goodbye! Have a wonderful day ahead!",
    "See you later! Thanks for the conversation!",
    "Bye! Hope to chat with you again soon!",
    "Take care! Wishing you a great day!"
  ],
  casual_thanks: [
    "You're very welcome! Happy to help!",
    "Anytime! That's what I'm here for!",
    "No problem at all! Glad I could help!",
    "You're welcome! It's my pleasure!",
    "Of course! Always happy to assist!"
  ],
  casual_compliment: [
    "That's so kind of you! Thank you! 😊",
    "You're too sweet! I appreciate that!",
    "Thank you! That really made my day!",
    "That's very nice of you to say! Thank you!",
    "You're so thoughtful! Thanks for the kind words!"
  ],
  casual_encouragement: [
    "You've got this! I believe in you! 💪",
    "You're doing great! Keep going!",
    "You're stronger than you think!",
    "Every step forward is progress!",
    "You're capable of amazing things!"
  ],
  casual_empathy: [
    "I'm sorry to hear that. That sounds really tough.",
    "I can only imagine how difficult that must be.",
    "That's really challenging. How are you coping?",
    "I'm here to listen if you want to talk more about it.",
    "That's a lot to deal with. Take care of yourself."
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

// Enhanced AI response logic with ChatGPT/Gemini-like behavior
function getBotResponse(userMessage, conversationHistory = []) {
  const message = userMessage.toLowerCase()
  
  // Context-aware greeting detection
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon') || message.includes('good evening')) {
    // Check conversation context for business vs casual
    const hasBusinessContext = conversationHistory.some(msg => 
      msg.text.toLowerCase().includes('service') || 
      msg.text.toLowerCase().includes('business') || 
      msg.text.toLowerCase().includes('company') ||
      msg.text.toLowerCase().includes('project') ||
      msg.text.toLowerCase().includes('development')
    )
    
    if (hasBusinessContext || message.includes('service') || message.includes('business') || message.includes('company') || message.includes('work')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)]
    }
    return botResponses.casual_greeting[Math.floor(Math.random() * botResponses.casual_greeting.length)]
  }
  
  // Casual conversation responses
  if (message.includes('how are you') || message.includes('how do you do') || message.includes('how\'s it going')) {
    return botResponses.casual_how_are_you[Math.floor(Math.random() * botResponses.casual_how_are_you.length)]
  }
  
  if (message.includes('good') && (message.includes('day') || message.includes('mood') || message.includes('feeling'))) {
    return botResponses.casual_mood[Math.floor(Math.random() * botResponses.casual_mood.length)]
  }
  
  if (message.includes('bored') || message.includes('boring')) {
    return botResponses.casual_bored[Math.floor(Math.random() * botResponses.casual_bored.length)]
  }
  
  if (message.includes('music') || message.includes('song') || message.includes('listen')) {
    return botResponses.casual_music[Math.floor(Math.random() * botResponses.casual_music.length)]
  }
  
  if (message.includes('movie') || message.includes('film') || message.includes('watch')) {
    return botResponses.casual_movies[Math.floor(Math.random() * botResponses.casual_movies.length)]
  }
  
  if (message.includes('joke') || message.includes('funny')) {
    return botResponses.casual_jokes[Math.floor(Math.random() * botResponses.casual_jokes.length)]
  }
  
  if (message.includes('fun fact') || message.includes('interesting') || message.includes('fact')) {
    return botResponses.casual_fun_facts[Math.floor(Math.random() * botResponses.casual_fun_facts.length)]
  }
  
  if (message.includes('weather') || message.includes('sunny') || message.includes('rainy') || message.includes('cold') || message.includes('hot')) {
    return botResponses.casual_weather[Math.floor(Math.random() * botResponses.casual_weather.length)]
  }
  
  if (message.includes('hobby') || message.includes('hobbies') || message.includes('interest') || message.includes('like to do')) {
    return botResponses.casual_hobbies[Math.floor(Math.random() * botResponses.casual_hobbies.length)]
  }
  
  if (message.includes('food') || message.includes('eat') || message.includes('cuisine') || message.includes('restaurant')) {
    return botResponses.casual_food[Math.floor(Math.random() * botResponses.casual_food.length)]
  }
  
  if (message.includes('bye') || message.includes('goodbye') || message.includes('see you') || message.includes('later')) {
    return botResponses.casual_goodbye[Math.floor(Math.random() * botResponses.casual_goodbye.length)]
  }
  
  if (message.includes('thank') || message.includes('thanks')) {
    return botResponses.casual_thanks[Math.floor(Math.random() * botResponses.casual_thanks.length)]
  }
  
  if (message.includes('nice') || message.includes('cool') || message.includes('awesome') || message.includes('great') || message.includes('amazing')) {
    return botResponses.casual_compliment[Math.floor(Math.random() * botResponses.casual_compliment.length)]
  }
  
  if (message.includes('sad') || message.includes('bad') || message.includes('tough') || message.includes('difficult') || message.includes('hard')) {
    return botResponses.casual_empathy[Math.floor(Math.random() * botResponses.casual_empathy.length)]
  }
  
  if (message.includes('relax') || message.includes('chill') || message.includes('rest')) {
    return "That sounds like a wonderful idea! Taking time to unwind is essential for mental well-being. Everyone has their own unique ways of relaxing - some prefer quiet activities like reading or meditation, while others enjoy more active pursuits. What's your preferred way to decompress and recharge?"
  }
  
  if (message.includes('weekend') || message.includes('plan') || message.includes('tonight')) {
    return "That sounds exciting! Planning activities can be such a great way to look forward to something. Whether it's something simple like trying a new restaurant or something more adventurous, having plans often adds structure and anticipation to our days. What kind of activities do you enjoy planning?"
  }
  
  // AI-like responses for complex questions
  if (message.includes('what can you do') || message.includes('your capabilities') || message.includes('what are you')) {
    return "I'm an AI assistant designed to be helpful, informative, and engaging. I can help you with information about our services, answer questions on various topics, engage in casual conversation, provide explanations, share interesting facts, and assist with problem-solving. I aim to be conversational while being informative and accurate. What would you like to explore or discuss?"
  }
  
  if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning')) {
    return "That's a fascinating topic! Artificial intelligence encompasses a wide range of technologies and applications. I'm an example of conversational AI, designed to understand and respond to human language. AI is transforming various industries, from healthcare to transportation to entertainment. What specific aspect of AI interests you most?"
  }
  
  if (message.includes('future') || message.includes('technology trends') || message.includes('what\'s next')) {
    return "The future of technology is incredibly exciting! We're seeing rapid advancements in AI, renewable energy, biotechnology, space exploration, and more. These developments have the potential to solve major challenges while also raising important questions about their impact on society. What technological developments are you most excited about or concerned about?"
  }
  
  // Business-related responses (existing logic)
  if (message.includes('service') || message.includes('what do you do') || message.includes('work') || message.includes('offer') || message.includes('provide') || message.includes('specialize')) {
    return botResponses.services[Math.floor(Math.random() * botResponses.services.length)]
  }
  
  if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('phone') || message.includes('call') || message.includes('message') || message.includes('get in touch')) {
    return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)]
  }
  
  if (message.includes('price') || message.includes('cost') || message.includes('how much') || message.includes('quote') || message.includes('budget') || message.includes('afford') || message.includes('expensive')) {
    return botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)]
  }
  
  if (message.includes('technology') || message.includes('tech') || message.includes('framework') || message.includes('stack') || message.includes('programming') || message.includes('code') || message.includes('development') || message.includes('platform')) {
    return botResponses.technology[Math.floor(Math.random() * botResponses.technology.length)]
  }
  
  if (message.includes('experience') || message.includes('years') || message.includes('track record') || message.includes('success') || message.includes('clients') || message.includes('projects') || message.includes('portfolio')) {
    return botResponses.experience[Math.floor(Math.random() * botResponses.experience.length)]
  }
  
  if (message.includes('timeline') || message.includes('how long') || message.includes('duration') || message.includes('time') || message.includes('deadline') || message.includes('schedule') || message.includes('when')) {
    return botResponses.timeline[Math.floor(Math.random() * botResponses.timeline.length)]
  }
  
  if (message.includes('process') || message.includes('methodology') || message.includes('approach') || message.includes('how do you work') || message.includes('steps') || message.includes('procedure')) {
    return botResponses.process[Math.floor(Math.random() * botResponses.process.length)]
  }
  
  if (message.includes('portfolio') || message.includes('examples') || message.includes('show me') || message.includes('previous work') || message.includes('case studies') || message.includes('projects')) {
    return botResponses.portfolio[Math.floor(Math.random() * botResponses.portfolio.length)]
  }
  
  if (message.includes('team') || message.includes('people') || message.includes('developers') || message.includes('designers') || message.includes('staff') || message.includes('who')) {
    return botResponses.team[Math.floor(Math.random() * botResponses.team.length)]
  }
  
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
  
  // Context-aware responses based on conversation history
  if (conversationHistory.length > 0) {
    const recentMessages = conversationHistory.slice(-3) // Look at last 3 messages
    const hasDiscussedTopic = recentMessages.some(msg => 
      msg.text.toLowerCase().includes(message.split(' ')[0]) || 
      msg.text.toLowerCase().includes(message.split(' ')[1])
    )
    
    if (hasDiscussedTopic) {
      return "I appreciate you bringing that up again! It's interesting how our conversation has evolved. Is there a specific aspect of that topic you'd like to explore further, or would you like to discuss something completely different?"
    }
  }
  
  // Default response for other questions
  return botResponses.default[Math.floor(Math.random() * botResponses.default.length)]
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. I can help you with information about our services, answer questions, or just chat about anything you'd like. What would you like to talk about?",
      sender: 'bot',
      timestamp: new Date(),
      mode: 'builtin'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationContext, setConversationContext] = useState({
    topic: null,
    mood: null,
    userInterests: [],
    conversationLength: 0
  })
  const [jarvisMode, setJarvisMode] = useState(false)
  const [jarvisStatus, setJarvisStatus] = useState('disconnected')
  const [jarvisEndpoint, setJarvisEndpoint] = useState('http://localhost:5000')
  
  // Voice recognition states
  const [isListening, setIsListening] = useState(false)
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [recognition, setRecognition] = useState(null)
  const [continuousListening, setContinuousListening] = useState(false)
  
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const speechSynthesisRef = useRef(null)

  // Check Jarvis server status on component mount
  useEffect(() => {
    checkJarvisStatus()
  }, [])

  // Check Jarvis server status
  const checkJarvisStatus = async () => {
    try {
      const response = await fetch(`${jarvisEndpoint}/health`)
      if (response.ok) {
        const data = await response.json()
        setJarvisStatus(data.jarvis_available ? 'connected' : 'limited')
        console.log('Jarvis status:', data)
      } else {
        setJarvisStatus('disconnected')
      }
    } catch (error) {
      setJarvisStatus('disconnected')
      console.log('Jarvis server not available:', error.message)
    }
  }

  // Send message to Jarvis API
  const sendToJarvis = async (message, isVoice = false) => {
    try {
      const response = await fetch(`${jarvisEndpoint}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          context: conversationContext,
          is_voice: isVoice
        })
      })

      if (response.ok) {
        const data = await response.json()
        return data.response
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to get response from Jarvis')
      }
    } catch (error) {
      console.error('Jarvis API error:', error)
      throw error
    }
  }

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

  // Initialize voice recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
      const recognition = new SpeechRecognition()
      
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = 'en-US'
      
      recognition.onstart = () => {
        setIsListening(true)
        console.log('Voice recognition started')
      }
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        setInputValue(transcript)
        console.log('Voice input:', transcript)
        
        // Auto-send voice messages after a short delay
        setTimeout(() => {
          if (transcript.trim()) {
            handleSendMessage(true) // Mark as voice input
          }
        }, 500)
      }
      
      recognition.onerror = (event) => {
        console.error('Voice recognition error:', event.error)
        setIsListening(false)
      }
      
      recognition.onend = () => {
        setIsListening(false)
        console.log('Voice recognition ended')
        
        // Restart listening if continuous mode is enabled
        if (continuousListening && isVoiceEnabled) {
          setTimeout(() => {
            startListening()
          }, 1000)
        }
      }
      
      setRecognition(recognition)
    } else {
      console.log('Speech recognition not supported')
      setIsVoiceEnabled(false)
    }
  }, [continuousListening, isVoiceEnabled])

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      speechSynthesisRef.current = window.speechSynthesis
    }
  }, [])

  // Handle sending message with AI-like behavior
  const handleSendMessage = async (isVoiceInput = false) => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
      mode: jarvisMode ? 'jarvis' : 'builtin',
      isVoice: isVoiceInput
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Update conversation context
    setConversationContext(prev => ({
      ...prev,
      conversationLength: prev.conversationLength + 1
    }))

    try {
      let botResponse
      
      if (jarvisMode && jarvisStatus === 'connected') {
        // Use Jarvis API
        try {
          botResponse = await sendToJarvis(userMessage.text, isVoiceInput)
        } catch (error) {
          console.error('Jarvis failed, falling back to built-in:', error)
          botResponse = getBotResponse(userMessage.text, messages)
        }
      } else {
        // Use built-in responses
        botResponse = getBotResponse(userMessage.text, messages)
      }

      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        mode: jarvisMode ? 'jarvis' : 'builtin'
      }
      
      setMessages(prev => [...prev, botMessage])
      
      // Speak the response if voice is enabled
      if (isVoiceEnabled) {
        speakText(botResponse)
      }
    } catch (error) {
      // Fallback response if everything fails
      const fallbackMessage = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble processing that request right now. Could you try rephrasing it?",
        sender: 'bot',
        timestamp: new Date(),
        mode: 'builtin'
      }
      setMessages(prev => [...prev, fallbackMessage])
    } finally {
      setIsTyping(false)
    }
  }

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Toggle Jarvis mode
  const toggleJarvisMode = () => {
    setJarvisMode(!jarvisMode)
    if (!jarvisMode) {
      // Check status when enabling Jarvis mode
      checkJarvisStatus()
    }
  }

  // Get status indicator color
  const getStatusColor = () => {
    switch (jarvisStatus) {
      case 'connected':
        return 'text-green-400'
      case 'limited':
        return 'text-yellow-400'
      case 'disconnected':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  // Get status text
  const getStatusText = () => {
    switch (jarvisStatus) {
      case 'connected':
        return 'Connected'
      case 'limited':
        return 'Limited'
      case 'disconnected':
        return 'Disconnected'
      default:
        return 'Unknown'
    }
  }

  // Voice control functions
  const startListening = () => {
    if (recognition && isVoiceEnabled) {
      try {
        recognition.start()
      } catch (error) {
        console.error('Failed to start voice recognition:', error)
      }
    }
  }

  const stopListening = () => {
    if (recognition) {
      recognition.stop()
    }
  }

  const toggleVoiceInput = () => {
    if (isListening) {
      stopListening()
    } else {
      startListening()
    }
  }

  const speakText = (text) => {
    if (speechSynthesisRef.current && isVoiceEnabled) {
      // Stop any current speech
      speechSynthesisRef.current.cancel()
      
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 0.8
      
      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)
      
      speechSynthesisRef.current.speak(utterance)
    }
  }

  const toggleVoiceOutput = () => {
    setIsVoiceEnabled(!isVoiceEnabled)
    if (!isVoiceEnabled && speechSynthesisRef.current) {
      speechSynthesisRef.current.cancel()
      setIsSpeaking(false)
    }
  }

  const toggleContinuousListening = () => {
    setContinuousListening(!continuousListening)
    if (!continuousListening && isVoiceEnabled) {
      // Start listening immediately when enabling continuous mode
      startListening()
    }
  }

  return (
    <>
      {/* Next-Gen Chat Icon - Fixed Position */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
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
        <div className="fixed bottom-24 left-4 right-4 sm:left-auto sm:right-6 w-auto sm:w-96 h-[65vh] sm:h-[500px] max-h-[85vh] bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 z-50 flex flex-col overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl pointer-events-none"></div>
          
          {/* Chat Header */}
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 p-3 sm:p-4 rounded-t-2xl border-b border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Bot className="h-6 w-6 text-cyan-400" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Xylotek Assistant</h3>
                  <p className="text-xs text-gray-400">AI-powered support</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {/* Jarvis Mode Toggle */}
                <button
                  onClick={toggleJarvisMode}
                  className={`relative p-2 rounded-lg transition-all duration-300 ${
                    jarvisMode 
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white' 
                      : 'bg-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-600/50'
                  }`}
                  title={jarvisMode ? 'Switch to Built-in Mode' : 'Switch to Jarvis Mode'}
                >
                  <Zap className="h-4 w-4" />
                  {jarvisMode && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  )}
                </button>
                
                {/* Settings Button */}
                <button
                  onClick={() => {
                    const newEndpoint = prompt('Enter Jarvis server endpoint:', jarvisEndpoint)
                    if (newEndpoint && newEndpoint !== jarvisEndpoint) {
                      setJarvisEndpoint(newEndpoint)
                      checkJarvisStatus()
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700/50 rounded-lg"
                  title="Configure Jarvis endpoint"
                >
                  <Settings className="h-5 w-5" />
                </button>
                
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700/50 rounded-lg"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Mode Indicator */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400">Mode:</span>
                <span className={`text-xs font-medium ${
                  jarvisMode ? 'text-purple-400' : 'text-blue-400'
                }`}>
                  {jarvisMode ? 'Jarvis AI' : 'Built-in AI'}
                </span>
              </div>
              
              {/* Jarvis Status */}
              {jarvisMode && (
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor().replace('text-', 'bg-')}`}></div>
                  <span className={`text-xs ${getStatusColor()}`}>
                    {getStatusText()}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 bg-gradient-to-b from-gray-900/50 to-black/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] p-3 sm:p-4 rounded-2xl ${
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
                      <p className="text-sm leading-relaxed break-words whitespace-pre-wrap">{message.text}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs opacity-60">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                        {message.sender === 'bot' && (
                          <div className="flex items-center space-x-1">
                            {message.mode === 'jarvis' && (
                              <Zap className="h-3 w-3 text-purple-400" title="Jarvis Response" />
                            )}
                            <span className="text-xs opacity-60">
                              {message.mode === 'jarvis' ? 'Jarvis' : 'Built-in'}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    {message.sender === 'user' && (
                      <User className="h-4 w-4 text-blue-200 flex-shrink-0 mt-1" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* ChatGPT-style Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800/80 text-gray-100 rounded-2xl rounded-bl-md border border-gray-700/50 p-3 sm:p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Bot className="h-4 w-4 text-cyan-400" />
                      <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-gray-400 ml-2">
                      {jarvisMode ? 'Jarvis is thinking...' : 'AI is thinking...'}
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Next-Gen Input Area */}
          <div className="p-3 sm:p-4 pb-[env(safe-area-inset-bottom)] bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700/50 rounded-b-2xl">
            <div className="flex gap-2 sm:gap-3">
              {/* Voice Input Button */}
              {isVoiceEnabled && (
                <button
                  onClick={toggleVoiceInput}
                  disabled={isTyping}
                  className={`p-2 sm:p-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100 ${
                    isListening 
                      ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white animate-pulse' 
                      : 'bg-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-600/50'
                  }`}
                  title={isListening ? 'Stop listening' : 'Start voice input'}
                >
                  {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </button>
              )}
              
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={jarvisMode ? "Ask Jarvis anything..." : "Ask me anything..."}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-800/80 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm transition-all"
                  disabled={isTyping}
                />
                {/* Input glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl pointer-events-none opacity-0 focus-within:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Voice Output Toggle */}
              <button
                onClick={toggleVoiceOutput}
                disabled={isTyping}
                className={`p-2 sm:p-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100 ${
                  isVoiceEnabled 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                    : 'bg-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-600/50'
                }`}
                title={isVoiceEnabled ? 'Disable voice output' : 'Enable voice output'}
              >
                {isVoiceEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              </button>
              
              {/* Continuous Listening Toggle */}
              <button
                onClick={toggleContinuousListening}
                disabled={isTyping || !isVoiceEnabled}
                className={`p-2 sm:p-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100 ${
                  continuousListening 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white animate-pulse' 
                    : 'bg-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-600/50'
                  }`}
                title={continuousListening ? 'Disable continuous listening' : 'Enable continuous listening'}
              >
                <div className="relative">
                  <Mic className="h-5 w-5" />
                  {continuousListening && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </button>
              
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-600 text-white px-3 py-2 sm:p-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-cyan-500/25"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            
            {/* Mode Info */}
            <div className="mt-2 text-xs text-gray-400 text-center">
              {jarvisMode ? (
                <span>
                  💜 Jarvis Mode Active • {jarvisStatus === 'connected' ? 'Full AI capabilities' : 'Limited mode'}
                </span>
              ) : (
                <span>
                  🔵 Built-in Mode • Basic AI responses
                </span>
              )}
            </div>
            
            {/* Voice Status */}
            <div className="mt-2 flex items-center justify-center space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <Mic className={`h-3 w-3 ${isVoiceEnabled ? 'text-green-400' : 'text-gray-500'}`} />
                <span className={isVoiceEnabled ? 'text-green-400' : 'text-gray-500'}>
                  Voice Input {isVoiceEnabled ? 'ON' : 'OFF'}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Volume2 className={`h-3 w-3 ${isVoiceEnabled ? 'text-green-400' : 'text-gray-500'}`} />
                <span className={isVoiceEnabled ? 'text-green-400' : 'text-gray-500'}>
                  Voice Output {isVoiceEnabled ? 'ON' : 'OFF'}
                </span>
              </div>
              {continuousListening && (
                <div className="flex items-center space-x-1 text-blue-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Continuous</span>
                </div>
              )}
              {isListening && (
                <div className="flex items-center space-x-1 text-red-400 animate-pulse">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Listening...</span>
                </div>
              )}
              {isSpeaking && (
                <div className="flex items-center space-x-1 text-blue-400 animate-pulse">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Speaking...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
