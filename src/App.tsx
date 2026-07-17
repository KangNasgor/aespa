import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";
import { useEffect, useRef, useState } from "react";
import { Discography } from './data/discography';

const headingText = "æspa";

interface Members {
  id : number,
  name : string,
  image : string,
  description : string,
  color : string,
  gallery : Array<string>,
  instagram : string,
}

const members : Members[] = [
  {
    id: 1,
    name: 'KARINA',
    image: 'members/Karina.webp',
    description : 'Karina (카리나 karina) was born on April 11, 2000 in Suwon-si, South Korea. She is the leader, a dancer, rapper and visual of the group aespa and a rapper and vocalist of the unit GOT the beat.',
    color : '#0d02fe',
    gallery : ['members/Karina-richman-1.webp', 'members/Karina-dirtywork-1.webp', 'members/Karina-richman-3.webp', 'members/Karina-richman-2.webp'],
    instagram : "https://www.instagram.com/katarinabluu/",
  },
  {
    id: 2,
    name: 'GISELLE',
    image: 'members/Giselle.webp',
    description : 'Giselle (지젤 jijel) was born on October 30, 2000 in Seoul, South Korea. She is a rapper and vocalist of the group aespa and ZOO unit.',
    color : '#fc261a',
    gallery : ['members/Giselle-richman-1.webp', 'members/Giselle-richman-2.webp', 'members/Giselle-dirtywork-1.webp', 'members/Giselle-dirtywork-2.webp'],
    instagram : "http://instagram.com/aerichandesu/"
  },
  {
    id: 3,
    name: 'WINTER',
    image: 'members/Winter.webp',
    description : 'Winter (윈터 winteo) was born on January 1, 2001 in Busan, South Korea. She is a vocalist, dancer, and visual of the girl group aespa and also a vocalist and the maknae of the unit GOT the beat.',
    color : '#01fe00',
    gallery : ['members/Winter-richman-1.webp', 'members/Winter-dirtywork-1.webp', 'members/Winter-richman-3.webp', 'members/Winter-richman-2.webp'],
    instagram : "https://www.instagram.com/imwinter/"
  },
  {
    id: 4,
    name: 'NINGNING',
    image: 'members/Ningning.webp',
    description : 'Ningning (닝닝 ningning) was born on October 23, 2002 in Heilongjiang, China. She is a vocalist and the maknae of the group aespa.',
    color : '#fcff00',
    gallery : ['members/Ningning-richman-1.webp', 'members/Ningning-dirtywork-1.webp', 'members/Ningning-dirtywork-2.webp', 'members/Ningning-dirtywork-3.webp'],
    instagram : "https://www.instagram.com/imnotningning/"
  }
]

