import ChooseCoffee from "./ChooseCoffee";
import Discover from "./Discover";
import FeaturedProducts from "./FeaturedProducts";
import HeroSection from "./HeroSection";
import "./Styles.css";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ChooseCoffee />
      <FeaturedProducts />
      <Discover />
    </>
  );
}

export default HomePage;
