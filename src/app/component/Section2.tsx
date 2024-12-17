
"use client";

import React from "react";
export const Section2 = () => {
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