import { CartState } from "@/context/Context";
import { LuLoaderCircle } from "react-icons/lu";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  console.log(products); // Should log the fetched products once they are available

  return (
    <div className="mt-8">
      


      <div className="w-full h-full flex justify-start items-start flex-row flex-wrap gap-4 px-3 ">

        <div className="filters w-1/4 h-full bg-slate-400 p-2">
          <Filters/>
        </div>

        <div className="listedProductSection w-2/3 h-ful  p-2">
        {products.length === 0 ? (
          <div className="w-full h-screen flex justify-center items-center flex-col gap-3">
            <LuLoaderCircle className="w-10 h-10 animate-spin"/>
            <span>Please wait for a moment</span>
          </div>
        ) : (
        
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
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
