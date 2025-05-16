import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Server, Globe, Cpu, Cloud, Zap } from "lucide-react"
import SwiperCarousel from "@/components/SwiperCarousel/SwiperCarousel"
import CreativeBox from "@/components/ui/CreativeBox"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SwiperCarousel />
      {/* Hero Section */}
      {/* <section className="w-full py-16 md:py-24 lg:py-32 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Unrivaled Performance with Our <span className="gradient-text">Cutting-Edge Hardware</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                Custom-built servers on a world-class network. Elevate your project with the unmatched strength of
                Tempest Hosting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#004FEF] hover:bg-[#0045d4] text-white">Browse Servers</Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-700 text-white hover:bg-[#0f1218] hover:text-[#004FEF]"
                >
                  Budget Servers
                </Button>
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#0f1218] p-2 rounded-full">
                    <Shield className="h-5 w-5 text-[#004FEF]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Attacks Mitigated <span className="text-[#004FEF]">↑ 6%</span>
                    </p>
                    <p className="text-2xl font-bold">9,532</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="bg-[#0f1218] p-2 rounded-full">
                    <Server className="h-5 w-5 text-[#004FEF]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Average uptime</p>
                    <p className="text-2xl font-bold">99.97%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/server-rack.png"
                alt="Server Rack"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Server Types Section */}
      <section className="w-full py-16 bg-[#0c0f17]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 flex-wrap">
            <Link
              href="/dedicated-servers"
              className="feature-card p-6 rounded-lg w-full sm:w-auto flex items-center justify-center gap-3"
            >
              <Server className="h-5 w-5 text-[#004FEF]" />
              <span className="font-medium">Dedicated Servers</span>
            </Link>
            <Link
              href="/game-servers"
              className="feature-card p-6 rounded-lg w-full sm:w-auto flex items-center justify-center gap-3"
            >
              <Cpu className="h-5 w-5 text-[#004FEF]" />
              <span className="font-medium">Game Servers</span>
            </Link>
            <Link
              href="/virtual-dedicated-servers"
              className="feature-card p-6 rounded-lg w-full sm:w-auto flex items-center justify-center gap-3"
            >
              <Cloud className="h-5 w-5 text-[#004FEF]" />
              <span className="font-medium">Virtual Servers</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-medium mb-8">Trusted by</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-12 flex items-center">
                <Image
                  src={`/client-logo-${i}.png`}
                  alt={`Client Logo ${i}`}
                  width={120}
                  height={40}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Trusted by thousands</h2>
            <p className="text-3xl font-bold mb-12">1,800+ DEPLOYED SERVERS</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="stats-card p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#0f1218] p-2 rounded-full">
                    <Cpu className="h-5 w-5 text-[#004FEF]" />
                  </div>
                  <h3 className="font-medium">1,000+</h3>
                </div>
                <p className="text-sm text-gray-400">Dedicated servers deployed</p>
              </div>
              <div className="stats-card p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#0f1218] p-2 rounded-full">
                    <Globe className="h-5 w-5 text-[#004FEF]" />
                  </div>
                  <h3 className="font-medium">500+</h3>
                </div>
                <p className="text-sm text-gray-400">Global network connections</p>
              </div>
              <div className="stats-card p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#0f1218] p-2 rounded-full">
                    <Zap className="h-5 w-5 text-[#004FEF]" />
                  </div>
                  <h3 className="font-medium">99.9%</h3>
                </div>
                <p className="text-sm text-gray-400">Uptime guarantee</p>
              </div>
              <div className="stats-card p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#0f1218] p-2 rounded-full">
                    <Shield className="h-5 w-5 text-[#004FEF]" />
                  </div>
                  <h3 className="font-medium">24/7/365</h3>
                </div>
                <p className="text-sm text-gray-400">Technical support available</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="w-full py-16 bg-[#0c0f17] px-16">
        <div className="container mx-auto px-4">

          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <CreativeBox
              icon="zap"
              title="High performance"
              description="With our in-house solutions being continually developed we are able to push latest-gen hardware to its max."
             
            />

            <CreativeBox
              icon="cloud"
              title="Fully redundant"
              description="Our peering and transit is cherry-picked to ensure reliability even when other providers can't keep up!"
             
            />

            <CreativeBox
              icon="shield"
              title="Secure Infrastructure"
              description="As a provider we value your business and your security, therefore our datacenter environments have been tightly secured to protect your business interests."
              
            />

            {/* <div className="p-6 rounded-lg feature-card">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
            </div> */}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-lg font-medium text-[#004FEF] mb-2">Why choose xyz Hosting</h2>
            <h3 className="text-3xl font-bold">YOUR TOP CHOICE FOR PERFORMANCE-DRIVEN HOSTING</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 mb-6">
                Tempest stands at the forefront of dedicated server hosting, setting benchmarks in performance,
                adaptability, and resilience. Our state-of-the-art infrastructure, bolstered by cutting-edge technology,
                is meticulously designed to handle the most demanding workloads. When uptime and reliability are
                non-negotiable, Tempest emerges as the go-to choice for mission-critical applications and high-traffic
                websites.
              </p>
              <Link href="#" className="inline-flex items-center text-[#004FEF] font-medium hover:underline">
                View More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div>
              <Image
                src="/server-illustration.png"
                alt="Server Illustration"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* High Performance Computing Section */}
      <section className="w-full py-16 bg-[#0c0f17]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/server-rack-detail.png"
                alt="Server Rack Detail"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-[#004FEF] mb-2">High Performance Computing</h2>
              <h3 className="text-3xl font-bold mb-6">19-13900K SERVERS</h3>
              <p className="text-gray-300 mb-6">
                With up to 19,000+ servers, Tempest is designed for demanding tasks. These machines boast cutting-edge
                architecture, allowing for rapid processing, the seamless handling of complex workloads, and
                unparalleled performance. Our commitment to excellence is evident in every aspect of our Tempest
                hosting.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-[#0f1218] p-2 rounded-full">
                    <Cpu className="h-5 w-5 text-[#004FEF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Intel® Core™ i9-13900K</p>
                    <p className="font-medium">8+16 Cores / 32 Threads</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#0f1218] p-2 rounded-full">
                    <Zap className="h-5 w-5 text-[#004FEF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">DDR5 Memory</p>
                    <p className="font-medium">32 GB RAM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#0f1218] p-2 rounded-full">
                    <Server className="h-5 w-5 text-[#004FEF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">NVMe Storage</p>
                    <p className="font-medium">1TB NVMe</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#0f1218] p-2 rounded-full">
                    <Globe className="h-5 w-5 text-[#004FEF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Network</p>
                    <p className="font-medium">1Gbps Unmetered</p>
                  </div>
                </div>
              </div>
              <Button className="bg-[#004FEF] hover:bg-[#0045d4] text-white">Browse Servers</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-lg font-medium text-[#004FEF] mb-2">PTPP Anycast Network</h2>
            <h3 className="text-3xl font-bold">UNLEASHING THE POWER OF UBIQUITOUS INFRASTRUCTURE</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-lg font-medium text-[#004FEF] mb-2">PTPP Anycast network</h2>
              <h3 className="text-3xl font-bold mb-6">20+ GLOBAL NETWORK LOCATIONS</h3>
              <p className="text-gray-300 mb-6">
                Based on the core principle of our Anycast Tunnel Protocol (PTPP) network, which acts as a comprehensive
                global presence, we've established a network that's second to none. Leveraging our extensive PTPP
                protection, you'll find your servers in a continuously growing network of datacenters globally.
              </p>
              <Link href="#" className="text-[#004FEF] font-medium hover:underline">
                Check out our network status to measure your ping!
              </Link>
            </div>
            <div>
              <Image src="/global-network.png" alt="Global Network" width={600} height={400} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* DDoS Protection Section */}
      <section className="w-full py-16 bg-[#0c0f17]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="/ddos-protection.png" alt="DDoS Protection" width={500} height={400} className="rounded-lg" />
            </div>
            <div>
              <h2 className="text-lg font-medium text-[#004FEF] mb-2">Industry-Leading DDoS Protection</h2>
              <h3 className="text-3xl font-bold mb-6">GLOBAL 17TB/S DDOS CAPACITY</h3>
              <p className="text-gray-300 mb-6">
                We run the backbone of our online-class PTPP network, which stands as a beacon of innovation, boasting
                global Anycast support and unparalleled DDoS mitigation. With a capacity to handle up to 17TB/s of
                volumetric traffic, our infrastructure is designed to ensure your services are always online.
              </p>
              <Button className="bg-[#004FEF] hover:bg-[#0045d4] text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#0f1218] p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to experience unmatched performance?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Tempest for their hosting needs. Our cutting-edge
              infrastructure and 24/7 support ensure your projects run smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#004FEF] hover:bg-[#0045d4] text-white">Get Started</Button>
              <Button
                variant="outline"
                className="bg-transparent border-gray-700 text-white hover:bg-[#0f1218] hover:text-[#004FEF]"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
