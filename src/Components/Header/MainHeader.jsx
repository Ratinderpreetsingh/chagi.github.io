import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import Wrapper from "../Wrapper/Wrapper";
import MobileMenu from "./MobileMenu";

const MainHeader = () => {
  const [activeSubMenu,setActiveSubMenu]=useState(false)
  const [activeMoblieMenu,setMobileMenu]=useState(false)
  return (
    <>
      <div className=" w-full h-[50px] md:h-[80px]  bg-white sticky top-0 left-0 right-0 flex  items-center	justify-between  ">
        <Wrapper className={`flex  items-center	justify-between `}>
          <div className="flex items-center">
          <MobileMenu activeMoblieMenu={activeMoblieMenu} setMobileMenu={setMobileMenu}/>
            <Logo />
            <Menu activeSubMenu={activeSubMenu} setActiveSubMenu={setActiveSubMenu} />
          </div>

          <Search />
        </Wrapper>
      </div>
      <div className="border-b border-gray-300"></div>
    </>
  );
};

export default MainHeader;
