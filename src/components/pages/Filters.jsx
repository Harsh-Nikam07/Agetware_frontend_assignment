import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";
import Rating from "./Rating";
import { CartState } from "@/context/Context";

const Filters = () => {
  const {
    productState: { sort, byRating, selectedCategories },
    productDispatch,
  } = CartState();

  console.log(sort, byRating, selectedCategories);
  console.log("Selected Categories:", selectedCategories);

  return (
    <div className="w-full h-full flex justify-start items-start flex-col gap-2">
      {/* Price Sorting */}
      <div>
        <RadioGroup
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
            <Label htmlFor="ascending">Ascending</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="descending" id="descending" />
            <Label htmlFor="descending">Descending</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Category Filtering */}
      <div className="flex justify-start items-start flex-col gap-2">
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

      {/* Rating Filtering */}
      <div>
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
        <Button
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default Filters;
