'use client';
import { ChevronRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ShinyButton from "./ui/ShinyButton";

const HeroSection = () => {
    return (
        <>      
            <div 
            className="pb-20 pt-36 sm:p-0 sm:min-h-screen flex flex-col items-center justify-center relative"
            id="#home"
            >
                <div className="flex flex-col justify-center items-center relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-snug tracking-wide text-[#E29211] font-sans">
                        Logan Gleason
                    </h1>
                    <div className="text-xl sm:text-2xl md:text-3xl font-medium text-white font-sans">
                        <TypeAnimation
                            sequence={[
                                "Fullstack Developer",
                                1000,
                                "Security Analyst",
                                1000,
                                "Malware Researcher",
                                1000,
                                "Embedded Engineer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                    <ShinyButton icon={<ChevronRight />}>
                            <Link href="#work">See My Projects</Link>
                    </ShinyButton>
                    <a
                        href="/resume/CV_en.pdf"
                        download
                        className="flex items-center gap-2.5 group"
                        >
                        <Download className="text-[#E29211] group-hover:text-[#F5A623] transition-colors duration-200" />
                        <span className="group-hover:text-white/70 transition-colors duration-200 font-semibold">
                            Download CV
                        </span>
                    </a>
                </div>
                
                {/* Social Media Links */}
                <div className="flex items-center gap-6 mt-6">
                    <a
                        href="https://github.com/lgleason1785"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group hover:scale-105 transition-all duration-200"
                    >
                        <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-200" />
                        <span className="text-gray-400 group-hover:text-white transition-colors duration-200 font-medium">
                            GitHub
                        </span>
                    </a>
                    <a
                        href="https://linkedin.com/in/logangleason"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group hover:scale-105 transition-all duration-200"
                    >
                        <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                        <span className="text-gray-400 group-hover:text-blue-400 transition-colors duration-200 font-medium">
                            LinkedIn
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default HeroSection;