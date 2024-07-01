import { BarChart, ChefHat, CookingPot } from "lucide-react";
import React from "react";

interface CardRecipeProps {
  imageSrc: string;
  title: string;
  description: string;
  rating: string;
  diet: string;
  cuisine: string;
  difficulty: string;
}

const CardRecipe: React.FC<CardRecipeProps> = ({
  imageSrc,
  title,
  description,
  rating,
  diet,
  cuisine,
  difficulty,
}) => {
  return (
    <div className="w-[16rem] border border-slate-200 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
      <div className="w-full h-[12rem] relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="h-16 w-full bg-gradient-to-b from-transparent to-slate-900 absolute bottom-0 opacity-75" />
      </div>
      <div className="px-3 py-2 flex flex-col bg-gradient-to-b from-slate-100 to-white rounded-t-md">
        <div className="flex flex-col gap-0.5">
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl truncate">{title}</p>
            <p className="text-primary-orange text-lg font-bold">{rating} ★</p>
          </div>
        </div>
        <div className="py-2 text-sm h-[7.5rem] flex flex-col">
          <p className="text-slate-700 flex-1">{description}</p>
          <div className="flex justify-between pt-2">
            <p className="flex gap-x-1 items-center text-xs text-secondary ">
              <CookingPot size={16} strokeWidth={1.25} />
              <span className="self-end">{diet}</span>
            </p>
            <p className="flex gap-x-1 items-center text-xs text-secondary">
              <ChefHat size={16} strokeWidth={1.25} />
              <span className="self-end">{cuisine}</span>
            </p>
            <p className="flex gap-x-1 items-center text-xs text-secondary">
              <BarChart size={20} strokeWidth={1.25} />
              <span className="self-end">{difficulty}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
