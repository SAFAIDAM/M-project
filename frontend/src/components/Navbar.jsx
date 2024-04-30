import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../assets/logosvg.svg";

function Navbar() {

  const titleRef = useRef(null);


  useEffect(() => {
    if (gsap) {
      gsap.fromTo(
        [titleRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
      );
    }
  }, []);
  

  return (
    <>
      <nav ref={titleRef} className="ml-auto mr-auto w-11/12 pt-11">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-24">
            <div>
            <img src={logo} alt="" />
            </div>
            
           
           <div className="">
           <ul className="hidden lg:flex text-[20px] md:text-[13px] items-center gap-6 ">
              <li>
                <a href="" className="flex items-center justify-center gap-2">
                  Service{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                </a>
              </li>
              <li>
                <a href="" className="flex items-center justify-center gap-2">
                  Agency{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                </a>
              </li>
              <li>
                <a href="" className="flex items-center justify-center gap-2">
                  Case study{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                </a>
              </li>
              <li>
                <a href="" className="flex items-center justify-center gap-2">
                  Resources{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                </a>
              </li>
              <li>
                <a href="" className="flex items-center justify-center gap-2">
                  Contact{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                </a>
              </li>
            </ul>
           </div>
          
          </div>
          <div className="flex justify-center items-center gap-2">
            <button className="border border-[#010205] min-w-36 md:text-sm text-md p-2 rounded-full font-semibold">
              Get started
            </button>
            <button className="bg-[#010205] rounded-full p-3 hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
