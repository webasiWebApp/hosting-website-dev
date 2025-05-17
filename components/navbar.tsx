"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full border-b border-gray-800 bg-[#0a0d14]">
      <div className="container mx-auto px-16 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Tempest Logo" width={140} height={40} className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-white hover:text-[#0D96D9]">
              HOME
            </Link>
            <Link href="/dedicated-servers" className="px-3 py-2 text-sm font-medium text-white hover:text-[#0D96D9]">
              DEDICATED SERVERS
            </Link>
           
            <Link
              href="/virtual-dedicated-servers"
              className="px-3 py-2 text-sm font-medium text-white hover:text-[#0D96D9]"
            >
              VPS SERVERS
            </Link>
            <Link href="/game-servers" className="px-3 py-2 text-sm font-medium text-white hover:text-[#0D96D9]">
              GAME SERVERS
            </Link>
            <div className="relative group px-3 py-2">
              <button className="flex items-center text-sm font-medium text-white hover:text-[#0D96D9]">COMPANY</button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#0f1218] ring-1 ring-black ring-opacity-5 hidden group-hover:block z-50">
                <div className="py-1">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#161b26] hover:text-[#0D96D9]"
                  >
                    About
                  </Link>
                  <Link
                    href="/terms"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#161b26] hover:text-[#0D96D9]"
                  >
                    Terms
                  </Link>
                  <Link
                    href="/privacy"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#161b26] hover:text-[#0D96D9]"
                  >
                    Privacy
                  </Link>
                </div>
              </div>
            </div>
           
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="outline"
              className="bg-transparent border-gray-700 text-white hover:bg-[#0f1218] hover:text-[#0D96D9]"
            >
              Get Started
            </Button>
            <Button className="bg-[#0D96D9] hover:bg-[#0045d4] text-white">Client Login</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="px-3 py-2 text-sm font-medium text-white hover:text-[#0D96D9]">
                HOME
              </Link>
              <Link href="/dedicated-servers" className="px-3 py-2 text-sm font-medium text-white hover:text-[#0D96D9]">
                DEDICATED SERVERS
              </Link>
             
              <Link
                href="/virtual-dedicated-servers"
                className="px-3 py-2 text-sm font-medium text-white hover:text-[#0D96D9]"
              >
                VPS SERVERS
              </Link>
              <Link href="/game-servers" className="px-3 py-2 text-sm font-medium text-white hover:text-[#0D96D9]">
                GAME SERVERS
              </Link>
              <Link href="/about" className="px-3 py-2 text-sm font-medium text-white hover:text-[#0D96D9]">
                ABOUT
              </Link>
              <Link href="/terms" className="px-3 py-2 text-sm font-medium text-white hover:text-[#0D96D9]">
                TERMS
              </Link>
              <Link href="/privacy" className="px-3 py-2 text-sm font-medium text-white hover:text-[#0D96D9]">
                PRIVACY
              </Link>
              
              <div className="pt-2 flex flex-col space-y-2">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-gray-700 text-white hover:bg-[#0f1218] hover:text-[#0D96D9]"
                >
                  Get Started
                </Button>
                <Button className="w-full bg-[#0D96D9] hover:bg-[#0045d4] text-white">Client Login</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
