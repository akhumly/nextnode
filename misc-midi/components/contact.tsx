import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200">Name</label>
              <Input id="name" type="text" placeholder="Your name" className="w-full bg-gray-800 text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">Email</label>
              <Input id="email" type="email" placeholder="your@email.com" className="w-full bg-gray-800 text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200">Message</label>
              <Textarea id="message" placeholder="Your message" className="w-full bg-gray-800 text-white" />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

