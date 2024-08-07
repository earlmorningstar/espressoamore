import CartContext from "../../store/CartContext";
import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineError } from "react-icons/md";

function PaymentStatus() {
  const location = useLocation();
  const status = location.state?.status;
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const handleDone = () => {
    cartCtx.clearCart();
    navigate("/homePage");
  };

  return (
    <div className="payment-status-parent">
        {status !== "success" && (
      <div className="navlink-container" id="twin-nav-btn">
        <NavLink className="navlinkBtn" to="/homePage">
          <button className="all-back-btn">Home</button>
        </NavLink>
          <NavLink className="navlinkBtn" to="/checkoutFormPage">
            <button className="all-back-btn">Back</button>
          </NavLink>
      </div>
        )}
      <div className={`payment-status ${status}`} id="payment-order-update">
        {status === "success" ? (
          <div className="payment-success-error-style">
            <IoMdCheckmarkCircleOutline size={60} color="green" />
            <p>Payment and Order successful!.</p>
            <p>
              We will get back to you with more details via email within the
              next few minutes.
            </p>
            <p>Thank you for shopping with us.</p>
            <div className="cart-twin-btn">
              <button onClick={handleDone}>Done</button>
            </div>
          </div>
        ) : (
          <div className="payment-success-error-style">
            <MdOutlineError size={60} color="red" />
            <p>Payment Failed!</p>
            <p>There was an issue with your payment. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentStatus;
