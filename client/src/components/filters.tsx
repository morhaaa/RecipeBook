import { CircleX, SlidersHorizontal, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface FiltersProps {
  filters: string[];
  activeFilters: string[];
}

function Filters({ filters, activeFilters }: FiltersProps) {
  return (
    <div className="flex gap-x-4 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="border rounded-md px-4 py-0.5 text-secondary border-gray-300 font-medium shadow flex gap-2 items-center justify-center">
          <SlidersHorizontal size={13} strokeWidth={3} />
          <span>Filters</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-[5.5rem]" sideOffset={8}>
          <DropdownMenuLabel> Diet</DropdownMenuLabel>
          {filters.map((filter, key) => (
            <DropdownMenuItem className="pl-4">
              <input
                type="checkbox"
                id="Vegeterian"
                name="Vegeterian"
                value="Vegeterian"
                key={key}
              />
              <label id="Vegeterian" className="ml-2">
                {filter}
              </label>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Cuisine</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>

      {activeFilters.map((item, index) => (
        <div
          className="border rounded-md h-8 text-secondary border-gray-300 font-medium shadow flex items-center"
          key={index}
        >
          <span className="flex-1 px-4">{item}</span>
          <button className="px-1 border-l border-slate-300 bg-slate-200 hover:bg-slate-300 h-full flex items-center cursor-pointer">
            <X size={12} strokeWidth={3} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Filters;
