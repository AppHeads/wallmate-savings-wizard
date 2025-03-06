
/**
 * Calculates savings by comparing current costs with Wallmates costs
 */
export const calculateSavings = (
  currentPricePerSqFt: string,
  monthlySqFt: string,
  boxSuppliesCost: string,
  shippingCost: string,
  wallmatesPricePerSqFt: string,
  wallmatesBoxCost: string,
  wallmatesShipping: string
) => {
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
  
  return {
    currentTotalCost: currentTotal,
    wallmatesTotalCost: wallmatesTotal,
    savings: monthlySavings
  };
};

/**
 * Format a number as currency
 */
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};
