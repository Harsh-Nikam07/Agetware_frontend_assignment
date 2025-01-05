import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "../ui/button"

const Filters = () => {
  return (
    <div className="w-full h-full flex  justify-start items-start flex-col gap-2">
      <div>
      <RadioGroup defaultValue="accending">
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="accending" id="accending" />
            <Label htmlFor="accending">accending</Label>
        </div>
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="deccending" id="deccending" />
            <Label htmlFor="deccending">deccending</Label>
        </div>
        </RadioGroup>

      </div>

      <div className="flex justify-start items-start flex-col gap-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="mensCatagory" />
        <label
            htmlFor="mensCatagory"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
           Mens
        </label>
        </div>

        <div className="flex items-center space-x-2">
        <Checkbox id="mensCatagory" />
        <label
            htmlFor="mensCatagory"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
           Mens
        </label>
        </div>

        <div className="flex items-center space-x-2">
        <Checkbox id="womensCatagory" />
        <label
            htmlFor="womensCatagory"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
           Womens
        </label>
        </div>


        <div className="flex items-center space-x-2">
        <Checkbox id="eletronics" />
        <label
            htmlFor="eletronics"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
           Electronics
        </label>
        </div>

        <div className="flex items-center space-x-2">
        <Checkbox id="jwellery" />
        <label
            htmlFor="jwellery"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
           Jewelery
        </label>
        </div>
      </div>

      <div>
        <Button>Clear Filters</Button>
      </div>
    </div>
  )
}

export default Filters
