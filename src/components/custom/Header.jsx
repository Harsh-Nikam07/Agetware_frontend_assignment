// import { Link } from "react-router-dom"
import { Input } from "../ui/input"
import { FaCartShopping } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CartState } from "@/context/Context";

import { Button } from "../ui/button";
import { Link } from "react-router-dom";



const Header = () => {

  const { state : { cart }, dispatch} = CartState()


  return (
    <div className="w-full h-fit md:px-12 lg:px-24 xl:px-32 px-5 py-3 flex justify-between items-center flex-row bg-black">

    {/* <Link to='/'>
      <img src="/main-logo.svg" alt="" className="w-32 mt-3 mb-3 md:visible lg:visible xl:visible hidden" />
      <img src="/logo-fevicon.svg" alt="" className="w-8 mt-3 mb-3 md:hidden lg:hidden xl:hidden visible" />
    </Link> */}


      <div className="seachBarSection w-1/2">
        <Input type= "search" placeholder= "Search a prod" className="w-full  bg-white"/>
      </div>
      <div className="cartDropDownSection">
      <Popover >
        <PopoverTrigger className="text-white px-3 py-2 rounded-lg flex justify-center items-center flex-row gap-2 transition-all relative">
          <FaCartShopping className="text-xl w-12"/>
          {/* <IoIosArrowDown/> */}
          {cart.length > 0 && <span className="absolute top-0 right-0 bg-slate-600 text-white text-[12px] rounded-full px-2 py-[4px] font-bold">{cart.length}</span>}
        </PopoverTrigger>
        <PopoverContent className="mt-6 flex justify-start items-start flex-col gap-5">
          {
            cart.length > 0 ? (
              <>
                {
                  cart.map((prod) => (
                    <div key={ prod.id } className="w-full flex justify-between items-center flex-row ">
                      <div className="w-full flex justify-start items-start flex-row gap-3">
                        <img src={prod.image} alt={prod.title} className="w-12 h-12 object-contain"/>
                        <div className="w-full flex justify-start items-start flex-col gap-1">
                          <span className="text-xs font-semibold">{prod.title.split(" ").length > 4 ? `${prod.title.split(" ").slice(0, 4).join(" ")}...` : prod.title}</span>
                          <span className="text-base font-bold">$ {prod.price}</span>
                        </div>
                      </div>

                      <div>
                        <FaTrash className="cursor-pointer hover:text-red-700"
                          onClick={() => 
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod
                            })
                          }
                        />
                      </div>

                      
                    </div>
                  ))
                }

                <Link to="/cart" className="w-full">
                  <Button  className="w-full">Got to Cart <FaCartShopping className="text-xs"/></Button>
                </Link>
              </>
            ) : (
              <span>Cart is Empty</span>
            )
          }
        </PopoverContent>
      </Popover>

      </div>
      
    </div>
  )
}

export default Header
