
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
    <div className="w-full md:w-1/2 space-y-2">
      <Label className="flex items-center gap-2 text-lg font-medium text-gray-900">
        <DollarSign className="w-5 h-5" />
        Your Current Costs
      </Label>
      <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
        <div className="space-y-2">
          <Label className="text-gray-700">Price per Square Foot</Label>
          <Input
            type="number"
            step="0.01"
            placeholder="Enter current price"
            value={currentPricePerSqFt}
            onChange={(e) => setCurrentPricePerSqFt(e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F]"
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Package className="w-4 h-4" />
            Box & Supplies Cost (per shipment)
          </Label>
          <Input
            type="number"
            step="0.01"
            placeholder="Enter box & supplies cost"
            value={boxSuppliesCost}
            onChange={(e) => setBoxSuppliesCost(e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F]"
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            Shipping Cost (per shipment)
          </Label>
          <Input
            type="number"
            step="0.01"
            placeholder="Enter shipping cost"
            value={shippingCost}
            onChange={(e) => setShippingCost(e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F]"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentCosts;
