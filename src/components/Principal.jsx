import "./Principal.css";

function Principal() {
  return (
    <section className="director-message">
      <div className="director-container">

        {/* Left Side - Principal Image */}
        <div className="director-image">
          <img
            src="/images/principal.jpg"
            alt="Principal"
          />

          <h3>Dr. Bhalsing Narayan Bapurao</h3>

          <p>Principal</p>
        </div>


        {/* Right Side - Principal Message */}
        <div className="director-content">

          <h1>Principal's Message</h1>

          <div className="message-line"></div>


          <p>
            It gives me immense pleasure to welcome you to our
            GNM College of Nursing. Our institution is committed
            to providing quality nursing education and developing
            skilled, compassionate and responsible nursing
            professionals.
          </p>


          <p>
            Nursing is a noble profession that requires knowledge,
            dedication, patience and empathy. We aim to provide
            our students with a supportive learning environment
            where they can develop their academic knowledge,
            practical skills and professional values.
          </p>


          <p>
            Our experienced faculty members and modern
            infrastructure help students prepare for the changing
            needs of healthcare. We also encourage our students
            to participate in clinical training, community
            services and various extracurricular activities.
          </p>


          <p>
            I believe that education is not only about gaining
            knowledge but also about developing character,
            discipline and a spirit of service. I encourage our
            students to pursue their goals with dedication,
            sincerity and compassion.
          </p>


          <p>
            I wish all our students success in their academic
            journey and a bright and fulfilling career in the
            nursing profession.
          </p>


          {/* Principal Name */}
          <h3 className="director-name">
            Dr. Bhalsing Narayan Bapurao
          </h3>

          <p className="director-designation">
            Principal, GNM College of Nursing
          </p>

        </div>

      </div>
    </section>
  );
}

export default Principal;