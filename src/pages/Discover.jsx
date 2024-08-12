import "./Styles.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const images = [
  { src: "/images/realistic-Wcup-coffee.png", alt: "navbar image 1" },
];

function Discover() {
  const navigate = useNavigate();

  const handleFullDiscoveryInfoPage = () => {
    navigate("/discoverUsInfo");
  };

  const containerRef = useRef(null);
  const isInview = useInView(containerRef, { once: true });
  const mainControls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );

  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview]);
  
  return (
    <div className="discover-parent">
      <div className="discover-textInfo" ref={containerRef}>
        <motion.h2
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.3 }}
        >
          Unveil the Magic of Espresso Amore:
        </motion.h2>
        <motion.h4
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.3 }}
        >
          Your Coffee, Reimagined
        </motion.h4>

        <div className="readMore-textParent">
          <motion.p style={{ translateX: paragraphOneValue }}>
            Welcome to Espresso Amore, where each sip takes you on a journey of
            rich flavors and unmatched quality. Our commitment is simple: to
            elevate your coffee experience by offering the finest brews crafted
            with passion and precision.
          </motion.p>
          <span>Our Story</span>
          <motion.p style={{ translateX: paragraphTwoValue }}>
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
      </div>

      <span className="discover-image-container">
        <img src={images[0].src} alt={images[0].alt} />
      </span>
    </div>
  );
}

export default Discover;
