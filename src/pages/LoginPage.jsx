import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { GiCoffeeCup } from "react-icons/gi";
import { LuAsterisk } from "react-icons/lu";
import { readUserData } from "../dataUtils";
import { FadeLoader } from "react-spinners";
import "./Styles.css";

function LoginPage() {
  const navigate = useNavigate();
  const { handleLoginSuccess } = useOutletContext();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  const handleSignUpPage = () => {
    navigate("/SignUpPage");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
    if (!formData.username) {
      newErrors.username = "This field is required.";
    }
    if (!formData.password) {
      newErrors.password = "This field is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const existingUsers = readUserData();
      const user = existingUsers.find(
        (user) =>
          user.username === formData.username &&
          user.password === formData.password
      );
      if (user) {
        handleLoginSuccess();
        alert("Login Successful");
        navigate("/homePage");
      } else {
        alert("Invalid username or password");
      }
    }
  };

  if (loading) {
    return (
      <div className="loader-parent-ii">
        <FadeLoader
          height={30}
          margin={8}
          radius={5}
          speedMultiplier={2}
          color="rgb(48, 31, 21)"
        />
      </div>
    );
  }

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
          <button onClick={handleSignUpPage} className="login-button">
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;