import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
      });

      gsap.from(".hero-img", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-full min-h-screen bg-gradient-to-br from-lime-50 to-white flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center lg:text-left ">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 hero-text">
            Refreshingly <span className="text-lime-600">Bold</span>,<br />
            Naturally{" "}
            <span className="text-rose-500">Fruity</span>.
          </h1>
          <p className="text-base md:text-lg text-gray-600 my-0 max-w-md mx-auto lg:mx-0 hero-text">
            Quench your thirst with 100% real fruit. No sugar, no nonsense. Just
            pure delicious energy.
          </p>
          <button className="bg-lime-600 hover:bg-lime-700 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-md transition hero-text">
            Shop Now
          </button>
        </div>

        <div className="relative flex justify-center hero-img">
          <div className="relative w-[90%] max-w-[300px] h-[90vw] max-h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 via-yellow-100 to-lime-200 rounded-full blur-2xl scale-105 z-0"></div>
            <img
              src="/src/assets/1745233563520.png"
              alt="Fruit Drink Bottle"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
