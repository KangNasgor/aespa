function App() {
  return (
    <>
      <section className="bg-[#070fc1] w-full h-screen relative overflow-hidden">
        <div className="w-full flex flex-row gap-5 justify-center font-bold text-xl text-black bg-[#f4f015] py-5">
          <h1>æspa</h1>
          <h1>æspa</h1>
          <h1>æspa</h1>
        </div>
        <div className="flex justify-center items-start">
          <img src="images/aespa.png" className="absolute bottom-0 w-8/12 mask-b-from-50%"/>
          <h1 className="text-[#f4f015] absolute bottom-32 text-9xl font-bold z-10">æspa</h1>
          <div className="absolute bottom-14 text-[#f4f015] text-3xl font-bold z-10 flex flex-row gap-5">
            <h1 className="">KARINA</h1>
            <h1 className="">GISELLE</h1>
            <h1 className="">WINTER</h1>
            <h1 className="">NINGNING</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
