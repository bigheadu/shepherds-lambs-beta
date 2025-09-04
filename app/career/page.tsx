import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Sparkles } from "lucide-react"
import { submitCareerForm } from "@/app/actions/contact"

export default function CareerPage({ searchParams }: { searchParams?: { success?: string } }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6933bdd4-07b6-4d4d-8946-51a0cef27b6d-XqyqAd0mZ6c5hmJNJAYEXSTp07DbHX.png"
                alt="Shepherd's Lambs"
                width={160}
                height={80}
                className="h-12 w-auto"
              />
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
                Blog
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-gray-900 transition-colors">
                Testimonials
              </Link>
              <Link href="/career" className="text-gray-900 font-medium">
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
      <main className="relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 text-gray-400 opacity-60">
          <Sparkles className="h-12 w-12" />
        </div>
        <div className="absolute top-40 right-32 text-gray-400 opacity-40">
          <Sparkles className="h-8 w-8" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-gray-600 mb-12">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              About Us
            </Link>
            <span>{">"}</span>
            <span className="text-gray-900 font-medium">Career</span>
          </nav>

          {/* Success Message */}
          {searchParams?.success && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-8">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Thank you for your interest! Your application has been submitted successfully. We'll be in touch
                    soon.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Work With Shepherd's Lambs</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're always looking for dedicated, caring people who want to make a positive difference, particularly
              with the Special Needs community. Please tell us a little bit about yourself and your interests and why
              you'd be a good fit for Shepherd's Lambs and we'll be in touch. Thank you for your interest!
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form action={submitCareerForm} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    name="name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    name="email"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  name="phone"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about yourself, your interests, and why you'd be a good fit for Shepherd's Lambs..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-vertical"
                  name="message"
                />
              </div>

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium"
                >
                  Submit Application
                </Button>
              </div>
            </form>
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
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shepherd%27s%20Lambs-ZAqg6BezIJIpZGhRZFjGwed9QBNDSx.png"
                    alt="Shepherd's Lambs"
                    width={200}
                    height={100}
                    className="w-48 h-auto"
                  />
                </div>
                
              </div>
              <p className="text-gray-300 mb-4">
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
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="text-white font-medium">
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
                <Input type="email" placeholder="Email" className="bg-white text-gray-900 border-0" />
                <Button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6">Subscribe</Button>
              </div>
              <p className="text-gray-300 text-sm">
                Join us to make a difference! Subscribe to our newsletter to stay informed about our organization.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
