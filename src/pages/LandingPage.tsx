import { Button } from "@nextui-org/react";
import NHServicesLogo from "../images/logos/nhservices-logo.png";
import VanPic from "../images/van-pic.png";
import MastercardLogo from "../images/logos/mastercard-logo.png";
import VisaLogo from "../images/logos/visa-logo.png";
import AmexLogo from "../images/logos/amex-logo.png";
import DiscoverLogo from "../images/logos/discover-logo.png";
import PayPalLogo from "../images/logos/paypal-logo.png";
import ApplePayLogo from "../images/logos/applepay-logo.png";
import MaintenanceAgreementAd from "../images/maintenance-agreement-ad.png";
import HVACAbstractImage from "../images/hvac-abstract-image.png";
import ServiceAccordion from "../components/Navbar/Accordions/ServiceAccordion";
import RUUDLogo from "../images/logos/ruud-logo.png";
import RemeHaloLogo from "../images/logos/reme-halo-logo.png";
import NavienLogo from "../images/logos/Navien_Logo.png";
import HoneywellLogo from "../images/logos/honeywell-logo.png";
import AprilAireLogo from "../images/logos/aprilaire-logo.png";
import RheemLogo from "../images/logos/rheem-logo.png";
import TestimonialForm from "../components/Navbar/Testimonials/TestimonialForm";
import AboutUsImage from "../images/gallery/image3.jpeg";
import ServiceMap from "../images/longmont-to-castle-rock-map.png";
import BBBLogo from "../images/logos/bbb-logo.png";
import FAQAccordion from "../components/Navbar/Accordions/FAQAccordion";
import Footer from "../components/Navbar/Footer/Footer";

