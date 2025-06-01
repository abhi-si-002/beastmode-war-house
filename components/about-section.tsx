import { Dumbbell, Trophy, Heart, Users } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      description: "State-of-the-art fitness equipment and free weights for all your training needs.",
    },
    {
      icon: Trophy,
      title: "Expert Training",
      description: "Professional trainers ready to help you achieve your fitness goals.",
    },
    {
      icon: Heart,
      title: "Health Focused",
      description: "Dedicated to your physical transformation and overall well-being.",
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Join a community of motivated individuals pushing their limits.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Beastmode WAR-HOUSE GYM</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Demopolis, AL, we are more than just a gym - we are a community of dedicated fitness enthusiasts
            committed to pushing boundaries and achieving greatness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              Beastmode WAR-HOUSE GYM was founded with a single purpose: to create a space where individuals can transform
              their bodies and minds through dedicated training and community support. We believe that everyone has the
              potential to achieve their fitness goals with the right environment and guidance.
            </p>
            <p className="text-gray-600 mb-6">
              Our facility is designed to accommodate all fitness levels, from beginners to advanced athletes. Whether you're
              looking to build muscle, lose weight, or improve your overall fitness, we have the equipment and expertise
              to help you succeed.
            </p>
            <div className="bg-red-100 p-6 rounded-lg">
              <p className="text-red-800 font-medium">
                Join us at Beastmode WAR-HOUSE GYM and become part of a community that celebrates strength, determination,
                and personal growth. Your journey to greatness starts here.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipN8Q99B5SecAJffGLyhqQQrwZczsNQ_FtH5Jtuv=s1360-w1360-h1020-rw"
              alt="Beastmode WAR-HOUSE GYM Facility"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
