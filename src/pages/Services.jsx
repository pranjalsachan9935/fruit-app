import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LucideGlassWater, LucideHeart, LucideSparkles } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-lime-600 mb-4">Our Services</h1>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Whether you're looking for something fresh, healthy, or fun — we craft every sip with care and creativity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card className="bg-white border border-orange-100 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
            <CardContent className="p-6 text-center">
              <LucideGlassWater className="w-10 h-10 text-orange-500 mb-3 mx-auto" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Custom Blends</h2>
              <p className="text-sm text-gray-600">
                Choose your favorite fruits and we’ll turn them into a delightful, refreshing drink just for you.
              </p>
              <p className="text-xs text-gray-400 mt-2">Made to order. Always fresh.</p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-orange-100 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
            <CardContent className="p-6 text-center">
              <LucideHeart className="w-10 h-10 text-lime-600 mb-3 mx-auto" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Tips</h2>
              <p className="text-sm text-gray-600">
                Personalized suggestions based on your wellness goals — immunity, digestion, or energy.
              </p>
              <p className="text-xs text-gray-400 mt-2">Blends backed by nutrition science.</p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-orange-100 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
            <CardContent className="p-6 text-center">
              <LucideSparkles className="w-10 h-10 text-yellow-400 mb-3 mx-auto" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Event Drinks</h2>
              <p className="text-sm text-gray-600">
                Bring a fruity twist to your events with our live drink stations and vibrant presentation.
              </p>
              <p className="text-xs text-gray-400 mt-2">Perfect for parties, weddings, and launches.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;