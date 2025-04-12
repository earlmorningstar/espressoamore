import { useEffect, useState, useContext } from "react";
import CartContext from "../store/CartContext";
import { NavLink } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";
import { currencyFormatter } from "../Util/formatter";
import { PropagateLoader } from "react-spinners";
import "./Styles.css";

//moving constants outside the main component
const IMAGES = Array.from({ length: 20 }, (_, i) => ({
  src: `/images/pur${i + 1}.jpg`,
  alt: `product image ${i + 1}`
}));

const CACHE_DURATION = 24 * 60 * 60 * 1000; 
const STORAGE_KEYS = {
  products: "featuredProducts",
  timestamp: "featuredProductsTimestamp"
};

//custom hook for featured products
function useFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [coffeeData, setCoffeeData] = useState([]);
  const [status, setStatus] = useState({
    loading: true,
    error: false
  });

  //fetching coffee data
  useEffect(() => {
    const fetchCoffeeData = async () => {
      try {
        const response = await fetch("https://fake-coffee-api.vercel.app/api");
        const data = await response.json();
        setCoffeeData(data);
      } catch (error) {
        console.error("Error fetching coffee data:", error);
        setStatus({ loading: false, error: true });
      }
    };

    fetchCoffeeData();
  }, []);

  //updating featured products when coffee data changes
  useEffect(() => {
    if (coffeeData.length === 0) return;
    
    const now = new Date().getTime();
    const storedTimestamp = localStorage.getItem(STORAGE_KEYS.timestamp);
    const storedProducts = localStorage.getItem(STORAGE_KEYS.products);
    
    //checking if we have valid cached products
    if (storedTimestamp && storedProducts && now - storedTimestamp < CACHE_DURATION) {
      setProducts(JSON.parse(storedProducts));
    } else {
      //get new random products
      const shuffled = [...coffeeData].sort(() => 0.5 - Math.random());
      const newProducts = shuffled.slice(0, 3);
      
      //update localStorage
      localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(newProducts));
      localStorage.setItem(STORAGE_KEYS.timestamp, now.toString());
      
      setProducts(newProducts);
    }
    
    setStatus({ loading: false, error: false });
  }, [coffeeData]);

  return { products, status };
}

//product card component
function ProductCard({ coffee, image, isInCart, onToggleCart }) {
  return (
    <div key={coffee.id}>
      <div className="ft-prod-img">
        <img src={image.src} alt={coffee.name} width="200" />
      </div>

      <div className="featured-prod-info">
        <h2>{coffee.name}</h2>
        <p>
          {coffee.description.substring(0, 60)}
          {coffee.description.length > 60 ? "..." : ""}
        </p>
        <p>
          Price: <b>{currencyFormatter.format(coffee.price)}</b>
        </p>
        <span className="prod-btn-holder">
          <NavLink
            className="ft-navLink"
            to={`/purchaseDetailPage/${coffee.id}`}
            state={{ coffee, image }}
          >
            <button className="ft-view-btn">View Product</button>
          </NavLink>
          <button
            onClick={() => onToggleCart(coffee)}
            className={isInCart ? "add-to-cart-btn active" : "add-to-cart-btn"}
          >
            <PiShoppingCartThin size={18} />
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </span>
      </div>
    </div>
  );
}

function FeaturedProducts() {
  const cartCtx = useContext(CartContext);
  const { products, status } = useFeaturedProducts();
  
  const isItemInCart = (coffeeId) => {
    return cartCtx.items.some((item) => item.id === coffeeId);
  };

  if (status.loading) {
    return (
      <div className="loader-parent" id="feat-loader-parent-id">
        <PropagateLoader
          height={30}
          margin={8}
          radius={5}
          speedMultiplier={1}
          color="rgb(219, 188, 160)"
        />
      </div>
    );
  }

  return (
    <div className="featuredProduct-container">
      <h2>Our Featured Products</h2>
      <h3>
        Experience the Best of Espresso Amore: Handpicked Coffee Favorites Just
        for You.
      </h3>

      {status.error ? (
        <div className="err-msg">
          <span>
            Sorry, we are experiencing issues loading our coffee selection.
          </span>
          <span>
            Please try again later. We apologize for any inconvenience and
            appreciate your patience.
          </span>
        </div>
      ) : (
        <div className="featured-products-list">
          {products.map((coffee, index) => (
            <ProductCard
              key={coffee.id}
              coffee={coffee}
              image={IMAGES[index]}
              isInCart={isItemInCart(coffee.id)}
              onToggleCart={cartCtx.toggleItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturedProducts;