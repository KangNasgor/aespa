import Paragraph from "../../components/AnimatedParagraph";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const title = 'GISELLE (内永 枝利)'
const description = 'Uchinaga Aeri (Japanese: 内永 枝利; born October 30, 2000), known professionally as Giselle (지젤), is a Japanese-Korean rapper and singer based in South Korea. She is a member of the South Korean girl group Aespa, formed by SM Entertainment in November 2020.'
const biography = "— Uchinaga Aeri, known professionally as Giselle, is a Japanese-Korean rapper and singer born on October 30, 2000. Discovered through SM Entertainment's open auditions, she trained for less than a year before making her official debut on November 17, 2020, as the main rapper and sub-vocalist of aespa. Fluent in English, Japanese, and Korean, Giselle has actively contributed to lyrics for various tracks, including her solo single 'Dopamine', while also serving as a brand ambassador for luxury houses like Loewe."
const biographyClassName = "text-black font-bold font-neue-montreal text-3xl w-10/12"
const profile = [
    'Full Name : Uchinaga Aeri (우치나가 애리)',
    'Stage Name : GISELLE',
    'Birthplace : Gangnam-gu, Seoul, South Korea',
    'Birthday : 2000-10-30 (Age 25)',
    'Education : Sacred Heart International School',
    'Height : 166 CM',
    'Weight : 45 KG',
    'Blood Type : O',
    'Zodiac : Scorpio',
    'MBTI : ENFP',
]

