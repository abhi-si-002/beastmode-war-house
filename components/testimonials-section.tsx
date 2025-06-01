import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mike Johnson",
      service: "Strength Training",
      rating: 5,
      text: "The equipment and atmosphere at Beastmode WAR-HOUSE GYM are top-notch. I've seen incredible gains in my strength training journey here.",
      image: "",
    },
    {
      name: "Lisa Chen",
      service: "CrossFit Member",
      rating: 5,
      text: "The community here is amazing! The trainers push you to your limits while keeping it safe. I've never been in better shape.",
      image: "",
    },
    {
      name: "David Thompson",
      service: "Competition Prep",
      rating: 5,
      text: "The personal trainers here are incredibly knowledgeable. They helped me prepare for my first bodybuilding competition and I couldn't be happier with the results.",
      image: "",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community of dedicated fitness enthusiasts and transform your body and mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white mr-4 flex items-center justify-center font-bold text-sm uppercase">
                      {testimonial.name?.slice(0, 2) || "NA"}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Body?</h3>
            <p className="text-lg mb-6">
              Join Beastmode WAR-HOUSE GYM today and start your journey to greatness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 rounded-lg font-medium transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                View Membership Options
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
