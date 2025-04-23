import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-text", {
        y: 50,
        ease: "power2.out",
        duration: 2,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, aboutRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section
      className="h-[80vh] flex items-center bg-gradient-to-br from-rose-50 to-white justify-center text-white"
      ref={aboutRef}
    >
      <div className="relative z-10 max-w-3xl text-center px-4">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 about-text">
          A <span className="text-rose-500">Fruitful</span> Journey
        </h2>
        <p className="text-gray-600 about-text">
          We promise to leave your varied taste buds delighted, just as our
          journey has been—vibrant, flavorful, and full of passion. From the
          moment becoming one of the most trusted names in processed fruit
          products, our mission has remained unchanged: to bring nature’s finest
          flavors straight to your glass. Join us on this delicious adventure
          and discover the taste of pure fruit goodness! 🍊🍓🍍
        </p>
        <div className="mt-6 about-text">
          <Button className="rounded-full px-6 py-2 text-white bg-rose-500 hover:bg-rose-600 transition">
            Shop now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
