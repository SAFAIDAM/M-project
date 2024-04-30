import React from "react";
import Navbar from "../components/Navbar";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Body from "../components/Body";

function Home() {
  return (
    <>
      <div className="textured-background ">
        <Navbar />
        <div className="ml-auto mr-auto w-11/12 mt-24">
        <Header />
        <Body />
        </div>
        {/* <Nav /> */}

        
       
      </div>
    </>
  );
}

export default Home;
