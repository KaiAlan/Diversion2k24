import TabButton from "../TabButton/TabButton";
import { useState } from "react";

export default function Dropdown({ children }: any) {
  
  // State to change selected button status and control dropdown
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleTabClick = (selectedButton: string) => {
    setSelectedTopic(selectedButton);
    if (selectedButton === "prediction") {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setIsDropdownOpen(false);
    }
  };

  return (
    <>
      <TabButton
        isSelected={selectedTopic === "prediction"}
        onClick={() => handleTabClick("prediction")}
      >
        {children}
      </TabButton>
      {isDropdownOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg">
          {/* Dropdown menu */}
          <li className="border-b px-4 py-2 hover:bg-gray-100">Item 1</li>
          <li className="border-b px-4 py-2 hover:bg-gray-100">Item 2</li>
        </ul>
      )}
    </>
  );
}
