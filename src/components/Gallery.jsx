
import "./Gallery.css";

function Gallery() {
  return (
    <section className="section gallery" id="gallery">

      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            CAMPUS LIFE
          </span>

          <h2>
            Our Gallery
          </h2>

          <p>
            Explore moments from our academic and
            campus activities.
          </p>

        </div>


        <div className="gallery-grid">

          {/* College */}
          <div className="gallery-item large">

            <img
              src="/images/college.jpg"
              alt="College"
            />

            <div className="gallery-caption">
              College Campus
            </div>

          </div>


          {/* Laboratory */}
          <div className="gallery-item">

            <img
              src="/images/lab.jpg"
              alt="Laboratory"
            />

            <div className="gallery-caption">
              Nursing Laboratory
            </div>

          </div>


          {/* Students */}
          <div className="gallery-item">

            <img
              src="/images/students.jpg"
              alt="Students"
            />

            <div className="gallery-caption">
              Student Activities
            </div>

          </div>


          {/* Classroom */}
          <div className="gallery-item">

            <img
              src="/images/classroom.jpg"
              alt="Classroom"
            />

            <div className="gallery-caption">
              Classroom
            </div>

          </div>


          {/* Library */}
          <div className="gallery-item">

            <img
              src="/images/library.jpg"
              alt="Library"
            />

            <div className="gallery-caption">
              Library
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Gallery;

