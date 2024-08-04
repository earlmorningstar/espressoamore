import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import { GiCoffeeCup } from "react-icons/gi";
import { PiShoppingCartFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";

function MainNavigation({ title, children, isLoggedIn, handleLogout }) {
  return (
    <>
      <nav className="navbar">
        <p>
          {title}
          <GiCoffeeCup size={30} color="rgb(205, 196, 189)" />
        </p>
        <div className="navDiv">
          <span>{children}</span>
        </div>

        {isLoggedIn && (
          <section className="nav-btn-holder">
            <div className="cart-profile-icon-parent">
              <NavLink to="/favoritedItemsPage" className="cart-profile-icon-nav-parent">
              <span className="cart-num"><FaHeart size={16}/> <p>(1)</p></span>
              </NavLink>
              <NavLink to="/cartItemsPage" className="cart-profile-icon-nav-parent">
                <span className="cart-num"><PiShoppingCartFill color="rgb(205, 196, 189)" size={20} /> <p>(1)</p></span>
              </NavLink>
              <NavLink className="cart-profile-icon-nav-parent">
                <CgProfile color="rgb(205, 196, 189)" size={20} />
              </NavLink>
            </div>
            <span onClick={handleLogout}>Logout</span>
          </section>
        )}
      </nav>
    </>
  );
}

export default MainNavigation;
