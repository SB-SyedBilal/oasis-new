import HomeHeroImage from '../../../assets/Hero/Curriculum.png';
import HeroSection from '../../../components/herosection/HeroSection';

const HomePage = () => {
  return (
    <HeroSection
      badgeText="About The Services"
      title="Curriculums We Teach"
      subtitle="At The Oasis Academy"
      buttonText="Book a Free Demo!"
      buttonLink="#free-demo-section"
      backgroundImage={HomeHeroImage}
    />
  );
};
export default HomePage