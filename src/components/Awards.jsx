import claudio from "../assets/claudio-schwarz-77ruI1Fed3o-unsplash.jpg";
import anton from "../assets/anton-maksimov-5642-su-dq1fhO59SZU-unsplash.jpg";
import jannis from "../assets/jannis-lucas-ouX2AlJFRUY-unsplash.jpg";

const Awards = () => {
  return (
    <section className="flex items-center justify-center flex-col gap-12 p-12">
      <h2 className=" text-3xl font-black text-indigo-900">Our Awards</h2>
      <div className="flex items-center w-[100%] justify-center flex-col gap-10">
        <div className="flex items-center w-[90%] md:w-[70%] justify-center flex-wrap text-center shadow-2xl rounded-3xl gap-8 p-2 md:gap-14 md:p-8">
          <figure className=" h-28 w-28">
            <img className=" h-full w-full rounded-full" src={claudio} alt="" />
          </figure>
          <h5 className=" font-bold text-indigo-900 text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing. <br /> Est
            temporibus nulla repellat nisi molestias itaque?
          </h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="24"
            viewBox="0 0 24 24"
            fill="#0196e3"
            stroke="#0196e3"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide h-12 w-12 p-1 rounded-full shadow-2xl bg-slate-200 lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </div>
        <div className="flex items-center justify-center w-[90%] md:w-[70%] text-center flex-wrap shadow-2xl rounded-3xl gap-8 p-2 md:gap-14 md:p-8">
          <figure className=" h-28 w-28">
            <img className=" h-full w-full rounded-full" src={anton} alt="" />
          </figure>
          <h5 className=" font-bold text-indigo-900 text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing. <br /> Est
            temporibus nulla repellat nisi molestias itaque?
          </h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="24"
            viewBox="0 0 24 24"
            fill="#0196e3"
            stroke="#0196e3"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide h-12 w-12 p-1 rounded-full shadow-2xl bg-slate-200 lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </div>
        <div className="flex items-center justify-center w-[90%] md:w-[70%] text-center flex-wrap shadow-2xl rounded-3xl gap-8 p-2 md:gap-14 md:p-8">
          <figure className=" h-28 w-28">
            <img className=" h-full w-full rounded-full" src={jannis} alt="" />
          </figure>
          <h5 className=" font-bold text-indigo-900 text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing. <br /> Est
            temporibus nulla repellat nisi molestias itaque?
          </h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="24"
            viewBox="0 0 24 24"
            fill="#0196e3"
            stroke="#0196e3"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide h-12 w-12 p-1 rounded-full shadow-2xl bg-slate-200 lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Awards;
