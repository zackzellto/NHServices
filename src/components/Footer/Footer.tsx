import React from "react";
import SocialMediaQRCode from "../../images/NHServices_QR_Code.svg";
import NHServicesLogo from "../../images/logos/nhservices-logo.png";
import FacebookIcon from "../../images/logos/facebook-icon.png";
import XIcon from "../../images/logos/x-icon.png";
import InstagramIcon from "../../images/logos/instagram-icon.png";
import LogiCodeSolutionsLogo from "../../images/logos/LogiCodeSolutions-Logo-NEW.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100064849591688",
      icon: FacebookIcon,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/nhservicesllc",
      icon: XIcon,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nh_services_llc",
      icon: InstagramIcon,
    },
  ];

  return (
    <footer className="bg-[#5A5858] text-white py-8 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
      <div className="footer-left w-full sm:w-auto">
        <div className="text-lg">NH Services, LLC.</div>
        <br />
        <div>Monday - Friday</div>
        <div>8:00AM - 5:00PM</div>
        <br />
        <div>7310 W. 52nd Ave. A-146</div>
        <div>Arvada, CO 80002</div>
      </div>

      <div className="footer-middle flex flex-col items-center justify-center w-full sm:w-auto mt-4 sm:mt-0">
        <img
          src={SocialMediaQRCode}
          alt="QR Code"
          className="w-32 h-32 mb-2 rounded-md drop-shadow-lg"
        />
        <div className="flex space-x-4 drop-shadow-lg mt-4 mb-4">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.icon} alt={link.name} className="w-8 h-8" />
            </a>
          ))}
        </div>
        <div className="hidden sm:block -mb-6">
          <span>
            Built with ❤️ by:{" "}
            <Link to="https://logicodesolutions.com" target="_blank">
              <img
                src={LogiCodeSolutionsLogo}
                alt="LogiCode Solutions"
                className="w-auto h-8 inline"
              />
            </Link>
          </span>
        </div>
      </div>

      <div className="footer-right flex flex-col items-center sm:items-end w-full sm:w-auto mt-4 sm:mt-0">
        <div className="bg-white rounded-lg drop-shadow-lg mt-4">
          <img src={NHServicesLogo} alt="NH Services" className="w-24 h-16" />
        </div>
        <br />
        <div className="contact-info">
          <div>
            <a href="tel:303-905-1470" className="underline">
              303-905-1470
            </a>
          </div>
          <br />
          <a href="mailto:nhserviceshvac@gmail.com" className="underline">
            nhserviceshvac@gmail.com
          </a>
        </div>
        <div className="-mb-6 sm:hidden mt-4">
          <span>
            Built with ❤️ by:{" "}
            <Link to="https://logicodesolutions.com" target="_blank">
              <img
                src={LogiCodeSolutionsLogo}
                alt="LogiCode Solutions"
                className="w-auto h-8 inline"
              />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
