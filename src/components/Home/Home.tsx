import About from "../About/About";
// not to be used 
function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-6 sm:p-10 lg:p-16">
        <div className="text-center px-4 py-12 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-8">
            Revolutionizing Agriculture with Our <span className="text-green-600">All-in-One AgriTech Ecosystem</span>
          </h1>
          <p className="text-md md:text-xl lg:text-2xl text-gray-600 dark:text-white max-w-3xl mx-auto">
            Seamless Blockchain Supply Chains, Smart E-Commerce, and Cutting-Edge AI for Healthier Crops and Bountiful Yields. Experience the Future of Farming Today.
          </p>
          <div className="mt-10 flex justify-center gap-5 flex-wrap">
            <button className="text-white bg-green-500 hover:bg-green-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
            <button className="text-green-600 bg-transparent hover:bg-green-100 font-semibold py-3 px-6 rounded-lg border border-green-600 transition-all duration-300 ease-in-out">
              See how it works
            </button>
          </div>
        </div>
          <About />
      </div>
    </div>
  );
}

export default Home;
