import laptop from "../assets/coding-on-laptop.jpg";

const Progress = () => {
  return (
    <section className="flex w-[100%] flex-col md:flex-row flex-wrap justify-center items-center my-6 p-2 md:gap-32 md:p-16">
      <div className="flex justify-center items-center w-[90%] md:w-[40%]">
          <img
            className=" w-90% md:w-9/12 rounded-3xl"
            src={laptop}
            alt="coding on laptop"
          />
      </div>
      <div className="flex w-[90%] md:w-[40%] items-center md:items-start justify-center flex-col gap-6 ">
        <h2 className="text-3xl text-indigo-900 mt-2 font-bold">Secure Features</h2>
        <p className="text-base text-center md:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit <br /> Lorem
          ipsum dolor, sit amet consectetur adipisicing elit <br /> Lorem ipsum
          dolor sit amet..
        </p>
        <div className="w-full">
          <div className="w-[90%] md:w-4/5 flex justify-between items-center m-3 text-base">
            <p>Smart Home Security</p>
            <p>92%</p>
          </div>
          <div className="w-[90%] md:w-4/5 rounded-md bg-gray-300 ">
            <div className=" bg-indigo-900 text-white p-0 text-right font-bold w-11/12">
            <p className="text-indigo-900 text-smm">  |  </p>
            </div>
          </div>
          <div className="w-[90%] md:w-4/5 flex justify-between items-center m-3 text-base">
            <p>Cyber Security</p>
            <p>71%</p>
          </div>
          <div className="w-[90%] md:w-4/5 rounded-md bg-gray-300 ">
            <div className=" bg-indigo-900 text-white p-0 text-right font-bold w-9/12">
            <p className="text-indigo-900 text-smm">  |  </p>
            </div>
          </div>
          <div className="w-[90%] md:w-4/5 flex justify-between items-center m-3 text-base">
            <p>Mobile App Security</p>
            <p>53%</p>
          </div>
          <div className="w-[90%] md:w-4/5 rounded-md bg-gray-300">
            <div className=" bg-indigo-900 text-white p-0 text-right font-bold w-1/2">
            <p className="text-indigo-900 text-smm">  |  </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
