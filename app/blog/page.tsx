"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function BlogPage() {
  useEffect(() => {
    // Load Twitter widgets script
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Shepherd's Lambs" width={160} height={80} className="h-12 w-auto" />
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="text-gray-900 font-medium">
                Blog
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-gray-900 transition-colors">
                Testimonials
              </Link>
              <Link href="/career" className="text-gray-700 hover:text-gray-900 transition-colors">
                Career
              </Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Phone</div>
                <div className="font-semibold text-gray-900">(949) 274-5569</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-gray-600 mb-12">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            About Us
          </Link>
          <span>{">"}</span>
          <span className="text-gray-900 font-medium">Blog</span>
        </nav>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest Updates</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow our latest thoughts and updates from Shepherd's Lambs (@) on X.
          </p>
        </div>

        {/* Twitter Embed */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <a
                className="twitter-timeline"
                href="https://twitter.com/jack"
                data-height="600"
                data-theme="light"
                data-chrome="noheader nofooter noborders transparent"
              >
                Tweets by @jack
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to stay updated with more content? Follow us on social media or subscribe to our newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://twitter.com/jack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Follow on X
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex flex-col items-center mb-6">
                <div className="bg-white p-3 rounded-lg mb-2">
                  <Image src="/logo.png" alt="Shepherd's Lambs" width={200} height={100} className="w-48 h-auto" />
                </div>
              </div>
              <p className="text-gray-300">
                Shepherd's Lambs is a 501(c)(3) non-profit organization committed to serving youths in southern Orange
                County. Our staff is educated and experienced in neurodegenerative respite care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white font-medium">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="text-gray-300 hover:text-white transition-colors">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-semibold mb-6">For Quarterly Updates</h4>
              <div className="flex gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 bg-white text-gray-900 border-0 rounded"
                />
                <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-300 text-sm">
                Join us to make a difference! Subscribe to our newsletter to stay informed about our humanitarian
                organization.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
