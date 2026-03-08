import { motion } from "motion/react";
import { useState } from "react";

function App() {
  const headingText = "æspa";
  const membersLogo = [
    'test/karina-logo.png',
    'test/giselle-logo.png',
    'test/winter-logo.png',
    'test/ningning-logo.png',
  ];
  const members = [
    'KARINA',
    'GISELLE',
    'WINTER',
    'NINGNING'
  ]

  type Theme = "dark" | "light";
  const [theme, setTheme] = useState<Theme>("light");

  const onChangeColorTheme = () => {  
    setTheme((prev) => prev === "light" ? "dark" : 'light')
  }
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
        <div className="w-full flex flex-row gap-5 justify-center font-bold text-xl text-[#f4f015]  bg-none py-5">
          <img src={icon} className="w-18 absolute left-5 top-5"/>
          <h1 className="cursor-pointer">ABOUT</h1>
          <h1 className="cursor-pointer">MEMBERS</h1>
          <h1 className="cursor-pointer">KWANGYA</h1>
          <h1 className="cursor-pointer absolute right-5 top-5" onClick={onChangeColorTheme}>{theme === "dark" ? "Dirty Work" : "Richman"}</h1>
        </div>
        <div className="flex justify-center items-start">
            <div className="absolute bottom-0 grid grid-cols-2">
                {membersLogo.map((member, index) => (
                  <img className={`w-5/12 aspect-square mask-b-from-50% ${index % 2 === 0 ? 'justify-self-start' : 'justify-self-end'}`} key={member} src={member}/>
                ))}
            </div>
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
              opacity : {
                duration : 1.2
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
            }}/>
            <h1 className="text-[#f4f015] dark:text-white absolute bottom-32 text-9xl font-bold z-10">{headingText}</h1>
            <div className="absolute bottom-16 text-[#f4f015] dark:text-white text-3xl font-bold z-10 flex flex-row gap-10">
              {members.map(member => (
                <span key={member}>{member}</span>
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
