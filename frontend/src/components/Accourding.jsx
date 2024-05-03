import React, { useState } from "react";
import AccourdDiv from "./AccourdDiv";

function Accourding() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const accourdiation_data = [
    {
      title: "Why is digital marketing important for my business?",
      desc: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
    {
      title: "How can digital marketing help improve my website's visibility?",
      desc: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
    {
      title:
        "How long does it take to see results from digital marketing efforts?",
      desc: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
    {
      title: "How do you measure the success of digital marketing campaigns?",
      desc: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
  ];

  return (
    <section className="md:flex mb-11 bg-[#fff] p-10 rounded-lg justify-between">
      <div className="mb-24">
        <h1 className="lg:text-4xl md:text-3xl font-semibold max-w-[890px] mb-9 text-2xl">
          Digital Marketing FAQs
        </h1>
        <p className="mb-9 text-[#878C91] md:w-[600px]">
          As a leading digital marketing agency, we are dedicated to providing
          comprehensive educational resources and answering frequently asked
          questions to help our clients.
        </p>
        <div className="flex items-center">
          <button className="border border-[#010205] min-w-36 md:text-sm text-md p-2 rounded-full font-semibold">
            More Questions
          </button>
          <button className="ml-6 underline">Contanct Us</button>
        </div>
      </div>
      <div className="md:w-[600px]">
        {accourdiation_data.map((item, index) => {
          return (
            <AccourdDiv
              key={index}
              open={index === open}
              title={item.title}
              desc={item.desc}
              toggle={() => toggle(index)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Accourding;
