
import React from 'react';
import { createRoot } from 'react-dom/client';
import SavingsCalculator from './components/SavingsCalculator';
import './index.css';

// This script will look for a container element with this ID
const containerId = 'wallmates-savings-calculator';

// Function to initialize the calculator
window.initWallmatesSavingsCalculator = function() {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }
  
  const root = createRoot(container);
  root.render(<SavingsCalculator />);
};

// Auto-initialize if the container already exists
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById(containerId)) {
    window.initWallmatesSavingsCalculator();
  }
});

// Add the initialization function to the window object
declare global {
  interface Window {
    initWallmatesSavingsCalculator: () => void;
  }
}
