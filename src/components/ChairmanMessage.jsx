
import "./ChairmanMessage.css";

function ChairmanMessage() {
  return (
    <div className="chairman-page">

      {/* Page Header */}
      <section className="chairman-header">
        <h1>Chairman's Message</h1>
        <p>College of Nursing</p>
      </section>

      {/* Chairman Message */}
      <section className="chairman-section">

        <div className="chairman-container">

          {/* Chairman Image */}
          <div className="chairman-image">
            <img
              src="/images/chairman.jpg"
              alt="Chairman"
            />
          </div>

          {/* Message */}
          <div className="chairman-content">

            <h2>Message from the Chairman</h2>

            <div className="orange-line"></div>

            <p>
              It gives me immense pleasure to welcome you to our College of
              Nursing. Our institution is committed to providing quality
              education and creating a positive learning environment for
              aspiring nursing professionals.
            </p>

            <p>
              Nursing is a noble profession that requires knowledge, skills,
              compassion and dedication. Our aim is to prepare students to
              become competent, confident and responsible healthcare
              professionals who can serve society with commitment and care.
            </p>

            <p>
              We believe in providing our students with modern educational
              facilities, practical training and opportunities for overall
              development. Our experienced faculty members continuously guide
              and motivate students to achieve academic and professional
              excellence.
            </p>

            <p>
              I encourage every student to learn with dedication, develop
              professional values and contribute positively to the healthcare
              sector.
            </p>

            <p className="closing-message">
              I wish all our students a successful and bright future.
            </p>

            {/* Chairman Details */}
            <div className="chairman-details">
              <h3>Dr. Suresh Patilba Belhekar</h3>
              <p>Chairman</p>
              <span>College of Nursing</span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ChairmanMessage;

