import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";
import { useEffect, useState } from "react";

const headingText = "æspa";

interface Members {
  id : number,
  name : string,
  image : string,
  description : string,
  color : string,
}

const members : Members[] = [
  {
    id: 1,
    name: 'KARINA',
    image: 'members/Karina.webp',
    description : 'Karina (카리나 karina) was born on April 11, 2000 in Suwon-si, South Korea. She is the leader, a dancer, rapper and visual of the group aespa and a rapper and vocalist of the unit GOT the beat.',
    color : '#0d02fe'
  },
  {
    id: 2,
    name: 'GISELLE',
    image: 'members/Giselle.webp',
    description : 'Giselle (지젤 jijel) was born on October 30, 2000 in Seoul, South Korea. She is a rapper and vocalist of the group aespa and ZOO unit.',
    color : '#fc261a'
  },
  {
    id: 3,
    name: 'WINTER',
    image: 'members/Winter.webp',
    description : 'Winter (윈터 winteo) was born on January 1, 2001 in Busan, South Korea. She is a vocalist, dancer and visual of the girl group aespa and a vocalist and the maknae of the unit GOT the beat.',
    color : '#01fe00'
  },
  {
    id: 4,
    name: 'NINGNING',
    image: 'members/Ningning.webp',
    description : 'Ningning (닝닝 ningning) was born on October 23, 2002 in Heilongjiang, China. She is a vocalist and the maknae of the group aespa.',
    color : '#fcff00'
  }
]

