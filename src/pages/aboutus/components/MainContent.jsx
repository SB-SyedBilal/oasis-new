import { aboutUsContent } from "../../../utils/constant" // adjust path if needed
import { PRIMARY_GREEN } from "../../../utils/theme"

const MainContent = () => {
  const { leftSection, rightSection } = aboutUsContent

  return (
    <div className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="w-full md:w-5/12 bg-[#F4F4F4] rounded-lg overflow-hidden">
            <div className="p-6 md:p-10 space-y-8">
              <div
                className="w-full h-64 md:h-96 rounded-lg md:rounded-xl bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('../../../src/assets/afterheroassets/about-team/WhoWeAre.svg')" }}
              ></div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#37393F]">{leftSection.heading}</h2>
                <p className="text-[#7D7D7D] leading-relaxed">{leftSection.description1}</p>
                <a
                  href="#"
                  className="inline-block text-[#37393F] font-medium underline hover:text-[#116F00] transition-colors"
                >
                  {leftSection.linkText}
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-7/12 p-6 md:p-10 md:pt-0">
            <div className="space-y-8 md:space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <p className="text-[#116F00] font-medium">{rightSection.welcomeText}</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#37393F] leading-tight">
                  {rightSection.heading}
                </h1>
                <p className="text-[#7D7D7D] leading-relaxed">{rightSection.description}</p>
              </div>

              {/* Mission & Vision */}
              <div className="space-y-6">
                {/* Mission */}
                <div className="border border-[#E3E3E3] rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    {rightSection.mission.icon && (
                      <div className="text-[#116F00]">
                        <rightSection.mission.icon />
                      </div>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold text-[#37393F]">{rightSection.mission.title}</h3>
                    <p className="text-[#7D7D7D] leading-relaxed">{rightSection.mission.description}</p>
                  </div>
                </div>

                {/* Vision */}
                <div className="border border-[#E3E3E3] rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    {rightSection.vision.icon && (
                      <div className="text-[#116F00]">
                        <rightSection.vision.icon />
                      </div>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold text-[#37393F]">{rightSection.vision.title}</h3>
                    <p className="text-[#7D7D7D] leading-relaxed">{rightSection.vision.description}</p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="pt-4">
                <a href="#free-demo-section">
                  <button
                    style={{ backgroundColor: PRIMARY_GREEN }}
                    className="text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 font-medium shadow-sm"
                  >
                    {rightSection.buttonText}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
