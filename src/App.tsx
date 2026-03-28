import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";
import { useState } from "react";

const headingText = "æspa";

interface Members {
  id : number,
  name : string,
  image : string,
  description : string,
}

const members : Members[] = [
  {
    id: 1,
    name: 'KARINA',
    image: 'members/Karina.webp',
    description : 'Karina (카리나 karina) was born on April 11, 2000 in Suwon-si, South Korea. She is the leader, a dancer, rapper and visual of the group aespa and a rapper and vocalist of the unit GOT the beat.'
  },
  {
    id: 2,
    name: 'GISELLE',
    image: 'members/Giselle.webp',
    description : 'Giselle (지젤 jijel) was born on October 30, 2000 in Seoul, South Korea. She is a rapper and vocalist of the group aespa and ZOO unit.'
  },
  {
    id: 3,
    name: 'WINTER',
    image: 'members/Winter.webp',
    description : 'Winter (윈터 winteo) was born on January 1, 2001 in Busan, South Korea. She is a vocalist, dancer and visual of the girl group aespa and a vocalist and the maknae of the unit GOT the beat.'
  },
  {
    id: 4,
    name: 'NINGNING',
    image: 'members/Ningning.webp',
    description : 'Ningning (닝닝 ningning) was born on October 23, 2002 in Heilongjiang, China. She is a vocalist and the maknae of the group aespa.'
  }
]

function App() {
  const { theme } = useTheme();
  const icon = theme === "dark" ? "images/aespa-dirtywork-icon.png" : "images/aespa-richman-icon.png";

  const [imageClicked, setImageClicked] = useState<boolean>(false);
  const [memberImageClicked, setMemberImageClicked] = useState<boolean>(false)
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
        <div className="flex justify-center items-start">
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
                exit={{ opacity : 0 }}
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
              className={imageClicked === true ? "fixed left-6/12 w-7/12 top-6/12 -translate-y-6/12 transform -translate-x-6/12 z-50" : "relative"}/>
          </div>
        </div>
      </section>
      <section data-theme={theme} className="min-h-screen bg-[#070fc1] dark:bg-black py-20">
            <h1 className="font-bold text-5xl text-white mb-24 text-center">The <span className="text-[#f4f015]">Members</span></h1>
            <div className="flex flex-rows gap-10 w-9/12 mx-auto">
              {members.map((member, index) => (
                <div key={member.name} className="flex w-6/12 relative justify-center">
                    <motion.div layout className={`group ${member.id % 2 === 0 ? 'translate-y-10' : 'translate-y-0'} ${memberImageClicked === true ? 'fixed left-6/12 w-7/12 top-6/12 -translate-y-6/12 transform -translate-x-6/12 z-50' : 'relative'}`} onClick={() => setMemberImageClicked(prev => !prev)}>
                      <span className="absolute -top-15 -left-5 text-8xl font-black opacity-10 select-none">
                        0{index + 1}
                      </span>
                      <div data-name={member.name} className={`relative rounded-lg overflow-hidden after:absolute after:bg-linear-to-t after:from-black after:to-transparent after:w-full after:h-6/12 after:opacity-0 group-hover:after:opacity-75 after:bottom-0 after:left-0 after:transition after:overflow-hidden`} >
                        <img src={member.image} className="w-full h-full object-cover rounded-lg" alt={member.name}/>
                        <div className="absolute bottom-5 left-5 z-20 text-white opacity-0 group-hover:opacity-100">
                          <h1 className="font-bold text-2xl">{member.name}</h1>
                        </div>
                      </div>
                    </motion.div>
                </div>
              ))}
            </div>
      </section>
    </>
  );
}

export default App;
