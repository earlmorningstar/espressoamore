import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { GiCoffeeCup } from "react-icons/gi";
import { LuAsterisk } from "react-icons/lu";
import { readUserData } from "../dataUtils";
import { FadeLoader } from "react-spinners";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import "./Styles.css";

function LoginPage() {
  const navigate = useNavigate();
  const { handleLoginSuccess } = useOutletContext();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [alertOpen, setAlertOpen] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);

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

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const existingUsers = await readUserData();
        const foundUser = existingUsers.find(
          (user) =>
            user.username === formData.username &&
            user.password === formData.password
        );
  
        if (foundUser) {
          localStorage.setItem("loggedInUser", foundUser.username);
          localStorage.setItem("accountCreationDate", foundUser.createdDate);
          localStorage.setItem("isLoggedIn", "true");
          handleLoginSuccess();
          setAlertOpen(true);
          setTimeout(() => {
          setAlertOpen(false);
            navigate("/homepage");
          }, 2000);
        } else {
          setErrors({ login: "Invalid username or password." });
          setErrorAlertOpen(true);
          setTimeout(() => {
            setErrorAlertOpen(false);
          }, 3000);
        }
      } catch (error) {
        console.error("Error reading user data:", error);
        setErrorAlertOpen(true);
        setTimeout(() => {
          setErrorAlertOpen(false);
        }, 3000);
      }
    }
  };
  

  if (loading) {
    return (
      <div className="loader-parent-ii">
        <FadeLoader
          height={25}
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

        <form className="SignUp-form" onSubmit={handleLogin}>
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
                  Login Successful...
                </Alert>
              </Collapse>
              <Collapse in={errorAlertOpen}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  Invalid username or password
                </Alert>
              </Collapse>
            </Box>
          </div>

          <button onClick={handleSignUpPage} className="login-button">
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
