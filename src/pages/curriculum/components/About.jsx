// src/pages/About.jsx (or wherever you want to use it)
import Journey from "../../../components/Journey";

import Img1 from "../../../../src/assets/afterheroassets/curriculum-details/img1.jpg";
import Img2 from "../../../../src/assets/afterheroassets/curriculum-details/img2.jpg";
import Img3 from "../../../../src/assets/afterheroassets/curriculum-details/img3.jpg";
import Img4 from "../../../../src/assets/afterheroassets/curriculum-details/img4.jpg";

const About = () => {
  const journeyData = {
    heading: "Embark on a Journey of Discovery",
    description:
      "At The Oasis Academy, we believe in the power of knowledge to transform lives. Our comprehensive range of subjects is designed to cater to the unique needs and aspirations of our students, from the expatriate communities in Saudi Arabia, Qatar, and Oman. We offer a world-class online learning experience that bridges gaps, breaks boundaries, and nurtures potential.",
    sections: [
      {
        title: "British Curriculum",
        text:
          "Dive deep into the realms of the British curriculum with subjects tailored for GCSE and A-Level success. From Mathematics to the Sciences, Humanities, and Languages, our courses are meticulously designed to prepare students for excellence.",
        image: Img1,
        alt: "Student with British flag",
        reverse: false,
      },
      {
        title: "American Curriculum (AP)",
        text:
          "Embrace the challenge with our Advanced Placement (AP) courses. Achieve mastery in AP Calculus, AP Physics, AP Chemistry, and more, guided by tutors who inspire confidence and academic brilliance.",
        image: Img2,
        alt: "Student in library",
        reverse: true,
      },
      {
        title: "Indian CBSE",
        text:
          "Navigate the Central Board of Secondary Education (CBSE) with ease. Our specialized tutors offer targeted support in subjects ranging from Maths and Science to Social Studies and English, ensuring a strong foundation for future learning.",
        image: Img3,
        alt: "Girl with math equations",
        reverse: false,
      },
      {
        title: "Pakistan Federal Board",
        text:
          "Explore Pakistan's Federal Board curriculum with expert tutors guiding you through key concepts. We provide academic excellence for students looking to build a strong base in Mathematics, Science, and more.",
        image: Img4,
        alt: "Student with laptop",
        reverse: true,
      },
    ],
  };

  return <Journey {...journeyData} />;
};

export default About;
