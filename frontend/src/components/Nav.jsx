import React from 'react'
import logo from "../assets/logosvg.svg"


function Nav() {

  const navLinks = document.querySelector('.nav-links')
  function onToggleMenu(e){
      e.name = e.name === 'menu' ? 'close' : 'menu'
      navLinks.classList.toggle('top-[9%]')
  }

  return (
    <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
            <div>
            <img src={logo} alt="" />
            </div>
            <div
                className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a className="hover:text-gray-500" href="#">Products</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Solution</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Resource</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Developers</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
                <button onClick={onToggleMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#000000"} fill={"none"}>
    <path d="M20 12L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 5L4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 19L4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
                </button>
            </div>
            </ nav>
            </header>
  )
}

export default Nav