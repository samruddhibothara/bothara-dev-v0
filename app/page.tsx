"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Sample data - modular and extensible
const projects = [
  {
    id: 1,
    name: "Bothara Business Park",
    location: "Chakan, Pune",
    type: "Commercial",
    description: "Premium commercial spaces with modern amenities",
    images: [
      "/placeholder.svg?height=300&width=400&text=Business+Park+1",
      "/placeholder.svg?height=300&width=400&text=Business+Park+2",
    ],
    upcoming: false,
  },
  {
    id: 2,
    name: "Golden Heights Residency",
    location: "Baner, Pune",
    type: "Residential",
    description: "Luxury residential apartments with world-class facilities",
    images: [
      "/placeholder.svg?height=300&width=400&text=Golden+Heights+1",
      "/placeholder.svg?height=300&width=400&text=Golden+Heights+2",
    ],
    upcoming: true,
  },
  {
    id: 3,
    name: "Corporate Plaza",
    location: "Hinjewadi, Pune",
    type: "Commercial",
    description: "State-of-the-art office spaces for growing businesses",
    images: [
      "/placeholder.svg?height=300&width=400&text=Corporate+Plaza+1",
      "/placeholder.svg?height=300&width=400&text=Corporate+Plaza+2",
    ],
    upcoming: false,
  },
  {
    id: 4,
    name: "Tech Hub Complex",
    location: "Wakad, Pune",
    type: "Commercial",
    description: "Modern tech-enabled workspace solutions",
    images: [
      "/placeholder.svg?height=300&width=400&text=Tech+Hub+1",
      "/placeholder.svg?height=300&width=400&text=Tech+Hub+2",
    ],
    upcoming: false,
  },
]

const leasingProperties = [
  {
    id: 1,
    name: "Bothara Business Center",
    location: "Chakan, Pune",
    type: "Commercial",
    area: "50,000 sq ft",
    officeSizes: "500-5000 sq ft",
    description: "Premium office spaces in prime location",
    images: [
      "/placeholder.svg?height=300&width=400&text=Business+Center+1",
      "/placeholder.svg?height=300&width=400&text=Business+Center+2",
    ],
    mapLink: "https://maps.google.com",
  },
  {
    id: 2,
    name: "Tech Hub Complex",
    location: "Wakad, Pune",
    type: "Commercial",
    area: "75,000 sq ft",
    officeSizes: "1000-10000 sq ft",
    description: "Modern tech-enabled workspace solutions",
    images: [
      "/placeholder.svg?height=300&width=400&text=Tech+Hub+1",
      "/placeholder.svg?height=300&width=400&text=Tech+Hub+2",
    ],
    mapLink: "https://maps.google.com",
  },
  {
    id: 3,
    name: "Retail Plaza",
    location: "Baner, Pune",
    type: "Commercial",
    area: "30,000 sq ft",
    officeSizes: "200-2000 sq ft",
    description: "Prime retail spaces with high footfall",
    images: [
      "/placeholder.svg?height=300&width=400&text=Retail+Plaza+1",
      "/placeholder.svg?height=300&width=400&text=Retail+Plaza+2",
    ],
    mapLink: "https://maps.google.com",
  },
]

const clients = [
  { name: "ICICI Bank", project: "Corporate Plaza", logo: "/placeholder.svg?height=80&width=120&text=ICICI" },
  { name: "Kotak Bank", project: "Business Park", logo: "/placeholder.svg?height=80&width=120&text=Kotak" },
  { name: "Nalli Sarees", project: "Retail Complex", logo: "/placeholder.svg?height=80&width=120&text=Nalli" },
  { name: "TCS", project: "Tech Center", logo: "/placeholder.svg?height=80&width=120&text=TCS" },
  { name: "Infosys", project: "IT Park", logo: "/placeholder.svg?height=80&width=120&text=Infosys" },
  { name: "Wipro", project: "Software Hub", logo: "/placeholder.svg?height=80&width=120&text=Wipro" },
]

const team = [
  {
    name: "Mr. Shailesh Bothara",
    title: "Director",
    qualification: "B.E. Civil, MBA",
    image: "/placeholder.svg?height=200&width=200&text=Shailesh+Bothara",
  },
  {
    name: "Mr. Milesh Bothara",
    title: "Director",
    qualification: "B.E. Civil, M.Tech",
    image: "/placeholder.svg?height=200&width=200&text=Nilesh+Bothara",
  },
  {
    name: "Mr. Aadarsh Bothara",
    title: "Partner",
    qualification: "MBA, B.Tech",
    image: "/placeholder.svg?height=200&width=200&text=Aadarsh+Bothara",
  },
]

const heroImages = [
  "/placeholder.svg?height=500&width=600&text=Luxury+Building+1",
  "/placeholder.svg?height=500&width=600&text=Modern+Architecture+2",
  "/placeholder.svg?height=500&width=600&text=Premium+Development+3",
  "/placeholder.svg?height=500&width=600&text=Corporate+Complex+4",
]

