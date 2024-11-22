import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Music, Zap } from 'lucide-react'

export function Features() {
  const features = [
    {
      title: "Open Source",
      description: "Access and modify the source code to fit your needs.",
      icon: <Code className="h-6 w-6 text-purple-400" />,
    },
    {
      title: "3D Printable",
      description: "Print your own enclosure with our 3D blueprints.",
      icon: <Zap className="h-6 w-6 text-pink-400" />,
    },
    {
      title: "Endless Possibilities",
      description: "Generate unique chord progressions for your music.",
      icon: <Music className="h-6 w-6 text-blue-400" />,
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-gray-100">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-200">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

