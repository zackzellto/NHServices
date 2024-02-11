import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import NHServicesLogo from "../../images/logos/nhservices-logo.png";

const menuItems = ["About Us", "Gallery", "Equipment", "Contact Us"];

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand className="">
          <Link color="foreground" href="#">
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
            <Link color="foreground" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full text-lg"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <span className="text-md text-center text-gray-500">
            Call for a <span className="underline font-bold">FREE</span>{" "}
            estimate:
            <br />
            <Link color="foreground" href="tel:13039051470">
              <span className="text-lg font-bold text-gradient">
                (303) 905-1470
              </span>
            </Link>
          </span>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
    </Navbar>
  );
};

export default AppNavbar;
