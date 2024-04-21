const CardComponent = () => {
  return (
    <div className="flex flex-col bg-slate-100 mx-auto md:flex border py-2 px-2 ">
      {/* Paragraph section */}
      <div className="flex flex-col text-center justify-center ">
        <div className="flex justify-center">
          <p className="text-black font-medium uppercase mt-4 md:w-1/6 justify-center border rounded-md bg-gradient-to-b from-blue-50 to-white p-1">
            OUR SERVICES
          </p>
        </div>
        <div className="flex justify-center">
          <h2 className="text-black text-4xl font-semibold mb-5 md:w-2/6 mt-3 border rounded-md bg-gradient-to-b from-blue-50 to-white p-1">
            Empowering Your Global Education Journey
          </h2>
        </div>
        <div className="flex justify-center">
          <p className="text-black font-semibold border rounded-md md:w-6/6 bg-gradient-to-b from-blue-50 to-white p-1">
          Aarush International Education Private Limited, your trusted partner for
            navigating the complexities of studying abroad.
          </p>
        </div>
      </div>

      {/* Cards section */}
      <div className="flex flex-wrap justify-center mt-2 flex-col md:flex-row lg:flex-row">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2">
          <div className="bg-gradient-to-b from-blue-50 to-white py-10 px-8 border-[1.6px] border-solid rounded-2xl mb-4">
            <div>
              <img
                className="h-16 w-16 overflow-clip"
                src="/Threeservice/destination.png"
                alt="Career Counseling Icon"
              />
            </div>
            <h3 className="text-black text-2xl font-semibold mb-3 mt-5">
              Career Counseling
            </h3>
            <p>
              Helping you discover the right academic and career path for your
              future.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2">
          <div className="bg-gradient-to-b from-blue-50 to-white py-10 px-8 border-[1.6px] border-solid rounded-2xl mb-4">
            <div>
              <img
                className="h-16 w-16 overflow-clip"
                src="/Threeservice/consultation.png"
                alt="University Selection Icon"
              />
            </div>
            <h3 className="text-gray-800 text-2xl font-semibold mb-3 mt-5 pr-20">
              University Selection
            </h3>
            <p>
              Guiding you to the perfect university that aligns with your goals.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2">
          <div className="bg-gradient-to-b from-blue-50 to-white py-10 px-8 border-[1.6px] border-solid rounded-2xl mb-4">
            <div>
              <img
                className="h-14 w-16 overflow-clip"
                src="/Threeservice/graduated.png"
                alt="Visa Assistance Icon"
              />
            </div>
            <h3 className="text-gray-800 text-2xl font-semibold mb-3 mt-5 pr-20">
              Visa Assistance
            </h3>
            <p>
              Navigating the visa process with expertise, ensuring a smooth
              transition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;