import React, { useState } from 'react';
import { SUBJECTS } from '../../utils/constant';
import { navigationLinks } from '../../utils/constant';
import { useLocation } from 'react-router-dom';
import DesktopDropdown from './DesktopDropdown';
import Logo from '../../../src/assets/Logo/black.svg';
import { BiChevronDown, BiMenu } from 'react-icons/bi';
import MobileMenu from './MobileMenu';  

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

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

  return (
    <>
      <nav className='m-auto max-w-[1440px] z-50 relative'>
        <div className='flex justify-between items-center'>
          <a href="/">
            <img src={Logo} alt="Logo" className='size-28' />
          </a>
          {/* Desktop Nav */}
          <ul className='lg:flex hidden items-stretch gap-x-10'>
            {navigationLinks.map((link) => (
              <li
                key={link.id}
                className={
                  link.dropdown
                    ? `group relative flex cursor-pointer items-center gap-x-1.5 transition-colors ${isLinkActive(link) ? "text-[#18A000]" : ""}`
                    : `flex cursor-pointer items-center gap-x-1.5 transition-colors ${isLinkActive(link) ? "text-[#18A000]" : ""}`
                }
              >
                <a href={link.href} className='hover:text-[#18A000] transition-colors font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18A000]' aria-current={isLinkActive(link) ? "page" : undefined}>{link.text}</a>
                {link.dropdown && (
                  <>
                    <span className='flex size-6 items-center justify-center '>
                      <BiChevronDown className='size-6 transition-all duration-250 group-hover:text-[#18A000] group-hover:rotate-180' />
                    </span>
                    <DesktopDropdown links={SUBJECTS.map((s, i) => ({
                      id: i + 1,
                      href: `/${s.slug}`,
                      text: s.name,
                      isActive: isSubjectActive(s.slug)
                    }))} />
                  </>
                )}
              </li>
            ))}
          </ul>
          {/* Desktop Button */}
          <div className='items-center lg:flex hidden'>
            <a href="#free-demo-section">
              <button className="bg-[#18A000] text-white px-6 py-3 font-medium rounded-xl shadow hover:bg-[#119000] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18A000] transition-all">
                Book a Free Demo!
              </button>
            </a>
          </div>
          {/* Hamburger Icon for mobile */}
          <button
            className='lg:hidden flex items-center justify-center p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18A000] rounded'
            aria-label='Open mobile menu'
            onClick={() => setMobileOpen(true)}
          >
            <BiMenu className='size-8' />
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <MobileMenu onClose={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Navigation;
