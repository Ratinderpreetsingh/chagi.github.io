import React from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
const Search = () => {
  return (
    <div className="flex items-center">
      {/* search */}
      <div className="hidden  items-center border border-gray-300 p-2 rounded w-72 md:flex">
        <AiOutlineSearch className="mx-2 text-2xl text-gray-500" />
        <input
          type="text"
          className="flex-grow outline-none text-[10px] text-gray-500"
          placeholder="Search by product, category and collection"
        />
      </div>

      <div className="md:block mx-4 text-gray-500 hidden ">|</div>
      {/* add to cart and wishlist */}
      <div className="flex items-center gap-4">
      {/* mobile search */}
      <AiOutlineSearch className="block text-xl md:hidden " />
        <AiOutlineHeart className="text-xl" />
        <BsBag className="text-xl" />
      </div>
    </div>
  );
};

export default Search;
