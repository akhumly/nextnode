import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-800 py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-300 mb-4">
          © {new Date().getFullYear()} Misc MIDI. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="#" className="text-gray-300 hover:text-purple-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-gray-300 hover:text-purple-300 transition-colors">
            Terms of Service
          </Link>
          <Link href="https://github.com/your-repo" className="text-gray-300 hover:text-purple-300 transition-colors">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  )
}

