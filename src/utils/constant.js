import { CheckIcon } from "lucide-react";
import countryList from "react-select-country-list";

import Mathematics from '../assets/Hero/Mathematics.svg';
import Biology from '../assets/Hero/Biology.svg';
import Chemistry from '../assets/Hero/Chemistry.svg';
import Physics from '../assets/Hero/Physics.svg';
import English from '../assets/Hero/English.svg';
import BusinessStudies from '../assets/Hero/BusinessStudies.svg';
import ComputerScience from '../assets/Hero/ComputerScience.svg';
import Economics from '../assets/Hero/Economics.svg';
import Accounting from '../assets/Hero/Accounting.svg';
import Sociology from '../assets/Hero/Sociology.svg';
import Psychology from '../assets/Hero/Psychology.svg';
import BusinessLaw from '../assets/Hero/BusinessLaw.svg';


import Box1 from '../assets/HowItWorks/Box1.svg'
import Box2 from '../assets/HowItWorks/Box2.svg'
import Box3 from '../assets/HowItWorks/Box3.svg'
import Box4 from '../assets/HowItWorks/Box4.svg'

import MaleAvatar from '../assets/Testimonial/Male.svg'
import FemaleAvatar from '../assets/Testimonial/Female.svg'

// Social media icons
import FacebookIcon from '../assets/socials/facebook.svg'
import XIcon from '../assets/socials/X.svg'
import InstaIcon from '../assets/socials/Insta.svg'

// Team images
import TeamImg1 from '../assets/afterheroassets/about-team/img1.svg'
import TeamImg2 from '../assets/afterheroassets/about-team/img2.svg'
import TeamImg3 from '../assets/afterheroassets/about-team/img3.svg'
import TeamImg4 from '../assets/afterheroassets/about-team/img4.svg'

// Journey step icons
import ContactIcon from '../assets/socials/call us.svg'
import WhatsAppIcon from '../assets/socials/whatsapp.svg'
import LocationIcon from '../assets/socials/locattion.svg'
import MailIcon from '../assets/socials/mailus.svg'


const OFFER_ITEMS = {
  title: "Building a Thriving, Inclusive, and Engaged Learning Community",
  offer: [
    {
      icon: TeamImg1,
      title: "Student Engagement",
      description: `Highlight the opportunities
for students to engage with
one another and take on
leadership roles within the
academy.`,
    },
    {
      icon: TeamImg2,
      title: "Parental Involvement",
      description: `Illustrate how parents are
integral to the community,
participating in events,
contributing to decision-making
processes, and supporting the
academy's initiatives.`,
    },
    {
      icon: TeamImg3,
      title: "Collaborative Projects",
      description: `Showcase collaborative
projects and community
service initiatives that involve
students, teachers, and
community members working 
together.`,
    },
    {
      icon: TeamImg4,
      title: "Cultural & Global Awareness",
      description: `Emphasize the academy's
dedication to promoting
cultural diversity and global
awareness.`,
    },
  ]
};

const aboutUsContent = {
  leftSection: {
    heading: "Our Approach",
    description1:
      "We believe that personalized education is the key to unlocking a student's potential. Our approach is holistic and adaptive, combining cutting-edge technology with interactive teaching methods to deliver a comprehensive learning experience. We focus on building strong conceptual foundations and fostering critical thinking skills that equip students for future academic and professional  success.",
    linkText: "Get in Touch",
  },
  rightSection: {
    welcomeText: "Welcome To The Oasis Academy",
    heading: "Who We Are",
    description:
      "Welcome to The Oasis Academy, a beacon of academic excellence for expatriate families in the heart of the Arabian Peninsula. Founded in 2017, we have become a trusted online tutoring service for students across Saudi Arabia, Qatar, and Oman. Our dedication to quality education stems from a deep understanding of the challenges and aspirations of the expat community.",
    mission: {
      title: "Our Mission",
      icon: CheckIcon,
      description:
        "Our mission is to empower students by providing them with a robust educational foundation that transcends borders. We strive to create an inclusive learning environment that respects the cultural diversity of our students and fosters a love for lifelong learning.",
    },
    vision: {
      title: "Our Vision",
      icon: CheckIcon,
      description:
        "We envision a world where every student, regardless of geographical location, has access to the highest quality of education tailored to their curriculum needs. The Oasis Academy aims to be the leading online tutoring platform that bridges the gap between traditional schooling and the evolving landscape of digital education.",
    },
    buttonText: "Free Demo Class Today!",
  },
};

const cardDetails = [
  {
    id: "1",
    title: "Contacting us with your requirements.",
    bg1: Box1,
  },
  {
    id: "2",
    title: "Enjoying a free, no-obligation demo class.",
    bg1: Box2,
    bg2: Box4,
  },
  {
    id: "3",
    title: "Customizing a schedule that suits you.",
    bg1: Box3,
  },
  {
    id: "4",
    title: "Watching your child advance with every session.",
    bg1: Box2,
    bg2: Box4,
  },
];

const navigationLinks = [
  {
    id: 1,
    href: "/",
    text: "Home",
    dropdown: false,
  },
  {
    id: 2,
    href: "/about-us",
    text: "About Us",
    dropdown: false,
  },
  {
    id: 3,
    href: "/curriculum",
    text: "Curriculum",
    dropdown: false,
  },
  {
    id: 4,
    href: "/subjects",
    text: "Subjects",
    dropdown: true,
    // Will generate dropdownLinks dynamically from SUBJECTS in the component
    dropdownLinks: [],
  },
  {
    id: 5,
    href: "/contact-us",
    text: "Contact Us",
    dropdown: false,
  },
];

const journeySteps = [
  {
    title: "Contacting us with your requirements.",
    icon: ContactIcon,
  },
  {
    title: "Enjoying a free, no-obligation demo class.",
    icon: WhatsAppIcon,
  },
  {
    title: "Customizing a schedule that suits you.",
    icon: LocationIcon,
  },
  {
    title: "Watching your child advance with every session.",
    icon: MailIcon,
  },
];

