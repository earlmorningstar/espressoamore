import "./Styles.css";

const images = [{ src: "/images/coffee3jpeg.jpeg", alt: "navbar image 1" }];

function Discover() {
  return (
    // <div className="discover-parent">
    //   <span className="discover-image-container">
    //     <img src={images[0].src} alt={images[0].alt} />
    //   </span>
    //   <div className="discover-textInfo">
    //     <h2>Unveil the Magic of Espresso Amore:</h2>
    //     <h4>Your Coffee, Reimagined</h4>

    //     <div className="readMore-textParent">
    //       <p>
    //         Welcome to Espresso Amore, where each sip takes you on a journey of
    //         rich flavors and unmatched quality. Our commitment is simple: to
    //         elevate your coffee experience by offering the finest brews crafted
    //         with passion and precision.
    //       </p>
    //       <span>Our Story</span>
    //       <p>
    //         At Espresso Amore, we believe that coffee is more than just a
    //         beverage; it's a moment of indulgence, a catalyst for connection,
    //         and a source of inspiration. Our journey began with a deep love for
    //         coffee and a desire to share that love with the world. We searched
    //         the globe to source the highest quality beans, forging relationships
    //         with sustainable farms dedicated to ethical practices and superior
    //         coffee cultivation.
    //       </p>
    //       <button>Read More</button>
    //     </div>
    //   </div>
    // </div>

    <div className="discover-parent" style={{ backgroundImage: `url(${images[0].src})` }}>
  <div className="discover-textInfo">
    <h2>Unveil the Magic of Espresso Amore:</h2>
    <h4>Your Coffee, Reimagined</h4>

    <div className="readMore-textParent">
      <p>
        Welcome to Espresso Amore, where each sip takes you on a journey of
        rich flavors and unmatched quality. Our commitment is simple: to
        elevate your coffee experience by offering the finest brews crafted
        with passion and precision.
      </p>
      <span>Our Story</span>
      <p>
        At Espresso Amore, we believe that coffee is more than just a
        beverage; it's a moment of indulgence, a catalyst for connection,
        and a source of inspiration. Our journey began with a deep love for
        coffee and a desire to share that love with the world. We searched
        the globe to source the highest quality beans, forging relationships
        with sustainable farms dedicated to ethical practices and superior
        coffee cultivation.
      </p>
      <button>Read More</button>
    </div>
  </div>
</div>

  );
}

export default Discover;
