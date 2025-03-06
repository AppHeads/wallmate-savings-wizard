
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Package, Truck } from "lucide-react";

interface CurrentCostsProps {
  currentPricePerSqFt: string;
  setCurrentPricePerSqFt: (value: string) => void;
  boxSuppliesCost: string;
  setBoxSuppliesCost: (value: string) => void;
  shippingCost: string;
  setShippingCost: (value: string) => void;
}

const CurrentCosts: React.FC<CurrentCostsProps> = ({
  currentPricePerSqFt,
  setCurrentPricePerSqFt,
  boxSuppliesCost,
  setBoxSuppliesCost,
  shippingCost,
  setShippingCost,
}) => {
  return (
    <div className="w-full">
      <Label className="block text-lg font-semibold text-gray-900 mb-2">
        Your Current Costs <span className="text-[#FF6D3F]">*</span>
      </Label>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-gray-700">Price per Square Foot</Label>
          <div className="flex items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <Input
                type="number"
                step="0.01"
                placeholder="0.00"
                value={currentPricePerSqFt}
                onChange={(e) => setCurrentPricePerSqFt(e.target.value)}
                className="pl-7 transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-gray-700">
            Box & Supplies Cost (per shipment)
          </Label>
          <div className="flex items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <Input
                type="number"
                step="0.01"
                placeholder="0.00"
                value={boxSuppliesCost}
                onChange={(e) => setBoxSuppliesCost(e.target.value)}
                className="pl-7 transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-gray-700">
            Shipping Cost (per shipment)
          </Label>
          <div className="flex items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <Input
                type="number"
                step="0.01"
                placeholder="0.00"
                value={shippingCost}
                onChange={(e) => setShippingCost(e.target.value)}
                className="pl-7 transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCosts;
