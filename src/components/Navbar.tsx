import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({icon} : {icon : string}){
    const { theme, changeTheme } = useTheme();
    return(
        <div className="w-full flex flex-row gap-5 justify-center font-bold text-xl text-[#f4f015]  bg-none py-5">
            <img src={icon} className="w-18 absolute left-5 top-5"/>
            <h1 className="cursor-pointer">ABOUT</h1>
            <h1 className="cursor-pointer">MEMBERS</h1>
            <h1 className="cursor-pointer">KWANGYA</h1>
            <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} className="cursor-pointer text-2xl absolute right-5 top-5" onClick={changeTheme}/>
        </div>
    )
}

export default Navbar;