function App() {
  const { theme } = useTheme();

  const [imageClicked, setImageClicked] = useState<boolean>(false); // image is on the about section

  const [currentMemberIndex, setCurrentMemberIndex] = useState<number | null>(null); // keeping track (index) on members section

  useEffect(() => {
    localStorage.setItem('theme', theme); // Everytime the user changes theme, update it on localStorage
  }, [theme]);

  const sectionsRef = useRef<Element[]>([]); // Reference for section

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll("section")); // all sections are stored in form of array into sectionsRef
  }, [])

  const scrollToNextSection = () => {
    const sections = sectionsRef.current;
    const currentSection = sections.find((section) => {
      const { top, bottom } = section.getBoundingClientRect();
      
      return top <= 0 && bottom > 0;
    });

    if (currentSection) {
      const nextSection = sections[sections.indexOf(currentSection) + 1];
      nextSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main data-theme={theme} className="bg-[linear-gradient(to_bottom,rgba(149,255,0,0.7)_0%,rgba(204,255,0,0.75)_20%,rgba(214,255,48,0.8)_40%,rgba(177,222,0,0.8)_60%,rgba(130,217,0,0.8)_80%,rgba(204,255,0,0.8)_100%)]">
      <Navbar links={[
        { label: 'ABOUT', id: 'about-section' },
        { label: 'ACHIEVEMENTS', id: 'achievement-section' },
        { label: 'MEMBER', id: 'member-section' },
      ]} />

      {/** Hero Section */}
      <motion.section id="hero-section" className="bg-black overflow-hidden w-full h-screen relative"
        initial={{
          filter: "blur(10px)",
        }}
        whileInView={{
          filter: "blur(0px)",
        }}
        transition={{
          filter: {
            duration: 1,
          }
        }}>
        <div className="relative h-[100vh] flex flex-col w-full px-3 pb-3">
          <motion.div initial={{ y : "200%" }} animate={{ y : 0 }} transition={{ type : "tween", delay: 1 }} viewport={{ once: true }} className="max-w-full w-full mt-auto flex flex-row items-end">
              <div className="flex flex-1 justify-start">
                <div className="w-[400px] text-start">
                  <a className="text-[#CCFF00] dark:text-white font-neue-montreal tracking-wide">aespa, <br /> a korean girl group from <br /> SM Entertainment that consists of <br />Karina, Giselle, Winter, and Ningning.<br/> They debuted on 17 November 2020 with Black Mamba.</a>
                </div>
              </div>
              <div className="justify-center items-end flex flex-1">
              </div>
            <div className="justify-end flex flex-1 col-3">
              <div onClick={scrollToNextSection} className="bg-[#CCFF00]/30 dark:bg-white/30 backdrop-filter backdrop-blur-2xl rounded-2xl px-5 py-1">
                <a className="text-[#CCFF00] dark:text-white cursor-pointer font-neue-montreal tracking-wide" >See more</a>
              </div>
            </div>
          </motion.div>
          {/** Background Video */}
          <video autoPlay muted loop playsInline className="absolute scale-120 inset-0 object-center object-cover w-full h-full -z-50 opacity-60 select-none">
            <source src="video/Lemonade.webm"></source>
          </video>
        </div>
      </motion.section>
      
      {/** About Section */}
      <section id="about-section" className="pt-[100px] h-[130vh]">
          <div className="flex items-center justify-center px-2 md:px-10">
            <div className="w-full lg:w-7/12 mb-10">
              <AnimatePresence>
                {imageClicked && (
                  <motion.div
                    initial={{ opacity : 0 }}
                    animate={{ opacity : 1 }}
                    exit={{ opacity : 0, transition : { duration : 0.7 } }}
                    onClick={() => setImageClicked(false)}
                    viewport={{ once : true }}
                    className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm">
                      <div className="absolute top-5 right-5">
                        <div className="w-6 h-0.5 transform translate-y-6/12 rotate-45 bg-white"></div>
                        <div className="w-6 h-0.5 transform -translate-y-6/12 -rotate-45 bg-white"></div>
                      </div>
                    <motion.img layoutId='aespa-image' src={theme === "light" ? "images/lemonade-3.webp" : "images/whiplash-1.webp"} onClick={() => setImageClicked((prev) => !prev)}
                    className="fixed left-6/12 w-full md:w-9/12 top-6/12 -translate-y-6/12 transform -translate-x-6/12 z-50"/>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div layoutId="aespa-image" initial={{ clipPath: "inset(0% 0% 0% 100%)" }} whileInView={{ clipPath : "inset(0% 0% 0% 0%)" }} transition={{ clipPath: { type: "tween", ease: [0.1, 0.3, 0.87, -0.16], duration: 0.5, delay : 0.1 }, }} className="overflow-hidden">
                <motion.img
                transition={{ scale : { duration : 0.5, delay : 0.3 }, filter : { duration : 0.5, delay : 0.1 } }}
                initial={{ scale : 1.2, filter : "blur(10px)"}}
                whileInView={{ scale : 1, filter : "blur(0px)" }}
                src={theme === "light" ? "images/lemonade-3.webp" : "images/whiplash-1.webp"}
                onClick={() => setImageClicked((prev) => !prev)}
                className="block cursor-pointer relative w-full h-full"/>
              </motion.div>
            </div>
        </div>
        <div className="items-center px-2 md:px-10 overflow-hidden">
          <div className="lg:w-7/12 text-start mx-auto">
            <motion.h1
              initial={{ x: "-30%", opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.6 }}
              className="text-[#CCFF00] dark:text-white font-neue-montreal font-semibold tracking-wide hidden lg:block text-xl md:text-4xl/15">The <span className="text-[#F6FF00]">æ</span> concept that changed everything</motion.h1>
            <motion.div className="px-3 md:px-0" initial={{ opacity: 0, x: "-30%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", duration: 0.6, delay: 0.1 }}>
              <p className="text-[#CCFF00] dark:text-white/85 text-sm md:text-lg font-neue-montreal">
                <span className="text-[#F6FF00]">{headingText}</span> is a pioneering 4th generation kpop girl group under SM Entertainment.
                The group name is a combination of <span className="text-[#F6FF00]">"ae"</span> (Avatar X Experience) and "aspect",
                symbolizing the concept of a new experience by meeting a new world through another version of yourself.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/** Members Section */}
      <section className="min-h-screen py-20" id="member-section">
            <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ type: 'tween', duration : 0.5 }} className="font-bold text-5xl font-creato-display text-[#CCFF00] mb-24 text-center">The <span className="text-[#F6FF00]">Members</span></motion.h1>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10 w-9/12 mx-auto">
                <AnimatePresence>
                    {currentMemberIndex && (
                      <motion.div
                        initial={{ opacity : 0 }}
                        animate={{ opacity : 1 }}
                        exit={{ opacity : 0, transition : { duration : 0.5 } }}
                        onClick={() => setCurrentMemberIndex(null)}
                        key={currentMemberIndex}
                        className="fixed inset-0 z-40 bg-black/70">
                      </motion.div>
                    )}
                </AnimatePresence>
              {members.map((member, index) => (
                <motion.div key={member.name} className="w-full relative" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ type: "spring", delay : 0.4 + index/10 * 2 }}>
                  <motion.div layoutId={member.name} className={`group cursor-pointer relative h-full w-full ${member.id % 2 === 0 ? 'md:translate-y-10' : 'md:translate-y-0'}`} onClick={() => setCurrentMemberIndex(member.id)}>
                    <motion.span layout className={`absolute -top-15 -left-5  text-8xl font-black dark:text-white opacity-10 select-none ${currentMemberIndex === member.id ? 'hidden' : 'block'}`}>
                      0{index + 1}
                    </motion.span>
                    <div className={`relative flex justify-center rounded-lg overflow-hidden after:absolute after:bg-linear-to-t after:from-black after:to-transparent after:w-full after:h-6/12 ${currentMemberIndex === member.id ? 'after:opacity-80 after:z-30' : 'after:opacity-0 group-hover:after:opacity-75'} after:bottom-0 after:left-0 after:transition after:overflow-hidden`} >
                      <motion.img layoutId={member.image} src={member.image} className={`rounded-lg`} alt={member.name} />
                      <div className={`absolute bottom-5 left-5 z-40 text-white ${currentMemberIndex === member.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        <motion.h1 layout className="font-semibold text-2xl">{member.name}</motion.h1>
                      </div>
                    </div>
                  </motion.div>
                  <AnimatePresence>
                    {currentMemberIndex === member.id && (
                        <motion.div layoutId={member.name} className="fixed left-6/12 w-11/12 lg:w-8/12 h-[450px] top-1/2 -translate-y-1/2 transform -translate-x-6/12 overflow-hidden z-50">
                          <div style={{ backgroundColor: currentMemberIndex === member.id ? member.color + '80' : 'transparent' }} className={`relative flex justify-between rounded-lg overflow-hidden after:absolute after:bg-linear-to-t after:from-black after:to-transparent after:w-full after:h-6/12 ${currentMemberIndex === member.id ? 'after:opacity-80 after:z-30' : 'after:opacity-0 group-hover:after:opacity-75'} after:bottom-0 after:left-0 after:transition after:overflow-hidden`} >
                            <motion.img layoutId={member.image} src={member.image} className="w-75 rounded-lg" alt={member.name} />
                            <div className="grid grid-cols-3 gap-2 h-[400px] my-auto px-3">
                              {member.gallery.map((img, index) => (
                                <div key={index} className={`overflow-hidden ${index === 0 ? 'row-span-2' : index === member.gallery.length - 1 ? 'col-span-2' :'row-span-1'}`}>
                                  <img src={img} className="object-cover w-full h-full"/>
                                </div>
                              ))}
                            </div>
                            <div className={`absolute bottom-5 md:left-5 px-3 z-40 text-white ${currentMemberIndex === member.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                              <motion.h1 layout className="font-semibold text-2xl">{member.name}</motion.h1>
                              <AnimatePresence>
                                <motion.h3
                                  className={`${currentMemberIndex === member.id ? 'block' : 'hidden'} font-neue-montreal`}
                                  layout
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 0.8 }}
                                  exit={{ opacity: 0, transition : { duration : 0.5 }}}
                                >{member.description}</motion.h3>
                              </AnimatePresence>
                            </div>
                          </div>
                        </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
      </section>
      <section className="min-h-screen py-20 px-5 md:px-10 relative overflow-hidden" id="debut-section">
        <div className="w-full flex flex-row my-10 items-start gap-10">
          <div className="w-6/12 flex flex-col items-end gap-10">
            <div className="relative w-full h-[350px] group">
              <img src="/images/blackmamba-2.webp" className="w-full h-full object-cover" />
              <div className="overflow-hidden px-5 flex items-center absolute bottom-0 h-0 group-hover:h-[350px] content-[''] bg-linear-to-t from-black/80 via-black/80 to-black/75 w-full left-0 transform transition-all">
                <p className="text-white font-neue-montreal text-start select-none">Upon its release, the music video for "Black Mamba" shattered records for K-pop debut visibility. Within just 24 hours, it garnered 21.4 million views, setting a new benchmark for the most-viewed debut music video by a K-pop group in a single day. Furthermore, it became the fastest K-pop debut music video to reach 100 million views, achieving the milestone in only 51 days and 12 hours—surpassing the previous record of 57 days.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-6/12">
            <h1 className="text-[#CCFF00] text-start font-bold text-3xl md:text-4xl">THE DEBUT : <span className="text-[#F6FF00]">BLACK MAMBA</span></h1>
            <p className="text-[#CCFF00] text-start font-neue-montreal text-2xl mt-8"> Released on November 17, 2020. <span className="text-[#F6FF00]">Black Mamba</span> is the debut and first digital single by South Korean girl group <span className="text-[#F6FF00]">aespa</span>. The music video reached <span className="text-[#F6FF00]">100 million views</span> on January 8, 2021 and <span className="text-[#F6FF00]">200 million views</span> on January 15, 2022. It was featured on their second mini album Girls as a digital bonus track on July 8, 2022.</p>
          </div>
        </div>
      </section>
      <section className="min-h-screen h-fit relative pt-0.5 px-48" id="discography-section">
        <h1 className="font-neue-montreal text-[#F6FF00] text-5xl text-start">Discography</h1>
        <div className="flex flex-col mt-18">
          <div className="bg-[#CCFF00] absolute w-[5px] h-full -translate-x-6/12 left-6/12 rounded-4xl opacity-50"></div> {/** Timeline Bar */}
          {
            Discography.map(item => (
              <div className="w-full ml-auto relative mt-10 flex flex-row items-center justify-between">
                <img src={item.img} className="w-5/12 bg-white w-[500px] h-[300px] object-cover bg-center" />
                <div className="absolute rounded-full w-[20px] h-[20px] bg-[#f4f015] left-6/12 -translate-x-6/12"></div>
                <div className="w-5/12 h-fit flex flex-col gap-5">
                  <h1 className="text-[#CCFF00] md:text-4xl font-neue-montreal">{item.release_date}</h1>
                  <h1 className="text-[#f4f015] font-semibold tracking-wider md:text-3xl font-neue-montreal">{item.title}</h1>
                </div>
              </div>
            ))
          }
              </div>
      </section>
      <section className="min-h-[100vh]"></section>
    </main>
  );
}

export default App;
