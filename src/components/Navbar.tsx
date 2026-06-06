import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
    const { theme, changeTheme } = useTheme();
    const [open, setOpen] = useState(false);
    return (
        <motion.nav data-theme={theme} className="relative z-30" initial={{ y : "-100%" }} whileInView={{ y : 0 }} transition={{ type : "tween", delay: 1 }} viewport={{ once: true }}>
            <div className="hidden lg:flex md:flex-row md:gap-10 md:justify-center font-semibold text-md text-white bg-none px-3 py-3">
                <div className="w-16 absolute left-3">
                    <img src="svg/aespa.png"/>
                </div>
                <h1 className="cursor-pointer">ABOUT</h1>
                <h1 className="cursor-pointer">MEMBERS</h1>
                <h1 className="cursor-pointer">STREAM</h1>
                <div className="absolute flex flex-row gap-2 right-3">
                    <a href="https://www.instagram.com/aespa_official/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="cursor-pointer"/>
                    </a>
                    <a href="https://www.youtube.com/@aespa" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer"/>
                    </a>
                    <a href="https://x.com/aespa_official" target="_blank">
                        <FontAwesomeIcon icon={faXTwitter} className="cursor-pointer"/>
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-1 lg:hidden pt-3 pl-3 relative z-40" onClick={() => setOpen(prev => !prev)}>
                <motion.div animate={{ rotate : open ? 45 : 0, y: open ? 8 : 0}} className="bg-white w-6 h-1 rounded-full"></motion.div>
                <motion.div animate={{ opacity : open ? 0 : 1}} className="bg-white w-6 h-1 rounded-full"></motion.div>
                <motion.div animate={{ rotate : open ? -45 : 0, y: open ? -8 : 0}} className="bg-white w-6 h-1 rounded-full"></motion.div>
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
                        <FontAwesomeIcon icon={faInstagram} className="cursor-pointer"/>
                    </a>
                    <a href="https://www.youtube.com/@aespa" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer"/>
                    </a>
                    <a href="https://x.com/aespa_official" target="_blank">
                        <FontAwesomeIcon icon={faXTwitter} className="cursor-pointer"/>
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar;