import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../Util/formatter";
import { NavLink } from "react-router-dom";

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
          <ul className="summary-list">
            {cartCtx.items.map((item) => (
              <li key={item.id} className="summary-list-item">
                <h3>{item.name}</h3>
                <img src={`/images/pur${item.id}.jpg`} alt={item.name} width="100" />
                <div>
                  <p>Quantity: x{item.quantity}</p>
                  <p>Price: {currencyFormatter.format(item.price * item.quantity)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="summary-details">
            <h3>Subtotal: {currencyFormatter.format(subtotal)}</h3>
            <h3>Taxes (6%): {currencyFormatter.format(taxes)}</h3>
            <h3>Shipping (9%): {currencyFormatter.format(shipping)}</h3>
            <h2>Total: {currencyFormatter.format(total)}</h2>
          </div>
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

