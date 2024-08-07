import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuAsterisk } from "react-icons/lu";
import { Box, Collapse, Alert, AlertTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function CheckoutForm({ onSubmit }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePlaceOrder = () => {
    if (validate()) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        navigate("/paymentStatusPage", { state: { status: "success" } });
      }, 6000);
    } else {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        navigate("/paymentStatusPage", { state: { status: "error" } });
      }, 5000);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateField = (name, value) => {
    let tempErrors = { ...errors };
    switch (name) {
      case "name":
        tempErrors[name] = value ? "" : "This field is required.";
        break;
      case "email":
        tempErrors[name] = value
          ? /\S+@\S+\.\S+/.test(value)
            ? ""
            : "Email address is not valid."
          : "This field is required.";
        break;
      case "address":
        tempErrors[name] = value ? "" : "This field is required.";
        break;
      case "cardNumber":
        tempErrors[name] = value
          ? /^[0-9]{16}$/.test(value)
            ? ""
            : "Card number is not valid."
          : "This field is required.";
        break;
      case "expiryDate":
        tempErrors[name] = value
          ? /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(value)
            ? ""
            : "Expiry date is not valid."
          : "This field is required.";
        break;
      case "cvv":
        tempErrors[name] = value
          ? /^[0-9]{3,4}$/.test(value)
            ? ""
            : "CVV is not valid."
          : "This field is required.";
        break;
      default:
        break;
    }
    setErrors(tempErrors);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "This field is required.";
    tempErrors.email = formData.email
      ? /\S+@\S+\.\S+/.test(formData.email)
        ? ""
        : "Email address is not valid."
      : "This field is required.";
    tempErrors.address = formData.address ? "" : "This field is required.";
    tempErrors.cardNumber = formData.cardNumber
      ? /^[0-9]{16}$/.test(formData.cardNumber)
        ? ""
        : "Card number is not valid."
      : "This field is required.";
    tempErrors.expiryDate = formData.expiryDate
      ? /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(formData.expiryDate)
        ? ""
        : "Expiry date is not valid."
      : "This field is required.";
    tempErrors.cvv = formData.cvv
      ? /^[0-9]{3,4}$/.test(formData.cvv)
        ? ""
        : "CVV is not valid."
      : "This field is required.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSaveInfo = () => {
    if (validate()) {
      setAlertOpen(true);
      setErrorAlertOpen(false);
    } else {
      setErrorAlertOpen(true);
      setTimeout(() => {
        setErrorAlertOpen(false);
      }, 7000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="checkout-form-parent">
      <div className="navlink-container">
        <NavLink className="navlinkBtn" to="/cartSummaryPage">
          <button className="all-back-btn">Back</button>
        </NavLink>
      </div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Billing Information:</h2>

        <div className="input-group" id="checkout-input-grp">
          <label htmlFor="name">
            Name: <LuAsterisk color="red" size={10} />
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && (
            <span className="validation-error">{errors.name}</span>
          )}
        </div>

        <div className="input-group" id="checkout-input-grp">
          <label htmlFor="email">
            Email Address: <LuAsterisk color="red" size={10} />
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && (
            <span className="validation-error">{errors.email}</span>
          )}
        </div>

        <div className="input-group" id="checkout-input-grp">
          <label htmlFor="address">
            Address: <LuAsterisk color="red" size={10} />
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.address && (
            <span className="validation-error">{errors.address}</span>
          )}
        </div>

        <div className="input-group" id="checkout-input-grp">
          <label htmlFor="cardNumber">
            Card Number: <LuAsterisk color="red" size={10} />
          </label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.cardNumber && (
            <span className="validation-error">{errors.cardNumber}</span>
          )}
        </div>

        <div className="input-group" id="checkout-input-grp">
          <label htmlFor="expiryDate">
            Expiry Date: <LuAsterisk color="red" size={10} />
          </label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.expiryDate && (
            <span className="validation-error">{errors.expiryDate}</span>
          )}
        </div>

        <div className="input-group" id="checkout-input-grp">
          <label htmlFor="cvv">
            CVV: <LuAsterisk color="red" size={10} />
          </label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.cvv && <span className="validation-error">{errors.cvv}</span>}
        </div>
      </form>
      <div className="success-alert-box">
        <Box sx={{ width: "100%" }}>
          <Collapse in={alertOpen}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlertOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Information saved successfully!
            </Alert>
          </Collapse>
        </Box>
      </div>
      <div className="success-alert-box">
        <Box sx={{ width: "100%" }}>
          <Collapse in={errorAlertOpen}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setErrorAlertOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <AlertTitle>Error</AlertTitle>
              Please fill in all required fields with valid information.
            </Alert>
          </Collapse>
        </Box>
      </div>
      <div className="cart-twin-btn">
        <button type="button" onClick={handleSaveInfo}>
          Save Info
        </button>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default CheckoutForm;