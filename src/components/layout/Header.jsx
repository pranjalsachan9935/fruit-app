import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const {cartCount} = useCart(); 

  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-lime-600 tracking-wide">
          Fruitz.
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-lime-600 transition">Home</Link>
          <Link to="/about" className="hover:text-lime-600 transition">About</Link>
          <Link to="/services" className="hover:text-lime-600 transition">Services</Link>
          <Link to="/faqs" className="hover:text-lime-600 transition">FAQs</Link>
        </nav>

      
        <Link to="/cart" className="hidden md:flex items-center gap-2 bg-lime-600 text-white px-5 font-bold py-2 rounded-full hover:bg-lime-700 transition relative">
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-white text-lime-600 text-[10px] font-bold rounded-full h-3.5 w-3.5 leading-none flex items-center justify-center">
              {cartCount}
            </span>
          </div>
          Grab It
        </Link>
      </div>

   
      {isOpen && (
        <div className="md:hidden mt-2 pb-4 space-y-2 text-gray-700 font-medium">
          <Link to="/" className="block hover:text-lime-600 transition" onClick={()=> setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-lime-600 transition"  onClick={()=> setIsOpen(false)}>About</Link>
          <Link to="/services" className="block hover:text-lime-600 transition"  onClick={()=> setIsOpen(false)}>Services</Link>
          <Link to="/faqs" className="block hover:text-lime-600 transition"  onClick={()=> setIsOpen(false)}>FAQs</Link>
          
          <Link to="/cart" className="w-full flex items-center justify-center gap-2 bg-lime-600 text-white px-4 py-2 rounded-full hover:bg-lime-700 transition mt-3 relative">
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-white text-lime-600 text-[10px] font-bold rounded-full h-3.5 w-3.5 leading-none flex items-center justify-center">
                {cartCount}
              </span>
            </div>
            Grab It
          </Link>
        </div>
      )}
    </header>
  );
}
