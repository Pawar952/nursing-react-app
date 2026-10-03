import "./Courses.css";

function Courses() {
  const courses = [
    {
      image: "/images/bsc-nursing.jpg",
      title: "B.Sc. Nursing",
      description:
        "A comprehensive undergraduate program designed to develop professional nursing knowledge, clinical skills and compassionate patient care.",
      duration: "4 Years",
      mode: "Full Time",
      level: "UG PROGRAM",
      icon: "fa-solid fa-user-nurse",
    },
    {
      image: "/images/postbasicbsc.jpg",
      title: "Post Basic B.Sc. Nursing",
      description:
        "Designed for nursing professionals who want to upgrade their academic knowledge, clinical expertise and professional qualifications.",
      duration: "2 Years",
      mode: "Full Time",
      level: "UG PROGRAM",
      icon: "fa-solid fa-user-nurse",
    },
  ];

  return (
    <section className="section courses" id="courses">

      <div className="container">

        {/* ================= SECTION HEADING ================= */}

        <div className="section-heading">

          <span className="section-label">
            ACADEMICS
          </span>

          <h2>
            Programs We
            <span> Offer</span>
          </h2>

          <p>
            Build your career in healthcare through our
            professionally designed nursing programs.
          </p>

        </div>


        {/* ================= COURSE GRID ================= */}

        <div className="course-grid">

          {courses.map((course, index) => (

            <div
              className="course-card"
              key={index}
            >

              {/* ================= IMAGE ================= */}

              <div className="course-image">

                <img
                  src={course.image}
                  alt={course.title}
                />

                <div className="course-image-overlay"></div>

                <span className="course-tag">
                  {course.level}
                </span>

                <div className="course-icon">
                  <i className={course.icon}></i>
                </div>

              </div>


              {/* ================= CONTENT ================= */}

              <div className="course-content">

                <h3>
                  {course.title}
                </h3>

                <p>
                  {course.description}
                </p>


                {/* ================= COURSE INFORMATION ================= */}

                <div className="course-info">

                  <span>
                    <i className="fa-regular fa-clock"></i>
                    {course.duration}
                  </span>

                  <span>
                    <i className="fa-solid fa-user"></i>
                    {course.mode}
                  </span>

                </div>


                {/* ================= VIEW PROGRAM ================= */}

                <a
                  href="#admission"
                  className="course-link"
                >
                  <span>
                    View Program
                  </span>

                  <i className="fa-solid fa-arrow-right"></i>
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Courses;