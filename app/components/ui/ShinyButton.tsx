import React from "react";

const ShinyButton = ({
  children,
  icon,
  iconPosition = "right",
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}) => {
  return (
    <button className="self-start relative z-10 
    inline-flex gap-2.5 h-12 items-center 
    justify-center rounded-md border border-gray-700 
    bg-[linear-gradient(110deg,#1A1A1A,45%,#404040,55%,#1A1A1A)] 
    hover:bg-[linear-gradient(110deg,#262626,45%,#606060,55%,#262626)] 
    bg-size-[200%_100%] animate-shimmer 
    px-6 font-medium text-sm sm:text-base text-slate-200 
    transition-all duration-300 focus:outline-none focus:ring-2 
    focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
    hover:scale-105 active:scale-95">
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default ShinyButton;