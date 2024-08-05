import { useContext } from "react";
import { NavLink } from "react-router-dom";
import LikedItemsContext from "../store/LikedItemsContext";
import CartContext from "../store/CartContext";
import { GiCoffeeCup } from "react-icons/gi";
import { PiShoppingCartFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import "./MainNavigation.css";

function MainNavigation({ title, children, isLoggedIn, handleLogout }) {
  const likedItemCtx = useContext(LikedItemsContext);
  const cartCtx = useContext(CartContext);

  const uniqueLikedItems = new Set(likedItemCtx.items.map((item) => item.id));
  const totalLikedItems = uniqueLikedItems.size;

  const uniqueCartItems = new Set(cartCtx.items.map((item) => item.id));
  const totalCartItems = uniqueCartItems.size;

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
              <NavLink
                to="/favoritedItemsPage"
                className="cart-profile-icon-nav-parent"
              >
                <span className="cart-num">
                  <FaHeart size={16} />
                  <p>'{totalLikedItems}'</p>
                </span>
              </NavLink>
              <NavLink
                to="/cartItemsPage"
                className="cart-profile-icon-nav-parent"
              >
                <span className="cart-num">
                  <PiShoppingCartFill color="rgb(205, 196, 189)" size={20} />
                  <p>'{totalCartItems}'</p>
                </span>
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
