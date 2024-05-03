import React, { useState, useEffect, useRef } from "react";
import testo1 from "../assets/testo1.svg";
import testo2 from "../assets/testo2.svg";
import testo3 from "../assets/testo3.svg";
import gsap from "gsap";

function Testimonials() {
  const Testimonials_data = [
    {
      img: testo1,
      content_text:
        "“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
      testimonial_name: "Michael Kaizer",
      text_block: "CEO of Basecamp Corp",
    },
    {
      img: testo2,
      content_text:
        "“As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.”",
      testimonial_name: "Michael Kaizer",
      text_block: "developer",
    },
    {
      img: testo3,
      content_text:
        "“Allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
      testimonial_name: "Michael Kaizer",
      text_block: "SRE",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = Testimonials_data.length;
  const timelineRef = useRef(null);

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });
    timeline
      .fromTo(
        ".testimonial",
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.5 }
      )
      .to(
        ".testimonial",
        { opacity: 0, x: -100, duration: 0.5, delay: 1 },
        ">2"
      )
      .call(next);
    timelineRef.current = timeline;
  }, []);

  useEffect(() => {
    timelineRef.current.restart();
  }, [current]);

  return (
    <section className="flex mb-24">
      <div>
        {Testimonials_data.map(
          (item, index) =>
            index === current && (
              <div key={index} >
                <div className="testimonial">
                  <h1 className="text-xl font-bold text-start md:text-4xl ">
                    {item.content_text}
                  </h1>
                </div>
                <div className="items-center justify-between md:flex">
                  <div className="flex items-center gap-4 mt-5 testimonial">
                    <div>
                      <img src={item.img} alt="" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        {item.testimonial_name}
                      </h4>
                      <p className="text-[#878C91]">{item.text_block}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-5 p-2 mt-10 rounded-full ">
                    <button
                      onClick={previous}
                      className="flex items-center justify-center p-4 border border-black rounded-full min-w-24 max-w-36"
                    >
                       <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
                        color={"#000000"}
                        fill={"none"}
                      >
                        <path
                          d="M4 12L20 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                    </button>

                    <p className="">
                      <span className="font-bold underline underline-offset-4 ">{` 0${index + 1} `}</span>  <span className="text-[#878C91]">{`/0${length}`}</span>
                    </p>

                    <button
                      onClick={next}
                      className="flex items-center justify-center p-4 bg-black rounded-full min-w-24 max-w-36"
                    >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
                        color={"#ffffff"}
                        fill={"none"}
                      >
                        <path
                          d="M20 12L4 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                    </button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
}

export default Testimonials;
