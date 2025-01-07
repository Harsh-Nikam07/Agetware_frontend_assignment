import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [], // Initialize with an empty array
    cart: [],
  });


  const [productState, productDispatch] = useReducer(productReducer, {
    sort: null,
    byRating: 0,
    searchQuery: "",
    selectedCategories: [], // Initial state for category filtering
  });
  

  // Fetch products asynchronously
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log("Fetched Products:", data); // Log the fetched data
      dispatch({ type: "SET_PRODUCTS", payload: data }); // Dispatch action to update products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);



  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch}}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
