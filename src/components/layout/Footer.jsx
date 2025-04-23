import { Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-lime-50 to-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
       
        <div className="flex flex-col md:flex-row justify-between gap-10">
         
          <div>
            <div className="text-2xl font-bold text-lime-600">Fruitz.</div>
            <p className="text-gray-500 mt-2 max-w-sm">
              Sip happiness with every drop — 100% natural, zero compromises.
              Bursting with real fruit, crafted for real moments.
            </p>
          </div>

        
          <div className="flex flex-col sm:flex-row gap-12 text-sm text-gray-600">
      
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-700 text-base pb-1">
                Company
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/about"
                    className="  text-gray-500 hover:text-lime-600 transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="   text-gray-500 hover:text-lime-600 transition"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="  text-gray-500 hover:text-lime-600 transition"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

           
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-700 text-base pb-1">
                Support
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/contact"
                    className="  text-gray-500 hover:text-lime-600 transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="  text-gray-500 hover:text-lime-600 transition"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <Link 
                    to="/faqs"
                    className="  text-gray-500 hover:text-lime-600 transition"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

       
            <div className="space-y-4 max-w-md">
              <h4 className="font-semibold text-gray-700 text-base ">
                Join Our Juicy Newsletter 🍹
              </h4>
              <p className="text-sm text-gray-500">
                Get updates, offers, and juicy insights straight to your inbox.
              </p>
              <div className="relative border-b border-gray-300">
                <input
                  type="email"
                  placeholder="Enter email here"
                  className="w-full bg-transparent border-none focus:outline-none py-2 pr-10 text-gray-700 placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-lime-600 transition"
                >
                  <ArrowRight size={20} />
                </button>
              </div>

            
              <div className="flex gap-4 mt-4 text-gray-500">
                <a href="#" className="hover:text-lime-600 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-lime-600 transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-lime-600 transition">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

       
        <hr className="bg-gray-200" />

      
        <div className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
          <p>© 2025 <span className="text-lime-600">Fruitz</span> Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
