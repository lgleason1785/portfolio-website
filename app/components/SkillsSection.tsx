'use client';

import { techCardsItems } from "../_lib/constants";
import TechCard from "./ui/TechCard";

const Skills = () => {
  return (
    <div className="relative z-10 py-16 sm:py-24 bg-[#0a0a0a]" id="about">
      <div className="space-y-4 mb-10 px-4 sm:px-0">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E29211] overflow-wrap-anywhere"
        >
          My Tech Stack
        </h1>
        <p
          className="text-base sm:text-base max-w-lg md:max-w-3xl text-white/70 overflow-wrap-anywhere"
        >
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions. These are some of my main
          technologies.
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto px-4 sm:px-0"
      >
        {techCardsItems.map((cardItem) => (
          <TechCard key={cardItem.name} cardInfo={cardItem} />
        ))}
      </div>
    </div>
  );
};

export default Skills;