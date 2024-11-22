import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Misc MIDI Chord Progression Generator
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          Unleash your creativity with our open-source MIDI chord progression generator.
          Build your own or get a pre-assembled kit!
        </p>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg">
          Learn More
        </Button>
      </div>
    </section>
  )
}

