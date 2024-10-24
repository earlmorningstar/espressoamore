import { useNavigate } from "react-router-dom";

function TermsOfUse() {

    const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/SignUpPage");
  };


  return (
    <div className="termsOfUse-parent">
      <h2>Terms of Use</h2>
      <h3>Terms of Use for Espresso Amore</h3>

      <h2>
        Welcome to Espresso Amore! These Terms of Use govern your use of our
        website and services. By accessing or using our website, you agree to
        comply with and be bound by these terms. Please read them carefully.
      </h2>

<div className="terms-holder">
    <span className="each-terms-holder">
        <h3>Acceptance of Terms</h3>
        <h4>
          By accessing or using the Espresso Amore website, you agree to be
          bound by these Terms of Use and our Privacy Policy. If you do not
          agree with any part of these terms, you must not use our website.
        </h4>
      </span>

      <span className="each-terms-holder">
        <h3> Changes to Terms</h3>
        <h4>
          We reserve the right to modify or replace these Terms of Use at any
          time without prior notice. Your continued use of the website after any
          changes constitutes acceptance of those changes. It is your
          responsibility to review these terms periodically.
        </h4>
      </span>

      <span className="each-terms-holder">
        <h3>Use of the Website</h3>
        <h4 className="mt-pg">
          You may use the website for lawful purposes only. You agree not to
          engage in any activity that could harm, disrupt, or interfere with the
          website or its services. Prohibited activities include, but are not
          limited to:
          <p>
            Attempting to gain unauthorized access to the website or its
            systems.
          </p>
          <p>
            Using the website to distribute malware or other harmful software.
          </p>
          <p>
            Engaging in any activity that could harm our reputation or that of
            our users.
          </p>
        </h4>
      </span>

      <span className="each-terms-holder">
        <h3>Account Registration</h3>
        <h4>
          To access certain features of the website, you may need to create an
          account. You are responsible for maintaining the confidentiality of
          your account information and for all activities that occur under your
          account. You agree to notify us immediately of any unauthorized use of
          your account.
        </h4>
      </span>

      <span className="each-terms-holder">
        <h3>Purchases</h3>
        <h4>
          If you make a purchase through our website, you agree to provide
          accurate and complete information. You agree to pay all charges
          incurred by you or any users of your account and credit card (or other
          applicable payment mechanism) at the prices in effect when such
          charges are incurred. You are responsible for paying any applicable
          taxes related to your purchases.
        </h4>
      </span>

      <span className="each-terms-holder">
        <h3>Product Descriptions</h3>
        <h4>
          We strive to provide accurate descriptions of our products. However,
          we do not warrant that the descriptions or other content on the
          website are accurate, complete, reliable, current, or error-free.
        </h4>
      </span>

      <span className="each-terms-holder">
        <h3>Intellectual Property</h3>
        <h4>
          All content on the Espresso Amore website, including but not limited
          to text, graphics, logos, images, and software, is the property of
          Espresso Amore or its content suppliers and protected by intellectual
          property laws. You may not use, reproduce, modify, or distribute any
          content from our website without our prior written consent.
        </h4>
      </span>

      <span className="each-terms-holder">
        <h3>Links to Third-Party Websites</h3>
        <h4>
          Our website may contain links to third-party websites. These links are
          provided for your convenience only. We do not endorse or make any
          representations about third-party websites, and we are not responsible
          for their content or practices. 
        </h4>
      </span>

      <span className="each-terms-holder">
        <h3>Limitation of Liability</h3>
        <h4>
          To the fullest extent permitted by law, Espresso Amore shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of profits or revenues, whether incurred
          directly or indirectly, or any loss of data, use, goodwill, or other
          intangible losses, resulting from (a) your use of or inability to use
          the website; (b) any unauthorized access to or use of our servers
          and/or any personal information stored therein; (c) any interruption
          or cessation of transmission to or from our website; (d) any bugs,
          viruses, trojan horses, or the like that may be transmitted to or
          through our website by any third party; (e) any errors or omissions in
          any content or for any loss or damage incurred as a result of the use
          of any content posted, emailed, transmitted, or otherwise made
          available through the website; and/or (f) user content or the
          defamatory, offensive, or illegal conduct of any third party.
        </h4>
      </span>

      <span className="each-terms-holder">
        <h3>Indemnification</h3>
        <h4>
          You agree to indemnify, defend, and hold harmless Espresso Amore, its
          affiliates, and their respective officers, directors, employees, and
          agents from and against any claims, liabilities, damages, losses,
          costs, expenses, or fees (including reasonable attorneys' fees)
          arising from your use of the website or your violation of these Terms
          of Use.
        </h4>
      </span>

      <span className="each-terms-holder">
        <h3>Governing Law</h3>
        <h4>
          These Terms of Use shall be governed by and construed in accordance
          with the laws of the jurisdiction in which Espresso Amore operates,
          without regard to its conflict of law principles. You agree to submit
          to the personal and exclusive jurisdiction of the courts located
          within that jurisdiction.
        </h4>
      </span>

      <span className="each-terms-holder">
        <h3>Contact Us</h3>
        <h4>
          If you have any questions or concerns about these Terms of Use, please
          contact us at [insert contact information]
        </h4>
      </span>
</div>
      

      <h4>
        Thank you for choosing Espresso Amore. We hope you enjoy our products
        and services!
      </h4>

      <button onClick={handleBackButton} className="discover-btn">
        Back
      </button>
    </div>
  );
}

export default TermsOfUse;
