
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, DollarSign, Package, Truck, ArrowLeftRight } from "lucide-react";
import { motion } from "framer-motion";

const SavingsCalculator = () => {
  // Current costs
  const [currentPricePerSqFt, setCurrentPricePerSqFt] = useState<string>('');
  const [monthlySqFt, setMonthlySqFt] = useState<string>('');
  const [boxSuppliesCost, setBoxSuppliesCost] = useState<string>('');
  const [shippingCost, setShippingCost] = useState<string>('');
  
  // Wallmates costs (editable for negotiation)
  const [wallmatesPricePerSqFt, setWallmatesPricePerSqFt] = useState<string>('0.50');
  const [wallmatesBoxCost, setWallmatesBoxCost] = useState<string>('2');
  const [wallmatesShipping, setWallmatesShipping] = useState<string>('13');
  
  // Results
  const [currentTotalCost, setCurrentTotalCost] = useState<number>(0);
  const [wallmatesTotalCost, setWallmatesTotalCost] = useState<number>(0);
  const [savings, setSavings] = useState<number>(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (currentPricePerSqFt && monthlySqFt && boxSuppliesCost && shippingCost &&
        wallmatesPricePerSqFt && wallmatesBoxCost && wallmatesShipping) {
      calculateSavings();
    }
  }, [currentPricePerSqFt, monthlySqFt, boxSuppliesCost, shippingCost, 
      wallmatesPricePerSqFt, wallmatesBoxCost, wallmatesShipping]);

  const calculateSavings = () => {
    // Parse all input values
    const currentPriceParsed = parseFloat(currentPricePerSqFt);
    const monthlySqFtParsed = parseFloat(monthlySqFt);
    const boxCostParsed = parseFloat(boxSuppliesCost);
    const shippingCostParsed = parseFloat(shippingCost);
    
    const wallmatesPriceParsed = parseFloat(wallmatesPricePerSqFt);
    const wallmatesBoxParsed = parseFloat(wallmatesBoxCost);
    const wallmatesShippingParsed = parseFloat(wallmatesShipping);
    
    // Estimate number of shipments per month (assume average 50 sq ft per order)
    const estimatedShipmentsPerMonth = Math.ceil(monthlySqFtParsed / 50);
    
    // Calculate current costs
    const currentMonthlyPrinting = currentPriceParsed * monthlySqFtParsed;
    const currentMonthlyBoxes = boxCostParsed * estimatedShipmentsPerMonth;
    const currentMonthlyShipping = shippingCostParsed * estimatedShipmentsPerMonth;
    const currentTotal = currentMonthlyPrinting + currentMonthlyBoxes + currentMonthlyShipping;
    
    // Calculate Wallmates costs
    const wallmatesMonthlyPrinting = wallmatesPriceParsed * monthlySqFtParsed;
    const wallmatesMonthlyBoxes = wallmatesBoxParsed * estimatedShipmentsPerMonth;
    const wallmatesMonthlyShipping = wallmatesShippingParsed * estimatedShipmentsPerMonth;
    const wallmatesTotal = wallmatesMonthlyPrinting + wallmatesMonthlyBoxes + wallmatesMonthlyShipping;
    
    // Calculate savings
    const monthlySavings = currentTotal - wallmatesTotal;
    
    // Update state
    setCurrentTotalCost(currentTotal);
    setWallmatesTotalCost(wallmatesTotal);
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
    <Card className="w-full max-w-4xl mx-auto p-6 space-y-8 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Wallmates Savings Calculator</h2>
        <p className="text-gray-600">Compare your current costs with Wallmates to see your potential savings</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Estimated Monthly Volume */}
        <div className="w-full space-y-2">
          <Label className="flex items-center gap-2 text-lg font-medium text-purple-700">
            <Calculator className="w-5 h-5" />
            Estimated Monthly Volume
          </Label>
          <div className="space-y-4 p-4 bg-purple-50 rounded-lg">
            <div className="space-y-2">
              <Label className="text-gray-700">Square Feet Printed Monthly</Label>
              <Input
                type="number"
                placeholder="Enter monthly volume"
                value={monthlySqFt}
                onChange={(e) => setMonthlySqFt(e.target.value)}
                className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Current Costs Column */}
        <div className="w-full md:w-1/2 space-y-2">
          <Label className="flex items-center gap-2 text-lg font-medium text-blue-700">
            <DollarSign className="w-5 h-5" />
            Your Current Costs
          </Label>
          <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
            <div className="space-y-2">
              <Label className="text-gray-700">Price per Square Foot</Label>
              <Input
                type="number"
                step="0.01"
                placeholder="Enter current price"
                value={currentPricePerSqFt}
                onChange={(e) => setCurrentPricePerSqFt(e.target.value)}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
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
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
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
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Wallmates Costs Column */}
        <div className="w-full md:w-1/2 space-y-2">
          <Label className="flex items-center gap-2 text-lg font-medium text-purple-700">
            <DollarSign className="w-5 h-5" />
            Wallmates Costs (Editable)
          </Label>
          <div className="space-y-4 p-4 bg-purple-50 rounded-lg">
            <div className="space-y-2">
              <Label className="text-gray-700">Price per Square Foot</Label>
              <Input
                type="number"
                step="0.01"
                placeholder="Wallmates price per sq ft"
                value={wallmatesPricePerSqFt}
                onChange={(e) => setWallmatesPricePerSqFt(e.target.value)}
                className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
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
                className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
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
                className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      </div>

      {showResults && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Your Current Monthly Cost</h3>
              <p className="text-3xl font-bold text-blue-600">
                {formatCurrency(currentTotalCost)}
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">Wallmates Monthly Cost</h3>
              <p className="text-3xl font-bold text-purple-600">
                {formatCurrency(wallmatesTotalCost)}
              </p>
            </div>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg text-center">
            <div className="flex items-center justify-center mb-2">
              <ArrowLeftRight className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Your Estimated Monthly Savings</h3>
            </div>
            <p className="text-4xl font-bold text-green-600">
              {formatCurrency(savings)}
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Switch to Wallmates and start saving today!
            </p>
          </div>
        </motion.div>
      )}
    </Card>
  );
};

export default SavingsCalculator;
