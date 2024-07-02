import { BarChart, ChefHat, CookingPot } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

interface CardRecipeProps {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  rating: string;
  diet: string;
  cuisine: string;
  difficulty: string;
}

const CardRecipe: React.FC<CardRecipeProps> = ({
  id,
  imageSrc,
  title,
  rating,
  diet,
  cuisine,
  description,
  difficulty,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[18rem] border border-slate-200 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
      onClick={() => {
        navigate(`/recipes/${id}`);
      }}
    >
      <div className="w-full h-[14rem] relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="h-14 w-full bg-gradient-to-b from-transparent via-transparent to-slate-100 absolute bottom-0" />
      </div>
      <div className="px-3 pb-4 pt-1 flex flex-col gap-1 bg-gradient-to-b from-slate-100 to-white rounded-t-md">
        <div className="flex flex-col gap-0.5">
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl truncate">{title}</p>
            <p className="text-primary-orange text-lg font-bold">{rating} ★</p>
          </div>
        </div>
        <div className="text-sm flex flex-col h-28">
          <p className="text-slate-700 flex-1 pt-2">{description}</p>
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
