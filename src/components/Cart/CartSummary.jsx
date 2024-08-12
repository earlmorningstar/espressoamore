import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../Util/formatter";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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

function CartSummary() {
  const cartCtx = useContext(CartContext);

  const subtotal = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const taxRate = 0.06;
  const shippingRate = 0.9;

  const taxes = subtotal * taxRate;
  const shipping = subtotal * shippingRate;
  const total = subtotal + taxes + shipping;

  return (
    <div className="cart-summary-parent">
      <div className="navlink-container">
        <NavLink className="navlinkBtn" to="/cartItemsPage">
          <button className="all-back-btn">Back to Cart</button>
        </NavLink>
      </div>
      <h1>Cart Summary</h1>
      {cartCtx.items.length === 0 ? (
        <span className="notification-msg">There are no items in the cart.</span>
      ) : (
        <>
          <motion.ul 
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          className="summary-list">
            {cartCtx.items.map((item) => (
              <motion.li variants={gridSquareVariants} key={item.id} className="summary-list-item">
                <h3>{item.name}</h3>
                <img src={`/images/pur${item.id}.jpg`} alt={item.name} width="100" />
                <div>
                  <p>Quantity: x{item.quantity}</p>
                  <p>Price: {currencyFormatter.format(item.price * item.quantity)}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul >
          <motion.div 
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          className="summary-details">
            <motion.h3 variants={gridSquareVariants}>Subtotal: {currencyFormatter.format(subtotal)}</motion.h3>
            <motion.h3 variants={gridSquareVariants}>Taxes (6%): {currencyFormatter.format(taxes)}</motion.h3>
            <motion.h3 variants={gridSquareVariants}>Shipping (9%): {currencyFormatter.format(shipping)}</motion.h3>
            <motion.h2 variants={gridSquareVariants}>Total: {currencyFormatter.format(total)}</motion.h2>
          </motion.div>
          <div className="navlink-container">
        <NavLink className="navlinkBtn" to="/checkoutFormPage">
          <button className="all-back-btn">Checkout</button>
        </NavLink>
      </div>
        </>
      )}
    </div>
  );
}

export default CartSummary;

