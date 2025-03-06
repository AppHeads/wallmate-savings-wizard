
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
    <div className="w-full">
      <Label className="block text-lg font-semibold text-gray-900 mb-2">
        Estimated Monthly Volume <span className="text-[#FF6D3F]">*</span>
      </Label>
      <div className="flex items-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">sq ft</span>
          </div>
          <Input
            type="number"
            placeholder="Enter monthly volume"
            value={monthlySqFt}
            onChange={(e) => setMonthlySqFt(e.target.value)}
            className="pl-16 transition-all duration-200 focus:ring-2 focus:ring-[#FF6D3F]"
          />
        </div>
      </div>
    </div>
  );
};

export default EstimatedVolume;
