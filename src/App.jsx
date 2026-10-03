import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import PrincipalPage from "./pages/PrincipalPage";
import VisionPage from "./pages/VisionPage";
import AcademicsPage from "./pages/AcademicsPage";
import InfrastructurePage from "./pages/InfrastructurePage";
import AdmissionsPage from "./pages/AdmissionsPage";
import GalleryPage from "./pages/GalleryPage";
import NoticesPage from "./pages/NoticesPage";
import ContactPage from "./pages/ContactPage";
import FeeStructurePage from "./pages/FeeStructurePage";
import ChairmanPage from "./pages/ChairmanPage";
import DirectorPage from "./pages/DirectorPage";
import HospitalPage from "./pages/HospitalPage";


function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Layout() {
  
  return (
    <>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/principal-message" element={<PrincipalPage />} />
        <Route path="/about/vision-mission" element={<VisionPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/fee-structure" element={<FeeStructurePage />} />
        <Route path="/about/chairman-message" element={<ChairmanPage />} />
        <Route path="/about/director-message" element={<DirectorPage />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="*" element={<Home />} />
       
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
