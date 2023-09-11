import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { PiPants } from "react-icons/pi";
import { LiaTshirtSolid } from "react-icons/lia";

const data = [
  {
    name:"home",
  },
  {
    name: "Men",
    subMenu: [
      { name: "Shirts", icon: BsChevronDown, subMenu: false },
      { name: "Pants", icon: PiPants, subMenu: false },
      { name: "printShirts", icon: LiaTshirtSolid, subMenu: false },
      { name: "Caps", icon: BsChevronDown, subMenu: false },
      { name: "Jokers", icon: BsChevronDown, subMenu: false },
    ],
  },
  {
    name: "Women",
    subMenu: [
      { name: "Electronics", icon: BsChevronDown, subMenu: false },
      { name: "Clothing", icon: BsChevronDown, subMenu: false },
      { name: "Books", icon: BsChevronDown, subMenu: false },
    ],
  },
];

const Menu = ({ activeSubMenu, setActiveSubMenu }) => {
  return (
    <ul className="hidden md:flex ml-14  gap-6 cursor-pointer">
      {data.map((item, index) => (
        <li
          key={index}
          className="cursor-pointer flex justify-center items-center gap-2 relative"
          onMouseEnter={() => setActiveSubMenu(index)}
          onMouseLeave={() => setActiveSubMenu(null)}
        >
          {item.name}
          {/* <BsChevronDown /> */}
          {activeSubMenu === index && item.subMenu && (
            <ul className="absolute top-6  left-0 flex flex-col justify-center items-start bg-white px-5 py-5 rounded-md shadow-md">
              {item.subMenu.map((subMenu, subIndex) => (
                <li
                  key={subIndex}
                  className="py-2 px-4 flex items-center justify-between hover:bg-slate-100 w-full transition duration-300 rounded-md mb-2"
                >
                  <div className="flex items-center">
                  <div className="mr-2 transition-transform transform hover:translate-x-2">
                      {React.createElement(subMenu.icon)}
                    </div>
                    <div>{subMenu?.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
