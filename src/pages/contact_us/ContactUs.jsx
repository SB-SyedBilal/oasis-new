import HeroSection from "./components/HeroSection";
import Main from "./components/GetInTouch";
import CallToAction from "./components/CallToAction";
import { Helmet } from "react-helmet";
import HomePage from "./components/HeroSection";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - The Oasis Academy</title>
      </Helmet>
      <HomePage />
      <Main />
      {/* <CallToAction /> */}
    </div>
  );
};

export default ContactUs;
