import { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import "./Styles.css";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

function RootLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogInPage = () => {
    toggleDropdown();
    navigate("/loginPage");
  };

  const handleSignUpPage = () => {
    toggleDropdown();
    navigate("/signUpPage");
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    navigate("/loginPage");
  };

  const handleDropDownLogout = () => {
    setIsLoggedIn(false);
    toggleDropdown();
    localStorage.setItem("isLoggedIn", "false");
    navigate("/loginPage");
  };

  return (
    <>
      <MainNavigation
        title="EmpressoAmore"
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      >
        <div
          className={`nav-links ${isLoggedIn ? "show" : "hide"}`}
          id="root-nav-id"
        >
          <NavLink
            to="/homePage"
            className={`root-nav ${isLoggedIn ? "show" : "hide"}`}
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/features"
            className={`root-nav ${isLoggedIn ? "show" : "hide"}`}
            activeClassName="active"
            end
          >
            Features
          </NavLink>
          <NavLink
            to="/purchasePage"
            className={`root-nav ${isLoggedIn ? "show" : "hide"}`}
            activeClassName="active"
            end
          >
            Purchase
          </NavLink>
          <NavLink
            to="/aboutUs"
            className={`root-nav ${isLoggedIn ? "show" : "hide"}`}
            activeClassName="active"
            end
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className={`root-nav ${isLoggedIn ? "show" : "hide"}`}
            activeClassName="active"
            end
          >
            Contact Us
          </NavLink>
        </div>

        <div className="hamburger-menu" onClick={toggleDropdown}>
          {isDropdownOpen ? (
            <RiCloseLargeFill size={32} color="rgb(205, 196, 189)" />
          ) : (
            <RxHamburgerMenu size={32} color="rgb(205, 196, 189)" />
          )}
        </div>
      </MainNavigation>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="nav-link-dropDown">
            <NavLink
              to="/homePage"
              className={`root-nav-dropDown ${isLoggedIn ? "show" : "hide"}`}
              id="root-nav-id"
              onClick={toggleDropdown}
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className={`root-nav-dropDown ${isLoggedIn ? "show" : "hide"}`}
              id="root-nav-id"
              onClick={toggleDropdown}
              end
            >
              Features
            </NavLink>
            <NavLink
              to="/purchasePage"
              className={`root-nav-dropDown ${isLoggedIn ? "show" : "hide"}`}
              id="root-nav-id"
              onClick={toggleDropdown}
              end
            >
              Purchase
            </NavLink>
            <NavLink
              to="/aboutUs"
              className={`root-nav-dropDown ${isLoggedIn ? "show" : "hide"}`}
              id="root-nav-id"
              onClick={toggleDropdown}
              end
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={`root-nav-dropDown ${isLoggedIn ? "show" : "hide"}`}
              id="root-nav-id"
              onClick={toggleDropdown}
              end
            >
              Contact Us
            </NavLink>
            {!isLoggedIn && (
              <>
                <span
                  onClick={handleLogInPage}
                  id="hideBtnOnIsLoginTrue"
                  className="root-nav-dropDown"
                >
                  Log In
                </span>
                <span
                  onClick={handleSignUpPage}
                  id="hideBtnOnIsLoginTrue"
                  className="root-nav-dropDown"
                >
                  Sign Up
                </span>
              </>
            )}
            {isLoggedIn && (
              <>
                <div className="root-nav-cart-profile-icon-parent">
                <NavLink to="/favoritedItemsPage" onClick={toggleDropdown} className="cart-profile-icon-navlink-parent">
                   Favorites <span className="cart-num"><FaHeart size={20}/> <p>(17)</p></span>
                  </NavLink>

                  <NavLink to="/cartItemsPage" onClick={toggleDropdown} className="cart-profile-icon-navlink-parent">
                   My Cart <span className="cart-num"><PiShoppingCartFill color="rgb(48, 31, 21)" size={25} /> <p>(17)</p></span>
                  </NavLink>

                  <NavLink to="/benny" onClick={toggleDropdown} className="cart-profile-icon-navlink-parent">
                    My Profile <CgProfile color="rgb(48, 31, 21)" size={25} />
                  </NavLink>
                </div>

                <span
                  onClick={handleDropDownLogout}
                  className="root-nav-dropDown"
                >
                  Logout
                </span>
              </>
            )}
          </div>
        </div>
      )}
      <main>
        <Outlet context={{ handleLoginSuccess }} />
      </main>
    </>
  );
}

export default RootLayout;
