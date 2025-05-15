import React from 'react';
import { PRIMARY_GREEN } from '../../utils/theme';

const HeroSection = ({
  badgeText,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  return (
    <div className="relative">
      <div className="max-w-[1440px] mx-auto relative ">
        <div className="px-6 py-16 md:py-48 md:w-1/2 lg:w-auto z-10 relative space-y-8">
          {badgeText && (
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: PRIMARY_GREEN }}></div>
              <p className="text-white text-sm">{badgeText}</p>
            </div>
          )}

          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {title} <br />
            {subtitle}
          </h1>
          <div>
            <p className="text-white">{description}</p>
          </div>
          <div>
            {buttonText && buttonLink && (
              <a href={buttonLink}>
                <button className="text-white px-6 py-3 font-medium" style={{ backgroundColor: PRIMARY_GREEN }}>
                  {buttonText}
                </button>
              </a>

            )}
          </div>
        </div>
      </div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-stone-950 bg-opacity-60 bg-blend-overlay overflow-hidden bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </div>
  );
};

export default HeroSection;
