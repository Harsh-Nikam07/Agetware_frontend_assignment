import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaTrash } from "react-icons/fa";
import { CartState } from "@/context/Context";
import Rating from "./Rating";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);
  const [quantities, setQuantities] = useState({});


  useEffect(() => {
    const initialQuantities = cart.reduce((acc, product) => {
      acc[product.id] = 1; 
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cart]);


  useEffect(() => {
    const calculatedTotal = cart.reduce(
      (acc, product) =>
        acc + Number(product.price) * (quantities[product.id] || 1),
      0
    );
    setTotal(calculatedTotal);
  }, [cart, quantities]);

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="w-full h-full flex justify-evenly items-start md:flex-row flex-col gap-2">
          <div className="md:w-3/4 w-full p-5">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Product Name</TableHead>
                  <TableHead className="w-[200px] text-center">
                    Product Image
                  </TableHead>
                  <TableHead className="w-[200px]">Price</TableHead>
                  <TableHead className="w-[200px]">Ratings</TableHead>
                  <TableHead className="w-[200px]">Quantity</TableHead>
                  <TableHead className="w-[20px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.title}
                    </TableCell>
                    <TableCell className="flex justify-center items-center">
                      <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-contain my-4"
                      />
                      </Link>
                    </TableCell>
                    <TableCell>$ {product.price}</TableCell>
                    <TableCell>
                      <Rating rating={Math.floor(product.rating.rate)} />
                    </TableCell>
                    <TableCell>
                      <Select
                        defaultValue={1}
                        onValueChange={(value) =>
                          handleQuantityChange(product.id, Number(value))
                        }
                      >
                        <SelectTrigger className="w-[80px]">
                          <SelectValue placeholder="Quantity" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from(
                            {
                              length: Math.floor(product.rating.count * 0.1),
                            },
                            (_, i) => (
                              <SelectItem key={i + 1} value={i + 1}>
                                {i + 1}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <FaTrash
                        className="cursor-pointer hover:text-red-700"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="md:w-1/5 w-full">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Order Summary</CardTitle>
                <CardDescription>
                  <span className="text-lg">
                    Subtotal {cart.length} Products
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="">Total : $ {Math.floor(total)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Proceed to Checkout 💸</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-5"> 
          <span className="font-bold text-2xl">
            The cart is empty
          </span>

          <Link to="/">
            <Button>
              Browse Products
              <IoIosArrowForward/>
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
