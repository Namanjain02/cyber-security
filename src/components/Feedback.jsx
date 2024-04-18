

const Feedback = () => {
  return (
    <section className="flex items-center justify-center flex-col w-[100%] p-12">
     <h2 className="text-indigo-900 font-bold text-3xl">Feedback</h2>
    <form className="my-8 mx-0 flex items-center justify-center flex-col w-[100%] gap-4" action="no_action">
      <input className="w-[90%] rounded-3xl outline-none border-none bg-slate-100 p-4" type="text" name="name" placeholder="Full name" />
      <div className="flex items-center justify-between w-[90%]">
        <input className="w-[49%] rounded-3xl outline-none border-none bg-slate-100 p-4" type="email" name="name" placeholder="Email" />
        <input className="w-[49%] rounded-3xl outline-none border-none bg-slate-100 p-4" type="number" name="name" placeholder="Phone" />
      </div>
      <input className="w-[90%] rounded-3xl outline-none border-none bg-slate-100 p-4" type="text" name="name" placeholder="Website" />
      <textarea className="w-[90%] rounded-3xl outline-none border-none bg-slate-100 p-4" placeholder="Message" rows="7"></textarea>
      <button onClick={(e)=>{e.preventDefault()}} className="bg-[#0196e3] text-[#f2f3f7] p-4 font-black border-[#f2f3f7] overflow-hidden cursor-pointer rounded-3xl" type="submit">Send Message</button>
    </form>
  </section>

  )
}

export default Feedback