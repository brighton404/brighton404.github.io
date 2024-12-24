import React, { useEffect, useRef, useState } from "react";
import { ButtonColor, ButtonState } from "./ui/button";
import ActionButton from "./ui/actionButton";
import DropCards from "./ui/dropdown/display";
import Icons from "./icons";

interface DropdownProps {
  label: string;
  displayCard: 'default' | 'subdomains';
}

const Dropdown: React.FC<DropdownProps> = ({ label, displayCard }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const closeDropdown = () => setIsOpen(false);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };
    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div style={{display: "inline" }} ref={dropdownRef}>
      <div className="ActionTriggger">
      <ActionButton onClick={toggleDropdown} aria-haspopup="listbox" aria-expanded={isOpen} color={ButtonColor.Primary} state={ButtonState.Default} icon={<Icons variant="chevron-down" />}  isOutlined={false}>
        {label}
      </ActionButton>
      </div>
      <div id="drop" role="listbox" className={`dropdown-menu dropWrap column gap-2 ${isOpen ? "open" : "close"}`}>
        <DropCards variant={displayCard} />
      </div>
    </div>
  );
};

export default Dropdown;