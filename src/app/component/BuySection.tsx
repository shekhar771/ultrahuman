"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ShoppingCart } from "lucide-react";

import {  usePurchase } from "../component/PurchaseContext";

export function BuySection() {
  const { selections, updateSelection } = usePurchase();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const colors = [
    {
      name: "Raw Titanium",
      value: "raw-titanium",
      bgColor: "bg-gray-300",
      preview: "/ring.png",
    },
    {
      name: "Aster Black",
      value: "aster-black",
      bgColor: "bg-black",
      preview: "/ring.png",
    },
    {
      name: "Matte Grey",
      value: "matte-grey",
      bgColor: "bg-gray-500",
      preview: "/ring.png",
    },
    {
      name: "Bionic Gold",
      value: "bionic-gold",
      bgColor: "bg-yellow-400",
      preview: "/ring.png",
    },
    {
      name: "Space Silver",
      value: "space-silver",
      bgColor: "bg-gray-100",
      preview: "/ring.png",
    },
  ];

  const sizes = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const accessories = [
    {
      name: "Sizing Kit",
      price: 999,
      description: "Ensure perfect fit with our sizing kit",
    },
    {
      name: "Extra Charger",
      price: 2999,
      description: "Additional wireless charging pad",
    },
    {
      name: "Premium Case",
      price: 1999,
      description: "Protective carrying case",
    },
  ];

  const basePrice = 34900;

  const handleAccessoryToggle = (accessory) => {
    const current = selections.accessories || [];
    const exists = current.find((item) => item.name === accessory.name);

    if (exists) {
      updateSelection(
        "accessories",
        current.filter((item) => item.name !== accessory.name)
      );
    } else {
      updateSelection("accessories", [...current, accessory]);
    }
  };

  const calculateTotal = () => {
    const accessoryTotal = (selections.accessories || []).reduce(
      (sum, item) => sum + item.price,
      0
    );
    return (basePrice + accessoryTotal) * selections.quantity;
  };

  const isCheckoutReady = selections.color && selections.size;

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Choose Your Ring
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Customize your Ultrahuman Ring AIR to match your style and
            preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Preview */}
          <div className="flex flex-col items-center">
            <div className="relative w-96 h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center mb-8">
              {selections.color ? (
                isClient && (
                  <motion.div
                    key={selections.color}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-64 h-64"
                  >
                    <Image
                      src={
                        colors.find((c) => c.value === selections.color)
                          ?.preview || "/ring.png"
                      }
                      alt="Ring Preview"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                )
              ) : (
                <div className="text-gray-400 text-center">
                  <ShoppingCart size={64} className="mx-auto mb-4" />
                  <p>Select color to preview</p>
                </div>
              )}
            </div>

            {/* Price Display */}
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">
                ₹{calculateTotal().toLocaleString()}
              </div>
              <div className="text-gray-600">
                Base: ₹{basePrice.toLocaleString()} × {selections.quantity}
                {selections.accessories &&
                  selections.accessories.length > 0 && (
                    <span> + Accessories</span>
                  )}
              </div>
            </div>
          </div>

          {/* Configuration Options */}
          <div className="space-y-8">
            {/* Color Selection */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Choose Color
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {colors.map((color) => (
                  <motion.button
                    key={color.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => updateSelection("color", color.value)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                      selections.color === color.value
                        ? "border-black bg-gray-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 ${color.bgColor} rounded-full mx-auto mb-2 border`}
                    ></div>
                    <div className="text-sm font-medium text-black">
                      {color.name}
                    </div>
                    {selections.color === color.value && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 right-2 text-green-600"
                      >
                        <Check size={16} />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Select Size
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {sizes.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => updateSelection("size", size)}
                    className={`w-12 h-12 rounded-full border-2 font-semibold transition-all duration-300 ${
                      selections.size === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 text-black hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                We recommend getting a sizing kit first to ensure the perfect
                fit
              </p>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Quantity
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    updateSelection(
                      "quantity",
                      Math.max(1, selections.quantity - 1)
                    )
                  }
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-xl font-semibold text-black w-8 text-center">
                  {selections.quantity}
                </span>
                <button
                  onClick={() =>
                    updateSelection("quantity", selections.quantity + 1)
                  }
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Accessories */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Add Accessories
              </h3>
              <div className="space-y-3">
                {accessories.map((accessory) => (
                  <motion.div
                    key={accessory.name}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selections.accessories?.find(
                        (item) => item.name === accessory.name
                      )
                        ? "border-black bg-gray-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleAccessoryToggle(accessory)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-semibold text-black">
                          {accessory.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {accessory.description}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-black">
                          ₹{accessory.price.toLocaleString()}
                        </div>
                        {selections.accessories?.find(
                          (item) => item.name === accessory.name
                        ) && (
                          <Check
                            size={16}
                            className="text-green-600 ml-auto mt-1"
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Checkout Button */}
            <motion.button
              whileHover={{ scale: isCheckoutReady ? 1.02 : 1 }}
              whileTap={{ scale: isCheckoutReady ? 0.98 : 1 }}
              disabled={!isCheckoutReady}
              onClick={() => {
                if (isCheckoutReady) {
                  console.log("Selections:", selections);
                  alert("Selections have been logged to console.");
                }
              }}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                isCheckoutReady
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isCheckoutReady
                ? "Checkout Now"
                : "Select Color & Size to Continue"}
            </motion.button>

            {/* Selection Summary */}
            {(selections.color || selections.size) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 p-4 rounded-xl"
              >
                <h4 className="font-semibold text-black mb-2">
                  Your Selection:
                </h4>
                <div className="text-sm text-gray-600 space-y-1">
                  {selections.color && (
                    <div>
                      Color:{" "}
                      {colors.find((c) => c.value === selections.color)?.name}
                    </div>
                  )}
                  {selections.size && <div>Size: {selections.size}</div>}
                  <div>Quantity: {selections.quantity}</div>
                  {selections.accessories &&
                    selections.accessories.length > 0 && (
                      <div>
                        Accessories:{" "}
                        {selections.accessories.map((a) => a.name).join(", ")}
                      </div>
                    )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
