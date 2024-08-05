import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../Util/formatter";
import { NavLink } from "react-router-dom";

import { IoMdAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";

function CartItem() {
  const cartCtx = useContext(CartContext);

  const totalSum = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-parent" >
        <div className="navlink-container" id="twin-nav-btn">
        <NavLink className="navlinkBtn" to="/homePage">
          <button className="all-back-btn">Home</button>
        </NavLink>
        <NavLink className="navlinkBtn" to="/purchasePage">
          <button className="all-back-btn">Back</button>
        </NavLink>
      </div>
      <h1> Your Cart Items:</h1>
      {cartCtx.items.length === 0 ? (
        <span>You don't have any selected items in cart to view.</span>
      ) : (
        <>
          <ul>
            {cartCtx.items.map((item) => (
              <li className="cart-list" key={item.id}>
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
              </li>
            ))}
          </ul>
        </>
      )}
      <h3>Total Cart Sum: {currencyFormatter.format(totalSum)}</h3>
      {cartCtx.items.length > 0 && (
        <div className="cart-twin-btn">
            <button onClick={cartCtx.clearCart}>
          Clear Cart
        </button>
        <button>
          Checkout
        </button>
        </div>
      )}
    </div>
  );
}

export default CartItem;