const testimonialsData = {
  badge: "Testimonials",
  title: "Client Opinions & Reviews",
  subtitle:
    "Hear directly from our community of parents and students who have experienced the transformative power of The Oasis Academy.",
  reviews: [
    {
      id: 1,
      name: "Mr. Ahmed Zaid",
      role: "Biology, Physics",
      text: "We are very satisfied and already recommended your academy to many colleagues.",
      avatar: MaleAvatar,
    },
    {
      id: 2,
      name: "Mrs. Faisal Dubai",
      role: "ICT",
      text: "I am happy with the service and will definitely recommend you to other parents.",
      avatar: MaleAvatar,
    },
    {
      id: 3,
      name: "Mr. Suresh",
      role: "Maths Grade 8",
      text: "Yes, we are satisfied with the classes 👏👏 Siddhi is understanding very well. Please continue to help her",
      avatar: MaleAvatar,
    },
    {
      id: 4,
      name: "Mrs. Maryam Abbasi",
      role: "Maths & Physics",
      text: "Thank you, your services are impressive, and I do expect good services in fututre as well.",
      avatar: FemaleAvatar,
    },
    {
      id: 5,
      name: "Zainab Tariq",
      role: "Maths",
      text: "Thank you. It was really good experience. I have given your number to my other friends.",
      avatar: FemaleAvatar,
    },
  ],
};

const footerCols = [
  {
    id: 1,
    heading: "Quick Links",
    links: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about-us" },
      { label: "Curriculums", path: "/curriculum" },
      { label: "Contact Us", path: "/contact-us" },
    ],
  },
  {
    id: 2,
    heading: "Popular Subjects",
    links: [
      { label: "Mathematics", path: "/mathematics" },
      { label: "Biology", path: "/biology" },
      { label: "Business Studies", path: "/business-studies" },
      { label: "Physics", path: "/physics" },
      { label: "Computer Science", path: "/computer-science" },
      { label: "Chemistry", path: "/chemistry" },
    ],
  },
];

const footerContact = {
  whatsapp: {
    label: "WhatsApp",
    value: "+447902777488",
    link: "https://wa.me/447902777488",
  },
  email: {
    label: "Email",
    value: "hello@theoasisacademy.com",
    link: "mailto:hello@theoasisacademy.com",
  },
  location: {
    label: "Location",
    address: "20-22, Wenlock Road, N1 7GU, London, UK",
    link: "https://www.google.com/maps?q=20-22+Wenlock+Road,+N1+7GU,+London,+UK",
  },
};

const footerSocials = [
  {
    id: 1,
    name: "Meta (formerly facebook)",
    logo: FacebookIcon,
  },
  {
    id: 2,
    name: "X (formerly twitter)",
    logo: XIcon,
  },
  {
    id: 3,
    name: "Instagram",
    logo: InstaIcon,
  },
];

const freeDemo = {
  badge: "Book Now",
  title: "Get Free Demo class",
  fields: [
    {
      id: "studentName",
      label: "Student's Full Name",
      type: "text",
      required: true,
    },
    {
      id: "parentName",
      label: "Parent/Guardian Name",
      type: "text",
      required: true,
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      required: true,
    },
    {
      id: "contact",
      label: "Contact Number",
      type: "tel",
      required: true,
    },
    {
      id: "country",
      label: "Country of Residence",
      type: "select",
      options: countryList().getData(),
      required: true,
    },
    {
      id: "city",
      label: "City",
      type: "text",
      required: true,
    },
    {
      id: "grade",
      label: "Student's Grade/Level",
      type: "select",
      options: Array.from({ length: 13 }, (_, i) => `Grade ${i + 1}`),
      required: true,
    },
    {
      id: "curriculum",
      label: "Curriculum",
      type: "select",
      options: ["British Curriculum", "American Curriculum (AP)", "Indian CBSE", "Pakistan Federal Board"],
      required: true,
    },
    {
      id: "subject",
      label: "Subjects of Interest",
      type: "select",
      options: [
        { value: "mathematics", label: "Mathematics" },
        { value: "biology", label: "Biology" },
        { value: "chemistry", label: "Chemistry" },
        { value: "physics", label: "Physics" },
        { value: "business-studies", label: "Business Studies" },
        { value: "computer-science", label: "Computer Science" },
        { value: "english", label: "English" },
        { value: "economics", label: "Economics" },
        { value: "accounting", label: "Accounting" },
        { value: "sociology", label: "Sociology" },
        { value: "psychology", label: "Psychology" },
        { value: "business-law", label: "Business Law" },
      ],
      required: true,
    },
  ],
  submitButton: {
    text: "Submit",
    loadingText: "Submitting...",
    successMessage: "Thank you! We'll get in touch shortly.",
    errorMessage: "Oops! Something went wrong. Please try again.",
  },
}

// List of all subjects
export const SUBJECTS = [
  { name: "Mathematics", slug: "mathematics" },
  { name: "Biology", slug: "biology" },
  { name: "Chemistry", slug: "chemistry" },
  { name: "Physics", slug: "physics" },
  { name: "Business Studies", slug: "business-studies" },
  { name: "Computer Science", slug: "computer-science" },
  { name: "English", slug: "english" },
  { name: "Economics", slug: "economics" },
  { name: "Accounting", slug: "accounting" },
  { name: "Sociology", slug: "sociology" },
  { name: "Psychology", slug: "psychology" },
  { name: "Business Law", slug: "business-law" },
];

