import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

type NavItem = {
    label: string,
    id: string,
}

function Navbar({ links } : { links : NavItem[] }) {
    const { theme, changeTheme } = useTheme();
    const [ open, setOpen ] = useState<boolean>(false);
    const [ scrolled, setScrolled ] = useState<boolean>(false);

    const scrollToSection = (section : string) => {
        document.querySelector('#' + section)?.scrollIntoView({ behavior : "smooth" });
    }

    useEffect(() => {
        const handleScrolled = () => {
            setScrolled(window.scrollY > 0);
        }
        window.addEventListener("scroll", handleScrolled);

        return () => window.removeEventListener("scroll", handleScrolled);
    }, [])

    return (
        <motion.nav data-theme={theme} className="fixed z-30 top-0 w-full pt-2 px-3" initial={{ y: "-200%" }} animate={{ y: 0 }} transition={{ type: "tween", delay: 1 }} viewport={{ once: true }}>
            <motion.div layout animate={{ 
                color: theme === "dark" ? "white" : "#CCFF00",
                backgroundColor: scrolled ? theme === 'dark' ? "rgba(255, 255, 255, 0.3)" : 'rgb(204, 255, 0, 0.3)' : "rgba(255, 255, 255, 0)",
                backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
                padding: scrolled ? "12px" : "0px",
                borderRadius: scrolled ? "16px" : "0px",
                }} className={`hidden lg:block text-md text-[#CCFF00] dark:text-white bg-none`}>
                <div className="w-full grid grid-cols-3 items-center mx-auto">
                    <div className="w-18">
                        <img src={theme === "light" ? "svg/icon-light.svg" : "svg/loading.svg"} />
                    </div>
                    <div className="flex flex-row gap-10 justify-center">
                    {links.map((link, id) => (
                        <a key={id} onClick={() => scrollToSection(link.id)} className="cursor-pointer font-neue-montreal tracking-wide">{link.label}</a>
                    ))}
                    </div>
                    <motion.div layout animate={{ backgroundColor: theme === "dark" ? "color-mix(in oklab, #ffffff 40%, transparent)" : "color-mix(in oklab, #00D812 40%, transparent)" }} className={`cursor-pointer col-3 justify-self-end w-[50px] h-[24px] items-center px-1 rounded-full flex ${theme === "dark" ? "justify-end" : "justify-start"} cursor-pointer`} onClick={changeTheme}>
                        <motion.div layout animate={{ backgroundColor: theme === "dark" ? "black" : "#CCFF00" }} className="w-[18px] h-[18px] rounded-full"></motion.div>
                    </motion.div>
                </div>
            </motion.div>
            <div className="flex flex-col gap-1 lg:hidden pt-3 pl-3 relative z-40" onClick={() => setOpen(prev => !prev)}>
                <motion.div animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }} className="bg-white w-6 h-1 rounded-full"></motion.div>
                <motion.div animate={{ opacity: open ? 0 : 1 }} className="bg-white w-6 h-1 rounded-full"></motion.div>
                <motion.div animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }} className="bg-white w-6 h-1 rounded-full"></motion.div>
            </div>
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: open ? 0 : "-100%" }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                className="fixed flex flex-col gap-5 lg:hidden top-0 left-0 w-7/12 md:w-5/12 px-3 pt-14 text-start bg-black h-screen font-bold text-xl text-[#f4f015]">
                <h1 className="cursor-pointer">ABOUT</h1>
                <h1 className="cursor-pointer">MEMBERS</h1>
                <h1 className="cursor-pointer">STREAM</h1>
                <div className="absolute bottom-3 flex left-1/2 -translate-x-1/2 justify-around flex-row gap-2">
                    <a href="https://www.instagram.com/aespa_official/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="cursor-pointer" />
                    </a>
                    <a href="https://www.youtube.com/@aespa" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer" />
                    </a>
                    <a href="https://x.com/aespa_official" target="_blank">
                        <FontAwesomeIcon icon={faXTwitter} className="cursor-pointer" />
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar;