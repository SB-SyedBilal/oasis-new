import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import ServiceImg from '../../../../src/assets/afterheroassets/home-highlights/ourservices.svg'

const OurServices = () => {
  return (
    <section className="w-full mx-auto py-8 lg:py-16">
      <div className="flex flex-col-reverse lg:flex-row overflow-hidden justify-center rounded-3xl w-full max-w-[1440px] mx-auto shadow-sm">
        {/* Content Side */}
        <div className="p-6 md:p-8 lg:p-12 flex-1 flex items-center bg-white">
          <div className="flex flex-col max-w-xl">
            <div className="flex items-center mb-4">
              <div className="w-5 h-5 bg-green-600 mr-2"></div>
              <p className="text-lg font-medium text-green-600">Empowering Students to Excel</p>
            </div>

            <h2 className="text-2xl lg:text-4xl font-bold text-[#37393F] mb-6">
              Discover the Oasis Advantage
            </h2>

            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Experience the difference of personalized online tutoring designed for top grades in IGCSE & A-levels
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3 text-lg" />
                <p className="text-gray-800 font-medium">Expert Tutors</p>
              </div>

              <div className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3 text-lg" />
                <p className="text-gray-800 font-medium">Cost-Effective</p>
              </div>

              <div className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3 text-lg" />
                <p className="text-gray-800 font-medium">Tailored Learning</p>
              </div>

              <div className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3 text-lg" />
                <p className="text-gray-800 font-medium">Interactive Sessions</p>
              </div>

              <div className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3 text-lg" />
                <p className="text-gray-800 font-medium">Flexible Learning</p>
              </div>

              <div className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3 text-lg" />
                <p className="text-gray-800 font-medium">Proven Success</p>
              </div>
            </div>

            {/* <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 w-fit font-medium shadow-sm">
              Free Demo Class Today!
            </button> */}
          </div>
        </div>

        {/* Image Side - Now comes first on small devices due to flex-col-reverse */}
        <div className="flex-1 bg-gray-50">
          <div className="h-full flex items-center justify-center p-0">
            <img
              src={ServiceImg}
              alt="Student with laptop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
