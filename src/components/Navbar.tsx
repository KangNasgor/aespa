import { useTheme } from "../context/ThemeContext";

function Navbar() {
    const { theme, changeTheme } = useTheme();
    return (
        <div data-theme={theme} className="w-full flex flex-row gap-10 justify-center font-bold text-xl text-[#f4f015]  bg-none py-5">
            <h1 className="cursor-pointer">ABOUT</h1>
            <h1 className="cursor-pointer">MEMBERS</h1>
            <h1 className="cursor-pointer">KWANGYA</h1>
            <div onClick={changeTheme} className="absolute right-5 bg-[#4b3621] dark:bg-black w-[100px] h-[50px] px-5 py-3 rounded-full cursor-pointer">
                <img src={theme === "light" ? "/icons/rich-man-icon.png" : "/icons/dirty-work-icon.png"}/>
            </div>
        </div>
    )
}

export default Navbar;