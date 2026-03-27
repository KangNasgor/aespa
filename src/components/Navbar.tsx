import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

function Navbar({ icon }: { icon: string }) {
    const { theme, changeTheme } = useTheme();
    return (
        <div data-theme={theme} className="w-full flex flex-row gap-5 justify-center font-bold text-xl text-[#f4f015] bg-none py-5">
            <img src={icon} className="w-18 absolute left-5 top-5" />
            <h1 className="cursor-pointer">ABOUT</h1>
            <h1 className="cursor-pointer">MEMBERS</h1>
            <h1 className="cursor-pointer">KWANGYA</h1>
            <div className="bg-white w-24 px-3 py-2 flex rounded-full absolute right-5 top-5 text-2xl text-[#070fc1] dark:text-black cursor-pointer justify-start dark:justify-end" onClick={changeTheme}>
                <motion.div layout>
                    <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} />
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar;