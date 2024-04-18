import deskWorkspace from '../assets/office-wooden-desk-workspace.jpg'

const About = () => {
  return (
    <section className="flex items-center justify-center gap-12 p-4 md:p-20 flex-wrap" id="about">
    <div className="flex items-center px-6 justify-center flex-col gap-6">
      <h2 className=" text-3xl text-center text-indigo-900 font-bold">About Cyber Security</h2>
      <p className="text-base md:text-xl text-center px-2 md:px-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi rerum perferendis delectus sapiente similique
        doloribus harum labore laboriosam, maiores, amet ullam eos veritatis. Officiis illum temporibus quod facilis,
        eveniet hic quae quibusdam dignissimos delectus accusamus eaque iusto quisquam quos amet ullam eos veritatis. Officiis illum temporibus quod facilis,
        eveniet hic quae quibusdam dignissimos delectus accusamus sapiente.</p>
      <button className="bg-[#0196e3] text-[#f2f3f7] p-4 font-black border-[#f2f3f7] overflow-hidden cursor-pointer rounded-3xl" name="ReadMore">Read More</button>
    </div>
      <figure className='flex items-center justify-center'>
        <img className='w-[90%] md:w-[60%] rounded-3xl' src={deskWorkspace} alt="" />
      </figure>
  </section>
)
}

export default About 