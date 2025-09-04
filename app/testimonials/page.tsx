import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Star, Quote } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Community Member",
      content:
        "Shepherd's Lambs has been a beacon of hope in our community. Their personalized approach to mental health services has truly made a difference in my life and the lives of many others.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Program Participant",
      content:
        "The quality of care and attention I received from Shepherd's Lambs exceeded all my expectations. Their team genuinely cares about each individual's journey to wellness.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Family Member",
      content:
        "Shepherd's Lambs didn't just help my loved one - they supported our entire family through a difficult time. Their comprehensive approach is truly remarkable.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Community Partner",
      content:
        "Working with Shepherd's Lambs has shown me what true dedication to community service looks like. Their impact on South Orange County is immeasurable.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      name: "Maria Gonzalez",
      role: "Service Recipient",
      content:
        "The specialized services provided by Shepherd's Lambs have been life-changing. I'm grateful for their commitment to serving our community's unique needs.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Volunteer",
      content:
        "Being part of Shepherd's Lambs's mission has been incredibly rewarding. Seeing the positive impact they make every day inspires me to continue supporting their cause.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

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
              <Link href="/testimonials" className="text-gray-900 font-medium">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Community Says</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Hear from the amazing individuals and families whose lives have been touched by Shepherd's Lambs's
            personalized services and community support.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories of Hope and Transformation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These testimonials represent the real impact of our work in South Orange County's special needs community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-gray-600 mb-2" />
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                  <div className="flex items-center justify-between">
                    

                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Story</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have you been impacted by Shepherd's Lambs's services? We'd love to hear from you and share your story with
            our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3">Share Your Testimonial</Button>
            <Button
              variant="outline"
              className="border-gray-700 text-gray-700 hover:bg-gray-100 px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16">
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
                  <Link href="/testimonials" className="text-white font-medium">
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
