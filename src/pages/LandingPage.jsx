
import FeaturedPosts from "@/components/sections/FeaturedProducts";
import Slider from "../components/sections/OfferSlider";
import AboutUs from "../components/sections/AboutUs";
import WhyChooseUs from "../components/sections/WhyChooseUs";


export default function LandingPage() {
  return (
    <div>
      <Slider/>
      <FeaturedPosts />
      <AboutUs />
      <WhyChooseUs/>
    </div>
  );
}
