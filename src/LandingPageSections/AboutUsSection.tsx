import AboutUsImage from "../images/gallery/gallery1.jpeg";

const AboutUsSection = () => {
  return (
    <div>
      {" "}
      <div id="aboutus">
        {/* About Us Section */}
        <div className="flex flex-col p-8 sm:flex-row bg-[#D9D9D9] text-[#5A5858]">
          {/* About Us Text */}
          <div className="w-full p-6 sm:w-1/2 text-center sm:text-left sm:mr-8 mt-8 sm:mt-12">
            <img
              src={AboutUsImage}
              alt="Placeholder"
              className="sm:w-96 rounded-xl shadow-xl mx-auto"
            />
          </div>
          {/* About Us Content */}
          <div className="w-full sm:w-1/2 p-4 text-md sm:text-lg mr-20 sm:mt-20">
            <div className="text-xl mb-4 text-center sm:text-3xl font-bold underline">
              About Us
            </div>
            <p>
              We're a local, family-run business with over 29 years of hands-on
              experience. When it comes to your repairs or installations, we've
              got your back!
            </p>
            <br />
            <p>
              With NH Services, it's all about you. We take the time to listen
              and understand your needs, ensuring we offer the best solutions
              tailored just for you. No pushy sales tactics here – our team is
              focused on delivering honest, reliable service without any hidden
              agendas.
            </p>
            <br />
            <p>
              Plus, our technicians? They're not in it for the commission.
              They're here because they genuinely care about doing a great job
              for you. And as for pricing? We keep it fair and transparent,
              because we believe everyone deserves quality service at a
              reasonable price.
            </p>
            <br />
            <p>
              So, if you're looking for a team you can trust to get the job done
              right, look no further. We're here to help, every step of the way!
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutUsSection;
