import { useTheme } from "../context/ThemeContext";

function Navbar() {
    const { theme, changeTheme } = useTheme();
    return (
        <div data-theme={theme} className="md:w-full hidden md:flex flex-row gap-10 justify-center font-bold text-xl text-[#f4f015]  bg-none py-5">
            <h1 className="cursor-pointer">ABOUT</h1>
            <h1 className="cursor-pointer">MEMBERS</h1>
            <h1 className="cursor-pointer">KWANGYA</h1>
            <div onClick={changeTheme} className="absolute right-5 bg-[#4b3621] w-[100px] h-[50px] px-5 py-3 rounded-full cursor-pointer overflow-hidden select-none">
                <div className={`absolute inset-0 bg-black transition-transform duration-500 ease-in-out origin-left ${theme === "dark" ? "scale-x-100" : "scale-x-0"}`}/>
                <img className="relative z-10 w-full h-full object-contain"src={theme === "light" ? "/icons/rich-man-icon.png" : "/icons/dirty-work-icon.png"} alt="Theme Toggle"/>
            </div>
        </div>
    )
}

export default Navbar;