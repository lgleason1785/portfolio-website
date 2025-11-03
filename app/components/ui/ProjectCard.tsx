'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "" }) => {
  const cardContent = (
    <div className={`relative w-full h-full ${project.link ? 'cursor-pointer transition-transform duration-200 hover:scale-105' : ''} ${className}`}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
        unoptimized
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement!.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
        }}
      />
      <div className="absolute inset-0 bg-black/40 flex items-end hover:bg-black/30 transition-colors duration-200">
        <div className="p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-200 mb-3">{project.description}</p>
          <div className="flex gap-2 flex-wrap">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#E29211] text-black text-sm rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (project.link) {
    return (
      <Link 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default ProjectCard;