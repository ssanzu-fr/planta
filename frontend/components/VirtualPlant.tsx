"use client";

import { useState, useEffect } from "react";

type PlantState = "healthy" | "thirsty" | "drowning" | "perfect";

export default function VirtualPlant() {
  const [plantState, setPlantState] = useState<PlantState>("healthy");
  const [waterLevel, setWaterLevel] = useState(50); // 0-100
  const [lastWatered, setLastWatered] = useState<Date | null>(null);
  const [message, setMessage] = useState("Your plant is doing well!");

  // Simulate time passing (water level decreases)
  useEffect(() => {
    const interval = setInterval(() => {
      setWaterLevel((prev) => {
        const newLevel = Math.max(0, prev - 1);

        // Update plant state based on water level
        if (newLevel < 20) {
          setPlantState("thirsty");
          setMessage("I'm getting thirsty... my leaves are starting to droop.");
        } else if (newLevel > 80) {
          setPlantState("drowning");
          setMessage("Too much water! My roots can't breathe.");
        } else if (newLevel >= 40 && newLevel <= 70) {
          setPlantState("perfect");
          setMessage("Perfect! I'm happy and healthy.");
        } else {
          setPlantState("healthy");
          setMessage("I'm doing fine!");
        }

        return newLevel;
      });
    }, 3000); // Decrease every 3 seconds for demo purposes

    return () => clearInterval(interval);
  }, []);

  const handleWater = () => {
    setWaterLevel((prev) => Math.min(100, prev + 30));
    setLastWatered(new Date());
  };

  const handleReset = () => {
    setWaterLevel(50);
    setPlantState("healthy");
    setLastWatered(null);
    setMessage("Your plant is doing well!");
  };

  // Visual styling based on plant state
  const getPlantStyle = () => {
    switch (plantState) {
      case "thirsty":
        return "scale-95 opacity-70 -rotate-2";
      case "drowning":
        return "scale-90 opacity-60 rotate-1";
      case "perfect":
        return "scale-105 opacity-100";
      default:
        return "scale-100 opacity-90";
    }
  };

  const getPlantColor = () => {
    switch (plantState) {
      case "thirsty":
        return "#9ca87c"; // Pale green-brown
      case "drowning":
        return "#7a8a6e"; // Darker dull green
      case "perfect":
        return "#4ade80"; // Vibrant green
      default:
        return "#6ebe7a"; // Normal green
    }
  };

  const getMessageColor = () => {
    switch (plantState) {
      case "thirsty":
        return "text-orange-700 bg-orange-50";
      case "drowning":
        return "text-red-700 bg-red-50";
      case "perfect":
        return "text-green-700 bg-green-50";
      default:
        return "text-stone-700 bg-stone-50";
    }
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold text-stone-900">
          Interactive Plant Care Demo
        </h3>
        <p className="mt-2 text-sm text-stone-600">
          Water your virtual plant and watch how it responds. Too little or too
          much water affects its health.
        </p>
      </div>

      {/* Virtual Plant Visual */}
      <div className="relative mb-8 flex h-64 items-end justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#e8f0e5] to-[#dfe8dc]">
        {/* Pot */}
        <div className="relative z-10 h-24 w-32 rounded-t-lg bg-gradient-to-b from-[#b8917a] to-[#8d6e5a]">
          {/* Soil */}
          <div className="h-4 w-full rounded-t-lg bg-[#6b5847]" />

          {/* Plant */}
          <div
            className={`absolute -top-32 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out ${getPlantStyle()}`}
          >
            {/* Stem */}
            <div className="mx-auto h-24 w-2 rounded-full bg-gradient-to-b from-green-700 to-green-800" />

            {/* Leaves - SVG */}
            <svg
              className="absolute left-1/2 top-8 -translate-x-1/2"
              width="120"
              height="100"
              viewBox="0 0 120 100"
            >
              {/* Left leaf */}
              <ellipse
                cx="30"
                cy="50"
                rx="25"
                ry="35"
                fill={getPlantColor()}
                className="transition-all duration-700"
                transform="rotate(-25 30 50)"
              />
              {/* Center leaf */}
              <ellipse
                cx="60"
                cy="30"
                rx="28"
                ry="40"
                fill={getPlantColor()}
                className="transition-all duration-700"
              />
              {/* Right leaf */}
              <ellipse
                cx="90"
                cy="50"
                rx="25"
                ry="35"
                fill={getPlantColor()}
                className="transition-all duration-700"
                transform="rotate(25 90 50)"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Plant Status Message */}
      <div className={`mb-6 rounded-2xl p-4 text-center ${getMessageColor()}`}>
        <p className="text-sm font-medium">{message}</p>
      </div>

      {/* Water Level Indicator */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-stone-600">
          <span>Soil Moisture</span>
          <span>{waterLevel}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-stone-200">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-500"
            style={{ width: `${waterLevel}%` }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={handleWater}
          className="flex-1 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          💧 Water Plant
        </button>
        <button
          onClick={handleReset}
          className="rounded-full border border-stone-300 bg-white px-6 py-3 font-medium transition hover:border-stone-900"
        >
          Reset
        </button>
      </div>

      {lastWatered && (
        <p className="mt-4 text-center text-xs text-stone-500">
          Last watered: {lastWatered.toLocaleTimeString()}
        </p>
      )}

      {/* Tips */}
      <div className="mt-6 rounded-2xl bg-stone-50 p-4 text-xs leading-relaxed text-stone-600">
        <p className="font-semibold text-stone-700">💡 Real Plant Tip:</p>
        <p className="mt-1">
          Just like this demo, real plants communicate their needs through their
          leaves. Drooping = thirsty. Yellowing = too much water. Learn to read
          your plant!
        </p>
      </div>
    </div>
  );
}
