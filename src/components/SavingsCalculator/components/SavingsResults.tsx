
import React from 'react';
import { motion } from "framer-motion";

interface SavingsResultsProps {
  currentTotalCost: number;
  wallmatesTotalCost: number;
  savings: number;
  showResults: boolean;
  formatCurrency: (amount: number) => string;
}

const SavingsResults: React.FC<SavingsResultsProps> = ({
  currentTotalCost,
  wallmatesTotalCost,
  savings,
  showResults,
  formatCurrency,
}) => {
  if (!showResults) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
        <p className="text-gray-500">Enter values to see your potential savings</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="p-6 bg-gradient-to-br from-[#fff8f6] to-[#fff1ed] rounded-lg border border-[#FFE3D9] shadow-sm">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">Your savings</p>
          <div className="overflow-hidden">
            <p className="text-4xl md:text-5xl font-bold text-[#FF6D3F] tracking-tight">
              {formatCurrency(savings)}
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-1">per month</p>
        </div>
      </div>
      
      <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Current Cost</span>
          <span className="font-medium">{formatCurrency(currentTotalCost)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Wallmates Cost</span>
          <span className="font-medium text-[#FF6D3F]">{formatCurrency(wallmatesTotalCost)}</span>
        </div>
        
        <div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-200">
          <span className="text-sm font-medium">Monthly Savings</span>
          <span className="font-bold text-[#FF6D3F]">{formatCurrency(savings)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Annual Savings</span>
          <span className="font-bold text-[#FF6D3F]">{formatCurrency(savings * 12)}</span>
        </div>
        
        <div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-200">
          <span className="text-sm font-medium">Savings Rate</span>
          <span className="font-bold text-[#FF6D3F]">
            {currentTotalCost > 0 ? Math.round((savings / currentTotalCost) * 100) : 0}%
          </span>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 mt-4">
        <p>Switch to Wallmates and start saving today!</p>
      </div>
    </motion.div>
  );
};

export default SavingsResults;
