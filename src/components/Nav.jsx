import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Nav = () => {
  return (
    <div className="w-full h-[100px] flex justify-between align items-center px-8 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center align items-center rounded-md shadow-xl">
        <IoFastFoodSharp className="w-[30px] h-[30px] text-green-500" />
      </div>
      <form className="w-[70%] h-[60%] bg-white flex justify-start align items-center gap-4 rounded-md shadow-xl px-4">
        <IoSearchOutline className="text-green-500 w-[20px] h-[20px] rounded-md shadow-md" />
        <input
          type="text"
          placeholder="Search Items..."
          className="w-[100%] outline-none text-[20PX] font-medium"
        />
      </form>
      <div className="w-[60px] h-[60px] bg-white flex justify-center align items-center rounded-md shadow-xl relative">
        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-[20px] h-[20px] flex justify-center align items-center">
          0
        </span>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
};

export default Nav;
