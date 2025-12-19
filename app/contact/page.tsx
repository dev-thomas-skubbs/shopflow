'use client'

import { useState } from 'react'
import Link from 'next/link'

function ContactHeader() {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/80 to-black/0 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">▲</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:inline">ShopFlow</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <a href="/#features" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="/#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
          <a href="/#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a>
        </nav>
        
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition">
          Get Started
        </button>
      </div>
    </header>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="bg-black min-h-screen">
      <ContactHeader />
      
      {/* Hero */}
      <div className="pt-32 pb-16 px-4 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a question about ShopFlow? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">📧</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-400 mb-1">support@shopflow.com</p>
                    <p className="text-gray-500 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">📞</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <p className="text-gray-400 mb-1">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">💬</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                    <p className="text-gray-400 mb-1">Available 24/7 on our website</p>
                    <p className="text-gray-500 text-sm">Get instant answers from our support team</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">📍</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                    <p className="text-gray-400 mb-1">123 Commerce Street</p>
                    <p className="text-gray-400">San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-12 border-t border-white/10">
                <h3 className="text-lg font-bold text-white mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-white/10 hover:bg-purple-500/30 rounded-lg flex items-center justify-center text-white transition">
                    𝕏
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 hover:bg-purple-500/30 rounded-lg flex items-center justify-center text-white transition">
                    f
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 hover:bg-purple-500/30 rounded-lg flex items-center justify-center text-white transition">
                    in
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 hover:bg-purple-500/30 rounded-lg flex items-center justify-center text-white transition">
                    ◉
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

              {submitted ? (
                <div className="min-h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-400">We've received your message and will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition"
                    >
                      <option value="" disabled className="bg-black">Select a subject...</option>
                      <option value="sales" className="bg-black">Sales Inquiry</option>
                      <option value="support" className="bg-black">Support & Help</option>
                      <option value="partnership" className="bg-black">Partnership</option>
                      <option value="feedback" className="bg-black">Feedback</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105"
                  >
                    Send Message
                  </button>

                  <p className="text-gray-400 text-sm text-center">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Can't find the answer you're looking for? Contact us below.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, bank transfers, and cryptocurrency. All transactions are secure and encrypted.'
              },
              {
                q: 'Can I upgrade or downgrade my plan anytime?',
                a: 'Yes! You can change your plan at any time. Changes take effect at the start of your next billing cycle.'
              },
              {
                q: 'Do you offer a free trial?',
                a: 'Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start.'
              },
              {
                q: 'What kind of support do you provide?',
                a: 'We offer 24/7 live chat support, email support, phone support for premium plans, and extensive documentation.'
              },
              {
                q: 'Is there a setup fee?',
                a: 'No! There are no hidden fees, setup charges, or installation costs. You only pay your monthly subscription.'
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 transition">
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Start your free 14-day trial today and see how ShopFlow can transform your business.</p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Footer */}
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
              <p className="text-gray-400 text-sm">The complete eCommerce platform for modern sellers.</p>
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
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
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
    </main>
  )
}