export default function Giselle(){

    return (
        <main className="overflow-hidden">
            {/** Hero Section */}
            <section id="hero-section" className="min-h-screen relative flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/members/Giselle-lemonade-3.jpg')] bg-cover bg-center bg-fixed">
                <div className="flex flex-col items-center text-center relative text-[#CCFF00] font-neue-montreal text-[70px] lg:text-[100px] font-bold">
                    <h1>{title}</h1>
                </div>
                <p className="text-[#CCFF00] text-center font-neue-montreal text-[10px] lg:text-[18px] absolute bottom-10 lg:font-[800] lg:w-8/12">{description}</p>
            </section>

            {/** Biography Section */}
            <div className="bg-[#B9E01B]/95">
            <section id="biography-section" className="min-h-screen pt-[50px] px-[20px] lg:p-0 lg:flex lg:justify-center items-center">
                <Paragraph text={biography} className={biographyClassName}/>
            </section>

            {/** Profile Section */}
            <section id="profile-section" className="min-h-screen flex flex-col-reverse md:flex-row justify-between items-center gap-10 pt-[100px] px-[10px] lg:pt-0 lg:px-[200px]">
                <div className="flex flex-col gap-10 lg:gap-20 justify-end">
                    <motion.h1 initial={{ x : '-30%', opacity : 0 }} whileInView={{ x : 0, opacity : 1 }} transition={{ duration : 0.3, type : 'tween' }} className="font-semibold font-neue-montreal text-5xl">Profile</motion.h1>
                    <ul>
                        {
                            profile.map((item, index) => (
                                <motion.li initial={{ x : '-10%', opacity : 0 }} whileInView={{ x : 0, opacity : 1 }} transition={{ delay : 0.01 + index/10, type : 'tween' }} className="font-neue-montreal font-bold text-xl" key={index}>{item}</motion.li>
                            ))
                        }
                    </ul>
                </div>
                <motion.div initial={{ clipPath: "inset(0% 0% 0% 100%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }}>
                        <motion.img 
                            transition={{ scale: { duration: 0.5, delay: 0.3 }, filter: { duration: 0.5, delay: 0.1 } }}
                            initial={{ scale: 1.2, filter: "blur(10px)" }}
                            whileInView={{ scale: 1, filter: "blur(0px)" }}
                            src="/members/Giselle-lemonade-4.jpg"
                            className="h-[400px] w-full lg:h-[600px] lg:w-[400px] object-cover" 
                        />
                </motion.div>
            </section>

            {/** Media Section */}
            <section id="media-section" className="min-h-[180vh] lg:min-h-[220vh] h-fit pt-[100px] pb-[50px]">
                <h1 className="text-black font-bold text-center font-neue-montreal text-[60px]">Media</h1>
                <div className="    lg:w-8/12 grid grid-cols-6 gap-1 lg:gap-5 justify-center h-[700px] mx-auto">
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full row-span-3 col-span-2 overflow-hidden">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Giselle-lemonade-7.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full col-span-4">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Giselle-lemonade-6.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full col-span-1 row-span-3">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Giselle-lemonade-2.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full col-span-3">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Giselle-lemonade-4.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full col-span-3 row-span-4">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Giselle-lemonade-1.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full col-span-2">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Giselle-lemonade-5.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full col-span-3">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Giselle-lemonade-3.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                </div>
            </section>

            {/** Solo Projects Section */}
            <section id="solo-section" className="min-h-screen h-screen flex flex-col justify-center items-center">
                    <div className="flex flex-col lg:w-6/12 gap-5 px-2">
                        <h1 className="font-neue-montreal font-bold text-[40px] text-start mb-5">Solo Projects</h1>
                        <div className="bg-[#CCFF00] flex flex-row items-center justify-start gap-3 lg:gap-10 p-[5px] lg:px-[14px] lg:py-[14px] rounded-lg lg:rounded-xl">
                            <div className="rounded-md overflow-hidden">
                                <img src="/solo/22.jpg" className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover"/>
                            </div>
                            <div className="flex flex-col font-neue-montreal font-semibold">
                                <h1 className="text-[16px] lg:text-[32px]">22 (Unreleased)</h1>
                                <p className="opacity-75">25 February 2023</p>
                                <div className="flex flex-row gap-1 mt-5">
                                    <a href="https://youtu.be/22giselle" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#CCFF00] flex flex-row items-center justify-start gap-3 lg:gap-10 p-[5px] lg:px-[14px] lg:py-[14px] rounded-xl">
                            <div className="rounded-md overflow-hidden">
                                <img src="/solo/dopamine.jpg" className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover"/>
                            </div>
                            <div className="flex flex-col font-neue-montreal font-semibold">
                                <h1 className="text-[16px] lg:text-[32px]">Dopamine (GISELLE Solo)</h1>
                                <p className="opacity-75">9 October 2024</p>
                                <div className="flex flex-row gap-1 mt-5">
                                    <a href="https://youtu.be/dopamine" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://open.spotify.com/track/dopamine" target="_blank">
                                        <FontAwesomeIcon icon={faSpotify} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://music.apple.com/us/album/dopamine-giselle-solo" target="_blank">
                                        <FontAwesomeIcon icon={faMusic} className="cursor-pointer"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#CCFF00] flex flex-row items-center justify-start gap-3 lg:gap-10 p-[5px] lg:px-[14px] lg:py-[14px] rounded-xl">
                            <div className="rounded-md overflow-hidden">
                                <img src="/solo/dopamine.jpg" className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover"/>
                            </div>
                            <div className="flex flex-col font-neue-montreal font-semibold">
                                <h1 className="text-[16px] lg:text-[32px]">TORNADO (GISELLE Solo)</h1>
                                <p className="opacity-75">9 October 2024</p>
                                <div className="flex flex-row gap-1 mt-5">
                                    <a href="https://youtu.be/dopamine" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://open.spotify.com/track/dopamine" target="_blank">
                                        <FontAwesomeIcon icon={faSpotify} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://music.apple.com/us/album/dopamine-giselle-solo" target="_blank">
                                        <FontAwesomeIcon icon={faMusic} className="cursor-pointer"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            {/** Personal Section */}
            <section id="personal-section" className="min-h-screen h-screen flex items-center">
                <div className="bg-black lg:w-11/12 h-full lg:h-[700px] mx-auto relative flex flex-col items-center justify-center">
                    <h1 className="z-20 relative text-center lg:text-start text-white font-neue-montreal text-3xl font-semibold opacity-90">"That's hot."</h1>
                    <a className="z-20 relative text-white font-neue-montreal text-3xl font-semibold opacity-90 cursor-pointer" href="https://www.instagram.com/aerichandesu/" target="_blank">- @aerichandesu</a>
                    <img src="/members/Giselle-lemonade-2.jpg" className="w-full h-full absolute inset-0 opacity-70 object-top object-cover"/>
                </div>
            </section>
            </div>
        </main>
    );
}