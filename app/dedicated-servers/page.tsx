import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Server, Globe, Cpu, Clock, Check } from "lucide-react"

export default function DedicatedServers() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 px-16 md:py-24 lg:py-32 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Premium <span className="gradient-text">Dedicated Servers</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                Tempest offers high-performance dedicated servers with top-tier hardware, global network, and 24/7
                support. Perfect for businesses, gaming communities, and high-traffic websites.
              </p>
              {/* <div className="flex flex-wrap gap-4">
                <Button className="bg-[#0D96D9] hover:bg-[#0045d4] text-white">View Pricing</Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-700 text-white hover:bg-[#0f1218] hover:text-[#0D96D9]"
                >
                  Learn More
                </Button>
              </div> */}
            </div>
            <div className="hidden lg:block">
              
                <div className="feature-card p-6 rounded-lg border-[#0D96D9] border-2">
                  <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Server className="h-6 w-6 text-[#0D96D9]" />
                  </div>
                  <div className="bg-[#0D96D9] text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">
                    Germany-Franfurkt
                  </div>
                  <h3 className="text-xl font-bold mb-2">Premium</h3>
                  <p className="text-4xl font-bold mb-4">
                    250€<span className="text-sm font-normal text-gray-400">/mo</span>
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                      <span>16 threads Ryzen 9 7950x3D</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                      <span>10 GBPS port speed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                      <span>2TB Nvme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                      <span>1 ip / additionals IP - 1.5€</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                      <span>96gb ram</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                      <span>Priority Support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#0D96D9] hover:bg-[#0045d4] text-white">Choose Plan </Button>
                </div>


            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="w-full py-16 bg-[#0c0f17]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Dedicated Server Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card p-6 rounded-lg">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-[#0D96D9]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-4xl font-bold mb-4">
                $99.99<span className="text-sm font-normal text-gray-400">/mo</span>
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>Intel Core i5</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>16GB DDR4 RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>500GB NVMe SSD</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>1Gbps Network</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>DDoS Protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>24/7 Support</span>
                </li>
              </ul>
              <Button className="w-full bg-[#0D96D9] hover:bg-[#0045d4] text-white">Order Now</Button>
            </div>
            <div className="feature-card p-6 rounded-lg border-[#0D96D9] border-2">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-[#0D96D9]" />
              </div>
              <div className="bg-[#0D96D9] text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-4xl font-bold mb-4">
                $149.99<span className="text-sm font-normal text-gray-400">/mo</span>
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>Intel Core i7</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>32GB DDR4 RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>1TB NVMe SSD</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>10Gbps Network</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>Advanced DDoS Protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>Priority Support</span>
                </li>
              </ul>
              <Button className="w-full bg-[#0D96D9] hover:bg-[#0045d4] text-white">Order Now</Button>
            </div>
            <div className="feature-card p-6 rounded-lg">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-[#0D96D9]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-4xl font-bold mb-4">
                $249.99<span className="text-sm font-normal text-gray-400">/mo</span>
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>Intel Core i9</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>64GB DDR4 RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>2TB NVMe SSD</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>100Gbps Network</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>Enterprise DDoS Protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>24/7 Premium Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <Button className="w-full bg-[#0D96D9] hover:bg-[#0045d4] text-white">Order Now</Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="w-full py-16 px-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Dedicated Server Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card p-6 rounded-lg">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-[#0D96D9]" />
              </div>
              <h3 className="text-xl font-bold mb-3">High-Performance Hardware</h3>
              <p className="text-gray-400">
                Our dedicated servers run on the latest Intel and AMD processors with NVMe SSDs for lightning-fast
                performance.
              </p>
            </div>
            <div className="feature-card p-6 rounded-lg">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[#0D96D9]" />
              </div>
              <h3 className="text-xl font-bold mb-3">DDoS Protection</h3>
              <p className="text-gray-400">
                Our advanced DDoS protection ensures your server stays online even during attacks.
              </p>
            </div>
            <div className="feature-card p-6 rounded-lg">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-[#0D96D9]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Network</h3>
              <p className="text-gray-400">
                Choose from multiple locations worldwide to ensure the lowest latency for your users.
              </p>
            </div>
            <div className="feature-card p-6 rounded-lg">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-[#0D96D9]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Setup</h3>
              <p className="text-gray-400">
                Get your dedicated server up and running in minutes with our instant setup process.
              </p>
            </div>
            <div className="feature-card p-6 rounded-lg">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-[#0D96D9]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Full Root Access</h3>
              <p className="text-gray-400">Get complete control over your server with full root access.</p>
            </div>
            <div className="feature-card p-6 rounded-lg">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[#0D96D9]" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-400">
                Our expert support team is available 24/7 to help you with any issues or questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-16 cta-sec">
        <div className="container mx-auto px-4 ">
          <div className="bg-[#0f1218] p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to experience unmatched performance?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Tempest for their hosting needs. Our cutting-edge
              infrastructure and 24/7 support ensure your projects run smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#0D96D9] hover:bg-[#0045d4] text-white">Get Started</Button>
              <Button
                variant="outline"
                className="bg-transparent border-gray-700 text-white hover:bg-[#0f1218] hover:text-[#0D96D9]"
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
