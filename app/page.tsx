'use client'

import { useState } from 'react'
import Link from 'next/link'

// Define all components BEFORE using them in the main component

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/80 to-black/0 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">▲</span>
          </div>
          <span className="text-white font-bold text-xl hidden sm:inline">ShopFlow</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a>
          <Link href="/contact" className="text-gray-300 hover:text-white transition">Contact Us</Link>
        </nav>
        
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition">
          Get Started
        </button>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full">
          <span className="text-purple-300 text-sm font-medium">🚀 The Future of Commerce</span>
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
          Sell More with <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ShopFlow</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          All-in-one eCommerce SaaS platform built for modern businesses. Manage inventory, process payments, and grow your brand—all from one intuitive dashboard.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition">
            Watch Demo
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto text-gray-300 text-sm">
          <div>✓ No credit card</div>
          <div>✓ 14-day free</div>
          <div>✓ Full access</div>
        </div>
      </div>
    </div>
  )
}

function FeaturesSection() {
  const [features] = useState([
    {
      id: 1,
      icon: '🛍️',
      title: 'Smart Inventory',
      description: 'Real-time stock management with automatic low-stock alerts and predictive reordering.'
    },
    {
      id: 2,
      icon: '💳',
      title: 'Payment Processing',
      description: 'Accept 150+ payment methods securely. Stripe, PayPal, Apple Pay, Google Pay, and more.'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Analytics & Reports',
      description: 'Deep insights into sales, customer behavior, and revenue with custom dashboards.'
    },
    {
      id: 4,
      icon: '🚀',
      title: 'Multi-Channel Selling',
      description: 'Sell on your store, Instagram, Facebook, TikTok, and Amazon from one dashboard.'
    },
    {
      id: 5,
      icon: '🤖',
      title: 'AI-Powered Marketing',
      description: 'Automated email campaigns, product recommendations, and customer segmentation.'
    },
    {
      id: 6,
      icon: '🔐',
      title: 'Enterprise Security',
      description: 'SSL encryption, PCI compliance, and 24/7 monitoring to protect your business.'
    }
  ])

  return (
    <section id="features" className="py-24 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features for Modern Sellers
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build and scale a thriving eCommerce business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => (
            <div 
              key={feature.id}
              className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 hover:bg-white/15 transition duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const [plans] = useState([
    {
      id: 1,
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for new sellers',
      features: [
        'Unlimited products',
        'Inventory management',
        'Basic analytics',
        'Email support',
        'SSL security'
      ],
      highlighted: false
    },
    {
      id: 2,
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Most popular for growing brands',
      features: [
        'Everything in Starter',
        'Multi-channel selling',
        'Advanced analytics',
        'AI marketing tools',
        'Priority support',
        'Custom domain'
      ],
      highlighted: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale operations',
      features: [
        'Everything in Professional',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        '99.9% uptime SLA',
        'White-label solution'
      ],
      highlighted: false
    }
  ])

  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-black/50 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No setup costs. Pay only for what you use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(plan => (
            <div 
              key={plan.id}
              className={`relative p-8 rounded-2xl transition ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30 border-2 border-purple-500/50 scale-105'
                  : 'bg-white/10 border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold">
                  Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-400 mb-6">
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-gray-400 ml-2">
                  {plan.period}
                </span>
              </div>
              
              <button className={`w-full py-3 rounded-lg font-bold mb-8 transition ${
                plan.highlighted
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}>
                Get Started
              </button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2">
                    <span className="text-purple-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const [testimonials] = useState([
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Founder, StyleHub',
      text: 'ShopFlow transformed how we manage our online store. Sales increased 3x in the first month!',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'CEO, TechGear Co',
      text: 'The multi-channel selling feature alone is worth the subscription. Game-changer for our business.',
      avatar: '👨‍💼'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Owner, Artisan Crafts',
      text: 'Best customer support I\'ve ever experienced. They went above and beyond to help us succeed.',
      avatar: '👩‍🎨'
    }
  ])

  return (
    <section id="testimonials" className="py-24 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Loved by Thousands of Sellers
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join successful eCommerce businesses that trust ShopFlow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id}
              className="p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-bold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "{testimonial.text}"
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions? Our team is ready to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400">support@shopflow.com</p>
            <p className="text-gray-500 text-sm mt-2">We respond within 24 hours</p>
          </div>

          <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
            <p className="text-gray-400">Available 24/7</p>
            <p className="text-gray-500 text-sm mt-2">Chat with our support team instantly</p>
          </div>

          <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
            <p className="text-gray-500 text-sm mt-2">Mon-Fri, 9am-6pm EST</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105">
              Send us a Message
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-t border-b border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Scale Your eCommerce Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of successful sellers. Start your free 14-day trial today—no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">▲</span>
              </div>
              <span className="text-white font-bold">ShopFlow</span>
            </div>
            <p className="text-gray-400 text-sm">
              The complete eCommerce platform for modern sellers.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; 2024 ShopFlow. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  )
}