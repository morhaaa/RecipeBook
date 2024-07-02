import { LoaderCircle, SlidersHorizontal, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
} from "./ui/dropdown-menu";
import useCategories from "../hook/useCategories";
import { useMemo } from "react";

interface FiltersProps {
  toggleFilters: (key: FilterKey, value?: string) => void;
  activeFilters: ActiveFilters;
}

function Filters({ toggleFilters, activeFilters }: FiltersProps) {
  const { cuisines, difficulties, diets, isLoading, getCategoryLabel } =
    useCategories();

  const filtersToDisplay = useMemo(
    () =>
      Object.keys(activeFilters).filter((key) => !["q", "page"].includes(key)),
    [activeFilters]
  );
  return (
    <div className="flex gap-x-4 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="border rounded-md px-4 py-0.5 text-secondary border-gray-300 font-medium shadow flex gap-2 items-center justify-center">
          <SlidersHorizontal size={13} strokeWidth={3} />
          <span>Filters</span>
        </DropdownMenuTrigger>
        {!isLoading ? (
          <DropdownMenuContent className="ml-[5rem]">
            {/* Cuisines */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="font-medium py-2.5">
                Cuisines
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className=" p-0">
                {cuisines.map((filter) => (
                  <DropdownMenuItem key={filter.id} className="pl-4">
                    <input
                      type="checkbox"
                      id={filter.id}
                      name={filter.name}
                      value={filter.id}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const { id, checked } = e.target;
                        toggleFilters("cuisineId", checked ? id : undefined);
                      }}
                      checked={activeFilters["cuisineId"] === filter.id}
                    />
                    <label id={filter.id} className="ml-2">
                      {filter.name}
                    </label>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            {/* Diets */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="font-medium py-2.5">
                Diets
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-0">
                {diets.map((filter) => (
                  <DropdownMenuItem key={filter.id} className="pl-4">
                    <input
                      type="checkbox"
                      id={filter.id}
                      name={filter.name}
                      value={filter.id}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const { id, checked } = e.target;
                        toggleFilters("dietId", checked ? id : undefined);
                      }}
                      checked={activeFilters["dietId"] === filter.id}
                    />
                    <label id={filter.id} className="ml-2">
                      {filter.name}
                    </label>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            {/* Difficulty */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="font-medium py-2.5">
                Difficulties
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-0">
                {difficulties.map((filter) => (
                  <DropdownMenuItem key={filter.id} className="pl-4">
                    <input
                      type="checkbox"
                      id={filter.id}
                      name={filter.name}
                      value={filter.id}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const { id, checked } = e.target;
                        toggleFilters("difficultyId", checked ? id : undefined);
                      }}
                      checked={activeFilters["difficultyId"] === filter.id}
                    />
                    <label id={filter.id} className="ml-2">
                      {filter.name}
                    </label>
                  </DropdownMenuItem>
                ))}{" "}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent
            className="ml-[5rem] min-h-40 flex items-center justify-center"
            sideOffset={8}
          >
            <LoaderCircle
              size={32}
              strokeWidth={3}
              className="animate-spin text-gray-300"
            />
          </DropdownMenuContent>
        )}
      </DropdownMenu>

      {filtersToDisplay.map((item, index) => (
        <div
          className="border rounded-md h-8 text-secondary border-gray-300 hover:bg-slate-200 font-medium shadow flex gap-1 items-center cursor-pointer "
          key={index}
        >
          <span className="flex-1 pl-2">
            {getCategoryLabel(
              item,
              activeFilters[item.toString() as FilterKey] || ""
            )}
          </span>
          <button
            onClick={() => {
              toggleFilters(item as FilterKey);
            }}
            className="pr-2 pt-0.5  h-full flex items-center"
          >
            <X size={10} strokeWidth={3} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Filters;
