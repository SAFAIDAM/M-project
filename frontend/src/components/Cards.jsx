import React from 'react';

function Cards() {
  const cards_data = [
    {
      color: "#45A7DE",
      duration: "5 min read",
      title: "How a Digital Marketing Agency Can Boost Your Business",
      description: "We are the top digital marketing agency for branding corp. We offer a full range of services from search engine optimization (SEO) to social media management."
    },
    {
      color: "#EA5F38",
      duration: "5 min read",
      title: "The Latest Trends and Strategies with a Digital Marketing Agency",
      description: "We are the top digital marketing agency for branding corp. We offer a full range of services from search engine optimization (SEO) to social media management."
    },
    {
      color: "#6A26F1",
      duration: "5 min read",
      title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
      description: "We are the top digital marketing agency for branding corp. We offer a full range of services from search engine optimization (SEO) to social media management."
    }
  ];

  return (
    <div className='items-center gap-24 md:flex mb-36'>
      {cards_data.map((item, index) => (
        <section key={index} className='p-10 bg-white rounded-[30px] shadow-sm mb-11'>
          <div className='flex items-center justify-between mb-5'>
            <button ><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="7" fill={`${item.color}`}/>
</svg>
</button>
            <p>{item.duration}</p>
          </div>
          <h1 className='mb-10 text-4xl font-semibold text-start'>{item.title}</h1>
          <div className='items-center gap-9 md:flex'>
            <p className='text-sm text-[#878C91]'>{item.description}</p>
            <button
              className="flex items-center justify-center p-4 mt-3 border border-black rounded-full hover:bg-black min-w-24 max-w-36 hover:text-white"
            >
            <svg 
            className=''
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
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
        </section>
      ))}
    </div>
  );
}

export default Cards;
