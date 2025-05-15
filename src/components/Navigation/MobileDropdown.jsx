import React from "react";

const MobileDropdown = ({ links, onClose }) => {
  return (
    <ul className="z-10 flex flex-col gap-y-3 bg-[#F4F4F4] rounded-2xl shadow-xl p-3 mt-2" role="menu">
      {links?.map((link, i) => (
        <li className="text-grey-600" key={link.href || link.link || i} role="menuitem">
          <a
            href={link.href || link.link || '#'}
            onClick={onClose}
            tabIndex={0}
            className={`block px-5 py-4 rounded-xl ${link.isActive ? 'bg-[#18A000] text-white' : 'text-black hover:bg-[#18A000] hover:text-white'} transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18A000]`}
          >
            {link.text || link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MobileDropdown;
