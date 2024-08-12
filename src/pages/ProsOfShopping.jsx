import { LiaShippingFastSolid } from "react-icons/lia";
import { IoGiftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { PiPercent } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrSelect } from "react-icons/gr";
import { motion } from "framer-motion";
import "./Styles.css";


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


function ProsOfShopping() {
  return (
    <motion.div 
    variants={gridContainerVariants}
    initial="hidden"
    animate="show" 
    className="pros-parent">
      <motion.div variants={gridSquareVariants} className="each-pros">
        <span>
          <LiaShippingFastSolid size={20} />
        </span>
        <span className="pros-info">
          <h3>No-cost delivery</h3>
          <h4>Free shipping for orders above $600</h4>
        </span>
      </motion.div>

      <motion.div variants={gridSquareVariants} className="each-pros">
        <span>
          <IoGiftOutline size={20} />
        </span>
        <span className="pros-info">
          <h3>Daily Deals</h3>
          <h4>Enjoy savings of up to 25% off</h4>
        </span>
      </motion.div>

      <motion.div variants={gridSquareVariants} className="each-pros">
        <span>
          <BiSupport size={20} />
        </span>
        <span className="pros-info">
          <h3>Assistance available round the clock</h3>
          <h4>Purchase guided by a specialist</h4>
        </span>
      </motion.div>

      <motion.div variants={gridSquareVariants} className="each-pros">
        <span>
          <PiPercent size={20} />
        </span>
        <span className="pros-info">
          <h3>Budget-friendly cost</h3>
          <h4>Obtain pricing directly from the factory</h4>
        </span>
      </motion.div>

      <motion.div variants={gridSquareVariants} className="each-pros">
        <span>
          <GrSelect size={20} />
        </span>
        <span className="pros-info">
          <h3>Pick products</h3>
          <h4>Unmatched variety</h4>
        </span>
      </motion.div>

      <motion.div variants={gridSquareVariants} className="each-pros">
        <span>
          <RiSecurePaymentLine size={20} />
        </span>
        <span className="pros-info">
          <h3>Secure Payments</h3>
          <h4>Fully safeguarded transactions</h4>
        </span>
      </motion.div>
    </motion.div>
  );
}

export default ProsOfShopping;
