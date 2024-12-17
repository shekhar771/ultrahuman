// app/buy/page.js
"use client";



import { BuySection } from "../component/BuySection";
import { PurchaseProvider,  } from "../component/PurchaseContext";

export default function BuyPage() {
  return (
    <PurchaseProvider>
      <BuySection />
    </PurchaseProvider>
  );
}
