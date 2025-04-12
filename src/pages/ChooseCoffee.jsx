import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Styles.css";

const VIDEO_SRC = "/videos/chooseCoffeeVid1.mp4";
const COFFEE_TYPES = ["Espresso", "Latte", "Cappuccino", "Americano"];

function ChooseCoffee() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="chooseCoffee-parent">
      <div className="chooseCoffee-video-container">
        <video src={VIDEO_SRC} autoPlay muted controls />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="chooseCoffee-textHolder"
      >
        <motion.h4 variants={itemVariants}>Our Coffee</motion.h4>
        <motion.h3 variants={itemVariants}>
          Select Your Perfect Coffee Blend
        </motion.h3>
        <motion.p variants={itemVariants}>
          Over 90 varieties of coffee, expertly crafted and ready to serve by
          our seasoned baristas.
        </motion.p>
        <motion.ul variants={containerVariants} className="coffee-list">
          {COFFEE_TYPES.map((coffee, index) => (
            <motion.li key={index} variants={itemVariants}>
              {coffee}
            </motion.li>
          ))}
        </motion.ul>
        <NavLink className="navlinkBtn" to="/purchasePage">
          <motion.button variants={itemVariants} className="all-back-btn">
            More Menu
          </motion.button>
        </NavLink>
      </motion.div>
    </div>
  );
}

export default ChooseCoffee;