function AutoScrollCarousel({
  children,
  className = "",
  itemsToShow = 3,
}: {
  children: React.ReactNode[]
  className?: string
  itemsToShow?: number
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, children.length - itemsToShow)

  useEffect(() => {
    if (maxIndex > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (maxIndex + 1))
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [maxIndex])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsToShow}%` }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const router = useRouter()

  return (
    <Card
      className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
      onClick={() => router.push(`/building/${project.id}`)}
    >
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={project.images[currentImageIndex] || "/placeholder.svg"}
            alt={project.name}
            fill
            className="object-cover"
          />
          {project.upcoming && (
            <div className="absolute top-3 right-3 bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Upcoming
            </div>
          )}
          <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-medium">
            {project.type}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
            }}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-900 mb-2 font-serif">{project.name}</h3>
          <p className="text-yellow-600 text-sm mb-3 flex items-center font-medium">
            <MapPin className="w-4 h-4 mr-1" />
            {project.location}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function LeasingCard({ property }: { property: (typeof leasingProperties)[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const router = useRouter()

  return (
    <Card
      className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
      onClick={() => router.push(`/building/${property.id}`)}
    >
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={property.images[currentImageIndex] || "/placeholder.svg"}
            alt={property.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-medium">
            {property.type}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
            }}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-900 mb-2 font-serif">{property.name}</h3>
          <p
            className="text-yellow-600 text-sm mb-3 flex items-center font-medium cursor-pointer hover:text-yellow-700"
            onClick={(e) => {
              e.stopPropagation()
              window.open(property.mapLink, "_blank")
            }}
          >
            <MapPin className="w-4 h-4 mr-1" />
            {property.location}
          </p>
          <div className="space-y-2 text-sm text-gray-600 mb-3">
            <p>
              <span className="font-semibold text-gray-800">Area:</span> {property.area}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Office Sizes:</span> {property.officeSizes}
            </p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{property.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function BotharaDevelopers() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">BD</span>
              </div>
              <div className="text-xl font-bold text-gray-900 font-serif">BOTHARA DEVELOPERS</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Home", "About Us", "Our Projects", "Leasing", "Our Clients", "Team", "Contact Us"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                    className="text-gray-700 hover:text-yellow-600 px-4 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight font-serif">
                BOTHARA
                <span className="block text-yellow-600">DEVELOPERS</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Building a Legacy of Trust and Quality for 25 Years
              </p>
              <div className="flex space-x-6">
                <Button
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg font-medium"
                  onClick={() => scrollToSection("our-projects")}
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-medium bg-transparent"
                  onClick={() => scrollToSection("contact-us")}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={heroImages[currentHeroImage] || "/placeholder.svg"}
                alt="Bothara Developers Projects"
                fill
                className="object-cover transition-opacity duration-1000"
              />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {heroImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentHeroImage ? "bg-white scale-125" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-12 font-serif">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            With a legacy spanning over 25 years, Bothara Developers has established itself as a leading name in real
            estate construction and leasing in Pune. We specialize in both residential and commercial projects, building
            on a foundation of trust and quality. Our journey began with the pioneering of the first auto hub deal in
            Chakan, a testament to our vision and commitment to excellence. We have since become synonymous with
            reliability and quality in the real estate sector.
          </p>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="our-projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-16 font-serif">Our Projects</h2>
          <AutoScrollCarousel itemsToShow={3}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AutoScrollCarousel>
        </div>
      </section>

      {/* Leasing Section */}
      <section id="leasing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-16 font-serif">Leasing</h2>
          <AutoScrollCarousel itemsToShow={3}>
            {leasingProperties.map((property) => (
              <LeasingCard key={property.id} property={property} />
            ))}
          </AutoScrollCarousel>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id="our-clients" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-16 font-serif">Our Clients</h2>
          <AutoScrollCarousel itemsToShow={4}>
            {clients.map((client, index) => (
              <div key={index} className="flex justify-center">
                <Card className="bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 text-center w-full max-w-xs">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-gray-800 font-serif text-lg">{client.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{client.project}</p>
                </Card>
              </div>
            ))}
          </AutoScrollCarousel>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-16 font-serif">Our Team</h2>
          <AutoScrollCarousel itemsToShow={3}>
            {team.map((member, index) => (
              <div key={index} className="flex justify-center">
                <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow p-8 text-center w-full max-w-sm">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2 font-serif">{member.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-3">{member.title}</p>
                  <p className="text-sm text-gray-600">{member.qualification}</p>
                </Card>
              </div>
            ))}
          </AutoScrollCarousel>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-16 font-serif">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-white border-gray-200 shadow-lg p-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 font-serif">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-yellow-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone Numbers</p>
                    <p className="text-gray-600">+91 982227161</p>
                    <p className="text-gray-600">+91 9405896747</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-yellow-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">tam@bothara.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Office Address</p>
                    <p className="text-gray-600">Pune, Maharashtra</p>
                    <Link href="#" className="text-yellow-600 hover:underline text-sm">
                      View on Map
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="bg-white border-gray-200 shadow-lg p-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 font-serif">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">BD</span>
            </div>
            <div className="text-2xl font-bold text-yellow-500 font-serif">BOTHARA DEVELOPERS</div>
          </div>
          <p className="text-gray-400 mb-4">Building a Legacy of Trust and Quality for 25 Years</p>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Bothara Developers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
