import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

const Card = ({ name, image, price, type }) => {
  return (
    <div className="w-[280px] h-[350px] bg-white flex flex-col items-start p-3 gap-2 justify-center rounded-lg shadow-xl text-[20px] font-semibold text-gray-700  cursor-pointer transition-all duration-500 hover:border-2 hover:border-green-500">
      <div className="w-full h-[200px] flex items-center justify-center p-2 overflow-hidden">
        <img src={image} alt={name} className="object-cover rounded-lg" />
      </div>

      <div className="text-2xl font-semibold">{name}</div>

      <div className="w-full flex justify-between items-baseline">
        <div className="text-lg font-bold text-green-500">₹{price}/-</div>

        <div className="flex items-center gap-1">
          {type === "Veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span className="text-lg font-bold text-green-500">{type}</span>
        </div>
      </div>

      <button className="bg-green-700 text-white font-bold py-2 px-2 rounded-lg hover:bg-green-500 transition-all duration-200 flex w-full justify-center">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
