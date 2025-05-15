import { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import { navigationLinks, SUBJECTS } from '../../utils/constant';
import { BiChevronDown } from 'react-icons/bi';
import MobileDropdown from './MobileDropdown';
import { useLocation } from 'react-router-dom';
const MobileMenu = ({ onClose }) => {
  const [activeLinkId, setActiveLinkId] = useState(-1);
  const location = useLocation();
  const pathname = location.pathname;

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  
  // Function to check if the link is active
  const isLinkActive = (link) => {
    if (link.dropdown) {
      // Highlight parent (like Subjects) when pathname starts with /subjects or is a subject page
      const isSubjectPage = SUBJECTS.some(subject => pathname === `/${subject.slug}`);
      return pathname.startsWith('/subjects') || isSubjectPage;
    }
    return pathname === link.href;
  };
  
  // Function to check if a subject in dropdown is active
  const isSubjectActive = (slug) => {
    return pathname === `/${slug}`;
  };

  const handleDropdownToggle = (id) => {
    setActiveLinkId(activeLinkId === id ? -1 : id);
  };

  // Generate subject dropdown links for mobile
  const subjectDropdownLinks = SUBJECTS?.map((s) => ({
    text: s.name,
    href: `/${s.slug}`,
    isActive: isSubjectActive(s.slug)
  })) || [];

  return (
    <div className="w-80 bg-white h-full shadow-lg p-6 relative flex flex-col overflow-y-auto max-h-screen">
      {/* Close Icon */}
      <button
        className="absolute top-4 right-4 text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18A000] rounded"
        aria-label="Close mobile menu"
        onClick={onClose}
      >
        <GrClose />
      </button>
      <nav className="flex flex-col gap-8 mt-10 overflow-y-auto">
        <ul className="flex flex-col gap-4">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <div className="flex items-center justify-between">
                <a
                  href={link.href}
                  className={`block py-2 text-lg font-semibold ${isLinkActive(link) ? 'text-[#18A000]' : 'text-gray-800'} hover:text-[#18A000] cursor-pointer transition-colors`}
                  onClick={onClose}
                >
                  {link.text}
                </a>
                {link.dropdown && (
                  <button
                    className="ml-2 p-1"
                    aria-label="Toggle dropdown"
                    aria-expanded={activeLinkId === link.id}
                    onClick={() => handleDropdownToggle(link.id)}
                  >
                    <BiChevronDown className={`transition-transform duration-200 text-2xl ${activeLinkId === link.id ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              {link.dropdown && activeLinkId === link.id && (
  <MobileDropdown
    links={link.text === 'Subjects' ? subjectDropdownLinks : link.dropdownLinks || []}
    onClose={onClose}
  />
)}
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-200 my-4"></div>
        <a href="#free-demo-section" onClick={onClose}>
          <button className="w-full bg-[#18A000] text-white py-3 rounded-xl font-medium mt-2 shadow hover:bg-[#119000] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18A000] transition-all">
            Book a Free Demo!
          </button>
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
