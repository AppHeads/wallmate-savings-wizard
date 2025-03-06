
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
    <div className="w-full md:w-1/2 space-y-2">
      <Label className="flex items-center gap-2 text-lg font-medium text-[#FF6D3F]">
        <DollarSign className="w-5 h-5" />
        Wallmates Costs (Editable)
      </Label>
      <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
        <div className="space-y-2">
          <Label className="text-gray-700">Price per Square Foot</Label>
          <Input
            type="number"
            step="0.01"
            placeholder="Wallmates price per sq ft"
            value={wallmatesPricePerSqFt}
            onChange={(e) => setWallmatesPricePerSqFt(e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F] border-[#FF6D3F]/20"
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
            placeholder="Wallmates box cost"
            value={wallmatesBoxCost}
            onChange={(e) => setWallmatesBoxCost(e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F] border-[#FF6D3F]/20"
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
            placeholder="Wallmates shipping cost"
            value={wallmatesShipping}
            onChange={(e) => setWallmatesShipping(e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F] border-[#FF6D3F]/20"
          />
        </div>
      </div>
    </div>
  );
};

export default WallmatesCosts;
