import farmers from "./Farmer.png";

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 gap-20">
      <img
        src={farmers}
        alt="Farmers working in the field"
        className="rounded-[50px] h-374 w-374 bg-green-50 bg-gradient-to-r from-cyan-500 to-blue-500"
      />
      <div className="flex flex-col shadow-xl justify-between md:ml-8 mt-6 md:mt-0 bg-custom-text-color p-9 md:w-3/5 h-374 w-374 rounded-[50px] border-2 border-custom-green" style={{ height: '100%' }}>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 text-left">
            Committed to empowering farmers globally, our all-in-one solution simplifies the Tech for All.
          </h2>
          <p className="text-gray-700 my-4 text-left leading-relaxed">
              At AgroTech, we're pioneers in agri-tech, merging blockchain, e-commerce, and AI to revolutionize farming.
              Join us in cultivating a future where technology and agriculture thrive hand in hand. Driven by a desire to
              revolutionize the agricultural landscape, our team brings together expertise in technology and a
              deep understanding of the challenges faced by farmers worldwide. We believe in the potential of digital solutions
              to not only enhance productivity but also foster sustainable and environmentally conscious practices.
          </p>
        </div>
        <div className="flex justify-center mt-auto">
          <button className="bg-black text-white py-1 px-10 rounded-[50px] transition-all duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
