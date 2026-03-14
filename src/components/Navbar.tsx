import { useContext, useState} from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar({icon} : {icon : string}){
    const {theme, changeTheme} = useTheme();
    return(
        <div className="w-full flex flex-row gap-5 justify-center font-bold text-xl text-[#f4f015]  bg-none py-5">
            <img src={icon} className="w-18 absolute left-5 top-5"/>
            <h1 className="cursor-pointer">ABOUT</h1>
            <h1 className="cursor-pointer">MEMBERS</h1>
            <h1 className="cursor-pointer">KWANGYA</h1>
            <h1 className="cursor-pointer absolute right-5 top-5" onClick={changeTheme}>{theme === "dark" ? "Dirty Work" : "Richman"}</h1>
        </div>
    )
}

export default Navbar;