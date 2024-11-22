import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function Pricing() {
  const tiers = [
    {
      name: "DIY Kit",
      price: "Free",
      description: "Download the source code and 3D printing blueprints",
      features: ["Open-source code", "3D printing files", "Assembly instructions"],
      buttonText: "Coming Soon!",
    },
    {
      name: "Pre-built Kit",
      price: "€99",
      description: "Get a fully assembled MIDI chord progression generator",
      features: ["Ready to use", "Plug and play", "1-year warranty"],
      buttonText: "Coming Soon!",
    },
    {
      name: "Pre-built Kit + Donation",
      price: "€129",
      description: "Get the kit and support future development",
      features: ["Ready to use", "Plug and play", "1-year warranty"],
      buttonText: "Coming Soon!",
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Choose Your Kit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-gray-100">{tier.name}</CardTitle>
                <CardDescription className="text-center text-3xl font-bold text-purple-400">
                  {tier.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center mb-4 text-gray-200">{tier.description}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-200">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

