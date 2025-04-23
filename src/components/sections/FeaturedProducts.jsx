import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../../context/CartContext";
import { ShoppingCart, Star } from "lucide-react";
import mango from "../../assets/1745233497346.png";
import berry from "../../assets/1745233563520.png";
import citrus from "../../assets/1745233455395.png";

const juices = [
  {
    name: "Mango Delight",
    desc: "Tropical sweetness in every sip.",
    image: mango,
    price: 3.99,
    rating: 4,
    id:1,
  },
  {
    name: "Berry Blast",
    desc: "A juicy fusion of strawberries & blueberries.",
    image: berry,
    price: 4.49,
    rating: 5,
    id:2,
  },
  {
    name: "Citrus Punch",
    desc: "Zesty refreshment made with real oranges.",
    image: citrus,
    price: 3.49,
    rating: 3,
    id:3,
  },
];

export default function FeaturedJuices() {

  const { addToCart } = useCart();
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Featured Juices
        </h2>
        <p className="text-gray-500 mt-2">
          Handpicked favorites for your daily dose of freshness 🍹
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {juices.map((juice, index) => (
          <Card key={index} className="hover:shadow-md transition rounded-2xl">
            <CardHeader>
              <div className="relative w-full h-70 rounded-xl overflow-hidden flex justify-center items-center bg-gray-50">
                <img
                  className="object-contain w-full h-full mx-auto transition-transform duration-300 transform hover:scale-105"
                  src={juice.image}
                  alt={juice.name}
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">
                {juice.name}
              </CardTitle>
              <CardDescription className="text-sm mt-1 text-gray-500 mb-2">
                {juice.desc}
              </CardDescription>

              <div className="flex items-center justify-between mt-2">
                <span className="text-base font-medium text-green-600">
                  ${juice.price.toFixed(2)}
                </span>

                <div className="flex gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < juice.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>

             <Button onClick={() => addToCart(juice)} className="mt-4 w-full bg-lime-600 hover:bg-lime-700 text-white text-sm rounded-full active:scale-95 transition duration-200">
                <ShoppingCart className="mr-1" size={16} />
                Add To Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
