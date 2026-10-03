
import { useState } from "react";
import "./Gallery.css";

function Gallery() {

  // =====================================================
  // ADD YOUR IMAGES HERE
  // =====================================================

  // Put your images inside:
  // public/images/

  // Example:
  // public/images/campus.jpg
  // public/images/lab.jpg

  // =====================================================

  const galleryImages = [

    {
      image: "/images/hero1.jpg",
      title: "College ",
      category: "College",
    },

    {
      image: "/images/lab.jpg",
      title: "Nursing Laboratory",
      category: "Laboratory",
    },

    {
      image: "/images/activity.jpg",
      title: "Student Activities",
      category: "Activities",
    },

    {
      image: "/images/classroom.jpg",
      title: "Smart Classroom",
      category: "Classroom",
    },

    {
      image: "/images/library.jpg",
      title: "Central Library",
      category: "Library",
    },


    // =================================================
    // ADD MORE IMAGES LIKE THIS
    // =================================================

    
    {
      image: "/images/hostel.jpg",
      title: "Hostel Facility",
      category: "Hostel",
    },

    {
      image: "/images/event.jpg",
      title: "College Event",
      category: "Event",
    },

     {
      image: "/images/hospital.jpg",
      title: "Associated Hospital",
      category: "Hospital",
    },


    {
      image: "/images/campus.jpg",
      title: "College Campus",
      category: "Campus",
    },
    

  ];


  // =====================================================
  // SELECTED IMAGE FOR LIGHTBOX
  // =====================================================

  const [selectedImage, setSelectedImage] = useState(null);


  // =====================================================
  // OPEN IMAGE
  // =====================================================

  const openImage = (index) => {

    setSelectedImage(index);

  };


  // =====================================================
  // CLOSE IMAGE
  // =====================================================

  const closeImage = () => {

    setSelectedImage(null);

  };


  // =====================================================
  // PREVIOUS IMAGE
  // =====================================================

  const previousImage = (e) => {

    e.stopPropagation();

    setSelectedImage((current) =>
      current === 0
        ? galleryImages.length - 1
        : current - 1
    );

  };


  // =====================================================
  // NEXT IMAGE
  // =====================================================

  const nextImage = (e) => {

    e.stopPropagation();

    setSelectedImage((current) =>
      current === galleryImages.length - 1
        ? 0
        : current + 1
    );

  };


  return (

    <>

      {/* =====================================================
          GALLERY SECTION
      ===================================================== */}

      <section
        className="section gallery"
        id="gallery"
      >

        <div className="container">


          {/* =====================================================
              SECTION HEADING
          ===================================================== */}

          <div className="section-heading">

            <span className="section-label">
              CAMPUS LIFE
            </span>

            <h2>
              Explore Our
              <span> Gallery</span>
            </h2>

            <p>
              Explore moments from our campus, classrooms,
              laboratories and student activities.
            </p>

          </div>


          {/* =====================================================
              GALLERY GRID
          ===================================================== */}

          <div className="gallery-grid">

            {galleryImages.map((item, index) => (

              <div
                className={`gallery-item ${
                  index === 0 ? "large" : ""
                }`}
                key={index}
                onClick={() => openImage(index)}
              >


                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />


                {/* OVERLAY */}

                <div className="gallery-overlay"></div>


                {/* IMAGE NUMBER */}

                <span className="gallery-number">
                  {String(index + 1).padStart(2, "0")}
                </span>


                {/* VIEW ICON */}

                <div className="gallery-view">

                  <i className="fa-solid fa-expand"></i>

                </div>


                {/* CAPTION */}

                <div className="gallery-caption">

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <div className="caption-line"></div>

                </div>

              </div>

            ))}

          </div>


          {/* =====================================================
              BOTTOM INFORMATION
          ===================================================== */}

          <div className="gallery-bottom">

            <div className="gallery-bottom-icon">

              <i className="fa-solid fa-images"></i>

            </div>


            <div className="gallery-bottom-text">

              <strong>
                Discover Campus Life
              </strong>

              <span>
                A glimpse into our learning environment
                and student experiences.
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedImage !== null && (

        <div
          className="gallery-lightbox"
          onClick={closeImage}
        >


          {/* CLOSE BUTTON */}

          <button
            className="lightbox-close"
            onClick={closeImage}
            aria-label="Close gallery"
          >

            <i className="fa-solid fa-xmark"></i>

          </button>


          {/* PREVIOUS BUTTON */}

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={previousImage}
            aria-label="Previous image"
          >

            <i className="fa-solid fa-chevron-left"></i>

          </button>


          {/* IMAGE */}

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={galleryImages[selectedImage].image}
              alt={galleryImages[selectedImage].title}
            />


            <div className="lightbox-info">

              <span>
                {galleryImages[selectedImage].category}
              </span>

              <h3>
                {galleryImages[selectedImage].title}
              </h3>

              <p>
                {selectedImage + 1} / {galleryImages.length}
              </p>

            </div>

          </div>


          {/* NEXT BUTTON */}

          <button
            className="lightbox-arrow lightbox-next"
            onClick={nextImage}
            aria-label="Next image"
          >

            <i className="fa-solid fa-chevron-right"></i>

          </button>

        </div>

      )}

    </>

  );

}


export default Gallery;

