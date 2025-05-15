import React from 'react'
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Main = () => {
  return (
    <div className="overflow-hidden py-12">
      <div className="px-4 max-w-[1440px] m-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="../../../src/assets/afterheroassets/contactus-banner/GetInTouch.jpg"
              alt="Contact us"
              className="h-auto w-full max-w-[565px] rounded-lg object-cover"
            />
          </div>

          {/* Right side - Text and contact info */}
          <div className="w-full space-y-8 md:w-1/2">
            {/* Heading section */}
            <div className="space-y-4 text-center md:text-left">
              <p className="text-2xl text-[#37393F]">Let's Talk</p>
              <h1 className="text-4xl font-bold text-[#37393F] md:text-5xl">Get in touch with us</h1>
              <p className="mx-auto text-[#7D7D7D] md:mx-0 md:text-2xl">
                Completely synergize resource taxing relationships via premier niche dynamically innovate state of the
                art customer service.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              {/* Email contact */}
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gray-100">
                  <FaEnvelope className="text-gray-700 text-2xl" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[#7D7D7D]">Write email</p>
                  <p className="font-medium">info@whitecollar.com</p>
                </div>
              </div>

              {/* Phone contact */}
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gray-100">
                  <FaPhone className="text-gray-700 text-2xl" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[#7D7D7D]">Have any questions?</p>
                  <p className="font-medium">Free +01 569 896 654</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
