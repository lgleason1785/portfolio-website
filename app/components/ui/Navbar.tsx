'use client'
import { cn } from "@/app/_lib/utils";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll
} from 'framer-motion';
import Link from "next/link";
import { JSX, useState } from "react";

export const Navbar = ({
    navItems,
    className,
} : {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                // Always show navbar when near the top
                setVisible(true);
            } else {
                if (direction < 0) {
                    // Scrolling up - show navbar
                    setVisible(true);
                } else {
                    // Scrolling down - hide navbar
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                initial={{
                    opacity: 1,
                    y: 0,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className={cn(
                    "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-gray-600 rounded-lg bg-[#1e1e1e]/80 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-50 px-8 py-4 items-center justify-center space-x-4",
                    className
                )}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative text-gray-100 items-center flex space-x-1 hover:text-blue-400 transition-colors"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block">{navItem.name}</span>
                    </Link>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};