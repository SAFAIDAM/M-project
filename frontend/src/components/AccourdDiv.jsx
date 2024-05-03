import React from "react";
import { Collapse } from "react-collapse";

const AccordionDiv = ({ open, toggle, title, desc }) => {
  const contentStyle = {
    height: open ? "auto" : 0, // Maintain control over height change
    transition: open ? "height 0.3s ease-in-out" : "none",
  };

  return (
    <>
      <div className="md:flex justify-center h-[1px] bg-black"></div>
      <div className="pt-[10px] pb-6">
        <div className="flex flex-col items-start justify-between" onClick={toggle}>
        <div className="flex items-center justify-between ">
        <h3 className="flex gap-24 p-2 text-lg font-bold lg:w-[560px] sm:w-[500px]">
            {title}{" "}
          </h3>
          <div>
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={18}
                  height={20}
                  color="#000000"
                  fill="none"
                >
                  <path
                    d="M20 12L4 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={18}
                  height={20}
                  color="#000000"
                  fill="none"
                >
                  <path
                    d="M12 4V20M20 12H4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
        </div>
         
        </div>

        <Collapse isOpened={open}>
          <div style={contentStyle} className="text-[#878C91]">
            {desc}
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default AccordionDiv;
