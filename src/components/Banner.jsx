const Banner = () => {
  return (
    <div className="flex w-[100%] justify-center items-center flex-col md:flex-row text-white bg-sky-400 gap-4 p-32">
      <h1 className="p-4 border-b md:border-r md:border-b-0 font-bold text-center text-4xl">Cyber Security</h1>
      <h4 className="font-bold text-center">
        The safety of our customers is <br className="hidden md:block"/> our top priority!
      </h4>
    </div>
  );
};
export default Banner;
