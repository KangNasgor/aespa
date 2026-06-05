import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";

function Navbar() {
    const { theme, changeTheme } = useTheme();
    const [open, setOpen] = useState(false);
    return (
        <nav data-theme={theme} className="relative z-30">
            <div className="hidden lg:flex md:flex-row md:gap-10 md:justify-center font-bold text-xl text-[#f4f015] bg-none py-5">
                <h1 className="cursor-pointer">ABOUT</h1>
                <h1 className="cursor-pointer">MEMBERS</h1>
                <h1 className="cursor-pointer">KWANGYA</h1>
                <div onClick={changeTheme} className="absolute right-5 bg-[#4b3621] w-[100px] h-[50px] px-5 py-3 rounded-full cursor-pointer overflow-hidden select-none">
                    <div className={`absolute inset-0 bg-black transition-transform duration-500 ease-in-out origin-left ${theme === "dark" ? "scale-x-100" : "scale-x-0"}`}/>
                    <img className="relative z-10 w-full h-full object-contain"src={theme === "light" ? "/icons/rich-man-icon.png" : "/icons/dirty-work-icon.png"} alt="Theme Toggle"/>
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
            className="fixed flex flex-col gap-5 lg:hidden top-0 left-0 w-7/12 md:w-5/12 pl-3 pt-14 text-start bg-black h-screen font-bold text-xl text-[#f4f015]">
                <h1 className="cursor-pointer">ABOUT</h1>
                <h1 className="cursor-pointer">MEMBERS</h1>
                <h1 className="cursor-pointer">KWANGYA</h1>
            </motion.div>
        </nav>
    )
}

export default Navbar;