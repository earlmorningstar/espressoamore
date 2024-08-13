import "./Styles.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  { src: "/images/realistic-Wcup-coffee.png", alt: "navbar image 1" },
];

function Discover() {
  const navigate = useNavigate();

  const handleFullDiscoveryInfoPage = () => {
    navigate("/discoverUsInfo");
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="discover-parent">
      <motion.div style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }} className="discover-textInfo" ref={containerRef}>
        <motion.h2
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
        >
          Unveil the Magic of Espresso Amore:
        </motion.h2>
        <motion.h4
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
        >
          Your Coffee, Reimagined
        </motion.h4>

        <div className="readMore-textParent">
          <motion.p
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            Welcome to Espresso Amore, where each sip takes you on a journey of
            rich flavors and unmatched quality. Our commitment is simple: to
            elevate your coffee experience by offering the finest brews crafted
            with passion and precision.
          </motion.p>
          <motion.span
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            Our Story
          </motion.span>
          <motion.p
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            At Espresso Amore, we believe that coffee is more than just a
            beverage; it's a moment of indulgence, a catalyst for connection,
            and a source of inspiration. Our journey began with a deep love for
            coffee and a desire to share that love with the world. We searched
            the globe to source the highest quality beans, forging relationships
            with sustainable farms dedicated to ethical practices and superior
            coffee cultivation.....
          </motion.p>
          <button
            className="discover-btn"
            onClick={handleFullDiscoveryInfoPage}
          >
            Read More
          </button>
        </div>
      </motion.div>

      <span className="discover-image-container">
        <img src={images[0].src} alt={images[0].alt} />
      </span>
    </div>
  );
}

export default Discover;
