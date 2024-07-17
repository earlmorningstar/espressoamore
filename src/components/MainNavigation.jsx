import "./MainNavigation.css";
// import { useNavigate } from "react-router-dom";

// const images = [
//     { src: "/images/coffee1previewbg.png", alt: "navbar image 1" },
//   ];

function MainNavigation({ title, children }) {
  return (
    <>
      <nav className="navbar">
        <p>{title}</p>
        <div className="navDiv">
          <span>{children}</span>
        </div>
        <span>Sign Up</span>
        {/* <span className="image-container"><img src={images[0].src} alt={images[0].alt} /></span> */}
      </nav>
    </>
  );
}

export default MainNavigation;
