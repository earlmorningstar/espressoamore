import { useState, useEffect, useContext, useRef, useCallback } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import LikedItemsContext from "../store/LikedItemsContext";
import CartContext from "../store/CartContext";
import MainNavigation from "../components/MainNavigation";
import SimpleDialog from "./SimpleDialog";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Styles.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

const INACTIVITY_TIMEOUT = 900000;
const NAV_ITEMS = [
  { path: "/homePage", label: "Home" },
  { path: "/purchasePage", label: "Purchase", end: true },
  { path: "/features", label: "Features", end: true },
  { path: "/aboutUs", label: "About", end: true },
  { path: "/contactPage", label: "Contact Us", end: true },
];

const MODAL_STYLE = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "rgb(205, 196, 189)",
  color: "rgb(111, 66, 56)",
  boxShadow: 24,
  p: 4,
};

//custom hook for authentication
function useAuthentication() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const inactivityTimeoutRef = useRef(null);
  const isAutoLogout = useRef(false);
  const [openAutoLogoutDialog, setOpenAutoLogoutDialog] = useState(false);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");

    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
      inactivityTimeoutRef.current = null;
    }

    if (isAutoLogout.current) {
      setOpenAutoLogoutDialog(true);
      isAutoLogout.current = false;
    }

    navigate("/loginPage", { replace: true });
  }, [navigate]);

  const startInactivityTimeout = useCallback(() => {
    inactivityTimeoutRef.current = setTimeout(() => {
      isAutoLogout.current = true;
      handleLogout();
    }, INACTIVITY_TIMEOUT);
  }, [handleLogout]);

  const resetInactivityTimeout = useCallback(() => {
    if (!isLoggedIn) return;

    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    startInactivityTimeout();
  }, [isLoggedIn, startInactivityTimeout]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    if (loggedIn) {
      startInactivityTimeout();
    }

    const events = ["mousemove", "keypress", "click"];

    events.forEach((event) =>
      window.addEventListener(event, resetInactivityTimeout)
    );

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, resetInactivityTimeout)
      );

      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [resetInactivityTimeout, startInactivityTimeout]);

  const handleLoginSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    startInactivityTimeout();
  };

  const closeAutoLogoutDialog = () => {
    setOpenAutoLogoutDialog(false);
  };

  return {
    isLoggedIn,
    handleLoginSuccess,
    handleLogout,
    openAutoLogoutDialog,
    closeAutoLogoutDialog,
  };
}

//navigation components
function NavigationLinks({
  isLoggedIn,
  toggleDropdown = null,
  mobile = false,
}) {
  const className = mobile ? "root-nav-dropDown" : "root-nav";

  return NAV_ITEMS.map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={`${className} ${isLoggedIn ? "show" : "hide"}`}
      onClick={toggleDropdown}
      end={item.end}
    >
      {item.label}
    </NavLink>
  ));
}

function IconLink({ to, label, icon, count, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className="cart-profile-icon-navlink-parent"
    >
      {label}{" "}
      <span className="cart-num">
        {icon} <sup>{count}</sup>
      </span>
    </NavLink>
  );
}

function MobileMenu({
  isLoggedIn,
  isOpen,
  toggleDropdown,
  handleLogInPage,
  handleSignUpPage,
  handleOpenLogoutModal,
  totalLikedItems,
  totalCartItems,
}) {
  if (!isOpen) return null;

  return (
    <div className="dropdown-menu">
      <div className="nav-link-dropDown">
        <NavigationLinks
          isLoggedIn={isLoggedIn}
          toggleDropdown={toggleDropdown}
          mobile={true}
        />

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
              <IconLink
                to="/favoritedItemsPage"
                label="Favorites"
                icon={<FaHeart size={20} />}
                count={totalLikedItems}
                onClick={toggleDropdown}
              />

              <IconLink
                to="/cartItemsPage"
                label="My Cart"
                icon={<PiShoppingCartFill color="rgb(48, 31, 21)" size={25} />}
                count={totalCartItems}
                onClick={toggleDropdown}
              />

              <IconLink
                to="/userProfilePage"
                label="My Profile"
                icon={<CgProfile color="rgb(48, 31, 21)" size={25} />}
                onClick={toggleDropdown}
              />
            </div>

            <span onClick={handleOpenLogoutModal} className="root-nav-dropDown">
              Logout
            </span>
          </>
        )}
      </div>
    </div>
  );
}

function RootLayout() {
  const likedItemCtx = useContext(LikedItemsContext);
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    isLoggedIn,
    handleLoginSuccess,
    handleLogout,
    openAutoLogoutDialog,
    closeAutoLogoutDialog,
  } = useAuthentication();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  //count unique items
  const totalLikedItems = new Set(likedItemCtx.items.map((item) => item.id))
    .size;
  const totalCartItems = new Set(cartCtx.items.map((item) => item.id)).size;

  //scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogInPage = () => {
    toggleDropdown();
    navigate("/loginPage");
  };

  const handleSignUpPage = () => {
    toggleDropdown();
    navigate("/signUpPage");
  };

  const handleOpenLogoutModal = () => setOpenLogoutModal(true);
  const handleCloseLogoutModal = () => setOpenLogoutModal(false);

  const handleConfirmLogout = () => {
    handleLogout();
    setIsDropdownOpen(false);
    handleCloseLogoutModal();
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
          <NavigationLinks isLoggedIn={isLoggedIn} />
        </div>

        <div className="hamburger-menu" onClick={toggleDropdown}>
          {isDropdownOpen ? (
            <RiCloseLargeFill size={32} color="rgb(205, 196, 189)" />
          ) : (
            <RxHamburgerMenu size={32} color="rgb(205, 196, 189)" />
          )}
        </div>
      </MainNavigation>

      <MobileMenu
        isLoggedIn={isLoggedIn}
        isOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        handleLogInPage={handleLogInPage}
        handleSignUpPage={handleSignUpPage}
        handleOpenLogoutModal={handleOpenLogoutModal}
        totalLikedItems={totalLikedItems}
        totalCartItems={totalCartItems}
      />

      {/* Auto logout dialog */}
      <SimpleDialog
        open={openAutoLogoutDialog}
        onClose={closeAutoLogoutDialog}
      />

      {/* Logout confirmation modal */}
      <Modal
        open={openLogoutModal}
        onClose={handleCloseLogoutModal}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={MODAL_STYLE}>
          <Typography className="modal-modal-title" variant="h6" component="h2">
            Do you want logout?
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <button className="modal-button" onClick={handleCloseLogoutModal}>
              No
            </button>
            <button className="modal-button" onClick={handleConfirmLogout}>
              Yes
            </button>
          </Box>
        </Box>
      </Modal>

      <main>
        <Outlet context={{ handleLoginSuccess, handleLogout }} />
      </main>
    </>
  );
}

export default RootLayout;
