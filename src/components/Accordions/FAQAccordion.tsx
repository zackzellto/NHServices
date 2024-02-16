import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mt-4 ">
      <div className="text-2xl text-center mb-4 font-bold underline text-[#5A5858]">
        F.A.Q
      </div>
      <Accordion className="">
        <AccordionItem
          key="installation-services"
          title={
            <span className="text-[#000000] font-semibold">
              How long does a furnace or air conditioner last?
            </span>
          }
          onPress={() => handleAccordionItemClick(0)}
          className=""
        >
          <span className="text-[#5A5858] font-semibold">
            Average life expectancy of a furnace or air conditioner is 15-18
            years.
          </span>
        </AccordionItem>
        <AccordionItem
          key="maintenance-services"
          title=<span className="text-[#000000] font-semibold">
            How often should we do maintenance on our equipment?
          </span>
          onPress={() => handleAccordionItemClick(1)}
        >
          <span className="text-[#5A5858] font-semibold">Every year.</span>
        </AccordionItem>
        <AccordionItem
          key="real-estate-services"
          title=<span className="text-[#000000] font-semibold">
            How often should we change the air filter?
          </span>
          onPress={() => handleAccordionItemClick(2)}
        >
          <span className="text-[#5A5858] font-semibold">
            Every 3 months or as needed.
          </span>
        </AccordionItem>
        <AccordionItem
          key="swamp-cooler-services"
          title=<span className="text-[#000000] font-semibold">
            Should we have the air ducts cleaned?
          </span>
          onPress={() => handleAccordionItemClick(3)}
        >
          <span className="text-[#5A5858] font-semibold">
            Yes, every 5-8 years.
          </span>
        </AccordionItem>
        <AccordionItem
          key="maintenance-agreements"
          title=<span className="text-[#000000] font-semibold">
            Are digital thermostats more energy efficient?
          </span>
          onPress={() => handleAccordionItemClick(4)}
        >
          <span className="text-[#5A5858] font-semibold">
            Yes, they are more accurate and only run a selected amount of cycles
            per hour to improve efficiency.
          </span>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
