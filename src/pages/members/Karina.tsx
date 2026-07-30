import Paragraph from "../../components/AnimatedParagraph";
import { motion } from "motion/react";

const title = 'KARINA (유 지민)'
const description = 'Yu Ji-min (Korean: 유지민; born April 11, 2000), known professionally as Karina (카리나), is a South Korean singer, rapper and dancer. She is a member and leader of the South Korean girl group Aespa, formed by SM Entertainment in November 2020. She is also a member of the supergroup Got the Beat, which debuted in January 2022.'
const biography = "— Yu Ji-min, known professionally as Karina, is a South Korean singer, dancer, and rapper born on April 11, 2000, in Suwon, South Korea. Discovered via social media by SM Entertainment, she trained for four years—notably appearing in SHINee Taemin's 'Want' music video—before making her official debut on November 17, 2020, as the leader, main dancer, and center of the girl group aespa. In addition to aespa, Karina debuted as a member of SM's supergroup Got the Beat in January 2022 and has pursued various solo projects, including co-writing her chart-topping solo single 'UP'. Recognized for her performance versatility and strong visual impact, she has also established a prominent presence as a global ambassador for brands such as Prada and Converse."
const biographyClassName = "text-black font-bold font-neue-montreal text-3xl w-10/12"
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
    return (
        <main>
            {/** Hero Section */}
            <section className="min-h-screen relative flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/members/Karina-lemonade-1.jpg')] bg-cover bg-center bg-fixed">
                <div className="flex flex-col items-center text-center relative text-[#CCFF00] font-neue-montreal text-[100px] font-bold">
                    <h1>{title}</h1>
                </div>
                <p className="text-[#CCFF00] text-center font-neue-montreal text-[18px] absolute bottom-10 font-[800] w-8/12">{description}</p>
            </section>

            {/** Biography Section */}
            <div className="bg-[#B9E01B]">
            <section className="min-h-screen flex justify-center items-center">
                <Paragraph text={biography} className={biographyClassName}/>
            </section>

            {/** Profile Section */}
            <section className="min-h-screen flex flex-row justify-between items-center gap-10 px-[200px]">
                <div className="flex flex-col gap-20 justify-end">
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
                            src="/members/Karina-lemonade-2.jpg"
                            className="h-[600px] w-[400px] object-cover" 
                        />
                </motion.div>
            </section>
            </div>
        </main>
    );
}