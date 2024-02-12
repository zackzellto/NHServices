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
import ImagePlaceholder from "../images/image-placeholder.png";
import HVACAbstractImage from "../images/hvac-abstract-image.png";
import ServiceAccordion from "../components/Navbar/Accordions/ServiceAccordion";
import RUUDLogo from "../images/logos/ruud-logo.png";
import RemeHaloLogo from "../images/logos/reme-halo-logo.png";
import NavienLogo from "../images/logos/Navien_Logo.png";
import HoneywellLogo from "../images/logos/honeywell-logo.png";
import AprilAireLogo from "../images/logos/aprilaire-logo.png";
import RheemLogo from "../images/logos/rheem-logo.png";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
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
        <img
          src={NHServicesLogo}
          alt="NH Services"
          className="h-28 sm:h-32 w-auto mt-8 sm:mt-0"
        />
        <p className="z-10 text-center font-bold text-[#5A5858] text-xl sm:text-4xl mt-4">
          Proudly serving Colorado since 2010
        </p>
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
      <div className="flex flex-col justify-center items-center -mt-12 sm:-mt-24 relative">
        <img src={VanPic} alt="NH Services Van" className="h-full w-full z-0" />
        <img
          src={MaintenanceAgreementAd}
          alt="Maintenance Agreement Ad"
          className="w-1/2 ml-8 absolute bottom-0 transform -translate-x-1/2 z-10"
        />
      </div>
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
        }}
      ></div>
      <div className="flex flex-col sm:flex-row bg-[#D9D9D9] text-[#5A5858]">
        <div className="w-full sm:w-1/2 text-center sm:text-left sm:mr-8 mt-8 sm:mt-32">
          <img
            src={ImagePlaceholder}
            alt="Placeholder"
            className="sm:h-96 sm:w-96 mx-auto"
          />
        </div>
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
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
        }}
      ></div>
      <div className="flex flex-col sm:flex-row bg-[#ffffff] text-white">
        <div className="w-full sm:w-1/2 p-4 text-md sm:text-lg ml-4 sm:ml-20">
          <ServiceAccordion />
        </div>
        <div className="w-full sm:w-1/2 text-center sm:text-left sm:mr-20 sm:mt-8">
          <div className="w-full flex sm:flex-row sm:w-1/2 text-center sm:text-left sm:mr-20 sm:mt-8">
            <span className="text-lg flex text-center sm:text-2xl font-bold">
              Authorized Dealer of:
            </span>{" "}
            <img src={RUUDLogo} alt="RUUD" className="h-16 w-auto mx-auto" />
          </div>
          <div className="text-xl mb-4 text-center sm:text-2xl font-bold underline">
            Trusted Brands:
          </div>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <img
              src={RemeHaloLogo}
              alt="Reme Halo"
              className="h-20 z-10  w-auto mx-1"
            />
            <img
              src={NavienLogo}
              alt="Navien"
              className="h-8 z-10  w-auto mx-1"
            />
            <img
              src={HoneywellLogo}
              alt="Honeywell"
              className="h-12 z-10  w-auto mx-1"
            />
            <img
              src={AprilAireLogo}
              alt="AprilAire"
              className="h-12 z-10  w-auto mx-1"
            />
            <img
              src={RheemLogo}
              alt="Rheem"
              className="z-10 h-14 sm:h-24 w-auto mx-1"
            />
          </div>
          <img
            src={HVACAbstractImage}
            alt="HVAC Abstract Image"
            className="sm:h-[500px] sm:w-[500px] opacity-20 mx-auto -mt-80"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
