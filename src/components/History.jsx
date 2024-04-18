const History = () => {
  return (
    <section className="flex items-center justify-center gap-12 flex-col p-8">
      <h2 className="text-3xl font-bold text-indigo-900">History</h2>
      <div className="flex items-center justify-center gap-8 flex-col">
        <div className="flex items-center md:flex-row flex-col justify-center gap-4 md:gap-12 ">
          <h3 className="p-4 text-2xl text-indigo-900 relative z-10 before:content-[''] before:absolute before:-z-10 before:top-[10%] before:left-0 before:w-[50px] before:h-[50px] before:rounded-full before:bg-slate-200 before:shadow-xl">
            1
          </h3>
          <div className=" flex items-center md:items-start justify-center flex-col gap-3">
            <h2 className=" font-bold text-2xl text-indigo-900">2019</h2>
            <h5 className=" font-bold text-xl text-indigo-900">
              Smart Home Security
            </h5>
            <p className="text-sm text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              veniam id consectetur et! Ducimus et blanditiis quis fuga porro
              eos!
              
            </p>
          </div>
        </div>
        <div className="flex items-center md:flex-row flex-col justify-center gap-4 md:gap-12 ">
          <h3 className="p-4 text-2xl text-indigo-900 relative z-10 before:content-[''] before:absolute before:-z-10 before:top-[10%] before:left-0 before:w-[50px] before:h-[50px] before:rounded-full before:bg-slate-200 before:shadow-xl">
             2
          </h3>
          <div className="flex items-center md:items-start justify-center flex-col gap-3">
            <h2 className="font-bold text-2xl text-indigo-900">2020</h2>
            <h5 className="font-bold text-xl text-indigo-900">
              Cyber Security
            </h5>
            <p className="text-sm text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              veniam id consectetur et! Ducimus et blanditiis quis fuga porro
              eos!
            </p>
          </div>
        </div>
        <div className="flex items-center md:flex-row flex-col justify-center gap-4 md:gap-12 ">
          <h4 className="p-4 text-2xl text-indigo-900 relative z-10 before:content-[''] before:absolute before:-z-10 before:top-[10%] before:left-0 before:w-[50px] before:h-[50px] before:rounded-full before:bg-slate-200 before:shadow-xl">
             3
          </h4>
          <div className="flex items-center md:items-start justify-center flex-col gap-3">
            <h2 className="font-bold text-2xl text-indigo-900">2021</h2>
            <h5 className="font-bold text-xl text-indigo-900">CCTV Cameras</h5>
            <p className="text-sm text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              veniam id consectetur et! Ducimus et blanditiis quis fuga porro
              eos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
