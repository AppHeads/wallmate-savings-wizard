
import React from 'react';
import { ArrowLeftRight } from "lucide-react";
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
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Current Monthly Cost</h3>
          <p className="text-3xl font-bold text-gray-800">
            {formatCurrency(currentTotalCost)}
          </p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-[#FF6D3F] mb-2">Wallmates Monthly Cost</h3>
          <p className="text-3xl font-bold text-[#FF6D3F]">
            {formatCurrency(wallmatesTotalCost)}
          </p>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-[#FF6D3F]/10 to-white rounded-lg text-center">
        <div className="flex items-center justify-center mb-2">
          <ArrowLeftRight className="w-6 h-6 text-[#FF6D3F] mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">Your Estimated Monthly Savings</h3>
        </div>
        <p className="text-4xl font-bold text-[#FF6D3F]">
          {formatCurrency(savings)}
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Switch to Wallmates and start saving today!
        </p>
      </div>
    </motion.div>
  );
};

export default SavingsResults;
