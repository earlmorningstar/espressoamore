import "./MainNavigation.css";
import { GiCoffeeCup } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function MainNavigation({ title, children }) {

  const navigate = useNavigate();

  const handleLogInPage = () => {
    navigate("/loginPage");
  };

  const handleSignUpPage = () => {
    navigate("/SignUpPage");
  };

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
        <section className="nav-btn-holder">
          <span onClick={handleLogInPage}>Log In</span>
          <span onClick={handleSignUpPage}>Sign Up</span>
        </section>
      </nav>
    </>
  );
}

export default MainNavigation;
