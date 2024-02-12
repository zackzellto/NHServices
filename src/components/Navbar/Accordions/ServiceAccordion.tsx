import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const ServiceAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mt-32 mr-10 ">
      <Accordion className="">
        <AccordionItem
          key="installation-services"
          title={<span className="text-[#D9D9D9]">Installation Services</span>}
          onPress={() => handleAccordionItemClick(0)}
          className=""
        >
          <ul className="list-disc ml-4">
            <li>Furnace Installations</li>
            <li>Air Conditioner Installations</li>
            <li>Water Heater Installation</li>
            <li>Hybrid Water Heater Installation</li>
            <li>Tankless Water Heater Installation</li>
            <li>Ductless Mini Split Installation</li>
            <li>Heat Pump Installation</li>
            <li>Ductwork Installation and Repair</li>
            <li>Humidifier Installation</li>
            <li>Air Purifier Installation</li>
            <li>Smart Thermostat Installation</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="maintenance-services"
          title=<span className="text-[#D9D9D9]">Maintenance Services</span>
          onPress={() => handleAccordionItemClick(1)}
        >
          <ul className="list-disc ml-4">
            <li>Maintenance for all Brands</li>
            <li>Ductwork Cleaning</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="real-estate-services"
          title=<span className="text-[#D9D9D9]">Real Estate Services</span>
          onPress={() => handleAccordionItemClick(2)}
        >
          <ul className="list-disc ml-4">
            <li>Furnace and Air Conditioner Inspections</li>
            <li>Inspection Resolution Repairs</li>
            <li>Furnace Certifications</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="swamp-cooler-services"
          title=<span className="text-[#D9D9D9]">Swamp Cooler Services</span>
          onPress={() => handleAccordionItemClick(3)}
        >
          <ul className="list-disc ml-4">
            <li>Swamp Cooler Installation and Repairs</li>
            <li>Swamp Cooler Start Ups and Winterizing</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="maintenance-agreements"
          title=<span className="text-[#D9D9D9]">Maintenance Agreements</span>
          onPress={() => handleAccordionItemClick(4)}
        >
          <ul className="list-disc ml-4">
            <li>
              Discounts on Services for customers with a Maintenance Agreement
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ServiceAccordion;
