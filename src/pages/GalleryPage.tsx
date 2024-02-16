import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import NHServicesLogo from "../images/logos/nhservices-logo.png";

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
      <h2 className="text-center font-bold underline text-4xl mb-4">Gallery</h2>
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4 grid grid-cols-4 gap-4 justify-center">
        {imageArray.slice(0, visibleImages).map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto p-2"
            />
          </div>
        ))}
      </div>
      {visibleImages < imageArray.length && (
        <div className="text-center my-4">
          <button onClick={loadMoreImages}>Load More</button>
        </div>
      )}
      <Footer className="fixed bottom-0 left-0 w-full" />
    </div>
  );
};

export default GalleryPage;
