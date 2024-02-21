import { useState } from "react";
import Footer from "../components/Footer/Footer";
import NHServicesLogo from "../images/logos/nhservices-logo.png";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import GalleryImage1 from "../images/gallery/gallery1.jpeg";
import GalleryImage2 from "../images/gallery/gallery2.jpeg";
import GalleryImage3 from "../images/gallery/gallery3.jpg";
import GalleryImage4 from "../images/gallery/gallery4.jpg";
import GalleryImage5 from "../images/gallery/gallery5.jpg";
import GalleryImage6 from "../images/gallery/gallery6.jpg";
import GalleryImage7 from "../images/gallery/gallery7.jpg";
import GalleryImage8 from "../images/gallery/gallery8.jpg";
import GalleryImage9 from "../images/gallery/gallery9.jpg";
import GalleryImage10 from "../images/gallery/gallery10.jpg";
import GalleryImage11 from "../images/gallery/gallery11.jpg";
import GalleryImage12 from "../images/gallery/gallery12.jpg";
import GalleryImage13 from "../images/gallery/gallery13.jpg";
import GalleryImage14 from "../images/gallery/gallery14.jpg";
import GalleryImage15 from "../images/gallery/gallery15.jpg";
import GalleryImage16 from "../images/gallery/gallery16.jpg";
import GalleryImage17 from "../images/gallery/gallery17.jpg";
import GalleryImage18 from "../images/gallery/gallery18.jpg";
import GalleryImage19 from "../images/gallery/gallery19.jpg";
import GalleryImage20 from "../images/gallery/gallery20.jpg";
import GalleryImage21 from "../images/gallery/gallery21.jpg";

const imageArray: string[] = [
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  GalleryImage5,
  GalleryImage6,
  GalleryImage7,
  GalleryImage8,
  GalleryImage9,
  GalleryImage10,
  GalleryImage11,
  GalleryImage12,
  GalleryImage13,
  GalleryImage14,
  GalleryImage15,
  GalleryImage16,
  GalleryImage17,
  GalleryImage18,
  GalleryImage19,
  GalleryImage20,
  GalleryImage21,
];

const GalleryPage: React.FC = () => {
  const [visibleImages, setVisibleImages] = useState(8); // Initially show 8 images
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imagesPerLoad = 8; // Number of images to load per click

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) =>
      Math.min(prevVisibleImages + imagesPerLoad, imageArray.length)
    );
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
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
            <div
              onClick={() => handleImageClick(imageUrl)}
              className="cursor-pointer"
            >
              <img
                src={imageUrl}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto rounded-xl drop-shadow-xl p-2 mx-auto sm:w-[350px] sm:h-550px transition-transform transform hover:scale-105"
              />
            </div>
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
      <Modal isOpen={modalIsOpen} placement="center" onClose={closeModal}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Gallery Image
          </ModalHeader>
          <ModalBody>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-auto"
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default GalleryPage;
