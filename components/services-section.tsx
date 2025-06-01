import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Users, Clock, Trophy, Heart, Target } from "lucide-react"

export function ServicesSection() {
  const gymServices = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Comprehensive strength training programs with state-of-the-art equipment",
      price: "Included in membership",
    },
    {
      icon: Users,
      title: "Personal Training",
      description: "One-on-one training sessions with certified fitness experts",
      price: "$60/session",
    },
    {
      icon: Clock,
      title: "Group Classes",
      description: "HIIT, CrossFit, and strength training classes",
      price: "$15/class",
    },
    {
      icon: Trophy,
      title: "Competition Prep",
      description: "Specialized training for fitness competitions and events",
      price: "Custom pricing",
    },
    {
      icon: Heart,
      title: "Nutrition Planning",
      description: "Personalized nutrition plans to support your fitness goals",
      price: "$75/consultation",
    },
    {
      icon: Target,
      title: "Fitness Assessment",
      description: "Comprehensive body composition and fitness level evaluation",
      price: "$45/assessment",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From strength training to nutrition planning, we offer comprehensive services to help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gymServices.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600 mb-4">{service.price}</p>
                <Button className="w-full bg-red-600 hover:bg-red-700">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Membership Packages Available!</h3>
            <p className="text-lg mb-6">
              Choose from our flexible membership options and start your fitness journey today.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-900"
            >
              View Membership Options
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
