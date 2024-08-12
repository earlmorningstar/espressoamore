import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import "./Styles.css";

const video = {
  src: "/videos/chooseCoffeeVid1.mp4",
  alt: "Choose Coffee video",
};

function ChooseCoffee() {
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
    ["-80%", "0%"]
  );

  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["80%", "0%"]
  );

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview]);

  return (
    <div className="chooseCoffee-parent">
      <span className="chooseCoffee-video-container">
        <video src={video.src} alt={video.alt} autoPlay muted controls />
      </span>
      <div className="chooseCoffee-textHolder" ref={containerRef}>
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
          Our Coffee
        </motion.h4>
        <motion.h3 style={{translateX: paragraphOneValue}}>Select Your Perfect Coffee Blend</motion.h3>
        <motion.p style={{translateX: paragraphTwoValue}}>
          Over 90 varieties of coffee, expertly crafted and ready to serve by
          our seasoned baristas.
        </motion.p>
        <motion.span style={{translateX: paragraphTwoValue}}>
          <li>Espresso</li>
          <li>Latte</li>
          <li>Cappuccino</li>
          <li>Americano</li>
        </motion.span>
        <NavLink className="navlinkBtn" to="/purchasePage">
          <button className="all-back-btn">More Menu</button>
        </NavLink>
      </div>
    </div>
  );
}

export default ChooseCoffee;
