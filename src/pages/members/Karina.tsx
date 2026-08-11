import Paragraph from "../../components/AnimatedParagraph";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";

const title = 'KARINA (유 지민)'
const description = 'Yu Ji-min (Korean: 유지민; born April 11, 2000), known professionally as Karina (카리나), is a South Korean singer, rapper and dancer. She is a member and leader of the South Korean girl group Aespa, formed by SM Entertainment in November 2020. She is also a member of the supergroup Got the Beat, which debuted in January 2022.'
const biography = "— Yu Ji-min, known professionally as Karina, is a South Korean singer, dancer, and rapper born on April 11, 2000, in Suwon, South Korea. Discovered via social media by SM Entertainment, she trained for four years—notably appearing in SHINee Taemin's 'Want' music video—before making her official debut on November 17, 2020, as the leader, main dancer, and center of the girl group aespa. In addition to aespa, Karina debuted as a member of SM's supergroup Got the Beat in January 2022 and has pursued various solo projects, including co-writing her chart-topping solo single 'UP'. Recognized for her performance versatility and strong visual impact, she has also established a prominent presence as a global ambassador for brands such as Prada and Converse."
const biographyClassName = "text-black dark:text-white font-bold font-neue-montreal text-3xl w-10/12"
const profile = [
    'Full Name : Yoo Jimin (유 지민)',
    'Stage Name : KARINA',
    'Birthplace : Paldal-gu, Gyeonggi-do, South Korea',
    'Birthday : 2000-04-11 (Age 26)',
    'Education : Hansol High School',
    'Height : 168 CM',
    'Weight : 45 KG',
    'Blood Type : B',
    'Zodiac : Aries',
    'MBTI : ENFP',
]

