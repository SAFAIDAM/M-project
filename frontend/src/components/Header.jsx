import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import afterpay from "../assets/rowlogo_1.svg"
import basecamp from "../assets/rowlogo_2.svg"
import maze from "../assets/rowlogo_3.svg"
import headerimg from "../assets/headersvg.svg"


function Header() {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);


  useEffect(() => {
    if (gsap) {
      gsap.fromTo(
        [titleRef.current, descriptionRef.current, buttonRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
      );
    }
  }, []);
  return (
    <header className="flex items-center justify-between" ref={headerRef}>
      
      <div>
      <div className="mb-10">
        <img
          className="lg:w-[688px] block lg:hidden"
          src={headerimg}
          alt=""
        />
      </div>
        <section>
          <div>
            <h1 ref={titleRef}  className="lg:text-8xl md:text-5xl font-semibold max-w-[890px] mb-9 text-4xl">Stay ahead of the curve with our forward-thinking</h1>
          </div>
          <div>
            <p ref={descriptionRef} className="text-[#878C91] max-w-[607px] lg:text-lg mb-9 text-sm">
              An award-winning SEO agency with disciplines in digital marketing,
              design, and website development. focused on understanding you.
            </p>
          </div>
        </section>
        <div className="lg:flex md:justify-start justify-center items-center gap-16">
          <button ref={buttonRef} className="border border-[#010205] min-w-52 bg-black p-4 rounded-full mb-4 text-[#fff] flex justify-center items-center gap-6">
            Schedule Call{" "}
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
    <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
            </span>
          </button>
          <button ref={buttonRef} className="underline ml-6">View Case Study</button>
        </div>
        <div className="lg:flex items-center gap-9 mt-14 m-2">
          <h3 className="text-sm font-semibold w-48">Trusted by the world's  biggest brands</h3>
          <div className="items-center gap-6 flex mt-5">
            <span className=""> <img src={afterpay} alt="" /> </span>
            <span> <img src={basecamp} alt="" /> </span>
            <span> <img src={maze} alt="" /> </span>
          </div>
        </div>
      </div>
      <div className="">
        <img
          className="lg:w-[688px] hidden lg:block"
          src={headerimg}
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
