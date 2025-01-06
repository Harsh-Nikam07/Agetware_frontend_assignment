import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const SingleProduct = ({ product }) => {
  return (
    <div  className='w-full'>
        {/* <div>
            <span>Category: {product.category}</span>
            <span>Title: {product.title}</span>
        </div> */}

        <div>
        <Card>
            <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
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
