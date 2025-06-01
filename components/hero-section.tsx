import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-800 text-white pt-16"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Beastmode
                <span className="block text-orange-300">WAR-HOUSE GYM</span>
              </h1>
              <p className="text-xl lg:text-2xl text-red-100 mt-6">
                Transform your body and unleash your potential at Demopolis' premier fitness destination. 
                Where strength meets determination.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-900"
              >
                Book a Tour
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-orange-300" />
                <div>
                  <p className="font-semibold">Flexible Hours</p>
                  <p className="text-sm text-red-200">Fit your schedule</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-orange-300" />
                <div>
                  <p className="font-semibold">Demopolis, AL</p>
                  <p className="text-sm text-red-200">Your local gym</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-orange-300" />
                <div>
                  <p className="font-semibold">(334) 327-7720</p>
                  <p className="text-sm text-red-200">Call us today</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-400 to-red-600 p-1">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Beastmode WAR-HOUSE GYM Facility"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
              <p className="text-2xl font-bold text-red-600">Fitness</p>
              <p className="text-sm font-medium">Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
