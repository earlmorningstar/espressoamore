import "./Styles.css";
import { useNavigate } from "react-router-dom";

const images = [
  { src: "/images/Premium-Coffee-Selection-jpeg.jpg", alt: "features image 1" },
  { src: "/images/Expertly-Crafted-Beverages.jpeg", alt: "features image 2" },
  { src: "/images/Customization-Options.jpeg", alt: "features image 3" },
  { src: "/images/Online-Ordering.jpeg", alt: "features image 4" },
  { src: "/images/Subscription-Service.jpeg", alt: "features image 5" },
  { src: "/images/Loyalty-Program.jpeg", alt: "features image 6" },
  { src: "/images/Brewing-Equipment.jpeg", alt: "features image 7" },
  { src: "/images/Educational-Content.jpg", alt: "features image 8" },
  { src: "/images/Sustainability-Initiatives.jpeg", alt: "features image 9" },
  { src: "/images/Community-Engagement.jpeg", alt: "features image 10" },
  { src: "/images/Gift-Cards-and-Merchandise.jpeg", alt: "features image 11" },
  { src: "/images/Customer-Support.jpg", alt: "features image 12" },
];

const headings = [
  "Premium Coffee Selection",
  "Expertly Crafted Beverages",
  "Customization Options",
  "Online Ordering",
  "Subscription Service",
  "Loyalty Program",
  "Brewing Equipment",
  "Educational Content",
  "Sustainability Initiatives",
  "Community Engagement",
  "Gift Cards and Merchandise",
  "Customer Support",
];

const descriptions = [
  "Discover our carefully curated selection of coffee beans from renowned coffee-growing regions worldwide. Each bean is handpicked for its exceptional quality and unique flavor profile, ensuring you enjoy the finest coffee experience. We are committed to ethical sourcing and sustainable farming practices.",
  "Enjoy a diverse menu of beverages, including espressos, lattes, cappuccinos, cold brews, and more. Our skilled baristas craft each drink with precision and passion, offering seasonal and specialty drinks that showcase the art of coffee making.",
  "Personalize your coffee to suit your taste with a variety of milk options, syrups, and toppings. Whether you prefer a strong brew or a milder flavor, you can customize your drink to match your unique preferences.",
  "Experience the convenience of online ordering for pickup or delivery. Our easy-to-use interface ensures a seamless shopping experience, allowing you to enjoy your favorite coffee from the comfort of your home.",
  "Sign up for our coffee subscription service and receive freshly roasted coffee delivered to your door. With flexible plans to suit your schedule and preferences, you’ll never run out of your favorite brew.",
  "Join our loyalty program and earn points with every purchase. Redeem points for discounts and rewards, and enjoy exclusive offers and promotions available only to our loyal customers.",
  "Explore our range of high-quality brewing equipment, including coffee makers, grinders, and accessories. We offer everything you need to brew the perfect cup at home, making it easy to replicate the Espresso Amore experience.",
  "Visit our blog for informative posts, tutorials, and guides on coffee brewing techniques. Learn tips and tricks for making the perfect cup at home and expand your coffee knowledge with our expert insights.",
  "We are committed to eco-friendly practices and reducing our environmental impact. Learn more about our sustainable sourcing, eco-friendly packaging, and efforts to minimize waste, ensuring that our great coffee is also great for the planet.",
  "Join our vibrant community of coffee lovers. Attend regular events such as coffee tastings, workshops, and meet-ups, and connect with others who share your passion for exceptional coffee.",
  "Give the gift of great coffee with our gift cards, perfect for any coffee enthusiast. Explore our range of branded merchandise, including mugs, apparel, and more, to show your love for Espresso Amore.",
  "Our responsive customer service team is here to assist with orders and inquiries. Visit our FAQ section for quick answers to common questions, or contact us directly for personalized support.",
];

function Features() {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/");
  };
  return (
    <div className="features-parent">
      {images.map((image, index) => (
        <div className="features-holder" key={index}>
          <div className="features-img">
            <img src={image.src} alt={image.alt} />
          </div>
          <h2>{headings[index]}</h2>
          <p>{descriptions[index]}</p>
        </div>
      ))}
      <button onClick={handleBackButton} className="discover-btn">
        Back
      </button>
    </div>
  );
}

export default Features;
