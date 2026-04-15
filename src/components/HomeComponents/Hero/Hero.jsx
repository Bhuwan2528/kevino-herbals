import { useState, useEffect } from 'react';
import './Hero.css';
import slide1 from '../../../assets/slides/slide1.png'
import slide2 from '../../../assets/slides/slide2.png'
import slide3 from '../../../assets/slides/slide3.png'
import slide4 from '../../../assets/slides/slide4.png'
import slide5 from '../../../assets/slides/slide5.png'
import slide6 from '../../../assets/slides/slide6.png'
import slide7 from '../../../assets/slides/slide7.png'
import slide8 from '../../../assets/slides/slide8.png'

const slides = [
  {
    id: 1,
    image: 'https://www.khadinatural.com/cdn/shop/files/soap_desktop_view.jpg?v=1772801572&width=1400',
    title: 'Pure Ayurvedic Wellness',
    subtitle: 'Nourish your body and soul with 100% natural, ethically sourced herbs.',
    offer: 'Buy 1 Get 1 Free on all Skincare',
    buttonText: 'Shop Now'
  },
  {
    id: 2,
    image: 'https://www.khadinatural.com/cdn/shop/files/pb_desktop_view.jpg?v=1772797589&width=1400',
    title: 'Holistic Healing',
    subtitle: 'Discover our new range of immunity boosting herbal teas.',
    offer: 'Flat 20% Off Use Code: HEAL20',
    buttonText: 'Explore Teas'
  },
  {
    id: 3,
    image: 'https://www.khadinatural.com/cdn/shop/files/DESKTOP_1_57a7e7fc-a482-4a5c-a7b1-829d110cdc18.jpg?v=1774003417&width=1400',
    title: 'Natural Radiance',
    subtitle: 'Reveal your inner glow with our organic essential oils.',
    offer: 'Free Shipping on Orders Over $50',
    buttonText: 'Discover Oils'
  },
  {
    id: 4,
    image: 'https://st-images.honasa.in/1920_X512_b839243f92.jpg?format=auto&width=&qualilty=',
    title: 'Pure Ayurvedic Wellness',
    subtitle: 'Nourish your body and soul with 100% natural, ethically sourced herbs.',
    offer: 'Buy 1 Get 1 Free on all Skincare',
    buttonText: 'Shop Now'
  },
];

const slidesImg = [slide1, slide2, slide4, slide6, slide5, slide6, slide7, slide8]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {slidesImg.map((slide, index) => (
        <div
          key={slide.index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="hero-bg" style={{ backgroundImage: `url(${slide})` }}></div>
          <div className="hero-overlay"></div>

          <div className="container hero-content-container">
            <div className="hero-content">
              {/* <span className="hero-offer">{slide.offer}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <button className="btn-primary hero-btn">{slide.buttonText}</button> */}
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
