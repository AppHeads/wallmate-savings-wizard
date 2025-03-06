
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, DollarSign, Package, Truck } from "lucide-react";
import { motion } from "framer-motion";

const SavingsCalculator = () => {
  const [currentPricePerSqFt, setCurrentPricePerSqFt] = useState<string>('');
  const [monthlySqFt, setMonthlySqFt] = useState<string>('');
  const [boxSuppliesCost, setBoxSuppliesCost] = useState<string>('');
  const [shippingCost, setShippingCost] = useState<string>('');
  const [savings, setSavings] = useState<number>(0);
  const [showResults, setShowResults] = useState(false);

  const WALLMATES_PRICE_PER_SQFT = 0.50;
  const WALLMATES_BOX_COST = 2;
  const WALLMATES_SHIPPING = 13;

  useEffect(() => {
    if (currentPricePerSqFt && monthlySqFt && boxSuppliesCost && shippingCost) {
      calculateSavings();
    }
  }, [currentPricePerSqFt, monthlySqFt, boxSuppliesCost, shippingCost]);

  const calculateSavings = () => {
    const currentMonthlyPrinting = parseFloat(currentPricePerSqFt) * parseFloat(monthlySqFt);
    const wallmatesMonthlyPrinting = WALLMATES_PRICE_PER_SQFT * parseFloat(monthlySqFt);
    
    // Estimate number of shipments per month (assume average 50 sq ft per order)
    const estimatedShipmentsPerMonth = Math.ceil(parseFloat(monthlySqFt) / 50);
    
    const currentTotalCost = 
      currentMonthlyPrinting + 
      (parseFloat(boxSuppliesCost) * estimatedShipmentsPerMonth) + 
      (parseFloat(shippingCost) * estimatedShipmentsPerMonth);
    
    const wallmatesTotalCost = 
      wallmatesMonthlyPrinting + 
      (WALLMATES_BOX_COST * estimatedShipmentsPerMonth) + 
      (WALLMATES_SHIPPING * estimatedShipmentsPerMonth);
    
    const monthlySavings = currentTotalCost - wallmatesTotalCost;
    setSavings(monthlySavings);
    setShowResults(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 space-y-8 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Wallmates Savings Calculator</h2>
        <p className="text-gray-600">Calculate your potential savings with Wallmates</p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Current Price per Square Foot
          </Label>
          <Input
            type="number"
            step="0.01"
            placeholder="Enter current price"
            value={currentPricePerSqFt}
            onChange={(e) => setCurrentPricePerSqFt(e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Monthly Square Feet Printed
          </Label>
          <Input
            type="number"
            placeholder="Enter monthly volume"
            value={monthlySqFt}
            onChange={(e) => setMonthlySqFt(e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Package className="w-4 h-4" />
            Current Box & Supplies Cost (per shipment)
          </Label>
          <Input
            type="number"
            step="0.01"
            placeholder="Enter box & supplies cost"
            value={boxSuppliesCost}
            onChange={(e) => setBoxSuppliesCost(e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            Current Shipping Cost (per shipment)
          </Label>
          <Input
            type="number"
            step="0.01"
            placeholder="Enter shipping cost"
            value={shippingCost}
            onChange={(e) => setShippingCost(e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {showResults && savings > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Estimated Monthly Savings</h3>
          <p className="text-4xl font-bold text-purple-600">
            {formatCurrency(savings)}
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Switch to Wallmates and start saving today with our competitive rates:
          </p>
          <ul className="mt-2 text-sm text-gray-700 space-y-1">
            <li>• Printing: As low as $0.50 per square foot</li>
            <li>• Boxes & Supplies: As low as $2.00 per box</li>
            <li>• 2-Day Shipping: Flat rate as low as $13.00</li>
          </ul>
        </motion.div>
      )}
    </Card>
  );
};

export default SavingsCalculator;
