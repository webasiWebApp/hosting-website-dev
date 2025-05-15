import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Check, Zap, Cloud } from "lucide-react"

export default function GameServers() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Premium <span className="gradient-text">Game Server</span> Hosting
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                Tempest offers the best game server hosting with top performance, reliability, and cost-effectiveness.
                Custom tools and high-performance hosting to ensure the best gaming experience for your players.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#004FEF] hover:bg-[#0045d4] text-white">View Pricing</Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-700 text-white hover:bg-[#0f1218] hover:text-[#004FEF]"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/game-server.png"
                alt="Game Server"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Game Types Section */}
      <section className="w-full py-16 bg-[#0c0f17]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Game Servers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/game-servers/fivem"
              className="feature-card p-6 rounded-lg flex flex-col items-center text-center"
            >
              <Image src="/fivem-logo.png" alt="FiveM Logo" width={80} height={80} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">FiveM</h3>
              <p className="text-gray-400 mb-4">Premium FiveM server hosting with custom resources and mods support.</p>
              <Button className="mt-auto bg-[#004FEF] hover:bg-[#0045d4] text-white">View Plans</Button>
            </Link>
            <Link
              href="/game-servers/rust"
              className="feature-card p-6 rounded-lg flex flex-col items-center text-center"
            >
              <Image src="/rust-logo.png" alt="Rust Logo" width={80} height={80} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Rust</h3>
              <p className="text-gray-400 mb-4">
                High-performance Rust servers with DDoS protection and plugin support.
              </p>
              <Button className="mt-auto bg-[#004FEF] hover:bg-[#0045d4] text-white">View Plans</Button>
            </Link>
            <Link
              href="/game-servers/minecraft"
              className="feature-card p-6 rounded-lg flex flex-col items-center text-center"
            >
              <Image src="/minecraft-logo.png" alt="Minecraft Logo" width={80} height={80} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Minecraft</h3>
              <p className="text-gray-400 mb-4">
                Reliable Minecraft server hosting with modpack support and instant setup.
              </p>
              <Button className="mt-auto bg-[#004FEF] hover:bg-[#0045d4] text-white">View Plans</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Server Locations</h2>
          <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our global network of server locations to ensure the lowest latency for your players.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div className="feature-card p-4 rounded-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="inline-block w-6 h-4 bg-red-500 rounded"></span>
                <span className="font-medium">PHOENIX, US</span>
              </div>
              <p className="text-sm text-gray-400">Ping: 15ms</p>
            </div>
            <div className="feature-card p-4 rounded-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="inline-block w-6 h-4 bg-red-500 rounded"></span>
                <span className="font-medium">CHICAGO, US</span>
              </div>
              <p className="text-sm text-gray-400">Ping: 22ms</p>
            </div>
            <div className="feature-card p-4 rounded-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="inline-block w-6 h-4 bg-red-500 rounded"></span>
                <span className="font-medium">DALLAS, US</span>
              </div>
              <p className="text-sm text-gray-400">Ping: 18ms</p>
            </div>
            <div className="feature-card p-4 rounded-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="inline-block w-6 h-4 bg-red-500 rounded"></span>
                <span className="font-medium">NEW YORK, US</span>
              </div>
              <p className="text-sm text-gray-400">Ping: 25ms</p>
            </div>
            <div className="feature-card p-4 rounded-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="inline-block w-6 h-4 bg-blue-500 rounded"></span>
                <span className="font-medium">LONDON, UK</span>
              </div>
              <p className="text-sm text-gray-400">Ping: 30ms</p>
            </div>
            <div className="feature-card p-4 rounded-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="inline-block w-6 h-4 bg-yellow-500 rounded"></span>
                <span className="font-medium">SINGAPORE, SG</span>
              </div>
              <p className="text-sm text-gray-400">Ping: 45ms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 bg-[#0c0f17]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Why Host Your Server With Us?</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            We provide the best game server hosting experience with top-tier hardware and support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg feature-card">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-[#004FEF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">High performance</h3>
              <p className="text-gray-400">
                With our in-house solutions being continually developed we are able to push latest-gen hardware to its
                max.
              </p>
              <Link href="#" className="text-[#004FEF] text-sm font-medium mt-4 inline-block hover:underline">
                Pushing Intel® to the max
              </Link>
            </div>
            <div className="p-6 rounded-lg feature-card">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Cloud className="h-6 w-6 text-[#004FEF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fully redundant</h3>
              <p className="text-gray-400">
                Our peering and transit is cherry-picked to ensure reliability even when other providers can't keep up!
              </p>
              <Link href="#" className="text-[#004FEF] text-sm font-medium mt-4 inline-block hover:underline">
                Blocking a 1.6Tb/s attack
              </Link>
            </div>
            <div className="p-6 rounded-lg feature-card">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-[#004FEF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Infrastructure</h3>
              <p className="text-gray-400">
                As a provider we value your business and your security, therefore our datacenter environments have been
                tightly secured to protect your business interests.
              </p>
              <Link href="#" className="text-[#004FEF] text-sm font-medium mt-4 inline-block hover:underline">
                Keeping your data secure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Game Info Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Game Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">About Game Servers</h2>
              <p className="text-gray-300 mb-6">
                Our game servers are designed to provide the best gaming experience for you and your players. With
                high-performance hardware, low latency, and 24/7 support, you can focus on building your community while
                we handle the technical aspects.
              </p>
              <Button className="bg-[#004FEF] hover:bg-[#0045d4] text-white">View Pricing</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-[#0c0f17]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">The standard</h2>
          <h3 className="text-3xl font-bold mb-8 text-center">INCLUDED WITH ALL GAME SERVERS</h3>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            At Tempest, we are dedicated to offering top-notch game server hosting solutions that facilitate the growth
            of your game server. Our feature-rich plans are specifically designed to cater to the needs of your gaming
            community. With Tempest as your hosting partner, you can take your game server to new heights of success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#004FEF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Instant Server Setup (no pre-orders)</h4>
                <p className="text-sm text-gray-400">Get your server up and running in minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#004FEF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">High-Performance Hardware</h4>
                <p className="text-sm text-gray-400">Latest generation CPUs and NVMe storage</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#004FEF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Powered by NVMe SSDs</h4>
                <p className="text-sm text-gray-400">Ultra-fast storage for quick loading times</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#004FEF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Easy Configuration</h4>
                <p className="text-sm text-gray-400">User-friendly control panel</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#004FEF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Latest generation Intel + Ryzen</h4>
                <p className="text-sm text-gray-400">Top-tier processors for optimal performance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#004FEF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Included DDoS Protection</h4>
                <p className="text-sm text-gray-400">Keep your server safe from attacks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#004FEF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">24/7/365 Customer Support</h4>
                <p className="text-sm text-gray-400">Always available to help you</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#004FEF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Automatic Wipe Functionality</h4>
                <p className="text-sm text-gray-400">Schedule server wipes with ease</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#004FEF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">100Gbps Network Port</h4>
                <p className="text-sm text-gray-400">High-speed network connectivity</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#004FEF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Advanced Statistics</h4>
                <p className="text-sm text-gray-400">Monitor your server performance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#004FEF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Complete Control of Your Server</h4>
                <p className="text-sm text-gray-400">Full access to all server settings</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#004FEF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Full SFTP Access</h4>
                <p className="text-sm text-gray-400">Easily upload and manage files</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#0f1218] p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to start your gaming server?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Tempest for their game server hosting needs. Our
              cutting-edge infrastructure and 24/7 support ensure your gaming community thrives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#004FEF] hover:bg-[#0045d4] text-white">Get Started</Button>
              <Button
                variant="outline"
                className="bg-transparent border-gray-700 text-white hover:bg-[#0f1218] hover:text-[#004FEF]"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
