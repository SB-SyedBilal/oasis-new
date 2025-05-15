import HomeHeroImage from '../../../assets/Hero/Subject.svg';
import HeroSection from '../../../components/herosection/HeroSection';

const HomePage = () => {
  return (
    <HeroSection
      badgeText="About The Subjects"
      title="Subjects We Teach At"
      subtitle="The Oasis Academy"
      buttonText="Book a Free Demo!"
      buttonLink="#free-demo-section"
      backgroundImage={HomeHeroImage}
    />
  );
};
export default HomePage