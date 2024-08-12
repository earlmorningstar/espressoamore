import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../Util/formatter";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";

function CartItem() {
  const cartCtx = useContext(CartContext);

  const totalSum = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const navigate = useNavigate();

  const handleSummaryPage = () => {
    navigate("/cartSummaryPage");
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="cart-parent">
      <div className="navlink-container" id="twin-nav-btn">
        <NavLink className="navlinkBtn" to="/homePage">
          <button className="all-back-btn">Home</button>
        </NavLink>
        <NavLink className="navlinkBtn" to="/purchasePage">
          <button className="all-back-btn">Add an item</button>
        </NavLink>
      </div>
      <h1>Your Cart Items:</h1>
      {cartCtx.items.length === 0 ? (
        <span className="notification-msg">
          You don't have any selected items in cart to view.
        </span>
      ) : (
        <>
          <motion.ul
            variants={gridContainerVariants}
            initial="hidden"
            animate="show"
          >
            {cartCtx.items.map((item) => (
              <motion.li
                variants={gridSquareVariants}
                className="cart-list"
                key={item.id}
              >
                <div>
                  <h3>{item.name}:</h3>
                </div>
                <h4> Qty: x{item.quantity}</h4>
                <span onClick={() => cartCtx.addItem(item)}>
                  <IoMdAdd size={15} color="rgb(219, 188, 160)" />
                </span>
                <h4>
                  Price: {currencyFormatter.format(item.price * item.quantity)}
                </h4>
                <span onClick={() => cartCtx.removeItem(item.id)}>
                  <LuMinus size={15} color="rgb(219, 188, 160)" />
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </>
      )}
      <h3>Total Cart Sum: {currencyFormatter.format(totalSum)}</h3>
      {cartCtx.items.length > 0 && (
        <div className="cart-twin-btn">
          <button onClick={cartCtx.clearCart}>Clear Cart</button>
          <button onClick={handleSummaryPage}>See Summary</button>
        </div>
      )}
    </div>
  );
}

export default CartItem;
