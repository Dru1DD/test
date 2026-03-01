import { useState, useRef, useEffect } from 'react';
import { socialLinks } from './constant';

interface CommunityDropdownProps {
  onItemClick?: () => void;
}

const CommunityDropdown = ({ onItemClick }: CommunityDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className="hidden lg:flex relative  flex-col items-center" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-base font-normal hover:underline underline-offset-2 hover:text-green transition-all duration-200 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
      >
        Community
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 flex flex-col items-start bg-[#303030] border border-[#FFFFFF29] rounded-md overflow-hidden min-w-37.5 shadow-xl z-50">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="w-full text-left px-5 py-3 text-[#ECECEC] text-base font-normal hover:text-green hover:underline underline-offset-2 transition-colors duration-200 whitespace-nowrap"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityDropdown;
