import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NHServicesLogo from "../images/logos/nhservices-logo.png";
import VanPic from "../images/van-pic.png";
import MastercardLogo from "../images/logos/mastercard-logo.png";
import VisaLogo from "../images/logos/visa-logo.png";
import AmexLogo from "../images/logos/amex-logo.png";
import DiscoverLogo from "../images/logos/discover-logo.png";
import PayPalLogo from "../images/logos/paypal-logo.png";
import ApplePayLogo from "../images/logos/applepay-logo.png";
import MaintenanceAgreementAd from "../images/maintenance-agreement-ad.png";
import TestimonialForm from "../components/Testimonials/TestimonialForm";
import FAQAccordion from "../components/Accordions/FAQAccordion";
import Footer from "../components/Footer/Footer";
import ContactFormModal from "../components/Modals/ContactFormModal";
import AboutUsSection from "../LandingPageSections/AboutUsSection";
import ServiceAreaSection from "../LandingPageSections/ServiceAreaSection";
import ServicesSection from "../LandingPageSections/ServicesSection";
import { Button } from "@nextui-org/react";
import SynchronyLogo from "../images/logos/synchrony-logo.png";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center">
        {/* Payment Acceptance */}
        <div className="flex flex-col sm:flex-row sm:ml-auto sm:mr-16 sm:mt-8">
          <span className="text-md text-center text-black">We Accept:</span>
          <div className="flex flex-wrap justify-center sm:justify-start">
            <img
              src={MastercardLogo}
              alt="Mastercard"
              className="h-8 w-auto mx-1"
            />
            <img src={VisaLogo} alt="Visa" className="h-8 w-auto mx-1" />
            <img
              src={AmexLogo}
              alt="American Express"
              className="h-8 w-auto mx-1"
            />
            <img
              src={DiscoverLogo}
              alt="Discover"
              className="h-8 w-auto mx-1"
            />
            <img src={PayPalLogo} alt="PayPal" className="h-8 w-auto mx-1" />
            <img
              src={ApplePayLogo}
              alt="Apple Pay"
              className="h-8 w-auto mx-1"
            />
          </div>
        </div>

        {/* Synchrony Financing Logo and Button */}
        <div className="flex flex-col items-center sm:flex-col sm:items-start sm:justify-start w-full sm:ml-28 sm:-mt-10 sm:mb-10">
          <Button
            className="mt-4 sm:mt-0 sm:mb-2 h-10 sm:h-12 text-[#3B3D44] font-semibold text-sm sm:text-lg
drop-shadow-xl bg-[#FBC600] hover:bg-[#3B3D44] hover:text-[#FBC600] active:bg-[#FBC600] border-1 border-[#000000] hover:border-[#FBC600] rounded-lg p-4 sm:p-4 sm:px-8 sm:py-2"
          >
            <a
              href="https://www.synchrony.com/mmc/M9229374400"
              target="_blank"
              rel="noreferrer"
            >
              Financing Available!
            </a>
          </Button>
          <img
            src={SynchronyLogo}
            alt="Synchrony Financing"
            className="h-8 mt-2 sm:mt-0 sm:h-12 w-auto"
          />
        </div>

        {/* NH Services Logo */}
        <Link to="/" className="nav-link">
          <img
            src={NHServicesLogo}
            alt="NH Services"
            className="h-28 sm:h-32 w-auto mt-8 sm:mt-16"
          />
        </Link>
        <span className="text-xl sm:text-2xl font-bold text-center z-20 text-[#5A5858] mt-4 sm:mt-8">
          Proudly Serving The Denver Metro Area Since 2010
        </span>
        <div className="z-20">
          <ContactFormModal
            buttonText="Get An Estimate!"
            serviceId={import.meta.env.VITE_APP_EMAILJS_SERVICE_ID}
            templateId={import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID}
            userId={import.meta.env.VITE_APP_EMAILJS_USER_ID}
          />
        </div>
      </div>
      {/* Van Image Section */}
      <div className="flex flex-col justify-center items-center -mt-12 sm:-mt-24 relative">
        <img src={VanPic} alt="NH Services Van" className="h-full w-full z-0" />
        <img
          src={MaintenanceAgreementAd}
          alt="Maintenance Agreement Ad"
          className="w-1/2 ml-8 absolute bottom-0 transform -translate-x-1/2 z-10"
        />
      </div>
      {/* Divider */}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
        }}
      ></div>
      <div id="aboutus">
        <AboutUsSection />
      </div>
      {/* Divider */}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
        }}
      ></div>
      <div id="services">
        <ServicesSection />
      </div>
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
        }}
      ></div>
      <div
        id="testimonials"
        className="flex flex-col sm:flex-row bg-[#D9D9D9] text-[#5A5858]"
      >
        {/* Testimonials Form */}
        <div className="w-full p-4">
          <TestimonialForm />
        </div>
      </div>{" "}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
        }}
      ></div>
      <div id="servicearea" className="">
        <ServiceAreaSection />
      </div>
      <div
        className="h-2 w-full mt-4"
        style={{
          backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
        }}
      ></div>
      <div className="flex justify-center sm:flex-row bg-[#ffffff] text-[#5A5858]">
        <div className="w-full p-4 sm:w-1/2">
          <FAQAccordion />
        </div>
      </div>{" "}
      <div
        className="h-2 w-full mt-4"
        style={{
          backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
        }}
      ></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
