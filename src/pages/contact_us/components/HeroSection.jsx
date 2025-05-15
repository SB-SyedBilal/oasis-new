import HomeHeroImage from '../../../assets/Hero/ContactUs.svg';
import HeroSection from '../../../components/herosection/HeroSection';

const HomePage = () => {
  return (
    <HeroSection
      badgeText="Contact Us"
      title="Feel Free"
      subtitle="Reach Us"
      buttonText="Book a Free Demo!"
      buttonLink="#free-demo-section"
      backgroundImage={HomeHeroImage}
    />
  );
};
export default HomePage