const LandingPage = () => {
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
        {/* NH Services Logo */}
        <img
          src={NHServicesLogo}
          alt="NH Services"
          className="h-28 sm:h-32 w-auto mt-8 sm:mt-16"
        />
        <span className="text-xl sm:text-2xl font-bold text-center z-20 text-[#5A5858] mt-4 sm:mt-8">
          Proudly Serving The Denver Metro Area Since 2010
        </span>
        <div className="z-20">
          <Button
            size="lg"
            className="relative mt-8 shadow-xl"
            style={{
              backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
            }}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-[#5A5858] w-[154px] h-[40px] rounded-xl"></div>
            </div>
            <div className="z-10 relative text-white">Get an Estimate!</div>
          </Button>
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
      {/* About Us Section */}
      <div className="flex flex-col sm:flex-row bg-[#D9D9D9] text-[#5A5858]">
        {/* About Us Text */}
        <div className="w-full p-6 sm:w-1/2 text-center sm:text-left sm:mr-8 mt-8 sm:mt-32">
          <img
            src={AboutUsImage}
            alt="Placeholder"
            className="sm:h-96 sm:w-96 rounded-xl shadow-xl mx-auto"
          />
        </div>
        {/* About Us Content */}
        <div className="w-full sm:w-1/2 p-4 text-md sm:text-lg mr-20 ">
          <div className="text-xl mb-4 text-center sm:text-3xl font-bold underline">
            About Us
          </div>
          <p>
            We're a local, family-run business with over 29 years of hands-on
            experience. When it comes to your repairs or installations, we've
            got your back!
          </p>
          <br />
          <p>
            With NH Services, it's all about you. We take the time to listen and
            understand your needs, ensuring we offer the best solutions tailored
            just for you. No pushy sales tactics here – our team is focused on
            delivering honest, reliable service without any hidden agendas.
          </p>
          <br />
          <p>
            Plus, our technicians? They're not in it for the commission. They're
            here because they genuinely care about doing a great job for you.
            And as for pricing? We keep it fair and transparent, because we
            believe everyone deserves quality service at a reasonable price.
          </p>
          <br />
          <p>
            So, if you're looking for a team you can trust to get the job done
            right, look no further. We're here to help, every step of the way!
          </p>
        </div>
      </div>
      {/* Divider */}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
        }}
      ></div>
      {/* Services Offered & Trusted Brands Section */}
      <div className="flex flex-col sm:flex-row bg-[#ffffff] text-[#5A5858]">
        {/* Services Offered */}
        <div className="w-full sm:w-1/2 p-4 text-md sm:text-lg ml-4 sm:ml-20">
          <ServiceAccordion />
        </div>
        {/* Trusted Brands */}
        <div className="w-full sm:w-1/2 text-center sm:text-left sm:mr-20 sm:mt-8">
          <div className="w-full flex items-center justify-center">
            <span className="text-lg sm:text-2xl font-bold">
              Authorized Dealer of:
            </span>
            <img src={RUUDLogo} alt="RUUD" className="h-16 w-auto ml-4" />
          </div>
          {/* Trusted Brands Title */}
          <div className="text-xl mb-10 text-center sm:text-2xl font-bold underline">
            Trusted Brands:
          </div>
          {/* Trusted Brands Logos */}
          <div className="flex flex-wrap gap-4 sm:mt-10 justify-center sm:justify-start">
            <img
              src={RemeHaloLogo}
              alt="Reme Halo"
              className="h-20 z-10 w-auto mx-1"
            />
            <img
              src={NavienLogo}
              alt="Navien"
              className="h-8 z-10 sm:mb-16 w-auto mx-1"
            />
            <img
              src={HoneywellLogo}
              alt="Honeywell"
              className="h-12 z-10 w-auto mx-1"
            />
            <img
              src={AprilAireLogo}
              alt="AprilAire"
              className="h-12 z-10 sm:mr-10 sm:mt-16 w-auto mx-1"
            />
            <img
              src={RheemLogo}
              alt="Rheem"
              className="z-10 h-14 sm:ml-24 sm:h-24 w-auto mx-1"
            />
          </div>
          {/* Abstract Image */}
          <img
            src={HVACAbstractImage}
            alt="HVAC Abstract Image"
            className="sm:h-[500px] sm:w-[500px] opacity-20 mx-auto -mt-[300px] sm:-mt-[450px]"
          />
        </div>
      </div>{" "}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
        }}
      ></div>
      <div className="flex flex-col sm:flex-row bg-[#D9D9D9] text-[#5A5858]">
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
      <div className="flex flex-col sm:flex-row sm:p-4 bg-white text-gray-600">
        <div className="flex flex-col sm:w-1/2">
          <h1 className="text-3xl underline font-bold text-center mt-8 sm:mt-4">
            Proudly Serving
          </h1>
          <div className="w-full p-4 sm:gap-10 flex justify-center items-center">
            <img
              src={ServiceMap}
              alt="Service Map"
              className="h-96 drop-shadow-xl w-auto rounded-xl mr-8 sm:mr-0"
            />
            <ul className="list-disc ml-4 sm:ml-8">
              <li>Longmont</li>
              <li>Erie</li>
              <li>Broomfield</li>
              <li>Westminster</li>
              <li>Thornton</li>
              <li>Northglenn</li>
              <li>Federal Heights</li>
              <li>Commerce City</li>
              <li>Denver</li>
              <li>Aurora</li>
              <li>Centennial</li>
              <li>Parker</li>
              <li>Lone Tree</li>
              <li>Highlands Ranch</li>
              <li>Castle Rock</li>
            </ul>
          </div>
        </div>
        <div className=" sm:mt-24 sm:flex flex-col justify-center items-center sm:w-1/2">
          <img
            src={BBBLogo}
            alt="BBB"
            className="h-64 w-auto rounded-xl mx-auto"
          />
          <h1 className="text-3xl sm:w-3/4 text-red-600 underline font-bold text-center mt-8">
            Fully Licensed & Insured in the State of Colorado!
          </h1>
        </div>
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
