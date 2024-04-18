
const Pricing = () => {
  return (
    <section className="flex items-center justify-center flex-col mt-0 text-sm m-4 w-90%" id="terms">
    <h2 className="text-indigo-900 font-bold text-3xl mb-8">Our Pricing</h2>
    <div className="flex justify-center items-center gap-12 text-xl flex-col flex-wrap md:flex-row w-full">
      <div className="rounded-3xl w-[75%] md:w-1/5 flex items-center justify-evenly flex-col shadow-2xl py-6 px-4 md:px-12">
        <div className="flex justify-around items-center flex-col m-4">
          <p>Monthly</p>
          <h3 className=" text-3xl text-indigo-900 font-bold">$16</h3>
          <p>per month</p>
        </div>
        <ul className="mb-3">
          <li className="mb-2 border-b">adipisicing</li>
          <li className="mb-2 border-b">consectetur</li>
          <li className="mb-2 border-b">ipsum</li>
          <li className="mb-2 border-b">consectetur</li>
          <li className="mb-2 border-b">dolor</li>
        </ul>

        <button className="bg-[#0196e3] text-[#f2f3f7] p-4 font-black border-[#f2f3f7] overflow-hidden cursor-pointer rounded-3xl" name="ReadMore">
          Buy Now
        </button>
      </div>

      <div className="rounded-3xl w-[75%] md:w-1/5 flex items-center justify-evenly flex-col shadow-2xl py-6 px-4 md:px-12">
          <div className="flex justify-around items-center flex-col m-4">
          <p>Quarterly</p>
          <h3 className=" text-3xl text-indigo-900 font-bold">$40</h3>
          <p>per quarter</p>
        </div>
        <ul className="mb-3">
          <li className="mb-2 border-b">dolor</li>
          <li className="mb-2 border-b">adipisicing</li>
          <li className="mb-2 border-b">consectetur</li>
          <li className="mb-2 border-b">ipsum</li>
          <li className="mb-2 border-b">consectetur</li>
        </ul>

        <button className="bg-[#0196e3] text-[#f2f3f7] p-4 font-black border-[#f2f3f7] overflow-hidden cursor-pointer rounded-3xl" name="ReadMore">
          Buy Now
        </button>
      </div>

      <div className="rounded-3xl w-[75%] md:w-1/5 flex items-center justify-evenly flex-col shadow-2xl py-6 px-4 md:px-12">
          <div className="flex justify-around items-center flex-col m-4">
          <p>Half-Yearly</p>
          <h3 className=" text-3xl text-indigo-900 font-bold">$90</h3>
          <p>6 months</p>
        </div>
        <ul className="mb-3">
          <li className="mb-2 border-b">ipsum</li>
          <li className="mb-2 border-b">consectetur</li>
          <li className="mb-2 border-b">dolor</li>
          <li className="mb-2 border-b">consectetur</li>
          <li className="mb-2 border-b">adipisicing</li>
        </ul>

        <button className="bg-[#0196e3] text-[#f2f3f7] p-4 font-black border-[#f2f3f7] overflow-hidden cursor-pointer rounded-3xl" name="ReadMore">
          Buy Now
        </button>
      </div>
      <div className="rounded-3xl w-[75%] md:w-1/5 flex items-center justify-evenly flex-col shadow-2xl py-6 px-4 md:px-12">
          <div className="flex justify-around items-center flex-col m-4">
          <p>Yearly</p>
          <h3 className=" text-3xl text-indigo-900 font-bold">$140</h3>
          <p>per year</p>
        </div>
        <ul className="mb-3">
          <li className="mb-2 border-b">dolor</li>
          <li className="mb-2 border-b">adipisicing</li>
          <li className="mb-2 border-b">consectetur</li>
          <li className="mb-2 border-b">ipsum</li>
          <li className="mb-2 border-b">consectetur</li>
        </ul>

        <button className="bg-[#0196e3] text-[#f2f3f7] p-4 font-black border-[#f2f3f7] overflow-hidden cursor-pointer rounded-3xl" name="ReadMore">
          Buy Now
        </button>
      </div>
      
    </div>

  </section>
  )
}

export default Pricing