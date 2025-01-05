// import { Link } from "react-router-dom"
import { Input } from "../ui/input"
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



const Header = () => {
  return (
    <div className="w-full h-fit md:px-12 lg:px-24 xl:px-32 px-5 py-3 flex justify-between items-center flex-row bg-black">

    {/* <Link to='/'>
      <img src="/main-logo.svg" alt="" className="w-32 mt-3 mb-3 md:visible lg:visible xl:visible hidden" />
      <img src="/logo-fevicon.svg" alt="" className="w-8 mt-3 mb-3 md:hidden lg:hidden xl:hidden visible" />
    </Link> */}


      <div className="seachBarSection w-1/2">
        <Input type= "search" placeholder= "Search a Product" className="w-full  bg-white"/>
      </div>
      <div className="cartDropDownSection">
      <Popover >
        <PopoverTrigger className="text-white px-3 py-2 rounded-lg flex justify-center items-center flex-row gap-2 transition-all">
          <FaCartShopping className="w-5"/>
          <IoIosArrowDown/>
        </PopoverTrigger>
        <PopoverContent className="mt-6">
          <span>Cart is Empty</span>
        </PopoverContent>
      </Popover>

      </div>
      
    </div>
  )
}

export default Header
