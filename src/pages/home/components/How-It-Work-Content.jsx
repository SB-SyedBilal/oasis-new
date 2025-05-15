import { BiCaretUp } from "react-icons/bi";
import React from "react";
import { cardDetails } from "../../../utils/constant";

const HowItWorksContent = () => {
  return (
    <div className="flex p-16 max-w-[1440px] mx-auto overflow-hidden">
      <div className="">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-2">Start Your Journey with The Oasis Academy</h2>
          <p className="text-lg text-gray-600">Getting started with The Oasis Academy is as simple</p>
        </div>
        {/* Optional subheading if needed */}

        <div className="flex sm:flex-row flex-col items-center justify-center ">
          {cardDetails.map((subject) => (
            <div
              key={subject.id}
              className={
                subject.id == 2 || subject.id == 4
                  ? "lg:translate-y-[3.5rem]  flex justify-center items-center"
                  : "flex items-center justify-center relative"
              }
            >
              {/* Mobile image */}
              <img
                src={
                  subject.id == 1 || subject.id == 3
                    ? subject.bg1
                    : subject.bg2
                }
                alt={subject.title}
                className="size-80 lg:hidden"
              />

              {/* Large screen image (always bg1) */}
              <img
                src={subject.bg1}
                alt={subject.title}
                className="size-80 hidden lg:block"
              />

              {/* Title */}
              {subject.id == 1 || subject.id == 3 ? (
                <p className="text-center w-[8rem] absolute font-semibold lg:-translate-y-30 translate-y-10">{subject.title}</p>
              ) : (
                <p className="text-center w-[10rem] lg:-translate-y-14 translate-y-10 absolute font-semibold">{subject.title}</p>
              )}
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default HowItWorksContent;
