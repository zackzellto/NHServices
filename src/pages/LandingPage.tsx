import { Button } from "@nextui-org/react";
import NHServicesLogo from "../images/logos/nhservices-logo.png";
import VanPic from "../images/van-pic.png";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={NHServicesLogo}
          alt="NH Services"
          className="h-32 w-auto mt-8"
        />
        <p className="text-center font-bold text-[#5A5858] text-4xl">
          Proudly serving Colorado since 2010
        </p>
        <Button
          size="lg"
          className="relative mt-8"
          style={{
            backgroundImage: "linear-gradient(to right, #e75909, #54a0d7)",
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-[#5A5858] w-[154px] h-[40px] rounded-xl"></div>
          </div>
          <div className="z-10 relative text-white">Get an Estimate!</div>
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={VanPic} alt="NH Services Van" className="h-full w-full" />
      </div>
    </div>
  );
};

export default LandingPage;
