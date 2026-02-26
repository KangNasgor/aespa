import { motion } from "motion/react";

function App() {
  const headingText = "æspa";
  const members = [
    'KARINA',
    'GISELLE',
    'WINTER',
    'NINGNING',
  ];
  return (
    <>
      <motion.section className="bg-[#070fc1] w-full h-screen relative overflow-hidden"
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
        <div className="w-full flex flex-row gap-5 justify-center font-bold text-xl text-[#f4f015] bg-none py-5">
          <img src="images/aespa-icon.png" className="w-18 absolute left-5 top-5"/>
          <h1 className="cursor-pointer">ABOUT</h1>
          <h1 className="cursor-pointer">MEMBERS</h1>
          <h1 className="cursor-pointer">KWANGYA</h1>
        </div>
        <div className="flex justify-center items-start">
          <motion.img src="images/aespa.png" className="absolute bottom-0 w-8/12 mask-b-from-50%" initial={{
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
          <h1 className="text-[#f4f015] absolute bottom-32 text-9xl font-bold z-10">{headingText}</h1>
          <div className="absolute bottom-14 text-[#f4f015] text-3xl font-bold z-10 flex flex-row gap-5">
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
