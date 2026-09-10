
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-slider">

        {/* Slide 1 */}
        <div
          className="hero-slide active"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('/images/hero1.jpg')"
          }}
        >

          <div className="container hero-content">

            <span className="hero-small">
              WELCOME TO
            </span>

            <h2>
              College of Nursing
            </h2>

            <p>
              Empowering Future Nurses with
              Knowledge, Compassion and Excellence.
            </p>

            <div className="hero-buttons">

              <a href="#about" className="btn btn-primary">
                Discover More
              </a>

              <a href="#admission" className="btn btn-outline">
                Admissions
              </a>

            </div>

          </div>

        </div>


        {/* Slide 2 */}
        <div
          className="hero-slide"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('/images/hero2.jpg')"
          }}
        >

          <div className="container hero-content">

            <span className="hero-small">
              QUALITY EDUCATION
            </span>

            <h2>
              Learn. Serve. Lead.
            </h2>

            <p>
              Building skilled healthcare professionals
              for a healthier tomorrow.
            </p>

            <div className="hero-buttons">

              <a href="#courses" className="btn btn-primary">
                Explore Courses
              </a>

              <a href="#infrastructure" className="btn btn-outline">
                Our Campus
              </a>

            </div>

          </div>

        </div>


        {/* Slide 3 */}
        <div
          className="hero-slide"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('/images/hero3.jpg')"
          }}
        >

          <div className="container hero-content">

            <span className="hero-small">
              FUTURE OF NURSING
            </span>

            <h2>
              Compassion in Every Care
            </h2>

            <p>
              Education, clinical practice,
              research and community service.
            </p>

            <div className="hero-buttons">

              <a href="#contact" className="btn btn-primary">
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </div>


      <button className="slider-btn prev">
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <button className="slider-btn next">
        <i className="fa-solid fa-chevron-right"></i>
      </button>


      <div className="slider-dots">

        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>

      </div>

    </section>
  );
}

export default Hero;

