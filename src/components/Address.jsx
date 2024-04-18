
const Address = () => {
  return (
    <section className="flex items-center justify-center gap-16 flex-col md:flex-row py-4" id="contact">
      <div className="flex items-center justify-center shadow-2xl p-4 w-[90%] md:w-[40%] rounded-3xl flex-col md:flex-row">
        <div className="flex items-start justify-center flex-col gap-2 flex-wrap">
          <h3 className=" font-black text-indigo-900">Company Office</h3>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet contetur adipisicing elit. Culpa ducimus, <br />
            dicta aliquid ipsam ut sed perferendis, exercitationem temporibus
            suscipit, <br />
            vero non. Ipsum.
          </p>
          <p>Lorem ipsum dolor sit amet consec.</p>
          <h4 className="text-[#0196e3]">+91 9462575866</h4>
        </div>
        <div className="flex items-start justify-center flex-row gap-3 md:flex-col md:gap-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0196e3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[35px] w-[35px] p-2 rounded-full shadow-2xl bg-slate-200 lucide lucide-globe"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0196e3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[35px] w-[35px] p-2 rounded-full shadow-2xl bg-slate-200 lucide lucide-map-pin"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0196e3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[35px] w-[35px] p-2 rounded-full shadow-2xl bg-slate-200 lucide lucide-phone"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
      </div>

      <div className="flex items-start justify-center flex-col gap-4 shadow-2xl p-4 w-[90%] md:w-[40%] rounded-3xl">
      <h3 className=" font-black text-indigo-900">Customer Service</h3>
        <p className=" text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          ducimus, pariatur dicta aliquid ipsam ut sed perferendis, est
          exercitationem temporibus suscipit, esse vero non. Ipsum.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <h4 className="text-[#0196e3]">+91 9462575866</h4>
      </div>
    </section>
  );
};

export default Address;
