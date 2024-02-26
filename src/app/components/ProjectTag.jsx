import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-gradient-to-br from-primary to-tertiary-400 text-Twhite"
    : "text-primary border-slate-600 hover:border-tertiary-700 hover:text-tertiary-600";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;