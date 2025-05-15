import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { PRIMARY_GREEN, PRIMARY_TEXT } from '../../utils/theme';
import featureImg from "../../../src/assets/afterheroassets/home-highlights/Features.svg"

const AboutSection = () => {
  return (
    <section className="w-full ">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 flex items-center justify-center lg:justify-end bg-[#F4F4F4]">
          <div className="relative w-full max-w-[600px]">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-50 rounded-lg z-0"></div>
            <img
              src={featureImg}
              alt="Student studying"
              className="rounded-lg shadow-md relative z-10 w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-100 rounded-lg z-0"></div>
          </div>
        </div>

        {/* Content Section - Ensuring full white background */}
        <div className="w-full lg:w-1/2 bg-white py-16 lg:py-24 p-6 md:p-8 lg:p-12 flex items-center">
          <div className="max-w-[600px]">
            <div className="flex items-center mb-4">
              <div className="w-5 h-5 mr-2" style={{ backgroundColor: PRIMARY_GREEN }}></div>
              <p className="text-lg font-medium" style={{ color: PRIMARY_GREEN }}>Online Tutoring with Qualified Faculty
              </p>
            </div>

            <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: PRIMARY_TEXT }}>
              The Oasis Academy
              <br className="hidden md:block" />
            </h2>

            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Welcome to The Oasis Academy, a beacon of academic excellence for expatriate families in the heart of the
              Arabian Peninsula. Founded in 2017, we have become a trusted online tutoring service for students across
              Saudi Arabia, Qatar, and Oman. Our dedication to quality education stems from a deep understanding of the
              challenges and aspirations of the expat community. We also offer tuition for a wide range of other IGCSE/A-levels subjects, including English, Literature, History, Geography, Business Studies, Economics, Computer Science, Foreign Languages, and more.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 shadow-sm" style={{ backgroundColor: PRIMARY_GREEN }}>
                  <FaCheck className="h-3 w-3 text-white" />
                </div>
                <p className="text-gray-800 font-medium">Over 20K hour of live lessons</p>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 shadow-sm" style={{ backgroundColor: PRIMARY_GREEN }}>
                  <FaCheck className="h-3 w-3 text-white" />
                </div>
                <p className="text-gray-800 font-medium">Over 500+ pool of qualified international faculty</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 shadow-sm" style={{ backgroundColor: PRIMARY_GREEN }}>
                  <FaCheck className="h-3 w-3 text-white" />
                </div>
                <p className="text-gray-800 font-medium">Starting from SR 10 per hour</p>
              </div>
            </div>

            <a href="#free-demo-section">
              <button
                style={{ backgroundColor: PRIMARY_GREEN }}
                className="text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 font-medium shadow-sm"
              >
                Free Demo Class Today!
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
