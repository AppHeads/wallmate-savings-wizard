
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Package, Truck } from "lucide-react";

interface WallmatesCostsProps {
  wallmatesPricePerSqFt: string;
  setWallmatesPricePerSqFt: (value: string) => void;
  wallmatesBoxCost: string;
  setWallmatesBoxCost: (value: string) => void;
  wallmatesShipping: string;
  setWallmatesShipping: (value: string) => void;
}

const WallmatesCosts: React.FC<WallmatesCostsProps> = ({
  wallmatesPricePerSqFt,
  setWallmatesPricePerSqFt,
  wallmatesBoxCost,
  setWallmatesBoxCost,
  wallmatesShipping,
  setWallmatesShipping,
}) => {
  return (
    <div className="w-full">
      <Label className="block text-lg font-semibold text-[#FF6D3F] mb-2">
        Estimated Wallmates Costs
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
                value={wallmatesPricePerSqFt}
                onChange={(e) => setWallmatesPricePerSqFt(e.target.value)}
                className="pl-7 transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F] border-[#FF6D3F]/20"
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
                value={wallmatesBoxCost}
                onChange={(e) => setWallmatesBoxCost(e.target.value)}
                className="pl-7 transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F] border-[#FF6D3F]/20"
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
                value={wallmatesShipping}
                onChange={(e) => setWallmatesShipping(e.target.value)}
                className="pl-7 transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F] border-[#FF6D3F]/20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallmatesCosts;
