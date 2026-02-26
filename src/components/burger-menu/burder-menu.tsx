interface BurgerMenuIconProps {
  isOpen?: boolean;
  onClick?: () => void;
}

const BurgerMenuIcon = ({ isOpen, onClick }: BurgerMenuIconProps) => (
  <button
    onClick={onClick}
    className="relative flex flex-col justify-between w-4.75 h-3.75 cursor-pointer bg-transparent border-none p-0 focus:outline-none"
  >
    <span
      className={`w-full h-0.5 bg-white rounded-[1px] transition-all duration-300 origin-center ${
        isOpen ? "rotate-45 translate-y-[6.5px]" : ""
      }`}
    />
    <span
      className={`w-full h-0.5 bg-white rounded-[1px] transition-all duration-300 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    />
    <span
      className={`w-full h-0.5 bg-white rounded-[1px] transition-all duration-300 origin-center ${
        isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
      }`}
    />
  </button>
);

export default BurgerMenuIcon;
