// Receives subject links from Navigation.jsx, which generates them from SUBJECTS
const DesktopDropdown = ({ links }) => {
  return (
    <ul
      className="absolute left-0 top-full min-w-[220px] z-[9999] bg-[#F4F4F4] shadow-2xl border border-gray-200 rounded-2xl py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 ease-out"
      role="menu"
    >
      {links?.map((link, i) => (
        <li key={link.href || i} role="menuitem">
          <a
            href={link.href}
            tabIndex={0}
            className={`block px-6 py-3 ${link.isActive ? 'bg-[#18A000] text-white' : 'text-black hover:bg-[#18A000] hover:text-white'} rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18A000]`}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopDropdown;
