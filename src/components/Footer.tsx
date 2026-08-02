import { useTheme } from "../context/ThemeContext";
import scrollToSection from "../functions/scrollToSection";

type FooterItem = {
    label: string,
    id: string,
}

function Footer({ links } : { links : FooterItem[] }){

    const { theme } = useTheme();

    return(
        <footer className="min-h-screen h-fit md:min-h-0 md:h-[400px] bg-black dark:bg-white px-[10px] md:pt-[20px] lg:px-[80px] pb-[20px] pt-[20px] lg:pt-[100px] text-[#CCFF00] dark:text-black">
          <div className="flex flex-col md:flex-row justify-between lg:items-center h-full">
            <div className="flex flex-col items-center md:justify-between h-full">
              <img src={theme === "light" ? "/svg/icon-light.svg" : "/svg/icon-dark.svg"} className="w-[250px] md:w-[300px] lg:w-[350px]"/>
              <p className="font-neue-montreal text-[10px] mt-[35px] md:mt-0 md:text-[12px]">© 2026 aespa (SM Entertainment). All Rights Reserved</p>
            </div>
            <div className="flex flex-col md:flex-row gap-5 lg:gap-24 font-neue-montreal mt-[40px] md:mt-0">
              <div>
                <div className="bg-[#CCFF00] dark:bg-black w-full h-[1px] opacity-50 mb-5"></div>
                <h1 className="opacity-80 text-[18px]">Navigation</h1>
                <div className="mt-2 md:mt-10">
                    {
                        links.map((item, index) => (
                            <p key={index} className="mt-1 md:mt-3 cursor-pointer" onClick={() => scrollToSection(item.id)}>{item.label}</p>
                        ))
                    }
                </div>
              </div>
              <div>
                <div className="bg-[#CCFF00] dark:bg-black w-full h-[1px] opacity-50 mb-5"></div>
                <h1 className="opacity-80 text-[18px]">Social Media</h1>
                <div className="mt-2 md:mt-10">
                  <p className="mt-1 md:mt-3">Instagram</p>
                  <p className="mt-1 md:mt-3">X</p>
                  <p className="mt-1 md:mt-3">Facebook</p>
                  <p className="mt-1 md:mt-3">Youtube</p>
                </div>
              </div>
              <div>
                <div className="bg-[#CCFF00] dark:bg-black w-full h-[1px] opacity-50 mb-5"></div>
                <h1 className="opacity-80 text-[18px]">Stream On</h1>
                <div className="mt-2 md:mt-10">
                  <p className="mt-1 md:mt-3">Spotify</p>
                  <p className="mt-1 md:mt-3">Youtube Music</p>
                  <p className="mt-1 md:mt-3">Melon</p>
                  <p className="mt-1 md:mt-3">Apple Music</p>
                </div>
              </div>
            </div>
          </div>
      </footer>
    );
}

export default Footer;