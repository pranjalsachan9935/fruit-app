import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "100% Natural Ingredients",
    desc: "Only the freshest fruits go into every bottle. No artificial flavors, ever.",
  },
  {
    title: "No Added Sugar",
    desc: "Naturally sweet, because fruits are sweet enough!",
  },
  {
    title: "Eco-Friendly Packaging",
    desc: "We care about the planet as much as your health.",
  },
  {
    title: "Cold-Pressed Goodness",
    desc: "Preserves more nutrients and flavor for a healthier sip.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Why Choose <span className="text-lime-600">Us?</span>
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        Discover what makes our juices refreshingly better 🍹
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
          >
            <CheckCircle className="text-lime-600 w-6 h-6 mx-auto mb-3" />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {reason.title}
            </h3>
            <p className="text-gray-600 text-sm">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
