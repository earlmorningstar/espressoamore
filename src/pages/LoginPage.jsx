import { useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { LuAsterisk } from "react-icons/lu";
import "./Styles.css";

function LoginPage() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = "This field is required.";
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      // Handle successful login logic here
    } else {
      console.log("Validation Errors:", errors);
    }
  };

  return (
    <div className="SignUp-parent" id="SignUp-id">
      <div className="productName">
        <p>EmpressoAmore</p>
        <GiCoffeeCup size={30} color="rgb(205, 196, 189)" />
      </div>
      <div className="signUp-info-holder">
        <span className="signUp-welcome-text">
          <h1>Welcome Back!</h1>
        </span>
        <p>Please log in to continue.</p>

        <form className="SignUp-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">
              Username
              <LuAsterisk color="red" size={10} />
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              required
            />
            {errors.username && (
              <p className="validation-error">{errors.username}</p>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="password">
              Password
              <LuAsterisk color="red" size={10} />
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              required
            />
            {errors.password && (
              <p className="validation-error">{errors.password}</p>
            )}
          </div>
          <button className="login-button" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
