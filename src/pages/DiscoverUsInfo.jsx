import "./Styles.css";
import { useNavigate } from "react-router-dom";

function DiscoverUsInfo() {
    const navigate = useNavigate();

    const handleBackPage = () => {
        navigate("/");
      };
  return (
    <div id="discoverInfo-id" className="readMore-textParent">
      <h4>Your Coffee, Reimagined</h4>
      <p>
        Welcome to Espresso Amore, where each sip takes you on a journey of rich
        flavors and unmatched quality. Our commitment is simple: to elevate your
        coffee experience by offering the finest brews crafted with passion and
        precision.
      </p>

      <span>Our Story</span>

      <p>
        At Espresso Amore, we believe that coffee is more than just a beverage;
        it's a moment of indulgence, a catalyst for connection, and a source of
        inspiration. Our journey began with a deep love for coffee and a desire
        to share that love with the world. We searched the globe to source the
        highest quality beans, forging relationships with sustainable farms
        dedicated to ethical practices and superior coffee cultivation.
      </p>

      <span>The Espresso Amore Experience</span>

      <p>
        What sets Espresso Amore apart is our dedication to excellence in every
        cup. From the moment you step into our café or visit our online store,
        you’ll experience a commitment to quality that transcends the ordinary.
        Each bean is carefully selected, roasted to perfection, and brewed with
        expertise to bring out its unique character and flavor profile. Our menu
        offers a diverse selection of coffees, from robust espressos to smooth
        lattes and everything in between. Each drink is crafted to perfection,
        ensuring that every sip is a delightful experience. Whether you’re
        enjoying a quiet moment alone or sharing a cup with friends, Espresso
        Amore promises a coffee experience that’s both memorable and satisfying.
      </p>

      <span>Innovation and Craftsmanship</span>

      <p>
        At Espresso Amore, we continuously strive to innovate and refine our
        craft. Our baristas are artists, trained to create beautiful and
        delicious coffee beverages with skill and precision. We embrace both
        traditional techniques and modern advancements, ensuring that our coffee
        is always at the forefront of quality and taste. We also understand the
        importance of sustainability and environmental responsibility. That’s
        why we are committed to eco-friendly practices, from our sourcing
        methods to our packaging. We believe that great coffee should not come
        at the expense of our planet, and we take every step to minimize our
        environmental impact.
      </p>

      <span>Community and Connection</span>
      <p>
        Espresso Amore is more than just a coffee shop; it's a community. We
        value the connections we make with our customers, and we strive to
        create a welcoming atmosphere where everyone feels at home. Whether
        you’re a coffee connoisseur or a casual drinker, we invite you to join
        our community and share in our passion for exceptional coffee. Through
        our blog, social media channels, and in-store events, we aim to foster a
        community of coffee lovers who appreciate the art and science of great
        coffee. We’re always eager to hear your stories, share brewing tips, and
        celebrate the joy of coffee together.
      </p>

      <span>A Vision for the Future</span>

      <p>
        As we look to the future, our vision for Espresso Amore remains rooted
        in our core values: quality, sustainability, and community. We are
        committed to continuously improving our offerings, expanding our reach,
        and deepening our relationships with both our customers and our
        partners. We invite you to discover the magic of Espresso Amore for
        yourself. Whether you’re visiting us in person or exploring our online
        store, we promise an experience that will elevate your coffee journey
        and inspire a newfound appreciation for the world’s favorite beverage.
        
      </p>
      <p>Thank you for being a part of our story. Welcome to Espresso Amore.</p>

      <button className="discover-btn" onClick={handleBackPage}>Back</button>
    </div>
  );
}

export default DiscoverUsInfo;
