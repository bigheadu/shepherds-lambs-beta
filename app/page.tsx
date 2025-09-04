import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageSlideshow } from "@/components/image-slideshow"

export default function AboutUsPage() {
  const slideshowImages = [
    {
      src: "/images/slideshow/beach-play.jpg",
      alt: "Children playing joyfully on the beach, running and jumping with their reflections in the wet sand",
    },
    {
      src: "/images/slideshow/climbing-structure.jpg",
      alt: "Children climbing and playing on a rope climbing structure, developing physical skills and confidence",
    },
    {
      src: "/images/slideshow/water-slide.jpg",
      alt: "A child enjoying a water slide, experiencing the joy and excitement of play",
    },
    {
      src: "/images/slideshow/swimming-pool.jpg",
      alt: "A child celebrating in the swimming pool with arms raised, showing pure happiness and achievement",
    },
    {
      src: "/images/slideshow/father-child-celebration.jpg",
      alt: "A joyful moment of celebration with a child on an adult's shoulders, both with arms raised in triumph, representing the supportive relationships fostered by Shepherd's Lambs",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
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
              <Link href="/" className="text-gray-900 font-medium">
                About Us
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
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
            <Button variant="ghost" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Shepherd's Lambs</h1>
              <p className="text-xl text-gray-700 mb-8">
                We serve youths in southern Orange County. Our staff is educated and experienced in neurodegenerative respite care. Shepherd's Lambs encompasses the Servant Leader mindset; we serve so that your child grows to become wiser, healthier and more autonomous.              
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-4">
                  Shepherd's Lambs provides respite care/relief intervention, life skills, sportsmanship, and aquatic
                  therapy for challenged and disabled youths. Services will be provided with the utmost compassion,
                  patience, and flexibility. We, at Shepherd's Lambs, acknowledge and understand the diverse needs that
                  families might have with their children. We create a soft environment that allows for positive
                  interactions for children who struggle in the educational and social environment. Our team is
                  passionate about helping clients follow a developmental path to success by setting attainable goals.
                </p>
              </div>
              <div className="relative h-96">
                <ImageSlideshow images={slideshowImages} autoPlay={true} interval={5000} />
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Leadership</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src="/images/team-member.png"
                    alt="Team Member"
                    width={192}
                    height={192}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">Mary Frances Kirkpatrick</h3>
                <p className="text-gray-600 mb-2">Founder & Executive Director</p>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                  With over 15 years of experience working with the special needs community, Mary founded Shepherd's
                  Lambs to make a difference.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src="/images/ulrika-marmolin-updated.jpg"
                    alt="Ulrika Marmolin"
                    width={192}
                    height={192}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">Ulrika Marmolin</h3>
                <p className="text-gray-600 mb-2">Respite Youth Care</p>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                  Ulrika ensures that our clients receive personalized care plans that address their unique needs and
                  goals.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src="/images/kristofer-kirkpatrick.jpg"
                    alt="Kristofer John Kirkpatrick"
                    width={192}
                    height={192}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">Kristofer John Kirkpatrick </h3>
                <p className="text-gray-600 mb-2">Care Coordinator</p>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                  Kristofer brings a wealth of knowledge in special education and program development to our
                  organization.
                </p>
              </div>

              {/* Team Member 4 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src="/images/vern-clark.jpg"
                    alt="Vern Clark"
                    width={192}
                    height={192}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">Vern Clark</h3>
                <p className="text-gray-600 mb-2">Registered Nurse</p>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                  Vern brings extensive nursing experience and clinical expertise to our team, ensuring the highest
                  quality of care for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Behavioral & Emotional Regulation</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Social and emotional regulation</li>
                  <li>Positive behavior learning</li>
                  <li>Coping strategies</li>
                  <li>Trigger control</li>
                  <li>Anxiety suppression</li>
                  <li>Reducing loping</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Daily Functioning</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Life skills</li>
                  <li>Communication</li>
                  <li>Time management</li>
                  <li>Dressing</li>
                  <li>Public transportation</li>
                  <li>Light household chores</li>
                  <li>Independence skills</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Therapeutic & Educational Programs</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Aquatic therapy</li>
                  <li>Educational development</li>
                  <li>Play-based setting to redirect from maladaptive behaviors</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Services to Parents</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Stress management</li>
                  <li>Burnout prevention</li>
                  <li>House rules</li>
                  <li>Repudiate ableism</li>
                  <li>Support groups</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <p className="text-gray-300">
                Shepherd's Lambs is a 501(c)(3) non-profit organization committed to serving youths in southern Orange
                County. Our staff is educated and experienced in neurodegenerative respite care.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
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
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Orange County, CA</li>
                <li className="flex items-center gap-2">Phone: (949) 274-5569</li>
                <li className="flex items-center gap-2">Email: mommabearkirkpatrick@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Shepherd's Lambs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
