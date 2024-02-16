import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import NHServicesLogo from "../../images/logos/nhservices-logo.png";

const menuItems = ["About Us", "Services", "Testimonials", "Service Area"];

const AppNavbar = () => {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <Link to="/" className="nav-link">
            <img
              src={NHServicesLogo}
              alt="NH Services"
              className="h-8 w-auto"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 justify-center items-center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              to={`/#${item.toLowerCase().replace(/\s+/g, "")}`}
              className="nav-link"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}{" "}
        <Link to="/gallery" className="w-full text-md nav-link">
          Gallery
        </Link>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              to={`/#${item.toLowerCase().replace(/\s+/g, "")}`}
              className="w-full text-lg nav-link"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <Link to="/gallery" className="w-full text-lg nav-link">
          Gallery
        </Link>
      </NavbarMenu>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <span className="text-md text-center text-gray-500">
            Call for a <span className="underline font-bold">FREE</span>{" "}
            estimate:
            <br />
            <a href="tel:13039051470" className="nav-link">
              <span className="text-lg font-bold text-gradient">
                (303) 905-1470
              </span>
            </a>
          </span>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle aria-label="Toggle menu" className="sm:hidden" />
    </Navbar>
  );
};

export default AppNavbar;
