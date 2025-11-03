'use client';
import React, { JSX, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ShinyButton from "./ui/ShinyButton";
import ProjectCard, { Project } from "./ui/ProjectCard";
import Link from "next/link";
import { projectsItems } from "../_lib/constants";

export const Projects = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects: Project[] = projectsItems;

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="w-full py-16 sm:py-24 px-5 sm:px-10 relative overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-8 pr-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E29211]">My Projects</h2>
          <ShinyButton icon={<ChevronRight />}>
            <Link href="#work">All Projects</Link>
          </ShinyButton>
        </div>

        <div className="relative h-80 bg-gray-900 rounded-[28px] overflow-hidden">
          {/* Main Project Display */}
          <ProjectCard project={projects[currentIndex]} />

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-[#E29211]' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
