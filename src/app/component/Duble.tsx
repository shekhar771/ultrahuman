
"use client";

import React from "react";

import { ArrowRight } from "lucide-react";

import Link from 'next/link';

export function Duble() {


  return (
    <div className="py-16 bg-gray-50 m px-4">
      <div className="max-w-7xl mx-24 ">
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

            <Link href="https://www.linkedin.com/in/shekhar-gupta-8536b81a1/" ton className="flex items-center text-black font-medium mb-8 hover:gap-3 transition-all duration-300">
              <span className="text-sm">LEARN MORE</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>

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

            <Link href="https://www.linkedin.com/in/shekhar-gupta-8536b81a1/" className="flex items-center text-black font-medium mb-8 hover:gap-3 transition-all duration-300">
              <span className="text-sm">LEARN MORE</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>

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
