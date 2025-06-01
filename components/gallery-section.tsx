"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const [activeTab, setActiveTab] = useState("equipment")

  const equipmentImages = [
    { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "Strength Training Area" },
    { src: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "Free Weights Section" },
    { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "Cardio Zone" },
  ]

  const classesImages = [
    { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "CrossFit Class" },
    { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "HIIT Training" },
    { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "Group Training" },
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art gym facilities designed to help you achieve your fitness goals.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <Button
              variant={activeTab === "equipment" ? "default" : "ghost"}
              onClick={() => setActiveTab("equipment")}
              className={activeTab === "equipment" ? "bg-red-600 hover:bg-red-700" : ""}
            >
              Equipment
            </Button>
            <Button
              variant={activeTab === "classes" ? "default" : "ghost"}
              onClick={() => setActiveTab("classes")}
              className={activeTab === "classes" ? "bg-red-600 hover:bg-red-700" : ""}
            >
              Classes
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === "equipment" ? equipmentImages : classesImages).map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
