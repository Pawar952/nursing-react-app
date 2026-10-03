
import "./Infrastructure.css";

function Infrastructure() {
  const facilities = [
    {
      image: "/images/lab.jpg",
      title: "Nursing Laboratories",
      description:
        "Modern laboratories equipped for hands-on nursing practice, clinical demonstrations and skill development.",
      icon: "fa-solid fa-flask",
      number: "01",
    },
    {
      image: "/images/library.jpg",
      title: "Central Library",
      description:
        "A rich collection of books, journals and digital learning resources to support academic growth.",
      icon: "fa-solid fa-book-open",
      number: "02",
    },
    {
      image: "/images/classroom.jpg",
      title: "Smart Classrooms",
      description:
        "Technology-enabled classrooms designed to provide an engaging and effective learning experience.",
      icon: "fa-solid fa-chalkboard-user",
      number: "03",
    },
    {
      image: "/images/hostel.jpg",
      title: "Hostel Facility",
      description:
        "Safe, comfortable and student-friendly accommodation designed to provide a supportive campus life.",
      icon: "fa-solid fa-building",
      number: "04",
    },
  ];

  return (
    <section className="section infrastructure" id="infrastructure">

      <div className="container">

        {/* ================= SECTION HEADING ================= */}

        <div className="section-heading">

          <span className="section-label">
            CAMPUS & FACILITIES
          </span>

          <h2>
            Explore Our
            <span> Infrastructure</span>
          </h2>

          <p>
            Discover modern facilities designed to support
            academic learning, practical training and student life.
          </p>

        </div>


        {/* ================= FACILITY GRID ================= */}

        <div className="facility-grid">

          {facilities.map((facility) => (

            <div
              className="facility-card"
              key={facility.number}
            >

              {/* Image */}

              <img
                src={facility.image}
                alt={facility.title}
              />


              {/* Dark Overlay */}

              <div className="facility-dark"></div>


              {/* Number */}

              <div className="facility-number">
                {facility.number}
              </div>


              {/* Icon */}

              <div className="facility-icon">
                <i className={facility.icon}></i>
              </div>


              {/* Bottom Content */}

              <div className="facility-content">

                <h3>
                  {facility.title}
                </h3>

                <p>
                  {facility.description}
                </p>

                <span className="facility-link">
                  Explore Facility
                  <i className="fa-solid fa-arrow-right"></i>
                </span>

              </div>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM INFO ================= */}

        <div className="infrastructure-bottom">

          <div className="infrastructure-info">

            <div className="info-icon">
              <i className="fa-solid fa-building-columns"></i>
            </div>

            <div>
              <h3>
                Everything You Need to Learn & Grow
              </h3>

              <p>
                Our campus provides a supportive environment
                where students can learn, practice and develop
                professional nursing skills.
              </p>
            </div>

          </div>


          <div className="info-button">

            <a href="/contact">
              Visit Our Campus
              <i className="fa-solid fa-arrow-right"></i>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Infrastructure;

