import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Body from "../components/Body";
import BodyBanner from "../components/BodyBanner";
import Testimonials from "../components/Testimonials";
import Accourding from "../components/Accourding";

function Home() {
  return (
    <>
      <div className="textured-background scroll-smooth">
        <Navbar />
        <div className="w-11/12 mt-24 ml-auto mr-auto">
        <Header />
        <Body />
        </div>
        <div className="mt-24 ml-9 mr-9">
        <BodyBanner />

        
        </div>
        {/* <Nav /> */}

        <div className="w-11/12 mt-24 ml-auto mr-auto">
        <Testimonials />
        <Accourding />
        <div>
          
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Home;
