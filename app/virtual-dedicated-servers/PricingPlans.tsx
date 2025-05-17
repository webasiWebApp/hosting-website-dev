import { Server, Check } from "lucide-react";
import { Button } from "@/components/ui/button"

// Define the interface for a Plan
interface Plan {
  name: string;
  price: string;
  ram: string;
  vCores: string;
  storage: string;
  bandwidth: string;
  os: string;
  ipv4: string;
}

// Component for rendering each individual plan
const PricingCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  return (
    <div className="feature-card p-6 rounded-lg">
      <div className="bg-[#0f1218] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <Server className="h-6 w-6 text-[#0D96D9]" />
      </div>
      <h3 className="bg-[#0D96D9] text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">{plan.name}</h3>
      <p className="text-4xl font-bold mb-4">{plan.price}<span className="text-sm font-normal text-gray-400">/mo</span></p>
      <ul className="space-y-2 mb-6">
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
          <span>{plan.vCores}</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
          <span>{plan.ram}</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
          <span>{plan.storage}</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
          <span>{plan.bandwidth}</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
          <span>{plan.os}</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#0D96D9] mt-0.5 flex-shrink-0" />
          <span>{plan.ipv4}</span>
        </li>
      </ul>
      <Button className="w-full bg-[#0D96D9] hover:bg-[#0045d4] text-white">
        Choose Plan
      </Button>
    </div>
  );
};

// Parent component that receives the list of plans as props
interface PricingPlansProps {
  plans: Plan[];
}

const PricingPlans: React.FC<PricingPlansProps> = ({ plans }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <PricingCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
};

export default PricingPlans;
