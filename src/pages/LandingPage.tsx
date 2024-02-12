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

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row sm:ml-auto sm:mr-16 sm:mt-8">
          <span className="text-md text-center text-black">We Accept:</span>
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
          <img src={DiscoverLogo} alt="Discover" className="h-8 w-auto mx-1" />
        </div>
        <div className="flex flex-row sm:ml-auto sm:mr-20 mt-4">
          <img src={PayPalLogo} alt="PayPal" className="h-8 w-auto mx-1" />
          <img src={ApplePayLogo} alt="Apple Pay" className="h-8 w-auto mx-1" />
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
    </div>
  );
};

export default LandingPage;