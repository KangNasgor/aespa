import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import scrollToSection from "../functions/scrollToSection";

type NavItem = {
    label: string,
    id: string,
    link? : string,
}

function Navbar({ links } : { links : NavItem[] }) {
    const { theme, changeTheme } = useTheme();
    const [ open, setOpen ] = useState<boolean>(false);
    const [ scrolled, setScrolled ] = useState<boolean>(false);
    const [ scrolledTop, setScrolledTop ] = useState<boolean>(true); 

    useEffect(() => {
        let lastScroll = window.scrollY
        const handleScrolled = () => {
            setScrolled(window.scrollY > 0);
        }
        const scrollTop = () => {
            setScrolledTop(lastScroll > window.scrollY);
            lastScroll = window.scrollY;
        }
        window.addEventListener("scroll", handleScrolled);
        window.addEventListener("scroll", scrollTop);

        return () => {
            window.removeEventListener("scroll", handleScrolled);
            window.removeEventListener("scroll", scrollTop);
        }
    }, [])

    return (
        <motion.nav data-theme={theme} className={`fixed transform ${scrolledTop ? 'translate-y-0' : '-translate-y-[100%]'} z-30 top-0 w-full p-[10px]`} initial={{ y: "-200%" }} animate={{ y: 0 }} transition={{ type: "tween", delay: 1 }} viewport={{ once: true }}>
            {/** Desktop Navbar */}
            <motion.div layout animate={{ 
                color: theme === "dark" ? "white" : "#CCFF00",
                backgroundColor: scrolled ? theme === 'dark' ? "rgba(255, 255, 255, 0.3)" : 'rgb(204, 255, 0, 0.3)' : "rgba(255, 255, 255, 0)",
                backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
                padding: scrolled ? "12px" : "0px",
                borderRadius: scrolled ? "16px" : "0px",
                }} className={`hidden md:block text-md bg-none`}>
                <div className="w-full grid grid-cols-3 items-center mx-auto">
                    <a href="/" className="w-[78px]">
                        <img src={theme === "light" ? "/svg/icon-light.svg" : "/svg/loading.svg"} />
                    </a>
                    <div className="flex flex-row gap-10 justify-center">
                    {links.map((link, id) => (
                        <a key={id} href={link.link ?? undefined} onClick={() => scrollToSection(link.id)} className="cursor-pointer text-[14px] lg:text-[16px] font-neue-montreal tracking-wide">{link.label}</a>
                    ))}
                    </div>
                    <motion.div layout animate={{ backgroundColor: theme === "dark" ? "color-mix(in oklab, #ffffff 40%, transparent)" : "color-mix(in oklab, #00D812 40%, transparent)" }} className={`cursor-pointer col-3 justify-self-end w-[50px] h-[24px] items-center px-1 rounded-full flex ${theme === "dark" ? "justify-end" : "justify-start"} cursor-pointer`} onClick={changeTheme}>
                        <motion.div layout animate={{ backgroundColor: theme === "dark" ? "black" : "#CCFF00" }} className="w-[18px] h-[18px] rounded-full"></motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/** Mobile Navbar */}
            <div className="flex flex-col gap-1 md:hidden relative z-40" onClick={() => setOpen(prev => !prev)}>
                <motion.div animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }} transition={{ type : "tween" }} className="bg-white w-6 h-1 rounded-full"></motion.div>
                <motion.div animate={{ opacity: open ? 0 : 1 }} transition={{ type : "tween" }} className="bg-white w-6 h-1 rounded-full"></motion.div>
                <motion.div animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }} transition={{ type : "tween" }} className="bg-white w-6 h-1 rounded-full"></motion.div>
            </div>
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: open ? 0 : "-100%" }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                className="fixed flex flex-col gap-5 lg:hidden top-0 left-0 w-7/12 md:w-5/12 px-3 pt-14 text-start bg-[#5E5E5E]/30 backdrop-blur-xl h-screen font-semibold font-creato-display text-xl text-[#f4f015] dark:text-white">
                    {links.map((link, id) => (
                        <a key={id} onClick={() => scrollToSection(link.id)} className="cursor-pointer">{link.label}</a>
                    ))}
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