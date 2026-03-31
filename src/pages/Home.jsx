import React from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import foodItems from "../../food.js";
const Home = () => {
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      <div className=" flex flex-wrap justify-center items-center gap-6  w-[100%] h-[100%] p-8">
        {Categories.map((item) => {
          return (
            <div className="w-[140px] h-[150px] bg-white flex flex-col items-start p-5 gap-4 justify-center rounded-md shadow-xl text-[20px] font-semibold text-gray-700 hover:bg-green-200 cursor-pointer transition-all duration-500">
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-6 p-8 w-[full] justify-center items-center pt-8 pb-8">
        {foodItems.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            id={item.id}
            price={item.price}
            type={item.food_type}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
