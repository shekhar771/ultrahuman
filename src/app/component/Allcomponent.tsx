"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight } from "lucide-react";



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

export function FeaturesSection2() {
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
