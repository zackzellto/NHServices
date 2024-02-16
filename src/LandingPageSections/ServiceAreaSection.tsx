import ServiceMap from "../images/longmont-to-castle-rock-map.png";
import BBBLogo from "../images/logos/bbb-logo.png";

const ServiceAreaSection = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:p-4 bg-white text-gray-600">
        <div className="flex flex-col sm:w-1/2">
          <h1 className="text-3xl underline font-bold text-center mt-8 sm:mt-4">
            Proudly Serving
          </h1>
          <div className="w-full p-4 sm:gap-10 flex justify-center items-center">
            <img
              src={ServiceMap}
              alt="Service Map"
              className="h-96 drop-shadow-xl w-auto rounded-xl mr-8 sm:mr-0"
            />
            <ul className="list-disc ml-4 sm:ml-8">
              <li>Longmont</li>
              <li>Erie</li>
              <li>Broomfield</li>
              <li>Westminster</li>
              <li>Thornton</li>
              <li>Northglenn</li>
              <li>Federal Heights</li>
              <li>Commerce City</li>
              <li>Denver</li>
              <li>Aurora</li>
              <li>Centennial</li>
              <li>Parker</li>
              <li>Lone Tree</li>
              <li>Highlands Ranch</li>
              <li>Castle Rock</li>
            </ul>
          </div>
        </div>
        <div className=" sm:mt-24 sm:flex flex-col justify-center items-center sm:w-1/2">
          <img
            src={BBBLogo}
            alt="BBB"
            className="h-64 w-auto rounded-xl mx-auto"
          />
          <h1 className="text-3xl sm:w-3/4 text-red-600 underline font-bold text-center mt-8">
            Fully Licensed & Insured in the State of Colorado!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaSection;
