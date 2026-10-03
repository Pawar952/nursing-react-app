
import "./FeeStructurePage.css";

function FeeStructure() {
  const feeData = [
    {
      title: "B.Sc. Nursing - First Year",
      amount: "₹ 1,20,000",
      period: "Per Year",
    },
    {
      title: "B.Sc. Nursing - Second Year",
      amount: "₹ 1,10,000",
      period: "Per Year",
    },
    {
      title: "B.Sc. Nursing - Third Year",
      amount: "₹ 1,10,000",
      period: "Per Year",
    },
    {
      title: "B.Sc. Nursing - Fourth Year",
      amount: "₹ 1,10,000",
      period: "Per Year",
    },
  ];

  return (
    <div className="fee-page">

      {/* ================= PAGE HEADER ================= */}
      <section className="fee-header">
        <div className="fee-header-content">
          <span className="fee-small-title">ADMISSIONS</span>

          <h1>Fee Structure</h1>

          <p>B.Sc. Nursing Fee Structure</p>
        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}
      <section className="fee-section">
        <div className="fee-container">

          {/* ================= INTRODUCTION ================= */}
          <div className="fee-heading">
            <span className="fee-tag">FEE INFORMATION</span>

            <h2>
              B.Sc. Nursing
              <span> Fee Structure</span>
            </h2>

            <p>
              The fee structure for the B.Sc. Nursing programme is
              provided below. Students and parents can also download
              the detailed fee structure document for complete information.
            </p>
          </div>


          {/* ================= DOCUMENT BUTTONS ================= */}
          <div className="fee-documents">

            {/* VIEW PDF */}
            <a
              href="/fee-structure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="fee-document-card"
            >
              <div className="document-icon">
                <i className="fa-solid fa-file-pdf"></i>
              </div>

              <div className="document-content">
                <h3>Detailed Fee Structure</h3>
                <p>View complete B.Sc. Nursing fee details</p>
              </div>

              <div className="document-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </a>


            {/* DOWNLOAD PDF */}
            <a
              href="/fee-structure.pdf"
              download
              className="fee-document-card"
            >
              <div className="document-icon">
                <i className="fa-solid fa-download"></i>
              </div>

              <div className="document-content">
                <h3>Download Fee Structure</h3>
                <p>Download the official fee structure PDF</p>
              </div>

              <div className="document-arrow">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
            </a>

          </div>


          {/* ================= ACADEMIC YEAR ================= */}
          <div className="fee-title-row">

            <div>
              <span className="fee-tag">ACADEMIC YEAR</span>

              <h2>Fee Structure 2026 - 2027</h2>
            </div>

          </div>


          {/* ================= FEE CARDS ================= */}
          <div className="fee-cards">

            {feeData.map((fee, index) => (
              <div className="fee-card" key={index}>

                <div className="fee-card-icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>

                <h3>{fee.title}</h3>

                <div className="fee-amount">
                  {fee.amount}
                </div>

                <p>{fee.period}</p>

              </div>
            ))}

          </div>


          {/* ================= IMPORTANT NOTE ================= */}
          <div className="fee-note-box">

            <div className="note-icon">
              <i className="fa-solid fa-circle-info"></i>
            </div>

            <div>
              <h3>Important Note</h3>

              <p>
                The above fee structure is indicative and may be subject
                to change as per university, government and regulatory
                guidelines. Students are advised to verify the applicable
                fees with the college administration before admission.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default FeeStructure;

