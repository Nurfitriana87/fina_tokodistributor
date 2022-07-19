import React from "react";
import logotd from "../image/tokodistributor.png";

function Header() {
  return (
    <div className="h-[700px] bg-gradient-to-r from-linerGradient2 to-linerGradient1">
      <header className="container max-w-3xl mx-auto flex flex-row py-4">
        <img src={logotd} alt="logo-tokodistributor" className="justify-start" />
        <button className=" bg-white py-3 px-5 rounded-md font-bold text-base text-red ">Join Premium</button>
      </header>
    </div>
  );
}

export default Header;
