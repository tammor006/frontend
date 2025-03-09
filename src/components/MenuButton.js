import React from "react";
import "../style.css";

const MenuButton = ({ onClick }) => {
  return (
    <button className="flex flex-col gap-2 p-2" onClick={onClick}>
      <div className="w-10 h-1 bg-black rounded-full"></div> {/* Full width */}
      <div className="w-7 h-1 bg-black rounded-full"></div> {/* Medium width */}
      <div className="w-5 h-1 bg-black rounded-full"></div> {/* Smallest width */}
    </button>
  );
};

export default MenuButton;