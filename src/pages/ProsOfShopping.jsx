import { LiaShippingFastSolid } from "react-icons/lia";
import { IoGiftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { PiPercent } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrSelect } from "react-icons/gr";
import { motion } from "framer-motion";
import "./Styles.css";

const SHOPPING_BENEFITS = [
  {
    icon: LiaShippingFastSolid,
    title: "No-cost delivery",
    description: "Free shipping for orders above $600"
  },
  {
    icon: IoGiftOutline,
    title: "Daily Deals",
    description: "Enjoy savings of up to 25% off"
  },
  {
    icon: BiSupport,
    title: "Assistance available round the clock",
    description: "Purchase guided by a specialist"
  },
  {
    icon: PiPercent,
    title: "Budget-friendly cost",
    description: "Obtain pricing directly from the factory"
  },
  {
    icon: GrSelect,
    title: "Pick products",
    description: "Unmatched variety"
  },
  {
    icon: RiSecurePaymentLine,
    title: "Secure Payments",
    description: "Fully safeguarded transactions"
  }
];

const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  },
  item: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
};

function BenefitItem({ icon: Icon, title, description }) {
  return (
    <motion.div variants={animations.item} className="each-pros">
      <span>
        <Icon size={20} />
      </span>
      <span className="pros-info">
        <h3>{title}</h3>
        <h4>{description}</h4>
      </span>
    </motion.div>
  );
}

function ProsOfShopping() {
  return (
    <motion.div 
      variants={animations.container}
      initial="hidden"
      animate="show" 
      className="pros-parent"
    >
      {SHOPPING_BENEFITS.map((benefit, index) => (
        <BenefitItem 
          key={index}
          icon={benefit.icon} 
          title={benefit.title} 
          description={benefit.description} 
        />
      ))}
    </motion.div>
  );
}

export default ProsOfShopping;