import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";
import { ScaleLoader } from "react-spinners";

function PurchaseDetailPage() {
  const location = useLocation();
  const { coffee, image } = location.state;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!coffee) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [coffee]);

  if (loading) {
    return <div className="loader-parent">
    <ScaleLoader
      height={35}
      margin={8}
      radius={5}
      speedMultiplier={1}
      width={8}
      color="rgb(48, 31, 21)"
    />
  </div>;
  }

  if (!coffee) {
    return <div>Coffee not found</div>; //Work on this!
  }

  return (
    <div className="purchaseDetailPage-parent">
      <div className="purchaseDetail-header">
        <h1>{coffee.name}</h1>
        <NavLink className="discover-btn" to="/purchasePage">
          <button className="icon-align">Back</button>
        </NavLink>
      </div>
      <div className="purchaseDetail-content">
        <div className="purchaseDetail-content-sideA">
          <img src={image.src} alt={coffee.name} width="200" />
          <p className="prod-desc">{coffee.description}</p>
        </div>
        <div className="purchaseDetail-info">
          <p>
            <b>Price: $</b> {coffee.price}
          </p>
          <p>
            <b>Region:</b> {coffee.region}
          </p>
          <p>
            <b>Weight:</b> {coffee.weight}g
          </p>
          <p>
            <b>Roast Level:</b> {coffee.roast_level}
          </p>
          <h3>Flavor Profile:</h3>
          <ul>
            {coffee.flavor_profile.map((flavor, index) => (
              <li key={index}>{flavor}</li>
            ))}
          </ul>
          <h3>Grind Options:</h3>
          <ul>
            {coffee.grind_option.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <div className="prod-btn-holder">
            <button>
              <PiShoppingCartThin size={18} />
              Add to Cart
            </button>
          </div>

          <span><i> Explore the rich details of your selected coffee. Discover its
            unique flavor profile, grind options, and origin. Add it to your
            cart to enjoy a premium coffee experience.</i>
           
          </span>
        </div>
      </div>
    </div>
  );
}

export default PurchaseDetailPage;
