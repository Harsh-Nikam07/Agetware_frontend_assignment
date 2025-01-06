import { useParams } from 'react-router-dom';
import { CartState } from '@/context/Context';

const ProductDetails = () => {
  const { id } = useParams();
  const {
    state: { products },
  } = CartState();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  );
};

export default ProductDetails;
