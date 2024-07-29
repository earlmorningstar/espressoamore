import { useNavigate } from "react-router-dom";

function PrivacyPolicy() {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/SignUpPage");
  };

  return (
    <div className="termsOfUse-parent">
      <h2>Privacy Policy</h2>
      <h3>Privacy Policy for Espresso Amore</h3>

      <h2>
        At Espresso Amore, we are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you visit our website. Please read this Privacy
        Policy carefully. If you do not agree with the terms of this Privacy
        Policy, please do not access the site.
      </h2>

      <div className="terms-holder">
        <span className="each-terms-holder">
          <h3>Information We Collect</h3>
          <h4>
            We may collect personal information that you voluntarily provide to
            us when you register on the website, make a purchase, subscribe to
            our newsletter, or otherwise interact with us. This information may
            include your name, email address, phone number, shipping address,
            payment information, and any other information you choose to
            provide.
          </h4>
        </span>

        <span className="each-terms-holder">
          <h3>Information Automatically Collected</h3>
          <h4>
            When you visit our website, we may automatically collect certain
            information about your device and usage of the site. This
            information may include your IP address, browser type, operating
            system, referring URLs, pages visited, and other technical data. We
            may also collect information about your interactions with our emails
            and advertisements.
          </h4>
        </span>

        <span className="each-terms-holder">
          <h3>Use of Your Information</h3>
          <h4 className="mt-pg">
            We use the information we collect to:
            <p>Provide, operate, and maintain our website.</p>
            <p>Process and fulfill your orders.</p>
            <p>Improve, personalize, and expand our website.</p>
            <p>Understand and analyze how you use our website.</p>
            <p>Develop new products, services</p>
          </h4>
        </span>
      </div>

      <button onClick={handleBackButton} className="discover-btn">
        Back
      </button>
    </div>
  );
}

export default PrivacyPolicy;
