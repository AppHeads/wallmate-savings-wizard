
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

interface EstimatedVolumeProps {
  monthlySqFt: string;
  setMonthlySqFt: (value: string) => void;
}

const EstimatedVolume: React.FC<EstimatedVolumeProps> = ({ 
  monthlySqFt, 
  setMonthlySqFt 
}) => {
  return (
    <div className="w-full space-y-2">
      <Label className="flex items-center gap-2 text-lg font-medium text-[#FF6D3F]">
        <Calculator className="w-5 h-5" />
        Estimated Monthly Volume
      </Label>
      <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
        <div className="space-y-2">
          <Label className="text-gray-700">Square Feet Printed Monthly</Label>
          <Input
            type="number"
            placeholder="Enter monthly volume"
            value={monthlySqFt}
            onChange={(e) => setMonthlySqFt(e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F]"
          />
        </div>
      </div>
    </div>
  );
};

export default EstimatedVolume;