function App() {
  const { theme } = useTheme();
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const icon = theme === "dark" ? "images/aespa-dirtywork-icon.png" : "images/aespa-richman-icon.png";
  const [imageClicked, setImageClicked] = useState<boolean>(false);
  const [currentMemberIndex, setCurrentMemberIndex] = useState<number | null>(null);

  return (
    <>
      <motion.section id="hero-section" data-theme={theme} className="bg-[#070fc1] dark:bg-black w-full h-screen relative"
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
        <Navbar icon={icon} />
        <div className="flex justify-center items-start select-none">
          <motion.img src="images/aespa-dirtywork.png" className="absolute bottom-0 w-8/12 mask-b-from-50%" initial={{
            opacity: 0,
            scale: 1.1,
            y: 50,
            filter: "blur(10px)",
          }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              opacity: {
                duration: 1.2
              },
              scale: {
                duration: 0.3,
                delay: 0.5,
              },
              y: {
                duration: 0.5,
              },
              filter: {
                duration: 0.5
              }
            }} />
          <h1 className="text-[#f4f015] dark:text-white absolute bottom-32 text-9xl font-bold z-10">{headingText}</h1>
          <div className="absolute bottom-16 text-[#f4f015] dark:text-white text-3xl font-bold z-10 flex flex-row gap-10">
            {members.map(member => (
              <span key={member.name}>{member.name}</span>
            ))}
          </div>
        </div>
      </motion.section>
      <section data-theme={theme} className="bg-[#070fc1] dark:bg-black min-h-screen flex items-center">
        <div className="flex flex-row justify-around items-center gap-5">
          <div className="w-5/12 flex flex-col gap-20">
            <h1 className="text-[#f4f015] dark:text-white font-bold text-5xl">The æ concept that changed everything</h1>
            <div>
              <p className="text-[#f4f015] dark:text-white font-bold text-2xl">
                {headingText} is a pioneering 4th generation kpop girl group under SM Entertainment.
                The group name is a combination of "ae" (Avatar X Experience) and "aspect",
                symbolizing the concept of a new experience by meeting a new world through another version of yourself.
              </p>
            </div>
          </div>
          <div className="w-5/12">
          <AnimatePresence>
            {imageClicked && (
              <motion.div
                initial={{ opacity : 0 }}
                animate={{ opacity : 1 }}
                exit={{ opacity : 0, transition : { duration : 0.7 } }}
                onClick={() => setImageClicked(false)}
                className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm">
                  <div className="absolute top-5 right-5">
                    <div className="w-6 h-0.5 transform translate-y-6/12 rotate-45 bg-white"></div>
                    <div className="w-6 h-0.5 transform -translate-y-6/12 -rotate-45 bg-white"></div>
                  </div>
              </motion.div>
            )}
          </AnimatePresence>
            <motion.img layout src={theme === "light" ? "images/aespa-richman-img-2.webp" : "images/aespa-richman-img-3.webp"} onClick={() => setImageClicked((prev) => !prev)}
              className={imageClicked === true ? "fixed left-6/12 w-7/12 top-6/12 -translate-y-6/12 transform -translate-x-6/12 z-50" : "cursor-pointer relative"}/>
          </div>
        </div>
      </section>
      <section data-theme={theme} className="min-h-screen bg-[#070fc1] dark:bg-black py-20">
            <h1 className="font-bold text-5xl text-white mb-24 text-center">The <span className="text-[#f4f015]">Members</span></h1>
            <div className="flex flex-rows gap-10 w-9/12 mx-auto">
                <AnimatePresence>
                    {currentMemberIndex && (
                      <motion.div
                        initial={{ opacity : 0 }}
                        animate={{ opacity : 1 }}
                        exit={{ opacity : 0, transition : { duration : 0.5 } }}
                        onClick={() => setCurrentMemberIndex(null)}
                        className="fixed inset-0 z-20 bg-black/70">
                      </motion.div>
                    )}
                </AnimatePresence>
              {members.map((member, index) => (
                <div key={member.name} className="w-full relative">
                  <motion.div layoutId={member.name} className={`group cursor-pointer relative h-full w-full ${member.id % 2 === 0 ? 'translate-y-10' : 'translate-y-0'}`} onClick={() => setCurrentMemberIndex(member.id)}>
                    <motion.span layout className={`absolute -top-15 -left-5 text-8xl font-black dark:text-white opacity-10 select-none ${currentMemberIndex === member.id ? 'hidden' : 'block'}`}>
                      0{index + 1}
                    </motion.span>
                    <div className={`relative flex justify-center rounded-lg overflow-hidden after:absolute after:bg-linear-to-t after:from-black after:to-transparent after:w-full after:h-6/12 ${currentMemberIndex === member.id ? 'after:opacity-80 after:z-30' : 'after:opacity-0 group-hover:after:opacity-75'} after:bottom-0 after:left-0 after:transition after:overflow-hidden`} >
                      <motion.img layoutId={member.image} src={member.image} className={`rounded-lg`} alt={member.name} />
                      <div className={`absolute bottom-5 left-5 z-40 text-white ${currentMemberIndex === member.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        <motion.h1 layout className="font-bold text-2xl">{member.name}</motion.h1>
                      </div>
                    </div>
                  </motion.div>
                  <AnimatePresence>
                    {currentMemberIndex === member.id && (
                        <motion.div layoutId={member.name} className="fixed left-6/12 w-8/12 top-1/2 -translate-y-1/2 transform -translate-x-6/12 overflow-hidden z-50">
                          <div style={{ backgroundColor: currentMemberIndex === member.id ? member.color + 'd9' : 'transparent' }} className={`relative flex justify-center rounded-lg overflow-hidden after:absolute after:bg-linear-to-t after:from-black after:to-transparent after:w-full after:h-6/12 ${currentMemberIndex === member.id ? 'after:opacity-80 after:z-30' : 'after:opacity-0 group-hover:after:opacity-75'} after:bottom-0 after:left-0 after:transition after:overflow-hidden`} >
                            <motion.img layoutId={member.image} src={member.image} className="w-75 rounded-lg" alt={member.name} />
                            <div className={`absolute bottom-5 left-5 z-40 text-white ${currentMemberIndex === member.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                              <motion.h1 layout className="font-bold text-2xl">{member.name}</motion.h1>
                              <AnimatePresence>
                                <motion.h3
                                  className={currentMemberIndex === member.id ? 'block' : 'hidden'}
                                  layout
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                >{member.description}</motion.h3>
                              </AnimatePresence>
                            </div>
                          </div>
                        </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
      </section>
      <section className="min-h-screen"></section>
    </>
  );
}

export default App;
