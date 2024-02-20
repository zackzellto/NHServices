import { useState, useRef, useEffect } from "react";
import { Document, Page } from "react-pdf";

const HeatingPDF1 = "../../brochures/R801T UH Brochure.pdf";
const HeatingPDF2 = "../../brochures/R802V Brochure.pdf";
const HeatingPDF3 = "../../brochures/R921V Brochure.pdf";
const HeatingPDF4 = "../../brochures/R962V Brochure.pdf";
const AirPurifierHalo = "../../brochures/HALO-LED-Spec-sheet-web.pdf";
const NavienNPE2 = "../../brochures/NPE-2 Consumer Brochure 2204.pdf";
const RA13NZ = "../../brochures/RA13NZ Brochure.pdf";
const RA15AZ = "../../brochures/RA15AZ Brochure.pdf";

const equipmentData = [
  {
    name: "Heating",
    brochures: [
      { title: "RUUD - R801T Gas Furnace", pdf: HeatingPDF1 },
      { title: "RUUD - R802V Gas Furnace", pdf: HeatingPDF2 },
      { title: "RUUD - R921V Gas Furnace", pdf: HeatingPDF3 },
      { title: "RUUD - R962V Gas Furnace", pdf: HeatingPDF4 },
    ],
  },
  {
    name: "Air Conditioning",
    brochures: [
      { title: "RUUD - RA13NZ Air Conditioner", pdf: RA13NZ },
      { title: "RUUD - RA15AZ Air Conditioner", pdf: RA15AZ },
    ],
  },
  {
    name: "Air Purification",
    brochures: [{ title: "HALO-LED Air Purifier", pdf: AirPurifierHalo }],
  },
  {
    name: "Water Heaters",
    brochures: [{ title: "Navien - NPE-2 Water Heater", pdf: NavienNPE2 }],
  },
];

const EquipmentDropdown = () => {
  const [isEquipmentDropdownOpen, setIsEquipmentDropdownOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsEquipmentDropdownOpen(false);
        setOpenSubMenu(null); // Optionally reset this as well to close sub-menus
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEquipmentButtonClick = () => {
    setIsEquipmentDropdownOpen(!isEquipmentDropdownOpen);
    setOpenSubMenu(null); // Reset sub-menu to ensure it's closed when re-opening the dropdown
  };

  const handleSubMenuClick = (equipmentName) => {
    setOpenSubMenu(openSubMenu === equipmentName ? null : equipmentName);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        className="inline-flex justify-center w-full rounded-md  py-2 sm:text-md font-medium text-gray-500 cursor-pointer"
        onClick={handleEquipmentButtonClick}
      >
        Equipment
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M5 10l5 5 5-5H5z" />
        </svg>
      </button>
      {isEquipmentDropdownOpen && (
        <div className="sm:origin-top-right absolute mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {equipmentData.map((equipment, index) => (
              <div key={index}>
                <button
                  onClick={() => handleSubMenuClick(equipment.name)}
                  className="text-left px-8 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full flex justify-between items-center cursor-pointer"
                  role="menuitem"
                >
                  {equipment.name}
                  <svg
                    className="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openSubMenu === equipment.name && (
                  <div>
                    {equipment.brochures.map((brochure, brochureIndex) => (
                      <div key={brochureIndex}>
                        <Document file={brochure.pdf}>
                          <Page pageNumber={1} />
                        </Document>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EquipmentDropdown;
