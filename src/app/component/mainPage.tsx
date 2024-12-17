import {  FeaturesSection2 } from "./Allcomponent";
import { Duble } from "./Duble";
import HeroSection from "./HeroSection";
import { PurchaseProvider } from "./PurchaseContext";
import { Section2 } from "./Section2";


// Main App Component
const HomePage = () => {
  return (
    <PurchaseProvider>
    <div className="min-h-screen">
      <HeroSection />
      <Section2 />
      <FeaturesSection2 />
      <Duble />
    </div>
    </PurchaseProvider>
  );
};

export default HomePage;
