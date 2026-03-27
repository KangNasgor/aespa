import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";
import { useState } from "react";

const headingText = "æspa";

interface Members {
  name : string,
  logo : string,
  description : string,
}

const members : Members[] = [
  {
    name: 'KARINA',
    logo: 'test/karina-logo.png',
    description : 'Karina (카리나 karina) was born on April 11, 2000 in Suwon-si, South Korea. She is the leader, a dancer, rapper and visual of the group aespa and a rapper and vocalist of the unit GOT the beat.'
  },
  {
    name: 'GISELLE',
    logo: 'test/giselle-logo.png',
    description : 'Giselle (지젤 jijel) was born on October 30, 2000 in Seoul, South Korea. She is a rapper and vocalist of the group aespa and ZOO unit.'
  },
  {
    name: 'WINTER',
    logo: 'test/winter-logo.png',
    description : 'Winter (윈터 winteo) was born on January 1, 2001 in Busan, South Korea. She is a vocalist, dancer and visual of the girl group aespa and a vocalist and the maknae of the unit GOT the beat.'
  },
  {
    name: 'NINGNING',
    logo: 'test/ningning-logo.png',
    description : 'Ningning (닝닝 ningning) was born on October 23, 2002 in Heilongjiang, China. She is a vocalist and the maknae of the group aespa.'
  }
]

function App() {
  const { theme } = useTheme();
  const icon = theme === "dark" ? "images/aespa-dirtywork-icon.png" : "images/aespa-richman-icon.png";

  const [imageClicked, setImageClicked] = useState<boolean>(false);
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
              </motion.div>
            )}
          </AnimatePresence>
            <motion.img layout src={theme === "light" ? "images/aespa-richman-img-2.webp" : "images/aespa-richman-img-3.webp"} onClick={() => setImageClicked((prev) => !prev)}
              className={imageClicked === true ? "fixed left-6/12 w-7/12 top-6/12 -translate-y-6/12 transform -translate-x-6/12 z-50" : "relative"}/>
          </div>
        </div>
      </section>
      <section data-theme={theme} className="min-h-screen bg-[#070fc1] dark:bg-black">
            <div className="grid grid-cols-2 w-9/12 mx-auto gap-10">
              {members.map(member => (
                <div key={member.name} className="flex justify-center">
                  <div className="bg-[#f4f015] w-6/12 px-5 flex flex-col justify-around gap-5 py-4 rounded-lg">
                    <h1 className="font-bold text-2xl">{member.name}</h1>
                    <p>{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
      </section>
    </>
  );
}

export default App;
