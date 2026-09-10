
import "./Contact.css";

function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      // Send data to Node.js backend
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Thank you! Your message has been sent successfully.");
        e.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Unable to connect to the server.");
    }
  };

  return (
    <section className="contact section" id="contact">

      <div className="container contact-grid">

        {/* Contact Information */}
        <div className="contact-info">

          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>
            Contact Our College
          </h2>

          <p>
            Have questions about admissions,
            programs or campus facilities?
            Contact our team.
          </p>

          {/* Address */}
          <div className="contact-detail">

            <div className="contact-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>

            <div>
              <h4>Address</h4>

              <p>
                College of Nursing,
                Pune, Maharashtra, India
              </p>
            </div>

          </div>

          {/* Phone */}
          <div className="contact-detail">

            <div className="contact-icon">
              <i className="fa-solid fa-phone"></i>
            </div>

            <div>
              <h4>Phone</h4>

              <p>
                +91 98765 43210
              </p>
            </div>

          </div>

          {/* Email */}
          <div className="contact-detail">

            <div className="contact-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>

            <div>
              <h4>Email</h4>

              <p>
                info@nursingcollege.edu.in
              </p>
            </div>

          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-box">

          <h3>
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit}>

            {/* Name + Phone */}
            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  required
                />

              </div>

            </div>

            {/* Email */}
            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />

            </div>

            {/* Subject */}
            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                required
              />

            </div>

            {/* Message */}
            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                required
              ></textarea>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-secondary submit-btn"
            >
              Send Message

              <i className="fa-solid fa-paper-plane"></i>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;

