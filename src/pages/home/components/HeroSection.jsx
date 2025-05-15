import HomeHeroImage from '../../../assets/Hero/Home.svg';
import HeroSection from '../../../components/herosection/HeroSection';

const HomePage = () => {
    return (
        <HeroSection
            badgeText="Excel in IGCSE/A-Levels & Other School Exams"
            title="Best Online Tuition"
            subtitle="Experienced Faculty"
            description="The Oasis Academy offer quality tutoring at affordable fee for expats in Middle East!"
            buttonText="Book a Free Demo!"
            buttonLink="#free-demo-section"
            backgroundImage={HomeHeroImage}
        />
    );
};
export default HomePage