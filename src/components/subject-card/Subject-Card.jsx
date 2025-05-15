import React, { useState } from 'react';

const SubjectCard = ({ title, description, icon }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Render description with line breaks by splitting on '\n'
  const renderDescription = (description) => {
    const lines = description.split('\n');
    return lines.map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div
      className={`flex h-[209.95px] w-[373.34px] text-[#37393F] p-6 rounded-[20px] transition-all duration-500 ease-in-out transform ${isHovering ? 'scale-95' : 'scale-100'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovering ? '#18A000' : '#FFFFFF', // background color changes on hover
      }}
    >
      {/* Description and 'Read More' button */}
      <div
        className={`transition-all duration-500 ease-in-out transform ${isHovering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {isHovering && (
          <>
            <div className="py-2">
              {renderDescription(description)} {/* Render description with line breaks */}
            </div>
            <div className='font-bold text-[#FFFFFF] py-4'>
              <button className="bg-[#37393F] text-white py-2 px-4 rounded-full">Read More</button>
            </div>
          </>
        )}
      </div>

      {/* Title and Icon (fade out when hovering) */}
      <div className={`flex-1  font-bold transition-all duration-[1500ms] ease-in-out ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
        {title}
      </div>
      <div className={`flex-1 flex  justify-end transition-all duration-[1500ms] ease-in-out ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
        <img src={icon} alt="Icon" className="w-[72px] h-[72px]" />
      </div>
    </div>
  );
};

export default SubjectCard;
