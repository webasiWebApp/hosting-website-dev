import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#0a0d14] border-t border-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dedicated-servers" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Dedicated Servers
                </Link>
              </li>
              <li>
                <Link href="/budget-dedicated-servers" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Budget Dedicated Servers
                </Link>
              </li>
              <li>
                <Link href="/virtual-dedicated-servers" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Virtual Dedicated Servers
                </Link>
              </li>
              <li>
                <Link href="/game-servers" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Game Servers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Partner Program
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Ticket Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Service Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#004FEF] text-sm">
                  Service Level Agreement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; Copyright 2020 - {new Date().getFullYear()} © Tempest Hosting, LLC. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#004FEF]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#004FEF]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#004FEF]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#004FEF]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
