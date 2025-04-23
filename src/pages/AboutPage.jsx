import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideApple } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-rose-50 to-rose-100 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-rose-500 mb-4 flex items-center justify-center gap-2">
          <LucideApple className="w-8 h-8 text-rose-500" />
          Fruity Bliss
        </h1>
        <p className="text-md text-gray-600 mb-10 max-w-2xl mx-auto">
          Fruity Bliss is all about keeping things real and refreshing. We craft our drinks with natural fruit extracts and zero nonsense – no sugar overload, no preservatives.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="rounded-2xl t border-none ransition duration-300">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
              <p className="text-sm text-gray-600">
                To inspire healthy living through every bottle we serve. Simple ingredients, fresh blends, and a touch of love – that’s our secret.
              </p>
              <p className="text-xs text-gray-400 mt-2">Driven by nature, designed for you.</p>
            </CardContent>
          </Card>

          <Card className=" rounded-2xl border-none transition duration-300">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
              <p className="text-sm text-gray-600">
                Every drink is made fresh with handpicked fruits and crafted to support your wellness journey. Because good health should taste great.
              </p>
              <p className="text-xs text-gray-400 mt-2">Fresh. Honest. Delicious.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 text-lg rounded-full">
            Explore Our Flavors
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
