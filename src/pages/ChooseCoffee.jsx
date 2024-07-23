import "./Styles.css";
import { NavLink } from "react-router-dom";

const video = { src: "/videos/chooseCoffeeVid1.mp4", alt: "Choose Coffee video" };


function ChooseCoffee() {
  return (
    <div className="chooseCoffee-parent">
      <span className="chooseCoffee-video-container">
        <video src={video.src} alt={video.alt} autoPlay muted controls />
      </span>
      <div className="chooseCoffee-textHolder">
        <h4>Our Coffee</h4>
        <h3>Select Your Perfect Coffee Blend</h3>
        <p>Over 90 varieties of coffee, expertly crafted and ready to serve by our seasoned baristas.</p>
        <span>
            <li>Espresso</li>
            <li>Latte</li>
            <li>Cappuccino</li>
            <li>Americano</li>
        </span>
        <NavLink className="navlinkBtn" to="/purchasePage">
          <button className="all-back-btn">More Menu</button>
        </NavLink>
      </div>
    </div>
  );
}

export default ChooseCoffee;
