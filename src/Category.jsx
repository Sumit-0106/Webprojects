import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { FaPizzaSlice } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
const Categories = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 2,
    name: "Breakfast",
    icon: (
      <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    ),
  },
  {
    id: 3,
    name: "Soup",
    icon: <TbSoup className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 4,
    name: "Pasta",
    icon: <GiNoodles className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 5,
    name: "Main Course",
    icon: <MdOutlineFoodBank className="w-[90px] h-[60px] text-green-600" />,
  },
  {
    id: 6,
    name: "Pizza",
    icon: <FaPizzaSlice className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 7,
    name: "Burgers",
    icon: <GiHamburger className="w-[60px] h-[60px] text-green-600" />,
  },
];

export default Categories;
