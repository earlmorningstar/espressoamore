import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import "./Styles.css";

function RootLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <MainNavigation title="EmpressoAmore">
        <div className="nav-links">
          <NavLink to="/" className="root-nav" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/features" className="root-nav" activeClassName="active" end>
            Features
          </NavLink>
          <NavLink
            to="/purchasePage"
            className="root-nav"
            activeClassName="active"
            end
          >
            Purchase
          </NavLink>
          
          <NavLink
            to="/aboutUs"
            className="root-nav"
            activeClassName="active"
            end
          >
            About
          </NavLink>
          <NavLink to="/blog" className="root-nav" activeClassName="active" end>
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
              to="/"
              className="root-nav-dropDown"
              onClick={toggleDropdown}
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className="root-nav-dropDown"
              onClick={toggleDropdown}
              end
            >
              Features
            </NavLink>
            <NavLink
              to="/purchasePage"
              className="root-nav-dropDown"
              onClick={toggleDropdown}
              end
            >
              Purchase
            </NavLink>
            <NavLink
              to="/aboutUs"
              className="root-nav-dropDown"
              onClick={toggleDropdown}
              end
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className="root-nav-dropDown"
              onClick={toggleDropdown}
              end
            >
              Contact Us
            </NavLink>
            

            <span className="root-nav-dropDown">Sign Up</span>
          </div>
        </div>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
