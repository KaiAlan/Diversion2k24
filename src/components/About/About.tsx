import FaqSection from "../Faq/Faq2";
import Cards from "./Cards";
import img4 from "./Farmer.png";
import img from "./img.jpg";

const About = () => {
  return (
    <>
      <div className="my-48 py-10">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            About Us
          </h2>
          <p className="text-wrap mb-4 px-10 md:text-xl text-gray-700 dark:text-gray-200 text-center max-w-4xl mx-auto">
            Discover our mission to innovate agriculture through technology,
            making farming more efficient, sustainable, and profitable for
            everyone. Join us with our evolving journey to make future.
          </p>
        </div>
        <section className="">
          <Cards />
        </section>
        <section className="py-20 md:py-28 lg:py-36">
          <div className="container mx-auto px-4 md:px-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Services
              </h2>
              <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Seamless Blockchain Supply Chains, Smart E-Commerce, and
                Cutting-Edge AI for Healthier Crops and Bountiful Yields.
                Experience the Future of Farming Today.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 flex flex-col justify-center mr-20">
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-lg shadow-lg bg-transparent hover:bg-green-50  border border-green-600 transition duration-300 ease-in-out hover:scale-105">
                    <h3 className="text-2xl font-bold">Collaboration</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Make collaboration seamless with built-in code review
                      tools.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-lg bg-transparent hover:bg-green-50  border border-green-600 transition duration-300 ease-in-out hover:scale-105">
                    <h3 className="text-2xl font-bold ">Automation</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Automate your workflow with continuous integration.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-lg bg-transparent hover:bg-green-50  border border-green-600 transition duration-300 ease-in-out hover:scale-105">
                    <h3 className="text-2xl font-bold">Scale</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Deploy to the cloud with a single click and scale with
                      ease.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  alt="Innovative platform"
                  className="bg-gradient-to-b from-emerald-200 to-green-50 h-[300px] w-[400px] flex justify-center items-center mt-16 rounded-2xl border-spacing-2 drop-shadow-2xl"
                  src={img}
                />
              </div>
            </div>
          </div>
        </section>
        <FaqSection />
      </div>
    </>
  );
};

export default About;
