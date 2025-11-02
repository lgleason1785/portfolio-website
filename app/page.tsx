import {
  BriefcaseBusiness,
  Contact as ContactIcon,
  House,
  UserRound,
} from "lucide-react";
import { Navbar } from "./components/ui/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/SkillsSection";
import { Projects } from "./components/ProjectsSection";

const navItems = [
  { name: "Home", link: "#home", icon: <House /> },
  { name: "Work", link: "#work", icon: <BriefcaseBusiness /> },
  { name: "About", link: "#about", icon: <UserRound /> },
  { name: "Contact", link: "#contact", icon: <ContactIcon /> },
];

const Homepage = () => {
  return (
    <main className="flex flex-col px-5 sm:px-10 relative min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <Navbar navItems={navItems} />
        <HeroSection />
        <Skills />
        <Projects />

          <section id="contact" className="min-h-screen flex items-center justify-center">
            <h2 className="text-3xl font-bold text-center">Contact</h2>
          </section>
      </div>
    </main>
  );
};

export default Homepage;