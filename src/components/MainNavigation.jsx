import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LikedItemsContext from "../store/LikedItemsContext";
import CartContext from "../store/CartContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GiCoffeeCup } from "react-icons/gi";
import { PiShoppingCartFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import "./MainNavigation.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "rgb(205, 196, 189)",
  color: "rgb(111, 66, 56)",
  boxShadow: 24,
  p: 4,
};

function MainNavigation({ title, children, isLoggedIn, handleLogout }) {
  const navigate = useNavigate();

  const likedItemCtx = useContext(LikedItemsContext);
  const cartCtx = useContext(CartContext);

  const uniqueLikedItems = new Set(likedItemCtx.items.map((item) => item.id));
  const totalLikedItems = uniqueLikedItems.size;

  const uniqueCartItems = new Set(cartCtx.items.map((item) => item.id));
  const totalCartItems = uniqueCartItems.size;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleHomePage = () => {
    navigate("/homePage");
  };

  return (
    <>
      <nav className="navbar">
        <p onClick={handleHomePage}>
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
                  <sup>{totalLikedItems}</sup>
                </span>
              </NavLink>
              <NavLink
                to="/cartItemsPage"
                className="cart-profile-icon-nav-parent"
              >
                <span className="cart-num">
                  <PiShoppingCartFill color="rgb(205, 196, 189)" size={20} />
                  <sup>{totalCartItems}</sup>
                </span>
              </NavLink>
              <NavLink to='/userProfilePage' className="cart-profile-icon-nav-parent">
                <CgProfile color="rgb(205, 196, 189)" size={20} />
              </NavLink>
            </div>
            <span onClick={handleOpen}>Logout</span>
          </section>
        )}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="modal-modal-title" variant="h6" component="h2">
            Do you want logout?
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <button className="modal-button" onClick={handleClose}>
              No
            </button>
            <button
              className="modal-button"
              onClick={() => {
                handleLogout();
                handleClose();
              }}
            >
              Yes
            </button>
          </Box>
        </Box>
      </Modal>
      </nav>
    </>
  );
}

export default MainNavigation;
