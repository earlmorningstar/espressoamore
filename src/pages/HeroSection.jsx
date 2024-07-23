import { useEffect, useState } from 'react';
import "./Styles.css";

const images = [
  { src: "/images/coffee-removebg-preview.png", alt: "navbar image 1" },
];

const texts = [
  { h2: "Brewed for Joy", h3: "Transform Your Day with Every Sip: Espresso Amore Awaits" },
  { h2: "Savor Every Moment: Discover the Essence of Coffee!", h3: "Embrace the Warmth: Dive into the Richness of Our Coffee" },
  { h2: "Elevate Your Mood with Every Sip", h3: "From Dawn to Dusk: Celebrate Each Moment with Espresso Amore" },
  { h2: "A Symphony in Every Cup", h3: "Indulge in Perfection: Experience the Artistry of Our Coffee Creations" },
  { h2: "Awaken Your Senses with Espresso Amore", h3: "Crafting Moments of Bliss: Relish the Harmony of Flavor in Every Cup" }
];

function getRandomTextPair(textArray) {
  return textArray[Math.floor(Math.random() * textArray.length)];
}

function HeroSection() {
  const [textPair, setTextPair] = useState({ h2: '', h3: '' });

  useEffect(() => {
    const lastUpdate = localStorage.getItem('lastUpdate');
    const currentTime = new Date().getTime();

    if (!lastUpdate || currentTime - lastUpdate >= 24 * 60 * 60 * 1000) {
      const newTextPair = getRandomTextPair(texts);

      setTextPair(newTextPair);

      localStorage.setItem('lastTextPair', JSON.stringify(newTextPair));
      localStorage.setItem('lastUpdate', currentTime);
    } else {
      const storedTextPair = localStorage.getItem('lastTextPair');
      if (storedTextPair) {
        setTextPair(JSON.parse(storedTextPair));
      } else {
        const newTextPair = getRandomTextPair(texts);
        setTextPair(newTextPair);

        localStorage.setItem('lastTextPair', JSON.stringify(newTextPair));
        localStorage.setItem('lastUpdate', currentTime);
      }
    }
  }, []);

  return (
    <div className='hero-section'>
      <div className='hero-text'>
        <h2>{textPair.h2}</h2>
        <h3><i>"{textPair.h3}"</i></h3>
      </div>
      <span className="image-container">
        <img src={images[0].src} alt={images[0].alt} />
      </span>
    </div>
  );
}

export default HeroSection;
