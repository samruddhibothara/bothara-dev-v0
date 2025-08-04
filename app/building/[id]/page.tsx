"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Users, Building, Phone, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample building data - in a real app, this would come from an API
const buildingData: Record<string, any> = {
  "1": {
    id: "1",
    name: "Bothara Business Park",
    type: "Commercial",
    location: "Chakan, Pune",
    description: "Premium commercial spaces with modern amenities and state-of-the-art infrastructure",
    completionDate: "December 2023",
    totalArea: "1,50,000 sq ft",
    availableArea: "25,000 sq ft",
    images: [
      "/placeholder.svg?height=400&width=600&text=Business+Park+Exterior",
      "/placeholder.svg?height=400&width=600&text=Business+Park+Lobby",
      "/placeholder.svg?height=400&width=600&text=Business+Park+Office",
      "/placeholder.svg?height=400&width=600&text=Business+Park+Amenities",
    ],
    amenities: [
      "24/7 Security",
      "Power Backup",
      "Parking Facility",
      "Conference Rooms",
      "Cafeteria",
      "High-Speed Internet",
    ],
    currentOccupants: [
      { name: "ICICI Bank", area: "5,000 sq ft", floor: "Ground Floor" },
      { name: "Tech Solutions Ltd", area: "3,000 sq ft", floor: "1st Floor" },
      { name: "Marketing Hub", area: "2,500 sq ft", floor: "2nd Floor" },
    ],
    specifications: {
      floors: "G+4",
      parking: "200 Cars",
      lifts: "3 High-Speed Elevators",
      powerBackup: "100% DG Backup",
    },
    mapLink: "https://maps.google.com/chakan-business-park",
  },
  "2": {
    id: "2",
    name: "Golden Heights Residency",
    type: "Residential",
    location: "Baner, Pune",
    description: "Luxury residential apartments with world-class facilities and modern living spaces",
    completionDate: "March 2024",
    totalArea: "2,00,000 sq ft",
    availableArea: "50,000 sq ft",
    images: [
      "/placeholder.svg?height=400&width=600&text=Golden+Heights+Exterior",
      "/placeholder.svg?height=400&width=600&text=Golden+Heights+Lobby",
      "/placeholder.svg?height=400&width=600&text=Golden+Heights+Apartment",
      "/placeholder.svg?height=400&width=600&text=Golden+Heights+Amenities",
    ],
    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Children's Play Area",
      "Landscaped Gardens",
      "Club House",
      "24/7 Security",
    ],
    currentOccupants: [{ name: "Residential Units", area: "1,50,000 sq ft", floor: "All Floors" }],
    specifications: {
      floors: "G+15",
      units: "120 Apartments",
      parking: "150 Cars",
      lifts: "4 High-Speed Elevators",
    },
    mapLink: "https://maps.google.com/baner-golden-heights",
  },
}

export default function BuildingPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const building = buildingData[params.id]

  if (!building) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Building Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">BD</span>
              </div>
              <span className="font-bold text-gray-900">BOTHARA DEVELOPERS</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant={building.type === "Commercial" ? "default" : "secondary"} className="text-sm">
              {building.type}
            </Badge>
            <Badge variant="outline" className="text-sm">
              {building.completionDate}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{building.name}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <MapPin className="w-5 h-5 mr-2" />
            <Link href={building.mapLink} target="_blank" className="hover:text-yellow-600 transition-colors">
              {building.location}
            </Link>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">{building.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={building.images[currentImageIndex] || "/placeholder.svg"}
                    alt={building.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {building.images.map((_: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-4">
                    {building.images.map((image: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative h-20 rounded-lg overflow-hidden border-2 ${
                          index === currentImageIndex ? "border-yellow-600" : "border-gray-200"
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${building.name} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(building.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </dt>
                      <dd className="text-lg text-gray-900 mt-1">{value}</dd>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {building.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Occupants */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Current Occupants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {building.currentOccupants.map((occupant: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">{occupant.name}</h4>
                        <p className="text-sm text-gray-600">{occupant.floor}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{occupant.area}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Area</span>
                  <span className="font-semibold">{building.totalArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Available Area</span>
                  <span className="font-semibold text-green-600">{building.availableArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completion</span>
                  <span className="font-semibold">{building.completionDate}</span>
                </div>
                <div className="pt-4 border-t">
                  <Button
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Enquire Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card id="contact-form">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Your requirements..."
                    />
                  </div>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">Send Enquiry</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-yellow-600" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold">+91 982227161</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-yellow-600" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold">tam@bothara.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <ExternalLink className="w-4 h-4 text-yellow-600" />
                  <Link
                    href={building.mapLink}
                    target="_blank"
                    className="text-yellow-600 hover:text-yellow-700 font-semibold"
                  >
                    View on Google Maps
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
