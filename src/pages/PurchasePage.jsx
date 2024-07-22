import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { ScaleLoader } from "react-spinners";
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

function PurchasePage() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCoffeeData = async () => {
    try {
      const customCoffeeResponse = await fetch(
        "https://fake-coffee-api.vercel.app/api"
      );
      const customCoffeeData = await customCoffeeResponse.json();

      setCoffeeData(customCoffeeData);
    } catch (error) {
      console.error("Error fetching coffee data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoffeeData();
  }, []);

  if (loading) {
    return (
      <div className="loader-parent">
        <ScaleLoader
          height={35}
          margin={8}
          radius={5}
          speedMultiplier={1}
          width={8}
          color="rgb(48, 31, 21)"
        />
      </div>
    );
  }

  const handleCoffeeClick = (coffee, index) => {
    navigate(`/purchaseDetailPage/${coffee.id}`, {
      state: { coffee, image: imageList[index] },
    });
  };

  return (
    <div className="purchasePage-parent">
      <div className="purchasePage-header">
        <h1>Coffee Menu:</h1>
        <NavLink className="discover-btn" to="/">
          <button className="icon-align">
             Back
          </button>
        </NavLink>
      </div>
      <h3>
        Browse our selection and choose your favorite coffee to add to your cart
        and place an order.
      </h3>
      <ul className="purchaseProduct">
        {coffeeData.map((coffee, index) => (
          <div key={coffee.id}>
            <li>
              <div className="prod-img">
                <img src={imageList[index].src} alt={coffee.name} width="200" />
              </div>
              <div className="prod-info">
                <div className="prodtitle-favBtn-holder">
                  <h2>{coffee.name}</h2>
                  <IoIosHeartEmpty size={20} />
                </div>
                <p>{coffee.description}</p>
                <p>Price: ${coffee.price}</p>
                <span className="prod-btn-holder">
                  <button onClick={() => handleCoffeeClick(coffee, index)}>
                    View Product
                  </button>
                  <button>
                    <PiShoppingCartThin size={18} />
                    Add to Cart
                  </button>
                </span>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PurchasePage;
