// src/components/Journey.jsx

const Journey = ({ heading, description, sections }) => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-4">{heading}</h1>
        <p className="text-center mb-12 text-sm md:text-base">{description}</p>
  
        {/* Sections */}
        {sections.map((section, index) => {
          const isReversed = section.reverse;
          return (
            <div
              key={index}
              className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} mb-12 items-center`}
            >
              <div className="md:w-1/2">
                <img
                  src={section.image}
                  alt={section.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-sm md:text-base">{section.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Journey;
  