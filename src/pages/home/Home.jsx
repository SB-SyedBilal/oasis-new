import AboutSection from "../../components/aboutsection/AboutSection";
import OurServices from "./components/OurServices";
import Curriculum from "../../components/demandsubjects/DemandSubjects";
import HowItWorksContent from "./components/How-It-Work-Content";
import Testimonials from "./components/Testimonials";
import HomePage from "./components/HeroSection";

const Home = () => {
  return (
    <div>
      <HomePage />
      <AboutSection />
      <OurServices />
      <Curriculum
        numSubjects={6}
        heading="Most In-demand Subjects"
        headingText="Boost Your Grades in These High-Impact Subjects"
      />
      <HowItWorksContent />
      <Testimonials />
    </div>
  );
};

export default Home;