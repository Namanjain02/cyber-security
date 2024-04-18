import jonas from "../assets/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg";
import christopher from "../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import sergio from "../assets/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg";

const OurTeam = () => {
  return (
    <section
      className="flex items-center justify-center flex-col p-8"
      id="career"
    >
      <h2 className="font-bold text-3xl text-indigo-900">Our Team</h2>
      <div className="flex items-center justify-center flex-wrap  gap-24">
        <div
          className="flex items-center w-[80%]  md:w-auto  justify-center flex-col p-10 shadow-2xl 
        rounded-3xl gap-4"
        >
          <figure className="w-36 h-36">
            <img className="w-full h-full rounded-full" src={jonas} alt="" />
          </figure>
          <h4 className=" text-indigo-900 font-bold text-2xl">James Ford</h4>
          <h6 className="font-bold text-base">General Director</h6>
        </div>
        <div
          className="flex items-center w-[80%]  md:w-auto  justify-center flex-col p-10 shadow-2xl 
          rounded-3xl gap-4"
        >
          <figure className=" w-36 h-36">
            <img
              className="w-full h-full rounded-full"
              src={sergio}
              alt="Sergio"
            />
          </figure>
          <h4 className=" text-indigo-900 font-bold text-2xl">Tony Jason</h4>
          <h6 className="font-bold text-base">Developer</h6>
        </div>
        <div
          className="flex items-center w-[80%]  md:w-auto  justify-center flex-col p-10 shadow-2xl 
          rounded-3xl gap-4"
        >
          <figure className=" w-36 h-36">
            <img
              className="w-full h-full rounded-full"
              src={christopher}
              alt=""
            />
          </figure>
          <h4 className=" text-indigo-900 font-bold text-2xl">Ann Brown</h4>
          <h6 className="font-bold text-base">Manager</h6>
        </div>

        <div
          className="flex items-center w-[80%]  md:w-auto  justify-center flex-col p-10 shadow-2xl 
          rounded-3xl gap-4"
        >
          <figure className=" w-36 h-36">
            <img
              className="w-full h-full rounded-full"
              src={sergio}
              alt="Sergio"
            />
          </figure>
          <h4 className=" text-indigo-900 font-bold text-2xl">Ben Stokes</h4>
          <h6 className="font-bold text-base">Engineer</h6>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
