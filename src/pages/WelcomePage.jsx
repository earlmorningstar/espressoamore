import { useNavigate } from "react-router-dom";

const images = [{ src: "/images/welcomeImg.png", alt: "navbar image 1" }];

function WelcomePage() {
  const navigate = useNavigate();

  const handleLogInPage = () => {
    navigate("/loginPage");
  };

  const handleSignUpPage = () => {
    navigate("/SignUpPage");
  };

  return (
    <div className="welcomePage-parent">
      <span className="welcome-image-container">
        <img src={images[0].src} alt={images[0].alt} />
      </span>
      <p>
        Welcome to Espresso Amore! We are thrilled to have you here. Our mission
        is to provide you with the finest coffee experience, whether you're
        ordering online, exploring our expertly crafted beverages, or joining
        our vibrant community. Dive into our features, discover our premium
        selection, and enjoy the rich taste of our coffee. Your journey to
        coffee perfection starts here.
      </p>

      <div>
        <button className="login-button" onClick={handleLogInPage}>
          Log In
        </button>
        <button className="login-button" onClick={handleSignUpPage}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
