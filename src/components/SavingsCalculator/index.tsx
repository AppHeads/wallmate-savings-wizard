
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
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
    <Card className="w-full max-w-4xl mx-auto p-6 space-y-8 bg-white shadow-lg rounded-xl border border-gray-200">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Wallmates Savings Calculator</h2>
        <p className="text-gray-600">Compare your current costs with Wallmates to see your potential savings</p>
      </div>

      <EstimatedVolume 
        monthlySqFt={monthlySqFt}
        setMonthlySqFt={setMonthlySqFt}
      />

      <div className="flex flex-col md:flex-row gap-6">
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

      <SavingsResults 
        currentTotalCost={currentTotalCost}
        wallmatesTotalCost={wallmatesTotalCost}
        savings={savings}
        showResults={showResults}
        formatCurrency={formatCurrency}
      />
    </Card>
  );
};

export default SavingsCalculator;
