const FigSection = () => {
  return (
    <section className="p-5">
      <h2 className="text-center text-3xl text-indigo-900 font-bold">The highest level of security</h2>
      <div className="flex justify-center items-start mt-12 gap-20 flex-wrap">
        <div className="gap-2 w-[90%] md:w-[35%] flex justify-around items-start flex-col rounded-3xl shadow-xl py-10 pr-24 pl-8">
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0196e3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mouse-pointer"
            >
              <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
              <path d="m13 13 6 6" />
            </svg>
          </figure>
          <h3 className="text-indigo-900 text-3xl font-bold">4 230 000</h3>
          <p>known viruses</p>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi rerum perferendis delectus sapiente similique doloribus harum labore laboriosam, maiores, amet ullam eos veritatis. </p>
        </div>
        <div className="gap-2 w-[90%] md:w-[35%] flex justify-around items-start flex-col rounded-3xl shadow-xl py-10 pr-28 pl-8">
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0196e3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield-check"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </figure>
          <h3 className="text-indigo-900 text-3xl font-bold">99.8%</h3>
          <p>viruses blocked</p>
          <p> Officiis illum temporibus quod facilis, eveniet hic quae quibusdam dignissimos delectus accusamus eaque iusto quisquam quos amet ullam eos veritatis ccusamus iusto quisquam.</p>
        </div>
      </div>
    </section> 
  );
};

export default FigSection;
