import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Misc MIDI
        </Link>
        <div className="space-x-4">
          <Link href="#features" className="hover:text-purple-300 transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-purple-300 transition-colors">Pricing</Link>
          <Link href="#about" className="hover:text-purple-300 transition-colors">About</Link>
          <Link href="#contact" className="hover:text-purple-300 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

