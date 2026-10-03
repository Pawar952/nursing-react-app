
import "./DirectorMessage.css";

function DirectorMessage() {
  return (
    <section className="director-message">
      <div className="director-container">

        {/* Left Side - Director Image */}
        <div className="director-image">
          <img
            src="/images/director.jpg"
            alt="Director"
          />
          <h3>Dr. Ranjanatai Suresh Belhekar</h3>
          <p>Director</p>
        </div>

        {/* Right Side - Message */}
        <div className="director-content">
          <h1>Director's Message</h1>

          <div className="message-line"></div>

          <p>
            It gives me immense pleasure to welcome you to our GNM College of
            Nursing. Our institution is committed to providing quality
            education and developing skilled, compassionate and responsible
            nursing professionals.
          </p>

          <p>
            Nursing is a noble profession that requires knowledge, dedication,
            patience and empathy. We aim to provide our students with a
            supportive learning environment where they can develop their
            academic knowledge, practical skills and professional values.
          </p>

          <p>
            Our experienced faculty members and modern infrastructure help
            students prepare for the changing needs of healthcare. We also
            encourage our students to participate in clinical training,
            research, community services and various extracurricular activities.
          </p>

          <p>
            I believe that education is not only about gaining knowledge but
            also about developing character and serving society. I wish all our
            students success in their academic journey and future careers.
          </p>

          <h3 className="director-name">Dr. Ranjanatai Suresh Belhekar</h3>
          <p className="director-designation">Director, GNM College of Nursing</p>
        </div>

      </div>
    </section>
  );
}

export default DirectorMessage;

