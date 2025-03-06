
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EstimatedVolume from "./components/EstimatedVolume";
import CurrentCosts from "./components/CurrentCosts";
import WallmatesCosts from "./components/WallmatesCosts";
import SavingsResults from "./components/SavingsResults";
import { calculateSavings, formatCurrency } from "./utils/calculations";

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
      
      const results = calculateSavings(
        currentPricePerSqFt,
        monthlySqFt,
        boxSuppliesCost,
        shippingCost,
        wallmatesPricePerSqFt,
        wallmatesBoxCost,
        wallmatesShipping
      );
      
      setCurrentTotalCost(results.currentTotalCost);
      setWallmatesTotalCost(results.wallmatesTotalCost);
      setSavings(results.savings);
      setShowResults(true);
    }
  }, [currentPricePerSqFt, monthlySqFt, boxSuppliesCost, shippingCost, 
      wallmatesPricePerSqFt, wallmatesBoxCost, wallmatesShipping]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white">
      <div className="text-left mb-8">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src="/lovable-uploads/3150b3ba-2981-4e47-a59a-1b68732c5303.png" 
            alt="Wallmates Logo" 
            className="h-10"
          />
          <h1 className="text-3xl font-bold text-gray-900">Savings Calculator</h1>
        </div>
        <p className="text-gray-600 text-lg">
          Use Wallmates savings calculator to quickly estimate your potential savings compared to your 
          current printing costs. Enter your current costs and adjust the Wallmates pricing to calculate 
          your estimated monthly savings with an itemized breakdown.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <EstimatedVolume 
            monthlySqFt={monthlySqFt}
            setMonthlySqFt={setMonthlySqFt}
          />

          <CurrentCosts 
            currentPricePerSqFt={currentPricePerSqFt}
            setCurrentPricePerSqFt={setCurrentPricePerSqFt}
            boxSuppliesCost={boxSuppliesCost}
            setBoxSuppliesCost={setBoxSuppliesCost}
            shippingCost={shippingCost}
            setShippingCost={setShippingCost}
          />

          <WallmatesCosts 
            wallmatesPricePerSqFt={wallmatesPricePerSqFt}
            setWallmatesPricePerSqFt={setWallmatesPricePerSqFt}
            wallmatesBoxCost={wallmatesBoxCost}
            setWallmatesBoxCost={setWallmatesBoxCost}
            wallmatesShipping={wallmatesShipping}
            setWallmatesShipping={setWallmatesShipping}
          />
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="breakdown" className="w-full">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="breakdown" className="flex-1">Breakdown</TabsTrigger>
              <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="breakdown">
              <SavingsResults 
                currentTotalCost={currentTotalCost}
                wallmatesTotalCost={wallmatesTotalCost}
                savings={savings}
                showResults={showResults}
                formatCurrency={formatCurrency}
              />
            </TabsContent>
            <TabsContent value="details">
              <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900">Cost Breakdown Details</h3>
                {showResults && (
                  <div className="space-y-2 text-sm">
                    <p className="flex justify-between">
                      <span>Current Monthly Cost:</span>
                      <span className="font-medium">{formatCurrency(currentTotalCost)}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Wallmates Monthly Cost:</span>
                      <span className="font-medium text-[#FF6D3F]">{formatCurrency(wallmatesTotalCost)}</span>
                    </p>
                    <p className="flex justify-between border-t pt-2 mt-2">
                      <span>Monthly Savings:</span>
                      <span className="font-bold text-[#FF6D3F]">{formatCurrency(savings)}</span>
                    </p>
                    <p className="flex justify-between border-t pt-2 mt-2">
                      <span>Annual Savings:</span>
                      <span className="font-bold text-[#FF6D3F]">{formatCurrency(savings * 12)}</span>
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-gray-500 text-center">
        <p>Calculator disclaimer: Actual savings may vary based on specific business requirements and volume.</p>
      </div>
    </div>
  );
};

export default SavingsCalculator;
