import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Server, Check } from "lucide-react";

export default function VirtualDedicatedServers() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Virtual <span className="gradient-text">Dedicated Servers</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                Tempest offers high-performance virtual dedicated servers with top-tier hardware, global network, and 24/7 support. Perfect for businesses, developers, and websites.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#004FEF] hover:bg-[#0045d4] text-white">
                  View Pricing
                </Button>
                <Button variant="outline" className="bg-transparent border-gray-700 text-white hover:bg-[#0f1218] hover:text-[#004FEF]">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image 
                src="/vps-server.png" 
                alt="Virtual Dedicated Server" 
                width={600} 
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-16 bg-[#0c0f17]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Virtual Dedicated Server Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="feature-card p-6 rounded-lg">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-[#004FEF]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-4xl font-bold mb-4">$29.99<span className="text-sm font-normal text-gray-400">/mo</span></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#004FEF] mt-0.5 flex-shrink-0" />
                  <span>2 vCPU Cores</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#004FEF] mt-0.5 flex-shrink-0" />
                  <span>4GB RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#004FEF] mt-0.5 flex-shrink-0" />
                  <span>50GB NVMe SSD</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#004FEF] mt-0.5 flex-shrink-0" />
                  <span>1Gbps Network</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#004FEF] mt-0.5 flex-shrink-0" />
                  <span>DDoS Protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#004FEF] mt-0.5 flex-shrink-0" />
                  <span>24/7 Support</span>
                </li>
              </ul>
              <Button className="w-full bg-[#004FEF] hover:bg-[#0045d4] text-white">
                Order Now
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="feature-card p-6 rounded-lg border-[#004FEF] border-2">
              <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-[#004FEF]" />
              </div>
              <div className="bg-[#004FEF] text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-4xl font-bold mb-4">$49.99<span className="text-sm font-normal text-gray-400">/mo</span></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#004FEF] mt-0.5 flex-shrink-0" />
                  <span>4 vCPU Cores</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#004FEF] mt-0.5 flex-shrink-0" />
                  <span>8GB RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#004FEF] mt-0.5 flex-shrink-0" />
                  <span>100GB NVMe SSD</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#004FEF] mt-0.5 flex-shrink-0" />
                  <span>2Gbps Network</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#004FEF] mt-0.5 flex-shrink-0" />
                  <span>Advanced DDoS Protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#004FEF] mt-0.5 flex-shrink-0" />
                  <span>Priority 24/7 Support</span>
                </li>
              </ul>
              <Button className="w-full bg-[#004FEF] hover:bg-[#0045d4] text-white">
                Order Now
              </Button>
            </div>

            {/* Add other plans here if needed */}
          </div>
        </div>
      </section>
    </div>
  );
}
