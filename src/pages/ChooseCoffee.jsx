import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Styles.css";

const video = {
  src: "/videos/chooseCoffeeVid1.mp4",
  alt: "Choose Coffee video",
};

function ChooseCoffee() {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="chooseCoffee-parent">
      <span className="chooseCoffee-video-container">
        <video src={video.src} alt={video.alt} autoPlay muted controls />
      </span>
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="chooseCoffee-textHolder"
      >
        <motion.h4 variants={gridSquareVariants}>Our Coffee</motion.h4>
        <motion.h3 variants={gridSquareVariants}>
          Select Your Perfect Coffee Blend
        </motion.h3>
        <motion.p variants={gridSquareVariants}>
          Over 90 varieties of coffee, expertly crafted and ready to serve by
          our seasoned baristas.
        </motion.p>
        <span>
          <motion.li variants={gridSquareVariants}>Espresso</motion.li>
          <motion.li variants={gridSquareVariants}>Latte</motion.li>
          <motion.li variants={gridSquareVariants}>Cappuccino</motion.li>
          <motion.li variants={gridSquareVariants}>Americano</motion.li>
        </span>
        <NavLink className="navlinkBtn" to="/purchasePage">
          <motion.button variants={gridSquareVariants} className="all-back-btn">
            More Menu
          </motion.button>
        </NavLink>
      </motion.div>
    </div>
  );
}

export default ChooseCoffee;
