import Offer from "./components/Offer";
import MainContent from "./components/MainContent";
import Helmet from "react-helmet";

const AboutUs = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>About Us - The Oasis Academy</title>
      </Helmet>

      {/* Hero Section with Background Image */}
      <div className="relative min-h-[400px] md:min-h-[600px]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-stone-950 bg-opacity-60 bg-blend-overlay"
          style={{
            backgroundImage: "url('../../../src/assets/Hero/AboutUs.png')", // Replace with your actual image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Content Container */}
        <div className="max-w-[1440px] mx-auto relative">
          <div className="px-6 py-16 md:py-48 md:w-1/2 lg:w-auto z-10 relative space-y-8">
            {/* About Us Label */}
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 mr-2"></div>
              <h1 className="text-white text-sm">About Us</h1>
            </div>

            {/* Main Heading */}
            <h1 className="text-white text-4xl md:text-5xl font-bold">Know About Us</h1>

            {/* Description */}
            <p className="text-white lg:max-w-[30rem] max-w-max">
              Collaboratively administrate empowered markets plug and play networks dynamically procrastinated
            </p>

            {/* CTA Button */}
            <a href="#free-demo-section">
              <button className="bg-[#18A000] text-white px-6 py-3 translate-y-5 font-medium hover:bg-green-700 transition-colors">
                Book a Free Demo!
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Other sections */}
      <MainContent />
      <Offer />
    </div>
  );
};

export default AboutUs;
