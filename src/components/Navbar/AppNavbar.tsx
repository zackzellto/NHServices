import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
  // Assuming you add a MenuToggle icon for the hamburger menu
} from "./Icons.jsx";
import NHServicesLogo from "../../images/logos/nhservices-logo.png";

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    menu: <ChevronDown fill="currentColor" size={25} />, // Placeholder for MenuToggle icon
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar>
      <NavbarBrand>
        <img src={NHServicesLogo} alt="NHServices" width={80} height={80} />
        <Button className="lg:hidden" onClick={toggleMenu}>
          {icons.menu} {/* Placeholder for your MenuToggle icon */}
        </Button>
      </NavbarBrand>
      <NavbarContent
        className={`lg:flex ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col lg:flex-row gap-4`}
        justify="center"
      >
        {/* Collapsible content goes here */}
        <Dropdown>
          <DropdownTrigger>
            <Link>Equipment {icons.chevron}</Link>
          </DropdownTrigger>
          <DropdownMenu aria-label="Features">
            {/* Dropdown items */}
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="#" color="foreground" style={{ minWidth: "initial" }}>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" style={{ minWidth: "initial" }}>
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className={`lg:flex ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col lg:flex-row`}
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">
          <span className="text-md text-center text-gray-500">
            Call for a <span className="underline font-bold">FREE</span>{" "}
            estimate:
            <br />
            <span className="text-lg font-bold text-gradient">
              (555) 555-5555
            </span>
          </span>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;
