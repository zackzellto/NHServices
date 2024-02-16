import RUUDLogo from "../images/logos/ruud-logo.png";
import RemeHaloLogo from "../images/logos/reme-halo-logo.png";
import NavienLogo from "../images/logos/Navien_Logo.png";
import HoneywellLogo from "../images/logos/honeywell-logo.png";
import AprilAireLogo from "../images/logos/aprilaire-logo.png";
import RheemLogo from "../images/logos/rheem-logo.png";
import HVACAbstractImage from "../images/hvac-abstract-image.png";

const TrustedBrandsSection = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default TrustedBrandsSection;
