import "./Hero.css";
import { useEffect, useState } from "react";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/hero1.jpg",
      small: "WELCOME TO",
      title: "GNM College of Nursing",
      description:
        "Empowering Future Nurses with Knowledge, Compassion and Excellence.",
      primaryText: "Discover More",
      primaryLink: "/about",
      secondaryText: "Admissions",
      secondaryLink: "/admissions",
    },
    {
      image: "/images/hero2.jpg",
      small: "QUALITY EDUCATION",
      title: "Learn. Serve. Lead.",
      description:
        "Building skilled healthcare professionals for a healthier tomorrow.",
      primaryText: "Explore Courses",
      primaryLink: "/academics",
      secondaryText: "Our Campus",
      secondaryLink: "/infrastructure",
    },
    {
      image: "/images/hero3.jpg",
      small: "FUTURE OF NURSING",
      title: "Compassion in Every Care",
      description:
        "Education, clinical practice, research and community service.",
      primaryText: "Contact Us",
      primaryLink: "/contact",
      secondaryText: null,
      secondaryLink: null,
    },
  ];

  // Automatic slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Previous slide
  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero" id="home">

      <div className="hero-slider">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(0,0,0,.5),
                  rgba(0,0,0,.5)
                ),
                url('${slide.image}')
              `,
            }}
          >

            <div className="container hero-content">

              <span className="hero-small">
                {slide.small}
              </span>

              <h2>
                {slide.title}
              </h2>

              <p>
                {slide.description}
              </p>

              <div className="hero-buttons">

                <a
                  href={slide.primaryLink}
                  className="btn btn-primary"
                >
                  {slide.primaryText}
                </a>

                {slide.secondaryText && (
                  <a
                    href={slide.secondaryLink}
                    className="btn btn-outline"
                  >
                    {slide.secondaryText}
                  </a>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Previous button */}
      <button
        className="slider-btn prev"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {/* Next button */}
      <button
        className="slider-btn next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className="slider-dots">

        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}

      </div>

    </section>
  );
}

export default Hero;