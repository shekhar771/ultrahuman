// app/cpmponents/PurchaseContext.js
"use client";

import { createContext, useContext, useState } from 'react';

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const [selections, setSelections] = useState({
    color: null,
    size: null,
    quantity: 1,
    accessories: [],
  });

  const updateSelection = (key, value) => {
    setSelections((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetSelections = () => {
    setSelections({
      color: null,
      size: null,
      quantity: 1,
      accessories: [],
    });
  };

  return (
    <PurchaseContext.Provider
      value={{ selections, updateSelection, resetSelections }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export const usePurchase = () => {
  const context = useContext(PurchaseContext);
  if (!context) {
    throw new Error("usePurchase must be used within a PurchaseProvider");
  }
  return context;
};