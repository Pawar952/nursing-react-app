
import "./Principal.css";

function Principal() {
  return (
    <section className="principal section" id="principal">

      <div className="container principal-grid">

        <div className="principal-image">

          <img
            src="/images/principal.jpg"
            alt="Principal"
          />

          <div className="principal-name">

            <strong>
              Dr. __________
            </strong>

            <span>
              Principal
            </span>

          </div>

        </div>


        <div className="principal-content">

          <span className="section-label">
            PRINCIPAL'S MESSAGE
          </span>

          <h2>
            Inspiring Excellence,
            Empowering Nurses
          </h2>

          <p>
            Nursing is more than a profession; it is
            a commitment to caring, healing and serving
            humanity.
          </p>

          <p>
            Our college strives to create an educational
            environment that encourages students to
            learn, innovate, serve and lead.
          </p>

          <p>
            We believe that every student has the
            potential to make a meaningful contribution
            to healthcare and society.
          </p>

          <a href="#contact" className="btn btn-secondary">
            Contact Principal's Office
          </a>

        </div>

      </div>

    </section>
  );
}

export default Principal;

