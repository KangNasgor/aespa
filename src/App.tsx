import { motion } from "motion/react";
import { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";

const headingText = "æspa";

const members = [
  {
    name: 'KARINA',
    logo: 'test/karina-logo.png',
  },
  {
    name: 'GISELLE',
    logo: 'test/giselle-logo.png'
  },
  {
    name: 'WINTER',
    logo: 'test/winter-logo.png'
  },
  {
    name: 'NINGNING',
    logo: 'test/ningning-logo.png'
  }
]

function App() {
  const { theme } = useTheme();
  const icon = theme === "dark" ? "images/aespa-dirtywork-icon.png" : "images/aespa-richman-icon.png";
  return (
    <>
      <motion.section id="hero-section" data-theme={theme} className="bg-[#070fc1] dark:bg-black w-full h-screen relative overflow-hidden"
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
          <Navbar icon={icon}/>
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
      <section className="bg-black min-h-screen">

      </section>
    </>
  );
}

export default App;
