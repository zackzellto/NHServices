import React, { useState, useEffect } from "react";
import { Button, Input, Card } from "@nextui-org/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  firstName: string;
  lastName: string;
  message: string;
  rating: number;
}

interface StarRatingProps {
  value: number;
  onClick: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ value, onClick }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex space-x-2">
      {stars.map((star) => (
        <button key={star} type="button" onClick={() => onClick(star)}>
          {star <= value ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                value < star ? "text-gray-400" : "text-yellow-500"
              } fill-current`}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                value < star ? "text-gray-400" : "text-yellow-500"
              } fill-current`}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
};

const TestimonialForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const savedTestimonials = JSON.parse(
      localStorage.getItem("testimonials") || "[]"
    );
    setTestimonials(savedTestimonials.slice(0, 5)); // Display only the newest 5 testimonials
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !message || rating === 0) {
      alert("All fields are required for submission!");
      return;
    }

    const newTestimonial: Testimonial = {
      firstName,
      lastName,
      message,
      rating,
    };
    const updatedTestimonials = [newTestimonial, ...testimonials.slice(0, 4)]; // Add the newest testimonial to the beginning and keep only the newest 4 from the existing ones
    setTestimonials(updatedTestimonials);
    localStorage.setItem("testimonials", JSON.stringify(updatedTestimonials));
    setFirstName("");
    setLastName("");
    setMessage("");
    setRating(0);
  };

  const handleDeleteTestimonial = (index: number) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
    localStorage.setItem("testimonials", JSON.stringify(updatedTestimonials));
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1, // Show 1 card at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto gap-10 flex flex-col-reverse sm:flex-row items-center justify-center">
      <div className="w-full sm:w-1/2">
        <form
          style={{
            backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
          }}
          className="rounded-lg p-2 flex-grow"
          onSubmit={handleFormSubmit}
        >
          <div className="bg-[#5A5858] gap-4 p-4 rounded-lg flex flex-col items-center">
            <span className="text-white text-lg underline font-bold text-center mb-4">
              Leave us a Review!
            </span>
            <Input
              className="drop-shadow-lg"
              fullWidth
              color="primary"
              size="sm"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              className="drop-shadow-lg"
              fullWidth
              color="primary"
              size="sm"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              className="drop-shadow-lg"
              fullWidth
              color="primary"
              size="lg"
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex items-center mb-4">
              <label className="block mr-2 text-white">Rate Us!:</label>
              <StarRating value={rating} onClick={setRating} />
            </div>
            <Button
              style={{
                backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
              }}
              className="w-full h-12 drop-shadow-lg text-md"
              type="submit"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

      <div className="w-full sm:w-1/2">
        <div className="mt-4 p-8 sm:mt-0 sm:ml-auto sm:w-full">
          <Slider {...carouselSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4">
                <Card
                  style={{
                    backgroundImage:
                      "linear-gradient(to right,#54a0d7, #e75909 )",
                  }}
                  className=" text-white p-2 rounded-lg shadow-lg w-full"
                >
                  <div className="bg-[#5A5858] p-4">
                    <h3 className="text-xl font-bold">{`${testimonial.firstName} ${testimonial.lastName}`}</h3>
                    <p className="mt-2 p-4 overflow-auto">
                      "{testimonial.message}"
                    </p>
                    <div className="flex justify-between items-end">
                      <button
                        className="text-yellow-500"
                        onClick={() => handleDeleteTestimonial(index)}
                      >
                        Delete
                      </button>
                      <div>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="#FBBF24" // Changed color to yellow
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialForm;
