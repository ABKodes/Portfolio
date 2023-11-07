function About() {
  return (
    <>
      <div className="bg-[#39A7FF] p-5 md:p-10">
        <h2 className="text-center text-[#FFFBF5] font-bold text-3xl">
          Hi, I'm Abiy. Nice to meet you
        </h2>
        <div className="mx-5">
          <p className="text-[#FFFBF5] font-light text-center md:p-20 p-10 text-2xl text-justify">
            Since beginning my journey as a software developer 3 years ago, I've
            done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row w-screen">
        <div className="card w-6/12 bg-base-100 border">
          <div className="card-body">
            <p className="text-2xl text-center font-bold">Designer</p>
            <p>
              I appreciate straightforward content organization, uncluttered
              design styles, and well-thought-out ways for people to engage with
              what I create.
            </p>
            <p className="text-[#39A7FF] text-center font-semibold text-lg my-3">
              Things I enjoy designing:
            </p>
            <p className="text-center">UX, UI, Web, Apps, Logos</p>
            <p className="text-[#39A7FF] text-center font-semibold text-lg my-3">
              Design Tools:
            </p>
            <p className="text-center">Figma</p>
            <p className="text-center my-1">Font Awesome</p>
            <p className="text-center my-1">Pen and Paper</p>
            <p className="text-center my-1">Sketch</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-6/12 bg-base-100 border space-x-2">
          <div className="card-body ">
            <p className="text-2xl text-center font-bold">Frontend Developer</p>
            <p>f
              I enjoy creating things from the beginning and turning my ideas
              into real and working websites or applications. Coding is my way
              of making those ideas come to life on the internet.
            </p>
            <p className="text-[#39A7FF] text-center font-semibold text-lg my-3">
              Languages I Speak:
            </p>
            <p className="text-center">HTML, CSS, JS, Git</p>
            <p className="text-[#39A7FF] text-center font-semibold text-lg my-3">
              Dev Tools:
            </p>
            <p className="text-center">Bootstrap</p>
            <p className="text-center my-1">Github</p>
            <p className="text-center my-1">Terminal</p>
            <p className="text-center my-1">Tailwind</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
