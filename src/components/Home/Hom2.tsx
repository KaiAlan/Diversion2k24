import About from "../About/About";
import img3 from "./img3.jpg";
// To be used 
function Home2() {
  return (
    <div className="bg-white dark:bg-gray-800 mt-9">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 lg:col-span-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Empowering <span className="text-green-600"> Agriculture </span>{" "}
              with Tech Innovations
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              Join the green revolution with our eco-friendly technologies.
              Enhance your farm's productivity with our smart solutions for a
              future.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all transform hover:scale-105 duration-300 ease-in-out">
                Get Started
              </button>
              <button className="bg-transparent hover:bg-green-50 text-green-600 font-semibold py-2 px-4 rounded-lg border border-green-600 transition duration-300 ease-in-out">
                See how it works
              </button>
            </div>
          </div>
          <div className="md:col-span-5 lg:col-span-6 flex justify-center">
            <div className="w-full h-3/4 sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <img
                src={img3}
                alt="Farming"
                className="w-[500px] h-auto shadow-xl rounded-lg transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
        <About />
      </div>
    </div>
  );
}

export default Home2;
