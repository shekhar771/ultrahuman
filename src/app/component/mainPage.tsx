"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Context for managing user choices (Task 2 requirement)
const PurchaseContext = createContext();

const PurchaseProvider = ({ children }) => {
  const [choices, setChoices] = useState({
    size: "",
    color: "",
    quantity: 1,
    price: 349,
  });

  const updateChoice = (key, value) => {
    setChoices((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <PurchaseContext.Provider value={{ choices, updateChoice }}>
      {children}
    </PurchaseContext.Provider>
  );
};

function HeroSection() {
  // Task 1: Hero Section with Parallax Ring at Bottom
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -500]);

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center text-center gap-20 relative overflow-hidden" // Added 'relative' and kept 'overflow-hidden'
      style={{ backgroundImage: "url('/bkg.png')", backgroundSize: "cover" }}
    >
      <motion.div
        style={{ y }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-0 pointer-events-none"
      >
        <Image src="/ring.png" alt="Ring" width={400} height={400} priority />
      </motion.div>

      <div className="flex flex-col gap-10 z-10 relative">
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
        <button className="mt-2 bg-white text-black text-lg px-2 py-3 rounded-full hover:bg-gray-200 transition">
          Buy now
        </button>
      </div>
    </div>
  );
}

// Main App Component
const HomePage = () => {
  return (
    <PurchaseProvider>
      <div className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <CarouselSection />
        {/* <BuySection /> */}
      </div>
    </PurchaseProvider>
  );
};

export default HomePage;

// Task 1: Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: "💤",
      title: "Sleep Tracking",
      desc: "Advanced sleep analysis and optimization",
    },
    {
      icon: "💪",
      title: "Fitness Metrics",
      desc: "Comprehensive health and activity monitoring",
    },
    {
      icon: "🔋",
      title: "6-Day Battery",
      desc: "Extended battery life for continuous tracking",
    },
    { icon: "🌊", title: "Waterproof", desc: "Swim and shower without worry" },
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Choose Ultrahuman Ring AIR?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl text-center hover:scale-105 transform transition-all duration-300 border border-gray-600"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Task 1: Automated Carousel Section
const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Sleep Optimization",
      desc: "Track your sleep patterns and improve recovery",
      bg: "from-purple-600 to-blue-600",
    },
    {
      title: "Metabolic Health",
      desc: "Monitor glucose levels and metabolic insights",
      bg: "from-green-600 to-teal-600",
    },
    {
      title: "Heart Rate Variability",
      desc: "Understand your stress and recovery levels",
      bg: "from-red-600 to-pink-600",
    },
    {
      title: "Activity Tracking",
      desc: "Comprehensive fitness and movement analysis",
      bg: "from-orange-600 to-yellow-600",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Comprehensive Health Insights
        </h2>
        <div className="relative h-96 rounded-2xl overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-gradient-to-r ${
                slide.bg
              } flex items-center justify-center transition-all duration-500 ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <div className="text-center text-white px-8">
                <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                <p className="text-xl opacity-90">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Task 2: Interactive Buy Section
const BuySection = () => {
  const { choices, updateChoice } = useContext(PurchaseContext);

  const sizes = ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
  const colors = [
    { name: "Raw Titanium", value: "raw-titanium", color: "bg-gray-400" },
    { name: "Aster Black", value: "aster-black", color: "bg-black" },
    { name: "Matte Grey", value: "matte-grey", color: "bg-gray-600" },
    { name: "Bionic Gold", value: "bionic-gold", color: "bg-yellow-400" },
    { name: "Space Silver", value: "space-silver", color: "bg-gray-300" },
  ];

  const handleCheckout = () => {
    // Task 2 requirement: Console log the choices
    console.log("🛒 CHECKOUT - User Choices:", {
      size: `Size ${choices.size}`,
      color:
        colors.find((c) => c.value === choices.color)?.name || "Not selected",
      quantity: choices.quantity,
      price: `$${choices.price}`,
      total: `$${choices.price * choices.quantity}`,
      timestamp: new Date().toISOString(),
    });

    alert("Checkout successful! Check the console for your selections.");
  };

  const isReadyToCheckout = choices.size && choices.color;

  return (
    <div id="buy-section" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Configure Your Ring
          </h2>

          {/* Size Selection */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Choose Your Size
            </h3>
            <div className="grid grid-cols-5 gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => updateChoice("size", size)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    choices.size === size
                      ? "border-pink-500 bg-pink-500/20 text-pink-300"
                      : "border-gray-600 text-gray-300 hover:border-gray-400"
                  }`}
                >
                  Size {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Choose Your Color
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => updateChoice("color", color.value)}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    choices.color === color.value
                      ? "border-cyan-500 bg-cyan-500/20"
                      : "border-gray-600 hover:border-gray-400"
                  }`}
                >
                  <div
                    className={`w-12 h-12 ${color.color} rounded-full mx-auto mb-3 ring-2 ring-white/20`}
                  ></div>
                  <span className="text-white text-sm">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">Quantity</h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  updateChoice("quantity", Math.max(1, choices.quantity - 1))
                }
                className="w-12 h-12 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
              >
                -
              </button>
              <span className="text-2xl font-bold text-white w-16 text-center">
                {choices.quantity}
              </span>
              <button
                onClick={() => updateChoice("quantity", choices.quantity + 1)}
                className="w-12 h-12 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Order Summary
            </h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Size:</span>
                <span>
                  {choices.size ? `Size ${choices.size}` : "Not selected"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Color:</span>
                <span>
                  {choices.color
                    ? colors.find((c) => c.value === choices.color)?.name
                    : "Not selected"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Quantity:</span>
                <span>{choices.quantity}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-gray-600">
                <span>Total:</span>
                <span>${choices.price * choices.quantity}</span>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            disabled={!isReadyToCheckout}
            className={`w-full py-6 text-xl font-bold rounded-2xl transition-all ${
              isReadyToCheckout
                ? "bg-gradient-to-r from-pink-500 to-cyan-500 text-white hover:scale-[1.02] shadow-2xl hover:shadow-pink-500/25"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isReadyToCheckout
              ? "Checkout Now"
              : "Please select size and color"}
          </button>
        </div>
      </div>
    </div>
  );
};
