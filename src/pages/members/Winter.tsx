import Paragraph from "../../components/AnimatedParagraph";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";

const title = 'WINTER (김 민정)'
const description = 'Kim Min-jeong (Korean: 김민정; born January 1, 2001), known professionally as Winter (윈터), is a South Korean singer and dancer. She is a member of the South Korean girl group Aespa, formed by SM Entertainment in November 2020. She is also a member of the supergroup Got the Beat, which debuted in January 2022.'
const biography = "— Kim Min-jeong, known professionally as Winter, is a South Korean singer and dancer born on January 1, 2001, in Busan, South Korea. Discovered at a dance festival by SM Entertainment, she trained for four years before making her official debut on November 17, 2020, as the lead vocalist and lead dancer of the girl group aespa. In addition to aespa, Winter debuted as a member of SM's supergroup Got the Beat in January 2022 and has pursued various solo projects and OSTs, including co-writing her solo single 'Spark'."
const biographyClassName = "text-black dark:text-white font-bold font-neue-montreal text-3xl w-10/12"
const profile = [
    'Full Name : Kim Minjeong (김 민정)',
    'Stage Name : WINTER',
    'Birthplace : Busan, South Korea',
    'Birthday : 2001-01-01 (Age 25)',
    'Education : Yangsan Samsung Middle School',
    'Height : 164 CM',
    'Weight : 43 KG',
    'Blood Type : A',
    'Zodiac : Capricorn',
    'MBTI : ISFP',
]

export default function Winter(){
    const { theme } = useTheme();

    return (
        <main data-theme={theme} className="overflow-hidden">
            {/** Hero Section */}
            <section id="hero-section" className="min-h-screen relative flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/members/Winter-lemonade-2.jpg')] bg-cover bg-center bg-fixed">
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
                            src="/members/Winter-lemonade-4.jpg"
                            className="h-[400px] w-full lg:h-[600px] lg:w-[400px] object-cover" 
                        />
                </motion.div>
            </section>

            {/** Media Section */}
            <section id="media-section" className="min-h-[180vh] lg:min-h-[220vh] h-fit pt-[100px] pb-[50px]">
                <h1 className="text-black dark:text-white font-bold text-center font-neue-montreal text-[60px]">Media</h1>
                <div className="lg:w-8/12 grid grid-cols-6 gap-1 lg:gap-5 justify-center mx-auto">
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} viewport={{ once : true }} className="w-full h-full row-span-3 col-span-2 overflow-hidden">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} viewport={{ once : true }} src="/members/Winter-lemonade-6.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} viewport={{ once : true }} className="w-full h-full col-span-4 overflow-hidden">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} viewport={{ once : true }} src="/members/Winter-lemonade-3.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} viewport={{ once : true }} className="w-full h-full col-span-1 row-span-3">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} viewport={{ once : true }} src="/members/Winter-lemonade-1.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} viewport={{ once : true }} className="w-full h-full col-span-3">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} viewport={{ once : true }} src="/members/Winter-lemonade-7.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} viewport={{ once : true }} className="w-full h-full col-span-3 row-span-4">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} viewport={{ once : true }} src="/members/Winter-lemonade-4.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} viewport={{ once : true }} className="w-full h-full col-span-2 ">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} viewport={{ once : true }} src="/members/Winter-lemonade-2.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div initial={{ clipPath: "inset(0% 0% 100% 0%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} viewport={{ once : true }} className="w-full h-full col-span-3">
                        <motion.img transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }} initial={{ scale : 1.2, filter : "blur(10px)"}} whileInView={{ scale : 1, filter : "blur(0px)" }} viewport={{ once : true }} src="/members/Winter-lemonade-5.jpg" className="w-full h-full object-cover"/>
                    </motion.div>
                </div>
            </section>

            {/** Solo Projects Section */}
            <section id="solo-section" className="min-h-screen h-screen flex flex-col justify-center items-center">
                    <div className="flex flex-col lg:w-6/12 gap-5 px-2">
                        <h1 className="text-black dark:text-white font-neue-montreal font-bold text-[40px] text-start mb-5">Solo Projects</h1>
                        <div className="bg-[#8E8E8E] flex flex-row items-center justify-start gap-3 lg:gap-10 p-[5px] lg:px-[14px] lg:py-[14px] rounded-lg lg:rounded-xl">
                            <div className="rounded-md overflow-hidden">
                                <img src="/solo/lips.jpg" className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover"/>
                            </div>
                            <div className="flex flex-col font-neue-montreal font-semibold">
                                <h1 className="text-[16px] lg:text-[32px]">Lips (Unreleased)</h1>
                                <p className="opacity-75">25 February 2023</p>
                                <div className="flex flex-row gap-1 mt-5">
                                    <a href="https://youtu.be/dMb7IS2a4z0?si=TwYTshzj3Uihk09-" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#8E8E8E] flex flex-row items-center justify-start gap-3 lg:gap-10 p-[5px] lg:px-[14px] lg:py-[14px] rounded-xl">
                            <div className="rounded-md overflow-hidden">
                                <img src="/solo/spark.webp" className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover"/>
                            </div>
                            <div className="flex flex-col font-neue-montreal font-semibold">
                                <h1 className="text-[16px] lg:text-[32px]">Spark (WINTER Solo)</h1>
                                <p className="opacity-75">9 October 2024</p>
                                <div className="flex flex-row gap-1 mt-5">
                                    <a href="https://youtu.be/ZKnX1ewd1DA?si=FZ1gAFfHe42TVEnM" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://open.spotify.com/track/2xoA126GEgFhrYzRaTH7E4?si=b23f253555f442b2" target="_blank">
                                        <FontAwesomeIcon icon={faSpotify} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://music.apple.com/us/song/spark-winter-solo/1772223480" target="_blank">
                                        <FontAwesomeIcon icon={faMusic} className="cursor-pointer"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#8E8E8E] flex flex-row items-center justify-start gap-3 lg:gap-10 p-[5px] lg:px-[14px] lg:py-[14px] rounded-xl">
                            <div className="rounded-md overflow-hidden">
                                <img src="/solo/blue.webp" className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover"/>
                            </div>
                            <div className="flex flex-col font-neue-montreal font-semibold">
                                <h1 className="text-[16px] lg:text-[32px]">BLUE (WINTER Solo)</h1>
                                <p className="opacity-75">17 November 2025</p>
                                <div className="flex flex-row gap-1 mt-5">
                                    <a href="https://youtu.be/D5MtRNQBVbk?si=zIPiQvqUSDL5Mlc-" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://open.spotify.com/track/58awxGcVt7bQ9bahX7yWxt?si=2e9d7fc121304918" target="_blank">
                                        <FontAwesomeIcon icon={faSpotify} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://music.apple.com/us/song/blue-winter-solo/1850395173o" target="_blank">
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
                    <h1 className="z-20 relative text-center lg:text-start text-white font-neue-montreal text-3xl font-semibold opacity-90">"I don't regret anything, because everything is an experience."</h1>
                    <a className="z-20 relative text-white font-neue-montreal text-3xl font-semibold opacity-90 cursor-pointer" href="https://www.instagram.com/imwinter/" target="_blank">- @imwinter</a>
                    <img src="/members/Winter-lemonade-5.jpg" className="w-full h-full absolute inset-0 opacity-70 object-top object-cover"/>
                </div>
            </section>
            </div>
        </main>
    );
}