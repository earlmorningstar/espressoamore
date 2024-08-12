import ChooseCoffee from "./ChooseCoffee";
import Discover from "./Discover";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import ProsOfShopping from "./ProsOfShopping";
import "./Styles.css";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ChooseCoffee />
      <FeaturedProducts />
      <Discover />
      <ProsOfShopping />
      <Footer />
    </div>
  );
}

export default HomePage;
