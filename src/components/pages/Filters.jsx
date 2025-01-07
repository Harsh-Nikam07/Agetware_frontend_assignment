import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";
import Rating from "./Rating";
import { CartState } from "@/context/Context";
import { LiaTimesSolid } from "react-icons/lia";

const Filters = () => {
  const {
    productState: { sort, byRating, selectedCategories },
    productDispatch,
  } = CartState();

  // console.log(sort, byRating, selectedCategories);
  // console.log("Selected Categories:", selectedCategories);

  return (
    <div className="w-full flex justify-center items-center flex-col gap-10">
          <div className="w-full h-full flex md:justify-center justify-start md:items-center items-start md:flex-row flex-col md:gap-28 gap-6">
      {/* Price Sorting */}
      <div className="w-fit flex justify-start items-start flex-col gap-2">
        <div>
          <span className="font-bold">FIlter by Price</span>
        </div>
        <RadioGroup className="w-full flex justify-start items-start md:flex-row flex-col md:gap-5 gap-2"
          defaultValue={sort === "lowToHigh" ? "ascending" : "descending"}
          onValueChange={(value) => {
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: value === "ascending" ? "lowToHigh" : "highToLow",
            });
          }}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ascending" id="ascending" />
            <Label htmlFor="ascending">Low to High</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="descending" id="descending" />
            <Label htmlFor="descending">High to Low</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Category Filtering */}
      <div className="flex justify-start items-start flex-col gap-2">
        <div>
          <span className="font-bold">FIlter by Category</span>
        </div>
          <div className="flex justify-start items-start md:flex-row flex-col md:gap-5 gap-2">
          {["men's clothing", "women's clothing", "electronics", "jewelery"].map((category) => (
          <div className="flex items-center space-x-2" key={category}>
            <Checkbox
              id={category}
              checked={selectedCategories.includes(category)}
              onCheckedChange={(checked) => {
                console.log(`Checkbox for ${category} is now ${checked}`);
                productDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: { category, checked },
                });
              }}
            />
            <label
              htmlFor={category}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          </div>
        ))}
          </div>
      </div>

      {/* Rating Filtering */}
      <div className="flex justify-start items-start flex-col gap-2">
        <label
          htmlFor="rating"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Rating
        </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "SORT_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </div>

  
      <div>
        <Button variant="outline" className="font-bold  "
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear all Filters <LiaTimesSolid/>
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Filters;
