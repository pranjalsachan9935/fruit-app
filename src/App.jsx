import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import LandingPage from "./pages/LandingPage";
import { Button } from "@/components/ui/button";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import Services from "./pages/Services";
import FAQPage from "./pages/faq";
import Cart from "./pages/Cart";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { CartProvider } from "./context/CartContext";


const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      const isScrollable = document.body.scrollHeight > window.innerHeight;
      const hasScrolled = window.scrollY > 100;
      setShowButton(isScrollable && hasScrolled);
    };

    handleScrollVisibility();
    window.addEventListener("scroll", handleScrollVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/faqs" element={<FAQPage />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>

      {showButton && (
        <Button
          onClick={handleScroll}
          className="fixed bottom-4 right-4 p-3 w-12 h-12 rounded-full shadow-lg bg-lime-600 hover:bg-lime-700 transition-opacity"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default App;
