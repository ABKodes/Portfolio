import SelfImage from './assets/mf-avatar.svg'
import HeroDevice from './assets/hero-devices.svg'
import About from './About'
import Testimonial from './Testimonial';
import Footer from './footer';
import Contact from './contact';
function App() {
  return (
    <>
      <div className="navbar bg-base-100 mt-2 ">
        <div className="flex-1">
          <a className=" font-bold text-3xl cursor-pointer ml-5">@</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Designer and Frontend Developer</h1>
            <p className="py-6 font-light text-2xl">
              I design and code beautifully simple things and I love what I do.
            </p>
            <div className='flex justify-center items-center'>
            <img className = 'p-10' src={SelfImage} alt='Self Image'/>
            </div>
            <div className='flex justify-center items-center w-full'>
            <img className = 'max-w-full md:max-w-[1000px]' src={HeroDevice} alt='Self Image'/>
            </div>

          </div>
        </div>
      </div>
      <About/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