export default function Karina(){
    const { theme } = useTheme();

    return (
        <main data-theme={theme} className="overflow-hidden">
            {/** Hero Section */}
            <section id="hero-section" className="min-h-screen relative flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/members/Karina-lemonade-1.jpg')] bg-cover bg-center bg-fixed">
                <div className="flex flex-col items-center text-center relative text-[#CCFF00] dark:text-white font-neue-montreal text-[70px] lg:text-[100px] font-bold">
                    <h1>{title}</h1>
                </div>
                <p className="text-[#CCFF00] dark:text-white text-center font-neue-montreal text-[10px] lg:text-[18px] absolute bottom-10 lg:font-[800] lg:w-8/12">{description}</p>
            </section>

            {/** Biography Section */}
            <div className="bg-[#B9E01B]/95 dark:bg-[#565656]">
            <section id="biography-section" className="min-h-screen pt-[50px] px-[20px] lg:p-0 lg:flex lg:justify-center items-center">
                <Paragraph text={biography} className={biographyClassName}/>
            </section>

            {/** Profile Section */}
            <section id="profile-section" className="min-h-screen flex flex-col-reverse md:flex-row justify-between items-center gap-10 pt-[100px] px-[10px] lg:pt-0 lg:px-[200px]">
                <div className="flex flex-col gap-10 lg:gap-20 justify-end">
                    <motion.h1 initial={{ x : '-30%', opacity : 0 }} whileInView={{ x : 0, opacity : 1 }} transition={{ duration : 0.3, type : 'tween' }} className="text-black dark:text-white font-semibold font-neue-montreal text-5xl">Profile</motion.h1>
                    <ul>
                        {
                            profile.map((item, index) => (
                                <motion.li initial={{ x : '-10%', opacity : 0 }} whileInView={{ x : 0, opacity : 1 }} transition={{ delay : 0.01 + index/10, type : 'tween' }} className="font-neue-montreal text-black dark:text-white font-bold text-xl" key={index}>{item}</motion.li>
                            ))
                        }
                    </ul>
                </div>
                <motion.div initial={{ clipPath: "inset(0% 0% 0% 100%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }}>
                        <motion.img 
                            transition={{ scale: { duration: 0.5, delay: 0.3 }, filter: { duration: 0.5, delay: 0.1 } }}
                            initial={{ scale: 1.2, filter: "blur(10px)" }}
                            whileInView={{ scale: 1, filter: "blur(0px)" }}
                            src="/members/Karina-lemonade-4.jpg"
                            className="h-[400px] w-full lg:h-[600px] lg:w-[400px] object-cover" 
                        />
                </motion.div>
            </section>

            {/** Media Section */}
            <section id="media-section" className="min-h-[180vh] lg:min-h-[220vh] h-fit pt-[100px] pb-[50px]">
                <h1 className="text-black dark:text-white font-bold text-center font-neue-montreal text-[60px]">Media</h1>
                <div className="    lg:w-8/12 grid grid-cols-6 gap-1 lg:gap-5 justify-center h-[700px] mx-auto">
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full row-span-3 col-span-2 overflow-hidden">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Karina-lemonade-4.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full col-span-4">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Karina-lemonade-7.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full col-span-1 row-span-3">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Karina-lemonade-2.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full col-span-3">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Karina-lemonade-6.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full col-span-3 row-span-4">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Karina-lemonade-1.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full col-span-2">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Karina-lemonade-5.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="w-full h-full col-span-3">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} src="/members/Karina-lemonade-3.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                </div>
            </section>

            {/** Solo Projects Section */}
            <section id="solo-section" className="min-h-screen h-screen flex flex-col justify-center items-center">
                    <div className="flex flex-col lg:w-6/12 gap-5 px-2">
                        <h1 className="text-black dark:text-white font-neue-montreal font-bold text-[40px] text-start mb-5">Solo Projects</h1>
                        <div className="bg-[#CCFF00] dark:bg-[#8E8E8E] flex flex-row items-center justify-start gap-3 lg:gap-10 p-[5px] lg:px-[14px] lg:py-[14px] rounded-lg lg:rounded-xl">
                            <div className="rounded-md overflow-hidden">
                                <img src="/solo/menagerie.jpg" className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover"/>
                            </div>
                            <div className="flex flex-col font-neue-montreal font-semibold">
                                <h1 className="text-[16px] lg:text-[32px]">Menagerie (Unreleased)</h1>
                                <p className="opacity-75">25 February 2023</p>
                                <div className="flex flex-row gap-1 mt-5">
                                    <a href="https://youtu.be/4xrvKjVZIeA?si=SsZmzxwmg2HHUnKM" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#CCFF00] dark:bg-[#8E8E8E] flex flex-row items-center justify-start gap-3 lg:gap-10 p-[5px] lg:px-[14px] lg:py-[14px] rounded-xl">
                            <div className="rounded-md overflow-hidden">
                                <img src="/solo/up.jpg" className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover"/>
                            </div>
                            <div className="flex flex-col font-neue-montreal font-semibold">
                                <h1 className="text-[16px] lg:text-[32px] ">UP (KARINA Solo)</h1>
                                <p className="opacity-75">9 October 2024</p>
                                <div className="flex flex-row gap-1 mt-5">
                                    <a href="https://youtu.be/acZ7A5w_kSE?si=IXD5hvv4xm7c5JdO" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://open.spotify.com/track/5sjnkOfTLCLNfkkchI2re2?si=f35ca4dd425c4272" target="_blank">
                                        <FontAwesomeIcon icon={faSpotify} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://music.apple.com/id/song/up-karina-solo/1772223475?l=id" target="_blank">
                                        <FontAwesomeIcon icon={faMusic} className="cursor-pointer"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#CCFF00] dark:bg-[#8E8E8E] flex flex-row items-center justify-start gap-3 lg:gap-10 p-[5px] lg:px-[14px] lg:py-[14px] rounded-xl">
                            <div className="rounded-md overflow-hidden">
                                <img src="/solo/good-stuff.jpg" className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover"/>
                            </div>
                            <div className="flex flex-col font-neue-montreal font-semibold">
                                <h1 className="text-[16px] lg:text-[32px]">GOOD STUFF (KARINA Solo)</h1>
                                <p className="opacity-75">17 November 2025</p>
                                <div className="flex flex-row gap-1 mt-5">
                                    <a href="https://youtu.be/hfO7veqkHns?si=52EZFd6UBh4i6TLC" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://open.spotify.com/track/19iJj3pCMwGxrA6pltPat3?si=d53443422fd54789" target="_blank">
                                        <FontAwesomeIcon icon={faSpotify} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://music.apple.com/us/song/good-stuff-karina-solo/1850395177" target="_blank">
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
                    <h1 className="z-20 relative text-center lg:text-start text-white font-neue-montreal text-3xl font-semibold opacity-90">"I'm already a rich man because I trust and love myself."</h1>
                    <a className="z-20 relative text-white font-neue-montreal text-3xl font-semibold opacity-90 cursor-pointer" href="https://www.instagram.com/katarinabluu/" target="_blank">- @katarinabluu</a>
                    <img src="/members/Karina-lemonade-2.jpg" className="w-full h-full absolute inset-0 opacity-70 object-top object-cover"/>
                </div>
            </section>
            </div>
        </main>
    );
}