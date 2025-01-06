import { CartState } from "@/context/Context";
import { LuLoaderCircle } from "react-icons/lu";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


import { TiPlus } from "react-icons/ti";


const Home = () => {
  const {
    state: { products },
  } = CartState();

  console.log(products); // Should log the fetched products once they are available

  return (
    <div className="mt-8">
      


      <div className="w-full h-full flex justify-start items-start flex-col flex-wrap md:gap-4 gap-0 px-3 ">

        <div className="filters w-full h-full p-2 flex  md:justify-between justify-start md:items-center items-start md:flex-row flex-col md:gap-0 gap-4">
     
        
        <Drawer>
          <DrawerTrigger ><Button>Apply Filters <TiPlus/></Button></DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Filters</DrawerTitle>
              <DrawerDescription>
                <div className="w-full flex  justify-center items-center">
                  <Filters className="w-1/2"/>
                </div>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
             
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        </div>



        <div className="listedProductSection  w-full h-ful  p-2">
        {products.length === 0 ? (
          <div className="w-full h-screen flex justify-center items-center flex-col gap-3">
            <LuLoaderCircle className="w-10 h-10 animate-spin"/>
            <span>Please wait for a moment</span>
          </div>
        ) : (
        
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2">
            {products.map(( product) => (
              
                <SingleProduct product = {product} key={product.id}/>
          
            ))}
          </div>
          
        )}
        </div>
      </div>

    </div>
  );
};

export default Home;
