import { useEffect, useState, useContext } from "react";
import CartContext from "../store/CartContext";
import { NavLink } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";
import { currencyFormatter } from "../Util/formatter";
import "./Styles.css";

const imageList = [
  { src: "/images/pur1.jpg", alt: "product image 1" },
  { src: "/images/pur2.jpg", alt: "product image 2" },
  { src: "/images/pur3.jpg", alt: "product image 3" },
  { src: "/images/pur4.jpg", alt: "product image 4" },
  { src: "/images/pur5.jpg", alt: "product image 5" },
  { src: "/images/pur6.jpg", alt: "product image 6" },
  { src: "/images/pur7.jpg", alt: "product image 7" },
  { src: "/images/pur8.jpg", alt: "product image 8" },
  { src: "/images/pur9.jpg", alt: "product image 9" },
  { src: "/images/pur10.jpg", alt: "product image 10" },
  { src: "/images/pur11.jpg", alt: "product image 11" },
  { src: "/images/pur12.jpg", alt: "product image 12" },
  { src: "/images/pur13.jpg", alt: "product image 13" },
  { src: "/images/pur14.jpg", alt: "product image 14" },
  { src: "/images/pur15.jpg", alt: "product image 15" },
  { src: "/images/pur16.jpg", alt: "product image 16" },
  { src: "/images/pur17.jpg", alt: "product image 17" },
  { src: "/images/pur18.jpg", alt: "product image 18" },
  { src: "/images/pur19.jpg", alt: "product image 19" },
  { src: "/images/pur20.jpg", alt: "product image 20" },
];

function FeaturedProducts() {
  const cartCtx = useContext(CartContext);

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [coffeeData, setCoffeeData] = useState([]);
  const [error, setError] = useState(false);

  const fetchCoffeeData = async () => {
    try {
      const response = await fetch("https://fake-coffee-api.vercel.app/api");
      const data = await response.json();
      setCoffeeData(data);
    } catch (error) {
      console.error("Error fetching coffee data:", error);
      setError(true);
    }
  };

  const getRandomProducts = (data) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const updateFeaturedProducts = () => {
    const now = new Date().getTime();
    const storedTimestamp = localStorage.getItem("featuredProductsTimestamp");
    const storedProducts = localStorage.getItem("featuredProducts");

    if (
      storedTimestamp &&
      storedProducts &&
      now - storedTimestamp < 24 * 60 * 60 * 1000
    ) {
      setFeaturedProducts(JSON.parse(storedProducts));
    } else {
      const newFeaturedProducts = getRandomProducts(coffeeData);
      localStorage.setItem(
        "featuredProducts",
        JSON.stringify(newFeaturedProducts)
      );
      localStorage.setItem("featuredProductsTimestamp", now);
      setFeaturedProducts(newFeaturedProducts);
    }
  };

  useEffect(() => {
    fetchCoffeeData();
  }, []);

  useEffect(() => {
    if (coffeeData.length > 0) {
      updateFeaturedProducts();
    }
  }, [coffeeData]);

  const isItemInCart = (coffeeId) => {
    return cartCtx.items.some((item) => item.id === coffeeId);
  };

  return (
    <div className="featuredProduct-container">
      <h2>Our Featured Products</h2>

      <h3>
        Experience the Best of Espresso Amore: Handpicked Coffee Favorites Just
        for You.
      </h3>

      {error ? (
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
          {featuredProducts.map((coffee, index) => (
            <div key={coffee.id}>
              <div className="ft-prod-img">
                <img src={imageList[index].src} alt={coffee.name} width="200" />
              </div>

              <div className="featured-prod-info">
                <h2>{coffee.name}</h2>
                <p>
                  {coffee.description.substring(0, 70)}
                  {coffee.description.length > 70 ? "..." : ""}
                </p>
                <p>
                  Price: <b>{currencyFormatter.format(coffee.price)}</b>
                </p>
                <span className="prod-btn-holder">
                  <NavLink
                    className="ft-navLink"
                    to={`/purchaseDetailPage/${coffee.id}`}
                    state={{ coffee, image: imageList[index] }}
                  >
                    <button className="ft-view-btn ">View Product</button>
                  </NavLink>
                  <button
                    onClick={() => cartCtx.toggleItem(coffee)}
                    className={
                      isItemInCart(coffee.id)
                        ? "add-to-cart-btn active"
                        : "add-to-cart-btn"
                    }
                  >
                    <PiShoppingCartThin size={18} />
                    {isItemInCart(coffee.id)
                      ? "Remove from Cart"
                      : "Add to Cart"}
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturedProducts;
