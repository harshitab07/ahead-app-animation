import React from 'react';

const Header = () => {
  return (
    <div className="fixed top-[0] left-[0]  bg-white z-[100]">
      <header className="flex  justify-between h-20 items-center py-3 px-10 w-screen">
        <div className=""><img src="/ahead-logo.png" width={50} height={50} alt="" /></div>
        <div className="">
          <ul className="flex gap-6 items-center">
            <li className="cursor-pointer font-semibold ">Emotions</li>
            <li className="cursor-pointer font-semibold ">Manifesto</li>
            <li className="cursor-pointer font-semibold ">
              Self-awareness test
            </li>
            <li className="cursor-pointer font-semibold ">Work With Us</li>
          </ul>
        </div>
        <div className="">
          <button className="cursor-pointer text-white bg-black rounded-full px-4 py-2 font-semibold">
            Download app
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header;