import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LucidePhoneCall } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-pink-50 to-pink-100 py-12 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-pink-500 mb-3 flex items-center justify-center gap-2">
          <LucidePhoneCall className="w-6 h-6 text-pink-500" />
          Contact Us
        </h1>
        <p className="text-center text-md text-gray-600 mb-6">
          We'd love to hear from you – whether it's a question, feedback, or just a hello.
        </p>

        <Card className=" border-none rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <Input type="text" placeholder="Your Name" className="text-sm text-gray-700 placeholder:text-gray-400" />
            <Input type="email" placeholder="Your Email" className="text-sm text-gray-700 placeholder:text-gray-400" />
            <Textarea placeholder="Your Message" className="text-sm text-gray-700 placeholder:text-gray-400" rows={5} />
            <Button className="bg-pink-500 hover:bg-pink-600 text-white w-full rounded-full">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
