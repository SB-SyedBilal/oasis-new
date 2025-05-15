import React from "react";
import { SUBJECTS } from '../../utils/constant';
import Maths from '../../../src/assets/Subjects/maths.svg'
import Bio from '../../../src/assets/Subjects/biology.svg'
import Chem from '../../../src/assets/Subjects/chemistry.svg'
import Phy from '../../../src/assets/Subjects/physics.svg'
import Eng from '../../../src/assets/Subjects/english.svg'
import cs from '../../../src/assets/Subjects/cs.svg'
import bs from '../../../src/assets/Subjects/bs.svg'
import acc from '../../../src/assets/Subjects/accounting.svg'
import eco from '../../../src/assets/Subjects/economics.svg'
import psycho from '../../../src/assets/Subjects/psychology.svg'
import socio from '../../../src/assets/Subjects/sociology.svg'
import bl from '../../../src/assets/Subjects/bl.svg'

// Map extra info by slug (for DRYness)
const SUBJECT_EXTRA = {
  mathematics: {
    description: "Master critical thinking and problem-solving skills with our expert Maths tutors. From algebra to calculus, we'll help you excel in this essential subject.",
    hoverText: "At The Oasis Academy, we believe that Mathematics is not just a subject but a critical tool for life.",
    img: Maths,
  },
  biology: {
    description: "Explore the wonders of life sciences with our Biology tutoring. From cellular processes to ecosystems, our tutors will help you understand and appreciate the complexity of living organisms.",
    hoverText: "Biology, the study of living organisms and life processes, is a fascinating and essential scientific discipline.",
    img: Bio,
  },
  chemistry: {
    description: "Discover the building blocks of matter and the reactions that shape our world. Our Chemistry tutors will guide you through this fascinating subject with clarity and expertise.",
    hoverText: "Chemistry, often known as the central science, bridges the gap between physics and biology.",
    img: Chem,
  },
  physics: {
    description: "Physics, the fundamental science of matter and energy, is at the heart of understanding how the universe operates.",
    hoverText: "Physics, the fundamental science of matter and energy",
    img: Phy,
  },
  english: {
    description: "Master the English language with comprehensive literature, writing, and reading comprehension.",
    hoverText: "Our English program, designed specifically for students from Saudi Arabia, Qatar, and Oman.",
    img: Eng,
  },
  "computer-science": {
    description: "The Oasis Academy’s Computer Science program is crafted to empower students in Saudi Arabia, Qatar, and Oman.",
    hoverText: "Computer Science is integral to modern life, underpinning the technologies we use every day and driving innovation in every sector.",
    img: cs,
  },
  "business-studies": {
    description: "Business Studies is more than just a subject; it’s a vital educational foundation for anyone looking to enter the world of commerce, finance, or entrepreneurship.",
    hoverText: "Understand the world of commerce and entrepreneurship with our business studies program.",
    img: bs,
  },
  accounting: {
    description: "Navigate the financial aspects of business with ease. Our accounting tutors offer clarity and guidance on this critical subject.",
    hoverText: "Accounting is essential for understanding and managing the financial aspects of businesses and personal finances.",
    img: acc,
  },
  economics: {
    description: "Explore the fundamentals of economics with our experienced tutors who bring real-world scenarios to the classroom.",
    hoverText: "Economics is fundamental to understanding the forces that shape our lives, from global markets to personal finance decisions.",
    img: eco,
  },
  psychology: {
    description: "Delve into the human mind, learning about behavior, cognition, and emotion with our engaging psychology tutors.",
    hoverText: "Psychology is pivotal for understanding ourselves and the people around us.",
    img: psycho,
  },
  sociology: {
    description: "Examine society and social behavior by understanding how human action and consciousness both shape.",
    hoverText: "Sociology offers invaluable insights into the functioning of societies, communities, and social groups.",
    img: { socio },
  },
  "business-law": {
    description: "Explore the fundamentals of economics with our experienced tutors who bring real-world scenarios to the classroom.",
    hoverText: "Business Law is more than a mere subject in our curriculum; it’s a critical compass for navigating the legal landscapes of the business world.",
    img: bl,
  },
};

// Generate the subjects array by merging SUBJECTS with SUBJECT_EXTRA
const subjects = SUBJECTS.map(({ name, slug }) => ({
  name,
  ...SUBJECT_EXTRA[slug],
  link: `${slug}`,
}));

const Curriculum = ({ numSubjects, heading, headingText, cardWidth }) => {

  return (
    <section className="py-16 px-4 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex flex-col items-center">
        {/* Headings - Simplified and minimal */}
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-3">{heading}</p>
          <h2 className={`font-bold text-3xl md:text-4xl text-center max-w-2xl mx-auto ${cardWidth}`}>{headingText}</h2>
        </div>

        {/* Subject Cards - More minimal with preserved animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {subjects.slice(0, numSubjects).map((subject, index) => (
            <div key={index} className="relative w-full h-[174px] rounded-3xl overflow-hidden group">
              {/* Hover Content - Preserving the exact animation */}
              <div
                className="absolute flex justify-between items-center w-full h-full bg-[#f6f6f6] text-black rounded-xl 
                transition-all duration-[600ms] group-hover:scale-75 group-hover:opacity-0 pointer-events-none p-6"
              >
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-xl text-gray-800">{subject.name}</p>
                  <p className="text-gray-600 text-sm">{subject.hoverText}</p>
                </div>
                <img
                  src={subject.img || "/placeholder.svg"}
                  alt={`${subject.name} Subject`}
                  className="h-14 w-14 object-contain"
                />
              </div>

              {/* Main Content - More minimal */}
              <div className="flex flex-col justify-center w-full h-full bg-[#18A000] rounded-xl text-white p-6">
                <p className="mb-4 text-sm leading-relaxed">{subject.description}</p>
                <a href={subject.link} className="font-medium text-sm hover:underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button - More minimal */}
        {numSubjects === 6 && (
          <div className="mt-12">
            <a
              href="/subjects"
              className="px-8 py-3 font-medium text-white bg-[#18A000] hover:bg-[#148500] transition-all duration-300"
            >
              View All Subjects
            </a>
          </div>
        )}
      </div>
    </section>
  )
};

export default Curriculum;