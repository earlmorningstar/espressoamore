import { useNavigate } from "react-router-dom";

function About() {

    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate("/");
      };
  return (
    <div id="discoverInfo-id" className="readMore-textParent">
      <h4>About Espresso Amore</h4>
      <p>
        Welcome to Espresso Amore, where passion meets perfection in every cup.
        Our story began with a simple vision: to create a coffee experience that
        delights the senses and elevates everyday moments. At Espresso Amore, we
        are dedicated to bringing you the finest coffee, crafted with love,
        care, and a commitment to quality.
      </p>

      <span>Our Journey</span>

      <p>
        Espresso Amore was founded on a deep love for coffee and a desire to
        share that passion with the world. Our journey started with a search for
        the best coffee beans, leading us to the world’s finest coffee farms. We
        established strong partnerships with sustainable farms that prioritize
        ethical practices and exceptional quality, ensuring that every bean we
        source is of the highest standard.
      </p>

      <span>Crafting Excellence</span>
      <p>
        At Espresso Amore, we believe that great coffee is an art form. Our team
        of skilled baristas are not just coffee makers; they are artisans
        dedicated to perfecting each cup. From the careful selection of beans to
        the precise roasting and brewing techniques, every step is executed with
        attention to detail and a passion for excellence. Our menu features a
        diverse range of beverages, from robust espressos and velvety lattes to
        innovative seasonal drinks, each crafted to highlight the unique flavors
        of our beans.
      </p>

      <span>Sustainability at Heart</span>
      <p>
        We are committed to sustainability and environmental responsibility. At
        Espresso Amore, we believe that great coffee should not come at the
        expense of our planet. Our sourcing practices are designed to support
        sustainable farming and reduce our carbon footprint. We use eco-friendly
        packaging and strive to minimize waste in every aspect of our
        operations. By choosing Espresso Amore, you are not only enjoying
        exceptional coffee but also supporting a sustainable future.
      </p>

      <span>A Community Hub</span>
      <p>
        Espresso Amore is more than just a coffee shop; it’s a community hub
        where people come together to share moments, stories, and, of course,
        great coffee. We take pride in creating a welcoming atmosphere where
        everyone feels at home. Our café is a place to relax, meet friends, or
        work on your next big idea. We host regular events, from coffee tasting
        sessions and brewing workshops to community gatherings, fostering a
        vibrant community of coffee lovers.
      </p>

      <span>Our Vision</span>

      <p>
        Our vision for Espresso Amore is to continue pushing the boundaries of
        what coffee can be. We are dedicated to innovation, constantly exploring
        new flavors, brewing techniques, and sustainable practices. Our goal is
        to create an experience that not only satisfies your taste buds but also
        inspires a deeper appreciation for the art of coffee.
      </p>

      <span>Join Us on Our Journey</span>
      <p>
        We invite you to join us at Espresso Amore and experience the magic of
        our coffee. Whether you visit us in person or explore our online store,
        we are committed to providing you with an exceptional coffee experience.
        Thank you for being a part of our journey. Together, let’s make every
        moment a little more special, one cup at a time.
      </p>

      <p>
        Welcome to Espresso Amore – where every cup is a celebration of flavor,
        quality, and community.
      </p>
      <button onClick={handleBackButton} className="discover-btn">Back</button>
    </div>
  );
}

export default About;
