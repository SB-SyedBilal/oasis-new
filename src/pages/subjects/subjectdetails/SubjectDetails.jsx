import React, { useState, useEffect } from "react"
import HeroSection from "../../../components/herosection/HeroSection";
import { useParams, useNavigate } from "react-router-dom"
import { subjectContent, SUBJECTS } from "../../../utils/constant"
import { PRIMARY_GREEN } from "../../../utils/theme"

// Define a fallback color if PRIMARY_TEXT is not available
const TEXT_COLOR = "#37393F";

const SubjectDetails = () => {
  const navigate = useNavigate()
  const { slug } = useParams()

  // Get subject key from slug
  const getSubjectFromSlug = (slug) => {
    // Find the subject that matches the slug (case-insensitive)
    const subject = SUBJECTS.find(s => s.slug.toLowerCase() === slug.toLowerCase());
    return subject ? subject.slug : slug;
  }

  const subjectKey = getSubjectFromSlug(slug);
  const [activeSubject, setActiveSubject] = useState(subjectKey);

  const currentSubject = subjectContent[subjectKey] || {
    hero: {
      title: "404 - Subject Not Found",
      subtitle: "Please check the URL",
      description: "We couldn't find the subject you're looking for.",
      badgeText: "Error",
      buttonText: "Go Home",
      buttonLink: "/",
    },
  }

  // Handle sidebar subject change
  const handleSubjectChange = (subjectName) => {
    navigate(`/${subjectName}`);
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    setActiveSubject(subjectKey);
    // Scroll to the top of the page when the subject changes via URL
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [slug, subjectKey])

  // Render the dynamic content sections based on the new data structure
  const renderSubjectContent = () => {
    try {
      // Check if the subject has sections
      if (!currentSubject.sections || !Array.isArray(currentSubject.sections)) {
        console.log("No sections found or sections is not an array", currentSubject);
        return null;
      }
      
      return currentSubject.sections.map((section, index) => {
        // Skip if section is undefined or null
        if (!section) {
          console.log("Skipping undefined section at index", index);
          return null;
        }
        
        const { heading, content, intro, outro } = section;
        
        // Skip if heading or content is missing
        if (!heading || content === undefined) {
          console.log("Skipping section with missing heading or content", section);
          return null;
        }
        
        return (
          <div key={index} className="mb-8">
            <h2 className="mb-4 text-xl font-semibold" style={{ color: TEXT_COLOR }}>
              {heading}
            </h2>
            {Array.isArray(content) ? (
              <>
                {intro ? (
                  <p className="mb-4 text-gray-700">{intro}</p>
                ) : (
                  <p className="mb-4 text-gray-700">
                    The Oasis Academy's {activeSubject} curriculum is designed to be comprehensive and inclusive, covering:
                  </p>
                )}
                <ul className="mb-6 list-inside list-disc space-y-1 text-gray-700">
                  {content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {outro && <p className="mb-6 text-gray-700">{outro}</p>}
              </>
            ) : (
              <p className="mb-6 text-gray-700">{content}</p>
            )}
          </div>
        );
      });
    } catch (error) {
      console.error("Error rendering subject content:", error);
      return <p className="text-red-500">Error loading content. Please try again later.</p>;
    }
  };

  return (
    <>
      {currentSubject.hero && (
        <HeroSection
          badgeText={currentSubject.hero.badgeText}
          title={currentSubject.hero.title}
          subtitle={currentSubject.hero.subtitle}
          description={currentSubject.hero.description}
          buttonText={currentSubject.hero.buttonText}
          buttonLink={currentSubject.hero.buttonLink}
          backgroundImage={currentSubject.hero.backgroundImage}
        />
      )}

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Sidebar - will appear after content on mobile, but first on desktop */}
          <div
            id="subject-sidebar"
            className="order-2 md:order-1 mb-8 w-full md:self-start sticky md:mb-0 md:w-1/4 md:sticky md:top-20"
          >
            <a href="/subjects">
              <div className="py-3 text-center" style={{ backgroundColor: PRIMARY_GREEN }}>
                <h2 className="text-xl font-bold text-white">Subjects</h2>
              </div>
            </a>
            <div className=" border-gray-200 rounded-b-lg pt-1 overflow-hidden">
              {SUBJECTS.map(({ name, slug }) => (
                <div
                  key={slug}
                  className={`cursor-pointer border-b border-gray-300 px-4 py-3 transition-colors ${
                    activeSubject === slug
                      ? "text-white"
                      : "hover:text-green-600"
                  }`}
                  style={{
                    backgroundColor: activeSubject === slug ? PRIMARY_GREEN : 'transparent',
                     color: activeSubject === slug ? "white" : "black"
                  }}
                  onMouseEnter={(e) => {
                    if (activeSubject !== slug) {
                      e.currentTarget.style.color = PRIMARY_GREEN;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSubject !== slug) {
                      e.currentTarget.style.color = '';
                    }
                  }}
                  onClick={() => handleSubjectChange(slug)}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>


          {/* Main Content - will appear first on mobile, but second on desktop */}
          <div className="order-1 md:order-2 w-full md:w-3/4">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              {SUBJECTS.find(subject => subject.slug === activeSubject)?.name || activeSubject}
            </h1>

            {/* Dynamically render all content sections */}
            {renderSubjectContent()}

            {/* Final CTA */}

            <div className="mb-12">
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
      </div>
    </>
  )
}

export default SubjectDetails

