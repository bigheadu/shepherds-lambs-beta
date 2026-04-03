"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <span className="sr-only">Toggle menu</span>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors py-2 px-3 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-gray-900 transition-colors py-2 px-3 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/testimonials"
              className="text-gray-700 hover:text-gray-900 transition-colors py-2 px-3 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/career"
              className="text-gray-700 hover:text-gray-900 transition-colors py-2 px-3 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Career
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-gray-900 transition-colors py-2 px-3 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
