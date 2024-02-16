import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import NHServicesLogo from "../images/logos/nhservices-logo.png";
import { Button } from "@nextui-org/react";

// Sample array of image URLs - replace these with your actual image URLs
const imageArray = new Array(50)
  .fill(0)
  .map((_, index) => `https://via.placeholder.com/150?text=Image+${index + 1}`);

const GalleryPage = () => {
  const [visibleImages, setVisibleImages] = useState(8); // Initially show 8 images
  const imagesPerLoad = 8; // Number of images to load per click

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) =>
      Math.min(prevVisibleImages + imagesPerLoad, imageArray.length)
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mb-4 mt-4">
        <img
          src={NHServicesLogo}
          alt="NH Services"
          className="h-36 w-auto mx-auto"
        />
      </div>
      <h2 className="text-center font-bold text-4xl mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 bg-gray-300 rounded-xl gap-4 justify-center p-2">
        {imageArray.slice(0, visibleImages).map((imageUrl, index) => (
          <div key={index} className="mb-4">
            <img
              src={imageUrl}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto drop-shadow-xl p-2 mx-auto sm:w-[350px] sm:h-550px"
            />
          </div>
        ))}
      </div>
      {visibleImages < imageArray.length && (
        <div className="text-center my-4">
          <Button
            className="w-1/2 sm:w-1/4 text-white font-semibold h-12 shadow-lg text-lg"
            style={{
              backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
            }}
            onClick={loadMoreImages}
          >
            Load More
          </Button>
        </div>
      )}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default GalleryPage;
