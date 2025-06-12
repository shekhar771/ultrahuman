"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { div } from "framer-motion/client";
import { ArrowRight } from "lucide-react";

// Context for managing user choices (Task 2 requirement)

function HeroSection() {
  // Task 1: Hero Section with Parallax Ring at Bottom
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -500]);

  return (
    <div
      className="sm:h-90vh md:w-full h-screen flex flex-col items-center justify-center text-center gap-20 relative overflow-hidden "
      style={{ backgroundImage: "url('/bkg.png')", backgroundSize: "cover" }}
    >
      <motion.div
        style={{ y }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-0 pointer-events-none"
      >
        <Image src="/ring.png" alt="Ring" width={400} height={400} priority />
      </motion.div>

      <div className="flex flex-col gap-5 z-10 relative">
        {" "}
        {/* Added 'relative' to ensure proper stacking */}
        <div className="text font-bold">
          WORLD'S MOST COMFORTABLE SLEEP TRACKER
        </div>
        <div className="text-4xl font-bold text-white">Ultrahuman Ring AIR</div>
        <div className="text-white/70 max-w-md mx-auto">
          Accurately tracks sleep, HRV, temperature, and movement with daily
          actionable health insights.
        </div>
        <button className="mt-4 self-center bg-black text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg  hover:shadow hover:scale-105 transition-transform duration-300">
          Buy now
        </button>
      </div>
    </div>
  );
}
const Section2 = () => {
  return (
    <div className="w-full bg-white py-12 px-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-6 md:px-12">
        {/* Navigation */}
        <div className="flex items-center gap-3 pt-2">
          <div className="w-2 h-2 bg-black"></div>
          <span className="text-sm font-medium text-gray-500">About</span>
        </div>

        {/* Main content */}
        <main className="flex">
          <div className="max-w-4xl text-align ml-9">
            <h1 className="text-3xl md:text-4xl text-align lg:text-5xl font-light leading-snug text-black mb-6">
              Beautiful from the inside. Dive into the realm of design{" "}
              <span className="text-gray-300 text-align">
                ingenuity. Take a closer look at the stunning interiors,
                meticulously engineered for a seamless integration of form and
                function.
              </span>
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
};
const features = [
  {
    id: 1,
    label: "PPG Sensor",
    description:
      "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
    image: "/ring3.png",
    badge: "PPG SENSOR",
  },
  {
    id: 2,
    label: "6-Axis Motion Sensor",
    description:
      "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more",
    image: "/ring3.png",
    badge: "MOTION SENSOR",
  },
  {
    id: 3,
    label: "Smooth Inner Shell",
    description:
      "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
    image: "/ring3.png",
    badge: "SMOOTH SHELL",
  },
  {
    id: 4,
    label: "Strong From The Outside",
    description:
      "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
    image: "/ring3.png",
    badge: "OUTER SHELL",
  },
];

function FeaturesSection2() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[100vh] py-10 bg-white px-4">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        {/* Title - Way above the carousel */}
        <div className=" mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl  text-black">
            Beautiful from the inside
          </h1>
        </div>

        {/* Mobile Layout - Card Style */}
        <div className="md:hidden flex-1 flex flex-col items-center justify-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={features[index].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm"
            >
              {/* Card Container */}
              <div className="relative bg-black rounded-2xl p-8 mb-6">
                <img
                  src={features[index].image}
                  alt={features[index].label}
                  className="w-full h-48 object-contain"
                />
                <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1.5 rounded-full z-10 font-medium lg:top-10/12">
                  {features[index].badge}
                </span>
              </div>

              {/* Title and Description */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {features[index].label}
                </h3>
                <p className="mt-4 text-base md:text-lg text-gray-600 max-w-md transition-opacity duration-300 leading-relaxed h-24 overflow-hidden">
                  {features[index].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex space-x-2 mt-8">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index ? "bg-black w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout - Current Style */}
        <div className="hidden md:flex flex-1 flex-col md:flex-row items-center justify-center gap-16 px-4">
          {/* Left Side - Features List */}
          <div className="w-full md:w-1/2 space-y-8">
            <ul className="flex flex-col text-black space-y-8">
              {features.map((feature, i) => (
                <li
                  key={feature.id}
                  className="relative cursor-pointer transition-all duration-300"
                  onClick={() => setIndex(i)}
                >
                  {/* Label + Underline */}
                  <div className="inline-block">
                    <span
                      className={`pb-2 inline-block transition-colors duration-300 text-lg md:text-xl ${
                        i === index
                          ? "text-black font-semibold"
                          : "text-gray-500"
                      }`}
                    >
                      {feature.label}
                    </span>

                    {/* Underline below the label - covers full width of label */}
                    <div
                      className={`h-0.5 bg-black mt-1 transition-all duration-300 ${
                        i === index ? "w-full" : "w-0"
                      }`}
                    />
                  </div>

                  {/* Description only for active item */}
                  {i === index && (
                    <p className="mt-4 text-base md:text-lg text-gray-600 max-w-sm transition-opacity duration-300 leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Image taking half the space */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={features[index].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-[600px] h-[400px] flex justify-center items-center"
              >
                <img
                  src={features[index].image}
                  alt={features[index].label}
                  className="w-min rounded-4xl  "
                />
                <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1.5 rounded-full z-10 font-medium">
                  {features[index].badge}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
const HomePage = () => {
  return (
    // <PurchaseProvider>
    <div className="min-h-screen">
      <HeroSection />
      <Section2 />
      <FeaturesSection2 />
      <Duble />
      {/* <BuySection /> */}
    </div>
    // </PurchaseProvider>
  );
};

export default HomePage;

function Duble() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 bg-gray-50 m px-4">
      <div className="max-w-7xl mx-24 mx-auto">
        {/* Title */}
        <div className="pl-2  mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-black">
            Precision in miniature
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sleep Insights Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-black mb-3">
                Wake up to your sleep insights
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                The Sleep Index, intelligently designed to be your sole metric
                for sleep health, assesses...
              </p>
            </div>

            <button className="flex items-center text-black font-medium mb-8 hover:gap-3 transition-all duration-300">
              <span className="text-sm">LEARN MORE</span>
              <ArrowRight size={16} className="ml-2" />
            </button>

            {/* Sleep Chart Image Placeholder */}
            <div className="relative bg-gray-100 rounded-xl h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
              <img
                src="/left.png"
                alt="Sleep tracking chart visualization"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Temperature Tracking Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-black mb-3">
                Temperature tracking made easy
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Skin temperature is vital for measuring your body's
                physiological states and...
              </p>
            </div>

            <button className="flex items-center text-black font-medium mb-8 hover:gap-3 transition-all duration-300">
              <span className="text-sm">LEARN MORE</span>
              <ArrowRight size={16} className="ml-2" />
            </button>

            {/* Temperature Gauge Image Placeholder */}
            <div className="relative bg-gray-100 rounded-xl h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
              <img
                src="/right.png"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="text-gray-500 text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const PurchaseContext = createContext();

// const PurchaseProvider = ({ children }) => {
//   const [choices, setChoices] = useState({
//     size: "",
//     color: "",
//     quantity: 1,
//     price: 349,
//   });

//   const updateChoice = (key, value) => {
//     setChoices((prev) => ({ ...prev, [key]: value }));
//   };

//   return (
//     <PurchaseContext.Provider value={{ choices, updateChoice }}>
//       {children}
//     </PurchaseContext.Provider>
//   );
// };
// // Task 2: Interactive Buy Section
// const BuySection = () => {
//   const { choices, updateChoice } = useContext(PurchaseContext);

//   const sizes = ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
//   const colors = [
//     { name: "Raw Titanium", value: "raw-titanium", color: "bg-gray-400" },
//     { name: "Aster Black", value: "aster-black", color: "bg-black" },
//     { name: "Matte Grey", value: "matte-grey", color: "bg-gray-600" },
//     { name: "Bionic Gold", value: "bionic-gold", color: "bg-yellow-400" },
//     { name: "Space Silver", value: "space-silver", color: "bg-gray-300" },
//   ];

//   const handleCheckout = () => {
//     // Task 2 requirement: Console log the choices
//     console.log("🛒 CHECKOUT - User Choices:", {
//       size: `Size ${choices.size}`,
//       color:
//         colors.find((c) => c.value === choices.color)?.name || "Not selected",
//       quantity: choices.quantity,
//       price: `$${choices.price}`,
//       total: `$${choices.price * choices.quantity}`,
//       timestamp: new Date().toISOString(),
//     });

//     alert("Checkout successful! Check the console for your selections.");
//   };

//   const isReadyToCheckout = choices.size && choices.color;

//   return (
//     <div id="buy-section" className="py-20 bg-black">
//       <div className="max-w-4xl mx-auto px-8">
//         <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700">
//           <h2 className="text-4xl font-bold text-white text-center mb-12">
//             Configure Your Ring
//           </h2>

//           {/* Size Selection */}
//           <div className="mb-12">
//             <h3 className="text-2xl font-semibold text-white mb-6">
//               Choose Your Size
//             </h3>
//             <div className="grid grid-cols-5 gap-4">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => updateChoice("size", size)}
//                   className={`p-4 rounded-xl border-2 transition-all ${
//                     choices.size === size
//                       ? "border-pink-500 bg-pink-500/20 text-pink-300"
//                       : "border-gray-600 text-gray-300 hover:border-gray-400"
//                   }`}
//                 >
//                   Size {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Color Selection */}
//           <div className="mb-12">
//             <h3 className="text-2xl font-semibold text-white mb-6">
//               Choose Your Color
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//               {colors.map((color) => (
//                 <button
//                   key={color.value}
//                   onClick={() => updateChoice("color", color.value)}
//                   className={`p-6 rounded-xl border-2 transition-all ${
//                     choices.color === color.value
//                       ? "border-cyan-500 bg-cyan-500/20"
//                       : "border-gray-600 hover:border-gray-400"
//                   }`}
//                 >
//                   <div
//                     className={`w-12 h-12 ${color.color} rounded-full mx-auto mb-3 ring-2 ring-white/20`}
//                   ></div>
//                   <span className="text-white text-sm">{color.name}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity */}
//           <div className="mb-12">
//             <h3 className="text-2xl font-semibold text-white mb-6">Quantity</h3>
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() =>
//                   updateChoice("quantity", Math.max(1, choices.quantity - 1))
//                 }
//                 className="w-12 h-12 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
//               >
//                 -
//               </button>
//               <span className="text-2xl font-bold text-white w-16 text-center">
//                 {choices.quantity}
//               </span>
//               <button
//                 onClick={() => updateChoice("quantity", choices.quantity + 1)}
//                 className="w-12 h-12 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Summary */}
//           <div className="bg-gray-800 rounded-2xl p-8 mb-8">
//             <h3 className="text-xl font-semibold text-white mb-4">
//               Order Summary
//             </h3>
//             <div className="space-y-2 text-gray-300">
//               <div className="flex justify-between">
//                 <span>Size:</span>
//                 <span>
//                   {choices.size ? `Size ${choices.size}` : "Not selected"}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Color:</span>
//                 <span>
//                   {choices.color
//                     ? colors.find((c) => c.value === choices.color)?.name
//                     : "Not selected"}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Quantity:</span>
//                 <span>{choices.quantity}</span>
//               </div>
//               <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-gray-600">
//                 <span>Total:</span>
//                 <span>${choices.price * choices.quantity}</span>
//               </div>
//             </div>
//           </div>

//           {/* Checkout Button */}
//           <button
//             onClick={handleCheckout}
//             disabled={!isReadyToCheckout}
//             className={`w-full py-6 text-xl font-bold rounded-2xl transition-all ${
//               isReadyToCheckout
//                 ? "bg-gradient-to-r from-pink-500 to-cyan-500 text-white hover:scale-[1.02] shadow-2xl hover:shadow-pink-500/25"
//                 : "bg-gray-700 text-gray-400 cursor-not-allowed"
//             }`}
//           >
//             {isReadyToCheckout
//               ? "Checkout Now"
//               : "Please select size and color"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
