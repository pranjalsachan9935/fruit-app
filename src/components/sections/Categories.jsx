import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { name: "Citrus Blends", color: "bg-yellow-100", icon: "🍋" },
  { name: "Berry Mix", color: "bg-rose-100", icon: "🍓" },
  { name: "Tropical Splash", color: "bg-orange-100", icon: "🥭" },
  { name: "Green Goodness", color: "bg-lime-100", icon: "🥝" },
  { name: "Watermelon Wave", color: "bg-red-100", icon: "🍉" },
  { name: "Peachy Picks", color: "bg-orange-200", icon: "🍑" },
  { name: "Coconut Chill", color: "bg-sky-100", icon: "🥥" },
  { name: "Apple Fizz", color: "bg-green-100", icon: "🍏" },
];

export default function CategorySection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#FFF7F0] to-[#FFFAF5] relative">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold text-[#FF5A5F]">
          Explore by <span className="text-lime-600">Category</span>
        </h2>

        <div className="relative">
         
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-700 hover:text-[#FF5A5F] transition-all ease-in-out duration-200 w-10 h-10 flex items-center justify-center rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-700 hover:text-[#FF5A5F] transition-all ease-in-out duration-200 w-10 h-10 flex items-center justify-center rounded-full"
          >
            <ChevronRight size={24} />
          </button>

          
          <div
            ref={scrollRef}
            className="overflow-x-hidden overflow-y-hidden no-scrollbar"
          >
            <div className="flex gap-4 md:gap-6 w-max px-1">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className={`min-w-[140px] sm:min-w-[160px] rounded-3xl ${cat.color} hover:scale-105 transition-transform duration-200 shadow-sm hover:shadow-md p-5 flex flex-col items-center justify-center text-center cursor-pointer`}
                >
                  <div className="text-4xl mb-2">{cat.icon}</div>
                  <div className="text-base font-semibold text-gray-700">{cat.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
