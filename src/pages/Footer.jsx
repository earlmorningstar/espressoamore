import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { SiXdadevelopers } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterSignUpForm from "./FooterSignUpForm";

function Footer() {
  return (
    <div className="footer-parent">
      <section className="footer-links-holder">
        <div>
          <h4>Customer Support</h4>
          <span>Contact Us</span>
          <span>Help Centre</span>
          <span>About Espresso Amore</span>
        </div>

        <div>
          <h4>Account</h4>
          <span>Order Status</span>
          <span>Manage Account</span>
          <span>Personal Information Request</span>
        </div>

        <div>
          <h4>Services</h4>
          <span>Espresso Amore Membership</span>
          <span>Manage Account</span>
          <span>Espresso Amore Financing</span>
        </div>

        <div>
          <h4>About Us</h4>
          <span>Espresso Amore Newsroom</span>
          <span>Commitment to the Environment</span>
          <span>Espresso Amore Worldwide</span>
        </div>

        <div>
          <h4>Mobile Apps</h4>
          <span>
            <IoLogoAndroid /> Mobile Apps
          </span>
          <span>
            <FaApple /> iOS App
          </span>
          <span>
            <SiXdadevelopers /> Developer: Joelinton
          </span>
        </div>
      </section>

      <section className="footer-signUp-holder">
        <h4>Stay informed ahead of others</h4>
        <span>
          Sign up to remain updated on the latest deals, newest products, and
          exclusive sales events.
        </span>
        <h4>How does Espresso Amore use my email address?</h4>
        <span>
        Espresso Amore uses your email address solely for the purpose of sending
          you updates, promotions, and important information related to its
          products and services. Your email address is not shared with third
          parties and is kept confidential in accordance with ShopSphere's
          privacy policy.
        </span>
        <FooterSignUpForm />
        <div className="footer-media-links">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <FaXTwitter />
          </span>
        </div>
      </section>
    </div>
  );
}

export default Footer;
