import React from "react";
import image from "../assets/projectwith.svg";
import image1 from "../assets/image_1.svg"
import image2 from "../assets/image_2.svg"



function BodyBanner() {
  return (
    <div>
      <section className="section_texture rounded-[30px] pt-24 pb-11 p-3">
        <div className="align-middle flex justify-center">
          <h1 className="text-[#fff] lg:w-[1300px] lg:text-5xl md:text-3xl font-semibold mb-9 text-3xl text-center">
            Real-world examples of how we have helped companies achieve their
            marketing objectives.
          </h1>
        </div>
        <div className="text-[#fff] justify-center lg:text-lg items-center align-middle gap-24 md:flex md:gap-4 p-2 ml-auto mr-auto">
          <button className="border border-[#fff] lg:min-w-56 min-w-36 rounded-full p-2 hover:bg-[#99CF63] hover:border-none hover:text-black mb-2 md:mb-0 md:mr-2 transform transition duration-200 hover:scale-110">
            All Work [20]
          </button>
          {" "}
          <button className="border border-[#fff] lg:min-w-56 min-w-36 rounded-full p-2 hover:bg-[#99CF63] hover:border-none hover:text-black mb-2 md:mb-0 md:mr-2 transform transition duration-200 hover:scale-110">
            UI/UX Design[10]
          </button>
          {" "}
          <button className="border border-[#fff] lg:min-w-56 min-w-36 rounded-full p-2 hover:bg-[#99CF63] hover:border-none hover:text-black mb-2 md:mb-0 md:mr-2 transform transition duration-200 hover:scale-110">
            Digital Marketing [5]
          </button>
          {" "}
          <button className="border border-[#fff] lg:min-w-56 min-w-36 rounded-full p-2 hover:bg-[#99CF63] hover:border-none hover:text-black mb-2 md:mb-0 ">
            Branding [5]
          </button>
        </div>


        <section className="text-[#fff] mt-24 lg:flex  items-center justify-center gap-24 mb-5">
      <div className="border-[10px] lg:w-[430px] lg:h-[430px] h-[300px] w-[300px] flex items-center justify-center border-[#67696A] rounded-full mb-5"> 
         <button className="lg:w-[163px] lg:h-[163px] h-[100px] w-[100px] text-black border border-[#99EA48] bg-[#99EA48] rounded-full font-bold flex items-center justify-center text-sm">See Details</button>
      </div>
      <div className="lg:w-[460px] mb-5">
        <div>
          <img src={image1} alt="" /> 
        </div>
        
      </div>
      <div className="lg:w-[460px] mb-5">
      <div>
          <img src={image2} alt="" /> 
        </div>
      </div>
      </section>
      </section>
      
    </div>
  );
}

export default BodyBanner;
