import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Rating from './Rating';
import { Button } from '../ui/button';
import { CartState } from '@/context/Context';
import { Link } from 'react-router-dom';
  

const SingleProduct = ({ product }) => {


  const {
    state: { cart },
    dispatch
  } = CartState();

  console.log(cart);


  return (
    <div  className='w-full'>
        {/* <div>
            <span>Category: {product.category}</span>
            <span>Title: {product.title}</span>
        </div> */}

        <div className='h-full'>
        <Card className='h-full'>
        <CardHeader>
          
          <CardDescription className="w-full flex justify-center items-center">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className='w-32 h-32 object-contain'/>
            </Link>
          </CardDescription>
        </CardHeader>

            <CardContent>
              <div>
              <div>
                  {/* <CardTitle className="leading-5">{product.title.substring(0, 50) + '...'}</CardTitle> */}
                  <CardTitle className="leading-5">{product.title.split(" ").length > 8 ? `${product.title.split(" ").slice(0, 12).join(" ")}...` : product.title}</CardTitle>
                </div>

                <div className='w-full flex justify-between items-center flex-row flex-wrap my-3'>
                  <div className='price'>
                    <span>$ {product.price}</span>
                  </div>

                  <div className='rating'>
                    <Rating rating={Math.floor(product.rating.rate)}/>
                  </div>
                </div>
              </div>


            </CardContent>

            <CardFooter className="w-full flex justify-end ">

              {
                cart.some( p => p.id === product.id) ? (
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
                ) : (
                  <Button className="w-full"
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
                  >Add to Cart</Button>
                )
              }

            </CardFooter>

        </Card>

        </div>
    </div>
  )
}

SingleProduct.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleProduct
