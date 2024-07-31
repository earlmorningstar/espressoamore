import "./MainNavigation.css";
import { GiCoffeeCup } from "react-icons/gi";

function MainNavigation({ title, children, isLoggedIn, handleLogout }) {
  return (
    <>
      <nav className="navbar">
        <p>
          {title}
          <GiCoffeeCup size={30} color="rgb(205, 196, 189)" />
        </p>
        <div className="navDiv">
          <span>{children}</span>
        </div>
        {isLoggedIn && (
          <section className="nav-btn-holder">
            <span onClick={handleLogout}>Logout</span>
          </section>
        )}
      </nav>
    </>
  );
}

export default MainNavigation;