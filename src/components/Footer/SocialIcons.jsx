import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-fbmsecondary">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-4 cursor-pointer inline-flex items-center 
          rounded-full bg-gray-700 mx-2 text-xl hover:text-gray-100 hover:bg-fbmsecondary
        duration-300 "
        >
          {/* icones react icons importados Menus.jsx */}
          {icon.icon}
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;