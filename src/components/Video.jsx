

const Video = () => {
  return (
    <section className="flex items-center justify-center flex-col gap-8 m-6">
    <h2 className="font-bold text-indigo-900 text-3xl">
      Watch Video
    </h2>
    <div className="flex items-center justify-center w-[100%]">
      <iframe className=" rounded-3xl  shadow-2xl w-[90%] lg:w-[80%]" src="https://www.youtube.com/embed/inWWhr5tnEA?si=zTFBVCy8XL9w0yVX"
        title="YouTube video player"
        height={"500px"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </div>
  </section>

  )
}

export default Video