// Subject content data
const subjectContent = {
  "mathematics": {
    sections: [
      {
        heading: "Introduction to Mathematics at The Oasis Academy",
        content: "At The Oasis Academy, we believe that Mathematics is not just a subject but a critical tool for life. Our tailored Mathematics program is designed to empower students from Saudi Arabia, Qatar, and Oman, providing them with the skills to succeed academically and beyond. With expert tutors from top-tier institutions, we make Math learning accessible, engaging, and effective."
      },
      {
        heading: "Why Mathematics is Crucial",
        content: "Mathematics is the language of logic and the cornerstone of scientific discovery. It fosters critical thinking, problem-solving, and analytical skills that are essential in various fields, from engineering to economics. Understanding Mathematics deeply enriches the educational journey, opening doors to future career opportunities."
      },
      {
        heading: "Our Mathematics Curriculum",
        content: ["Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics and Probability"],
        intro: "We offer comprehensive tutoring in all major Mathematics strands including:"
      },
      {
        heading: "Discrete Math",
        content: "Each program is aligned with international curricula, including the British GCSE, American AP, Indian CBSE, and others, ensuring a global standard of excellence."
      },
      {
        heading: "Personalized Tutoring Approach",
        content: ["One-on-one sessions", "Customized learning plans", "Interactive problem-solving"],
        intro: "At The Oasis Academy, we understand that every student's learning style is unique. Our personalized approach includes:"
      },
      {
        heading: "Regular assessments and feedback",
        content: "This individualized strategy enhances understanding and retention, leading to better grades and a more profound appreciation of Mathematics."
      },
      {
        heading: "Advanced Mathematics and Exam Preparation",
        content: "We also cater to students seeking advanced Mathematics understanding or preparing for specific exams like SAT, ACT, IB, and university entrance exams. Our tutors provide focused coaching on advanced topics, exam strategies, and time management to maximize performance."
      },
      {
        heading: "Integrating Technology in Learning",
        content: "Leveraging the latest educational technology, we offer interactive tutoring sessions with digital tools and resources, making complex concepts simpler and more tangible. This modern approach to Math education engages students and enriches their learning experience."
      },
      {
        heading: "Success Stories and Testimonials",
        content: "Our track record speaks volumes, with countless students achieving top grades and excelling in their Math studies. Testimonials from our students and parents highlight the transformative impact of our tutoring, underscoring our commitment to educational excellence."
      },
      {
        heading: "Join The Oasis Academy for Mathematics Excellence",
        content: "Choosing The Oasis Academy for Mathematics tutoring means investing in a brighter academic future. With our experienced tutors, proven methodologies, and commitment to student success, we are dedicated to unlocking every student's potential and fostering a lifelong love for Mathematics."
      }
    ],
    hero: {
      badgeText: "Mathematics At The Oasis Academy",
      title: "Unlocking Potential",
      subtitle: "With Expert Tutoring",
      buttonText: "Book A Free Demo!",
      buttonLink: "#free-demo-section",
      backgroundImage: Mathematics, // Use public path or import
    },
  },
  "biology": {
    sections: [
      {
        heading: "Introduction to Biology Education",
        content: "Biology, the study of living organisms and life processes, is a fascinating and essential scientific discipline. At The Oasis Academy, we offer a comprehensive Biology program that equips students in Saudi Arabia, Qatar, and Oman with the knowledge and skills to explore the complexities of life. Our experienced educators are passionate about bringing the world of Biology to life, inspiring students to pursue a deeper understanding of the natural world."
      },
      {
        heading: "The Vital Role of Biology",
        content: "Biology is not just an academic subject but a critical lens through which we understand the diversity of life on Earth. It encompasses a vast range of fields, including genetics, ecology, anatomy, and biochemistry, each contributing to our understanding of how life operates and evolves. Studying Biology helps students appreciate the interconnectivity of life, fostering a sense of responsibility towards the environment and well-being."
      },
      {
        heading: "Our Biology Curriculum",
        content: [
          "Cell Theory and Molecular Biology",
          "Genetics and Evolution",
          "Human Anatomy and Physiology",
          "Plant Biology and Ecology"
        ],
        intro: "The Oasis Academy's Biology curriculum is designed to be comprehensive and inclusive, covering:"
      },
      {
        heading: "Microbiology and Biotechnology",
        content: "We prepare students for various educational systems, including IGCSE, A-Level, AP, IB, and national curricula, ensuring a globally competitive education."
      },
      {
        heading: "Personalized Learning Experience",
        content: [
          "Customized lesson plans to target specific learning objectives",
          "Interactive labs and field studies for hands-on learning",
          "Critical thinking and research-based learning projects",
          "Continuous assessment and feedback to track progress"
        ],
        intro: "Our Biology education is tailored to each student's learning style and needs. We offer:"
      },
      {
        heading: "Advanced and Specialized Studies",
        content: "For students interested in pursuing Biology at a higher level or specializing in fields like environmental science, marine biology, or medical sciences, we provide advanced courses and expert guidance to pave the way for future specialization."
      },
      {
        heading: "Integrating Technology in Biology Learning",
        content: "Utilizing state-of-the-art educational technology, we bring Biology studies to life with virtual labs, 3D modeling, and interactive simulations. This modern approach enhances students' understanding and engagement with biological concepts."
      },
      {
        heading: "Celebrating Our Biological Wonders",
        content: "Success in Biology at The Oasis Academy is measured by our students' achievements and their ability to apply biological knowledge to real-world problems. Our alumni success stories in academics, research, and environmental advocacy highlight the impact of our Biology education."
      },
      {
        heading: "Embark on a Biological Exploration",
        content: "Join The Oasis Academy for a journey through the captivating world of Biology. Whether you're aiming to excel in school exams or aspiring to a career in life sciences, our comprehensive program and expert tutors are here to support your ambitions.\n\nDiscover the wonders of life with us. Contact The Oasis Academy today to start your exploration of Biology and beyond."
      }
    ],
    hero: {
      badgeText: "Biology At The Oasis Academy",
      title: "Discovering The",
      subtitle: "Science Of Life",
      buttonText: "Book A Free Demo!",
      buttonLink: "#free-demo-section",
      backgroundImage: Biology, // Use public path or import
    },
  },
  "chemistry": {
    sections: [
      {
        heading: "Introduction to Chemistry Education",
        content: "Chemistry, often known as the central science, bridges the gap between physics and biology, offering insights into the material composition of our world. The Oasis Academy's Chemistry program is meticulously crafted to foster a deep understanding of chemical principles and their applications, from Saudi Arabia to Qatar and Oman. Our dedicated educators, with their expertise and passion, ignite curiosity and inspire excellence in every student."
      },
      {
        heading: "Understanding the Essence of Chemistry",
        content: "Chemistry is pivotal in explaining the how and why behind material changes and reactions. It encompasses everything from atomic structure to complex biochemical processes, playing a crucial role in innovations across medicine, engineering, environmental science, and more. Our curriculum equips students to tackle these challenges, preparing them for a future where they can make significant contributions."
      },
      {
        heading: "Comprehensive Chemistry Curriculum",
        content: [
          "Atomic theory and the periodic table",
          "Chemical bonding and reactions",
          "Organic and inorganic chemistry",
          "Analytical chemistry and spectroscopy"
        ],
        intro: "Our program covers all fundamental and advanced aspects of Chemistry, including:"
      },
      {
        heading: "Biochemistry and pharmaceutical chemistry",
        content: "We align with major educational frameworks like IGCSE, IB, AP, and national curricula, ensuring a rounded and in-depth chemical education."
      },
      {
        heading: "Tailored and Interactive Learning",
        content: [
          "One-on-one and small group sessions",
          "Practical laboratory experiments and virtual simulations",
          "Problem-solving workshops and collaborative projects",
          "Regular assessments for continuous improvement"
        ],
        intro: "At The Oasis Academy, we personalize the learning experience, recognizing that each student has unique needs and learning styles. Our approach includes:"
      },
      {
        heading: "Specialization and Career Preparation",
        content: "We also cater to students aspiring to specialize in Chemistry or related fields, providing guidance and advanced study in areas such as environmental chemistry, forensic science, and nanotechnology, thus paving the way for their academic and career advancement."
      },
      {
        heading: "Technology Integration in Chemistry Studies",
        content: "Leveraging cutting-edge educational technology, we offer an immersive learning environment where students can explore complex chemical phenomena through interactive simulations, 3D models, and virtual labs, making abstract concepts tangible and understandable."
      },
      {
        heading: "Success in Chemistry",
        content: "Our students' achievements in Chemistry, reflected in top exam scores and successful admissions to leading universities, stand testament to the quality of our tutoring. Their journey from curious learners to accomplished individuals is a source of pride and motivation for us at The Oasis Academy."
      },
      {
        heading: "Begin Your Chemistry Adventure",
        content: "Embark on an exploratory journey into the world of Chemistry with The Oasis Academy. Our expert tutors are here to guide you through every element, reaction, and equation, unveiling the mysteries of the universe one molecule at a time.\n\nUnlock the power of Chemistry. Contact The Oasis Academy today and transform your curiosity into knowledge, skills, and future success."
      }
    ],
    hero: {
      badgeText: "Chemistry At The Oasis Academy",
      title: "Unveiling The Elements",
      subtitle: "Of The Universe",
      buttonText: "Book A Free Demo!",
      buttonLink: "#free-demo-section",
      backgroundImage: Chemistry, // Use public path or import
    },
  },
  "physics": {
    sections: [
      {
        heading: "Introduction to Physics at The Oasis Academy",
        content: "Physics, the fundamental science of matter and energy, is at the heart of understanding how the universe operates. At The Oasis Academy, we are committed to providing a comprehensive Physics education that empowers students from Saudi Arabia, Qatar, and Oman to unlock the mysteries of the physical world. Our expert tutors, with their deep understanding of Physics principles and concepts, are dedicated to fostering a love for this challenging yet rewarding subject."
      },
      {
        heading: "The Importance of Physics in Education",
        content: "Physics is not just a subject but a critical way of thinking. It teaches problem-solving, logical reasoning, and the ability to question and understand the nature of everything around us. By studying Physics, students gain valuable skills that are applicable in countless careers, from engineering and aerospace to renewable energy and beyond."
      },
      {
        heading: "Our Physics Curriculum",
        content: [
          "Mechanics",
          "Electromagnetism",
          "Thermodynamics",
          "Quantum Physics",
          "Nuclear Physics"
        ],
        intro: "Our curriculum covers a wide range of topics to cater to various educational systems and student needs, including:"
      },
      {
        heading: "Astrophysics",
        content: "We align our teaching with international standards, preparing students for exams under different curricula like the British A-Levels, American AP, and IB, ensuring a robust and holistic Physics education."
      },
      {
        heading: "Tailored Teaching Methodology",
        content: [
          "Interactive sessions that encourage curiosity and exploration",
          "Real-world applications to connect theory with practice",
          "Advanced simulation tools for experiential learning",
          "Regular assessments to track progress and address challenges"
        ],
        intro: "Understanding the complexities of Physics requires a nuanced approach. Our methodology includes:"
      },
      {
        heading: "Advanced Studies and Specializations",
        content: "For students aiming to delve deeper into specific areas of Physics or preparing for university-level studies, we offer specialized courses and guidance on subjects like theoretical Physics, applied Physics, and experimental techniques."
      },
      {
        heading: "Technology in Physics Education",
        content: "We integrate the latest technology in our teaching to make complex concepts accessible and engaging. From virtual labs to 3D modeling, our students experience an immersive learning environment that enhances understanding and retention."
      },
      {
        heading: "Celebrating Success in Physics",
        content: "Our students' achievements in national and international Physics competitions and examinations are a testament to the quality of our education. Their success stories and testimonials reflect the transformative impact of our tutoring."
      },
      {
        heading: "Join Us for a Journey Through Physics",
        content: "At The Oasis Academy, we are passionate about nurturing future scientists, engineers, and thinkers who will lead the exploration of the physical world. Join us to experience a Physics education that is as exhilarating as it is enlightening.\n\nReady to unravel the secrets of the universe with Physics? Contact The Oasis Academy today and set the foundation for a future filled with discovery and innovation."
      }
    ],
    hero: {
      badgeText: "Physics At The Oasis Academy",
      title: "Exploring The Forces",
      subtitle: "That Shape Our World",
      buttonText: "Book A Free Demo!",
      buttonLink: "#free-demo-section",
      backgroundImage: Physics, // Use public path or import
    },
  },
  "business-studies": {
    sections: [
      {
        heading: "Introduction to Business Studies",
        content: "The Oasis Academy's Business Studies program is designed to equip students in Saudi Arabia, Qatar, and Oman with the knowledge and skills necessary to understand the fast-paced world of business. Our curriculum bridges theoretical knowledge with practical applications, preparing students to navigate the complexities of the modern business environment and fostering entrepreneurial thinking."
      },
      {
        heading: "The Significance of Business Education",
        content: "Business Studies is more than just a subject; it's a vital educational foundation for anyone looking to enter the world of commerce, finance, or entrepreneurship. Understanding business principles is crucial for future leaders and innovators, as it encompasses essential aspects like management, marketing, economics, and ethics."
      },
      {
        heading: "Comprehensive Curriculum",
        content: [
          "Business fundamentals and organization",
          "Marketing and market research",
          "Financial and managerial accounting",
          "Human resources and operations management",
          "Entrepreneurship and business planning"
        ],
        intro: "Our Business Studies curriculum covers a wide array of topics to ensure a well-rounded business education:"
      },
      {
        heading: "International business and globalization",
        content: "We tailor our teaching to align with international curricula, including IGCSE, A-Level, AP, and IB, ensuring our students are globally competitive."
      },
      {
        heading: "Interactive and Practical Learning Approach",
        content: [
          "Case studies from real-world business scenarios",
          "Interactive simulations and business strategy games",
          "Project-based learning and business plan development",
          "Internship and networking opportunities with industry professionals"
        ],
        intro: "We believe in learning by doing. Our approach to Business Studies includes:"
      },
      {
        heading: "Preparing for the Future",
        content: "Our program not only prepares students for academic success but also equips them with the skills needed for future careers in business. We offer specialized tracks for students interested in entrepreneurship, finance, marketing, or international business, providing them with a deeper understanding and practical experience in their chosen field."
      },
      {
        heading: "Leveraging Technology in Business Education",
        content: "Incorporating the latest technology, we provide students with access to digital tools and resources, such as business software, analytics programs, and online market research databases, enhancing their analytical and decision-making skills."
      },
      {
        heading: "Celebrating Success in Business Studies",
        content: "Our students' success in national and international business competitions, as well as their academic achievements, reflects the high quality of our Business Studies program. Testimonials from our alumni demonstrate the transformative impact of our education on their career paths."
      },
      {
        heading: "Your Pathway to Business Excellence",
        content: "At The Oasis Academy, we are committed to developing the next generation of business leaders and entrepreneurs. Our Business Studies program is more than just an academic course; it's a journey towards understanding the complexities of the business world and mastering the skills to navigate it successfully.\n\nDiscover the leader in you. Join The Oasis Academy's Business Studies program and embark on a journey to business excellence and innovation."
      }
    ],
    hero: {
      badgeText: "Business Studies At The Oasis Academy",
      title: "Shaping Future Entrepreneurs And",
      subtitle: "Business Leaders",
      buttonText: "Book A Free Demo!",
      buttonLink: "#free-demo-section",
      backgroundImage: BusinessStudies, // Use public path or import
    },
  },
  "computer-science": {
    sections: [
      {
        heading: "Introduction to Computer Science",
        content: "The Oasis Academy's Computer Science program is crafted to empower students in Saudi Arabia, Qatar, and Oman with the foundational knowledge and advanced skills needed in the ever-evolving digital world. Our curriculum is designed to inspire innovation and foster technical proficiency, preparing students to lead in the field of technology."
      },
      {
        heading: "The Crucial Role of Computer Science",
        content: "Computer Science is integral to modern life, underpinning the technologies we use every day and driving innovation in every sector. Our program emphasizes not just coding and programming, but also computational thinking, problem-solving, and digital literacy, ensuring students are well-equipped for the challenges and opportunities of the digital age."
      },
      {
        heading: "Comprehensive Curriculum",
        content: [
          "Programming languages (Python, Java, C++)",
          "Web development (HTML, CSS, JavaScript)",
          "Database management and SQL",
          "Computer systems and architecture",
          "Networking and cybersecurity"
        ],
        intro: "Our curriculum covers a broad spectrum of Computer Science topics:"
      },
      {
        heading: "Artificial intelligence and machine learning",
        content: "We align with international education standards, preparing students for various qualifications including IGCSE, A-Level, AP, and IB in Computer Science."
      },
      {
        heading: "Interactive and Experiential Learning",
        content: [
          "Practical coding exercises and project work",
          "Virtual labs and simulation software",
          "Collaboration on real-world tech projects",
          "Hackathons and coding competitions"
        ],
        intro: "We believe in a hands-on approach to learning Computer Science:"
      },
      {
        heading: "Career Pathways in Computer Science",
        content: "Our program not only prepares students academically but also provides them with a pathway to potential careers in software development, data science, cybersecurity, AI research, and more. We guide students in exploring these fields and understanding the impact they can make through technology."
      },
      {
        heading: "Technology Integration in Education",
        content: "At The Oasis Academy, we utilize cutting-edge educational technology to enhance the learning experience, offering access to software tools, programming platforms, and online resources that enrich students' understanding of Computer Science."
      },
      {
        heading: "Success Stories in Computer Science",
        content: "Our alumni have gone on to achieve remarkable success, from excelling in international coding competitions to securing positions at leading tech firms. Their journey from curious learners to industry professionals showcases the effectiveness of our Computer Science education."
      },
      {
        heading: "Start Your Computer Science Journey with Us",
        content: "Join The Oasis Academy to unlock your potential in the dynamic field of Computer Science. With our expert educators, comprehensive curriculum, and innovative teaching methods, you'll be well-prepared to navigate the digital future and make a significant impact in the tech world.\n\nExplore the possibilities that await in the realm of Computer Science. Contact The Oasis Academy today to begin your journey towards becoming a technology innovator."
      }
    ],
    hero: {
      badgeText: "Computer Science At The Oasis Academy",
      title: "Nurturing The",
      subtitle: "Innovators Of Tomorrow",
      buttonText: "Book A Free Demo!",
      buttonLink: "#free-demo-section",
      backgroundImage: ComputerScience, // Use public path or import
    },
  },
  "english": {
    sections: [
      {
        heading: "Introduction to English at The Oasis Academy",
        content: "At The Oasis Academy, we embrace English as more than just a subject—it's a gateway to understanding and communication in a global context. Our English program, designed specifically for students from Saudi Arabia, Qatar, and Oman, aims to equip them with the linguistic skills required for academic success and future endeavors. With instructors from prestigious universities around the world, we ensure that learning English is not only comprehensive but also captivating and impactful."
      },
      {
        heading: "Why English is Essential",
        content: "English stands as a pivotal language in global communication, education, and business. It enhances cognitive abilities, promotes cultural awareness, and improves social skills. Mastery of English enables students to access a vast array of information, engage with diverse cultures, and seize opportunities in international arenas. It is the foundation upon which students can build their dreams and aspirations."
      },
      {
        heading: "Our English Curriculum",
        content: [
          "Literature",
          "Grammar",
          "Writing Skills",
          "Reading Comprehension",
          "Speaking and Listening Skills",
          "Creative and Analytical Writing"
        ],
        intro: "We offer an expansive tutoring program covering all key areas of English including:",
        outro: "Our curriculum aligns with international standards, such as the British A-Levels, American Common Core, and others, guaranteeing a quality educational experience."
      },
      {
        heading: "Personalized Tutoring Approach",
        content: [
          "Tailored learning objectives",
          "One-on-one mentorship",
          "Engaging discussions and debates",
          "Continuous assessments and constructive feedback"
        ],
        intro: "Recognizing the individuality of each student, The Oasis Academy adopts a personalized tutoring method that includes:",
        outro: "This approach ensures that students not only improve their language skills but also gain confidence in their ability to communicate effectively."
      },
      {
        heading: "Advanced English and Exam Preparation",
        content: "For students aiming to delve deeper into English or preparing for exams like TOEFL, IELTS, SAT, and others, we provide specialized coaching. Our tutors focus on enhancing comprehension, writing, and analytical skills, alongside sharing valuable exam techniques and stress management tips to ensure optimal performance."
      },
      {
        heading: "Integrating Technology in Learning",
        content: "Utilizing cutting-edge educational technology, our English program incorporates digital tools and resources to facilitate an interactive and immersive learning environment. This approach makes learning engaging and accessible, helping students to grasp complex literary concepts with ease."
      },
      {
        heading: "Success Stories and Testimonials",
        content: "Our proven track record is a testament to our commitment to excellence in English education. Numerous students have achieved remarkable grades and made significant progress in their English studies, as echoed in the testimonials from our students and their parents."
      },
      {
        heading: "Join The Oasis Academy for English Excellence",
        content: "Opting for The Oasis Academy's English tutoring means choosing a path to academic and professional success. With our experienced educators, effective teaching methodologies, and dedication to each student's growth, we aim to instill a deep appreciation and command of the English language.\n\nEmbark on your journey to mastering English by contacting The Oasis Academy today."
      }
    ],
    hero: {
      badgeText: "English At The Oasis Academy",
      title: "English Mastery",
      subtitle: "At Oasis Academy",
      buttonText: "Book A Free Demo!",
      buttonLink: "#free-demo-section",
      backgroundImage: English, // Use public path or import
    },
  },
  "economics": {
    sections: [
      {
        heading: "Economics Unveiled at Oasis Academy",
        content: "At Oasis Academy, we see Economics not just as a subject, but as a vital lens through which to view and understand the complexities of the world. Tailored for our students from Saudi Arabia, Qatar, and Oman, our Economics program aims to equip them with the analytical skills needed for both academic achievement and real-world application. With guidance from distinguished educators, we ensure an enriching, engaging, and enlightening Economics education."
      },
      {
        heading: "Why Economics Matters",
        content: "Economics is fundamental to understanding the forces that shape our lives, from global markets to personal finance decisions. It cultivates critical thinking and decision-making skills, essential for navigating today's dynamic economic landscapes. Mastery of Economics opens up a spectrum of career paths and fosters informed citizenship, empowering students to contribute meaningfully to society."
      },
      {
        heading: "Our Economics Curriculum",
        content: [
          "Microeconomics",
          "Macroeconomics",
          "International Economics",
          "Developmental Economics",
          "Econometrics",
          "Public Policy Analysis"
        ],
        intro: "Our comprehensive curriculum covers key Economics concepts including:",
        outro: "Aligned with global educational standards, our program ensures a robust understanding of both theoretical foundations and practical applications."
      },
      {
        heading: "Personalized Tutoring Approach",
        content: [
          "Individual learning goals",
          "One-on-one mentoring",
          "Case studies and real-world application",
          "Regular progress assessments"
        ],
        intro: "Recognizing the unique learning styles of our students, Oasis Academy's personalized tutoring encompasses:",
        outro: "This tailored approach enhances comprehension and application of economic theories, preparing students for academic and professional success."
      },
      {
        heading: "Advanced Economics and Exam Preparation",
        content: "For those aspiring to excel further in Economics or preparing for exams like the AP, A-Level, or college entrance tests, we offer specialized coaching. Our focus extends to advanced topics and exam strategies, ensuring students are well-equipped to achieve their highest potential."
      },
      {
        heading: "Integrating Technology in Learning",
        content: "We leverage the latest in educational technology to provide an interactive and immersive learning experience in Economics. Digital tools and resources make complex concepts more accessible and engaging, enriching the learning journey."
      },
      {
        heading: "Success Stories and Testimonials",
        content: "Oasis Academy's commitment to excellence in Economics education is reflected in our students' successes and the positive feedback from our community. Our approach has helped many students excel in their Economics courses and beyond."
      },
      {
        heading: "Embark on Your Economics Journey at Oasis",
        content: "Choosing Oasis Academy for your Economics education means setting the stage for unparalleled academic and professional achievement. With our expert faculty, innovative teaching methods, and dedication to student success, we're ready to help you unlock the mysteries of Economics.\n\nDiscover the power of Economics with Oasis Academy. Contact us today to begin your journey."
      }
    ],
    hero: {
      badgeText: "Economics At The Oasis Academy",
      title: "Economics Insights",
      subtitle: "At Oasis Academy",
      buttonText: "Book A Free Demo!",
      buttonLink: "#free-demo-section",
      backgroundImage: Economics, // Use public path or import
    },
  },
  "accounting": {
    sections: [
      {
        heading: "Accounting Excellence at Oasis Academy",
        content: "Oasis Academy treats Accounting as more than a subject; it's viewed as a crucial skill set for navigating the business world. Designed for students from Saudi Arabia, Qatar, and Oman, our Accounting program equips them with the necessary tools for both academic success and real-world financial management. Under the guidance of expert educators, we offer a thorough, engaging, and practical approach to Accounting."
      },
      {
        heading: "The Importance of Accounting",
        content: "Accounting is essential for understanding and managing the financial aspects of businesses and personal finances. It sharpens analytical, organizational, and strategic planning skills, preparing students for careers in various sectors. By mastering Accounting, students can make informed decisions, analyze financial health, and contribute significantly to business success."
      },
      {
        heading: "Our Accounting Curriculum",
        content: [
          "Financial Accounting",
          "Managerial Accounting",
          "Cost Accounting",
          "Auditing",
          "Taxation",
          "Financial Reporting and Analysis"
        ],
        intro: "Our curriculum covers all fundamental and advanced Accounting topics, including:",
        outro: "Aligned with international standards, our program ensures a comprehensive understanding of accounting principles and practices."
      },
      {
        heading: "Personalized Tutoring Approach",
        content: [
          "Customized learning objectives",
          "Dedicated one-on-one mentorship",
          "Practical case studies",
          "Continuous evaluation and feedback"
        ],
        intro: "At Oasis Academy, we acknowledge the uniqueness of each student's learning journey. Our personalized tutoring features:",
        outro: "This approach guarantees improved mastery of Accounting concepts and their applications, leading to academic excellence and practical prowess."
      },
      {
        heading: "Advanced Accounting and Exam Preparation",
        content: "For students aiming for higher proficiency in Accounting or preparing for specific examinations like the CPA, CMA, or ACCA, we provide focused coaching. Our tutors emphasize in-depth knowledge, exam techniques, and strategic study planning to ensure stellar performance."
      },
      {
        heading: "Leveraging Technology in Accounting Education",
        content: "We utilize cutting-edge educational technology to make learning Accounting more interactive and effective. Through digital tools and resources, complex Accounting principles are made straightforward, enhancing student engagement and comprehension."
      },
      {
        heading: "Success Stories and Testimonials",
        content: "Our track record of excellence in Accounting education is reflected in the achievements of our students and the positive feedback from our community. Our program has paved the way for many to excel in their Accounting studies and careers."
      },
      {
        heading: "Begin Your Accounting Journey at Oasis",
        content: "Choosing Oasis Academy for your Accounting studies sets you on a path to unmatched academic and professional achievements. With our expert educators, innovative teaching methodologies, and focus on student success, we are committed to fostering a deep understanding and love for Accounting.\n\nStep into the world of Accounting with Oasis Academy. Contact us today to start your journey."
      }
    ],
    hero: {
      badgeText: "Accounting At The Oasis Academy",
      title: "Pathways To",
      subtitle: "Accounting Excellence",
      buttonText: "Book A Free Demo!",
      buttonLink: "#free-demo-section",
      backgroundImage: Accounting, // Use public path or import
    },
  },
  "sociology": {
    sections: [
      {
        heading: "Sociology Unfolded: Pathways to Understanding",
        content: "Sociology is not merely a subject within our curriculum; it's a lens through which we can observe and comprehend the intricate tapestry of human society. Tailored for students with a keen interest in exploring the dynamics of social structures, norms, and behaviors, our program is designed to equip them with critical analytical skills and a deep understanding of societal interactions. Our commitment is to provide a thorough, engaging, and thought-provoking study of Sociology."
      },
      {
        heading: "Why Sociology Is Important",
        content: "Sociology offers invaluable insights into the functioning of societies, communities, and social groups. It encourages students to critically analyze social issues, cultural diversity, and the factors shaping human behavior. This discipline is crucial for developing a comprehensive understanding of social justice, inequality, and change, empowering students to become informed and compassionate citizens."
      },
      {
        heading: "Our Sociology Curriculum",
        content: [
          "Classical and Contemporary Sociological Theory",
          "Social Stratification and Inequality",
          "Race, Ethnicity, and Culture",
          "Gender and Society",
          "Family Dynamics",
          "Deviance, Crime, and Control"
        ],
        intro: "Our curriculum encompasses a broad range of sociological theories and concepts, including:",
        outro: "Designed to meet international educational standards, our program ensures a balanced blend of theoretical knowledge and practical application."
      },
      {
        heading: "Personalized Tutoring Approach",
        content: [
          "Tailored learning paths",
          "One-on-one engagement",
          "In-depth discussions on contemporary social issues",
          "Regular assessments and constructive feedback"
        ],
        intro: "Understanding that each student's learning journey is unique, our personalized approach to Sociology includes:"
      },
      {
        heading: "Advanced Studies and Exam Preparation",
        content: "For students aiming to delve deeper into sociological studies or preparing for higher education entrance exams, we offer specialized guidance. Our focus is on fostering a profound comprehension of advanced sociological theories and methodologies, complemented by strategic exam preparation."
      },
      {
        heading: "Integrating Technology in Sociological Learning",
        content: "Leveraging the latest educational technology, our Sociology program incorporates interactive tools and digital resources to facilitate an engaging learning experience. This approach makes the exploration of complex social theories and phenomena more accessible and stimulating for students."
      },
      {
        heading: "Success Stories and Testimonials",
        content: "The effectiveness of our Sociology program is evidenced by the achievements of our students and the positive feedback from our academic community. Our graduates have gone on to excel in their further studies and contribute meaningfully to discussions on social issues."
      },
      {
        heading: "Embark on Your Sociological Journey",
        content: "Opting for our Sociology program means embarking on a journey to deeper societal understanding and critical engagement with the world around you. With our experienced educators, innovative teaching methods, and dedication to student success, we are poised to guide you through the fascinating study of social structures and behaviors.\n\nDive into the world of Sociology. Contact us today to begin your explorative journey."
      }
    ],
    hero: {
      badgeText: "Sociology At The Oasis Academy",
      title: "Unveiling",
      subtitle: "Societal Insights",
      buttonText: "Book A Free Demo!",
      buttonLink: "#free-demo-section",
      backgroundImage: Sociology, // Use public path or import
    },
  },
  "psychology": {
    sections: [
      {
        heading: "Psychology Explored: Pathways to the Mind",
        content: "Psychology is not just a subject at our institution; it's a journey into the human mind and behavior. Designed for students eager to understand the complexities of psychological processes, our program aims to arm them with the knowledge and skills necessary for both academic exploration and real-world application. Through engaging and comprehensive study, we aim to demystify the workings of the mind and foster a deeper understanding of human behavior."
      },
      {
        heading: "The Significance of Psychology",
        content: "Psychology is pivotal for understanding ourselves and the people around us. It equips students with the ability to analyze human behavior, understand mental health issues, and apply this knowledge in various settings, from clinical practices to organizational environments. Studying psychology can lead to profound personal growth and professional opportunities, making it a critical field for those interested in the intricacies of human nature."
      },
      {
        heading: "Our Psychology Curriculum",
        content: [
          "Foundations of Psychology",
          "Developmental Psychology",
          "Cognitive Psychology",
          "Abnormal Psychology",
          "Social Psychology",
          "Research Methods and Ethics"
        ],
        intro: "Our curriculum covers a wide range of topics within psychology, including:",
        outro: "With a curriculum aligned with international standards, we ensure students receive a holistic and in-depth education in psychology."
      },
      {
        heading: "Personalized Tutoring Approach",
        content: [
          "Customized learning plans",
          "One-on-one mentorship",
          "Hands-on experiments and case studies",
          "Regular feedback and assessments"
        ],
        intro: "Acknowledging the individual learning journey of each student, our approach to psychology education includes:",
        outro: "This personalized strategy not only deepens understanding but also enhances students' ability to apply psychological concepts in various contexts."
      },
      {
        heading: "Advanced Studies and Exam Preparation",
        content: "For those seeking to delve deeper into psychology or preparing for exams such as the AP Psychology test or college entrance examinations, we offer specialized coaching. Our aim is to provide students with a thorough understanding of advanced psychological theories and practices, alongside effective exam strategies."
      },
      {
        heading: "Incorporating Technology in Psychology Education",
        content: "We use the latest educational technology to make learning about psychology engaging and accessible. Digital tools and resources are employed to simplify complex concepts and foster a dynamic learning environment."
      },
      {
        heading: "Success Stories and Testimonials",
        content: "Our commitment to excellence in psychology education is reflected in the success of our students and the accolades from our academic community. Our graduates have excelled academically and have gone on to make significant contributions in the field of psychology."
      },
      {
        heading: "Embark on Your Journey into the Human Mind",
        content: "Choosing our Psychology program means embarking on a fascinating journey to understand the mind and human behavior. With our team of experienced educators, innovative teaching methods, and focus on student success, we are dedicated to unlocking the mysteries of psychology for our students.\n\nBegin your exploration of the human mind. Contact us today to start your journey into psychology."
      }
    ],
    hero: {
      badgeText: "Psychology At The Oasis Academy",
      title: "Deciphering Minds",
      subtitle: "A Psychology Exploration",
      buttonText: "Book A Free Demo!",
      buttonLink: "#free-demo-section",
      backgroundImage: Psychology, // Use public path or import
    },
  },
  "business-law": {
    sections: [
      {
        heading: "Navigating Business Law: Pathways to Legal Acumen",
        content: "Business Law is more than a mere subject in our curriculum; it's a critical compass for navigating the legal landscapes of the business world. Our program, meticulously designed for students aiming to grasp the complexities of legal frameworks, statutes, and ethical considerations, equips them with the essential knowledge and skills for academic and professional success. Through a detailed, engaging, and practical exploration of Business Law, we aim to demystify legal jargon and principles, empowering students to make informed decisions in their future business endeavors."
      },
      {
        heading: "The Importance of Business Law",
        content: "Understanding Business Law is crucial for anyone entering the business arena. It provides the foundation for making legally sound decisions, understanding contractual obligations, and navigating the regulatory environment of various industries. This knowledge not only prevents legal missteps but also enhances strategic thinking and ethical considerations in business operations, making it indispensable for aspiring business leaders and entrepreneurs."
      },
      {
        heading: "Our Business Law Curriculum",
        content: [
          "Introduction to Legal Systems and Processes",
          "Contract Law",
          "Corporate Law",
          "Employment Law",
          "Intellectual Property Rights",
          "International Business Law"
        ],
        intro: "Our comprehensive curriculum covers key areas of Business Law, including:",
        outro: "Aligned with international educational standards, our program ensures a deep and practical understanding of Business Law principles."
      },
      {
        heading: "Personalized Tutoring Approach",
        content: [
          "Tailored learning objectives",
          "One-on-one legal analysis sessions",
          "Case study discussions",
          "Continuous evaluation and feedback"
        ],
        intro: "Recognizing the unique learning paths of our students, our personalized tutoring strategy encompasses:",
        outro: "This customized approach not only enhances understanding of legal concepts but also hones critical thinking and application skills necessary for navigating business law."
      },
      {
        heading: "Advanced Studies and Exam Preparation",
        content: "For students seeking to deepen their knowledge in Business Law or preparing for law-related exams and certifications, we provide focused coaching. Our aim is to deepen comprehension of complex legal issues and refine analytical skills, complemented by effective exam and certification preparation strategies."
      },
      {
        heading: "Leveraging Technology in Business Law Education",
        content: "Utilizing the latest educational technology, our Business Law program integrates digital tools and resources to provide an interactive and immersive learning experience. This modern approach facilitates a clearer understanding of complex legal concepts, enriching the overall educational journey."
      },
      {
        heading: "Success Stories and Testimonials",
        content: "Our commitment to excellence in Business Law education is evidenced by the achievements of our students and the positive feedback from our academic community. Our approach has enabled many to excel in their understanding and application of Business Law, setting a solid foundation for their future careers."
      },
      {
        heading: "Embark on Your Business Law Journey",
        content: "Opting for our Business Law program opens the door to comprehensive legal understanding and strategic insight. With our experienced educators, innovative teaching methods, and dedication to student success, we are committed to providing a profound and actionable understanding of Business Law.\n\nDive into the world of Business Law. Contact us today to begin your legal and strategic journey."
      }
    ],
    hero: {
      badgeText: "Business Law At The Oasis Academy",
      title: "Legal Foundations For",
      subtitle: "Business Brilliance",
      buttonText: "Book A Free Demo!",
      buttonLink: "#free-demo-section",
      backgroundImage: BusinessLaw, // Use public path or import
    },
  },
}

export {
  subjectContent,
  OFFER_ITEMS,
  aboutUsContent,
  cardDetails,
  navigationLinks,
  // Demandedsubjects,
  journeySteps,
  testimonialsData,
  footerCols,
  footerContact,
  footerSocials,
  freeDemo,
};
