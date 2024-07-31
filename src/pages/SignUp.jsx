import { useState, useEffect } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { LuAsterisk } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { readUserData, saveUserData } from "../dataUtils";
import { FadeLoader } from "react-spinners";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import "./Styles.css";

function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);
  const handleTermsOfUsePage = () => navigate("/termsOfUsePage");
  const handlePrivacyPolicyPage = () => navigate("/privacyPolicyPage");

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    age: "",
    password: "",
    confirmPassword: "",
    termsAndPolicy: false,
  });

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = "This field is required.";
    } else {
      switch (name) {
        case "email":
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = "Email must be formatted correctly.";
          }
          break;
        case "age":
          if (!/^\d+$/.test(value) || value < 18) {
            error = "Age must be a number and at least 18.";
          }
          break;
        case "password":
          if (value.length < 6) {
            error = "Password must be at least 6 characters long.";
          }
          break;
        case "confirmPassword":
          if (value !== formData.password) {
            error = "Passwords must match.";
          }
          break;
        default:
          break;
      }
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "confirmPassword") {
        newErrors[key] = "This field is required.";
      }
      if (
        key === "email" &&
        formData[key] &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[key])
      ) {
        newErrors[key] = "Email must be formatted correctly.";
      }
      if (
        key === "age" &&
        formData[key] &&
        (!/^\d+$/.test(formData[key]) || formData[key] < 12)
      ) {
        newErrors[key] =
          "Age must be a number and you must be at least 12 years old.";
      }
      if (key === "password" && formData[key] && formData[key].length < 6) {
        newErrors[key] = "Password must be at least 6 characters long.";
      }
      if (
        key === "confirmPassword" &&
        formData[key] &&
        formData[key] !== formData.password
      ) {
        newErrors[key] = "Passwords must match.";
      }
      if (key === "termsAndPolicy" && !formData[key]) {
        newErrors[key] = "You must agree to the terms and policy.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogInPage = () => {
    navigate("/loginPage");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const existingUsers = readUserData();
      const newUser = {
        email: formData.email,
        username: formData.username,
        age: formData.age,
        password: formData.password,
      };
      saveUserData([...existingUsers, newUser]);
      setAlertOpen(true);
      setTimeout(() => {
        setAlertOpen(false);
        navigate("/loginPage");
      }, 3000);
    } else {
      console.log("Validation Errors:", errors);
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
    <div className="SignUp-parent">
      <div className="productName">
        <p>EmpressoAmore</p>
        <GiCoffeeCup size={30} color="rgb(205, 196, 189)" />
      </div>
      <div className="signUp-info-holder">
        <span className="signUp-welcome-text">
          <h1>Hey,</h1>
          <h1>Welcome!</h1>
        </span>
        <p>We are very happy to have you here!</p>

        <h2>Create an account:</h2>

        <form className="SignUp-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">
              Email
              <LuAsterisk color="red" size={10} />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              required
            />
            {errors.email && <p className="validation-error">{errors.email}</p>}
          </div>
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
            <label htmlFor="age">
              Age
              <LuAsterisk color="red" size={10} />
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              required
            />
            {errors.age && <p className="validation-error">{errors.age}</p>}
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
          <div className="input-group">
            <label htmlFor="confirm-password">
              Confirm Password
              <LuAsterisk color="red" size={10} />
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              required
            />
            {errors.confirmPassword && (
              <p className="validation-error">{errors.confirmPassword}</p>
            )}
          </div>
          <div>
            <div id="input-group-id">
              <input
                type="checkbox"
                id="termsAndPolicy"
                name="termsAndPolicy"
                checked={formData.termsAndPolicy}
                onChange={handleChange}
                onBlur={(e) => validateField(e.target.name, e.target.checked)}
                required
              />
              <label htmlFor="termsAndPolicy">
                {" "}
                By signing up, you agree to our{" "}
                <span onClick={handleTermsOfUsePage} className="link-style">
                  Terms Of Use
                </span>{" "}
                and{" "}
                <span onClick={handlePrivacyPolicyPage} className="link-style">
                  Privacy Policy
                </span>
              </label>
            </div>

            {errors.termsAndPolicy && (
              <p className="validation-error">{errors.termsAndPolicy}</p>
            )}
          </div>

          <button className="login-button" type="submit">
            Create Account
          </button>
          <div>
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
                  Congratulations!!! Account created successfully!!
                </Alert>
              </Collapse>
            </Box>
          </div>
          <button onClick={handleLogInPage} className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;