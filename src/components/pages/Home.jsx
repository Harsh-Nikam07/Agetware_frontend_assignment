import { CartState } from "@/context/Context";


const Home = () => {
  const {
    state: { products },
  } = CartState();

  console.log(products); // Should log the fetched products once they are available

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
