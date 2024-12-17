// components/HeroSection.js
"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -500]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="sm:h-90vh md:w-full h-screen flex flex-col items-center justify-center text-center gap-20 relative overflow-hidden"
      style={{ backgroundImage: "url('/bkg.png')", backgroundSize: "cover" }}
    >
      {isClient && (
        <motion.div
          style={{ y }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-0 pointer-events-none"
        >
          <Image src="/ring.png" alt="Ring" width={400} height={400} priority />
        </motion.div>
      )}

      <div className="flex flex-col gap-5 z-10 relative">
        <div className="text font-bold">
          WORLD'S MOST COMFORTABLE SLEEP TRACKER
        </div>
        <div className="text-4xl font-bold text-white">Ultrahuman Ring AIR</div>
        <div className="text-white/70 max-w-md mx-auto">
          Accurately tracks sleep, HRV, temperature, and movement with daily
          actionable health insights.
        </div>
        <Link href="/buy">
          <button className="mt-4 self-center bg-black text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow hover:scale-105 transition-transform duration-300">
            Buy now
          </button>
        </Link>
      </div>
    </div>
  );
}