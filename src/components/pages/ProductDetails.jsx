import { useParams } from 'react-router-dom';
import { CartState } from '@/context/Context';
import Rating from './Rating';
import { Button } from '../ui/button';
import {  useNavigate } from "react-router-dom";
import { LuLoaderCircle } from "react-icons/lu";
import { FaCartShopping } from "react-icons/fa6";
const ProductDetails = () => {
  const { id } = useParams();
  const {
    state: { products, cart }, dispatch
  } = CartState();

  const product = products.find((product) => product.id === parseInt(id));
  const navigation = useNavigate();

  if (!product) {
    setTimeout(() => {
      navigation("/")
    }, 1000)
    return <div className='w-full h-screen flex justify-center items-center flex-col gap-5'>
      <LuLoaderCircle className='animate-spin'/>
      <span>Product not found Redirecting to Homepage</span></div>;
  }

  return (
    <div className='w-full flex justify-center items-start md:flex-row flex-col gap-10 mt-6'>

      <div className='image-section  md:w-1/3 w-full flex justify-center items-center p-6 border border-gray-400 rounded-xl mx-1'>
        <img src={product.image} alt={product.title} className='w-2/3 h-2/3 object-contain' />
      </div>

      <div className='product-details-section md:w-2/4 w-full   px-3'>
          <div className='mb-4'>
            <span className='font-semibold md:text-3xl text-xl'>{product.title}</span>
          </div>

          <div className='ratings-reviews-section w-full flex justify-between items-center flex-row md:pr-0 pr-6 my-4'>
              <div className='flex justify-start items-center flex-row gap-2 border border-black px-2 py-1 rounded-lg'>
                <Rating rating={Math.floor(product.rating.rate)} style={{color: "black"}}/>
                <span className='md:pt-0 pt-[1px] text-black font-bold'>{product.rating.rate}</span>
              </div>

              <div>
                <span>({product.rating.count}) Reviews on this Product</span>
              </div>
          </div>

          <div className='w-full my-7'>
          {
                cart.some( p => p.id === product.id) ? (
                  <div className="w-full flex justify-end ">
                    <Button className="w-full"
                    onClick={() => {
                      try {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product
                        });
                      } catch (error) {
                        console.error("Error removing from cart:", error);
                      }
                    }}
                    variant="destructive">Remove from Cart</Button>
                  </div>
                ) : (
                  <div className="w-full flex justify-end ">
                    <Button className="w-full animate-bounce"
                      onClick={() => {
                        try {
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: product
                          });
                        } catch (error) {
                          console.error("Error adding to cart:", error);
                        }
                      }}
                    >Add to Cart <FaCartShopping/></Button>
                  </div>
                )
              }
          </div>

          <div>
            <span>{product.description}</span>
          </div>
      </div>
      {/* <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p> */}
    </div>
  );
};

export default ProductDetails;
