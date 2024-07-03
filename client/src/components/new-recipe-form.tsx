import { useState } from "react";
import useCategories from "../hook/useCategories";
import { CircleX, ImageUp } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface NewRecipeFormProps {
  onSubmitForm: (request: RecipeBody) => void;
}

interface FormData {
  name: string;
  instruction: string;
  ingredients: { name: string }[];
  cuisineId: string;
  dietId: string;
  difficultyId: string;
}

function NewRecipeForm({ onSubmitForm }: NewRecipeFormProps) {
  const { cuisines, diets, difficulties } = useCategories();
  const [ingredientInput, setIngredientInput] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const handleIngredientChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const ingredient = event.target.value;
    setIngredientInput(ingredient);
  };

  const addIngredient = () => {
    if (ingredientInput.trim()) {
      append({ name: ingredientInput.trim() });
      setIngredientInput("");
    }
  };

  const removeIngredient = (index: number) => {
    remove(index);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const onSubmit = (data: FormData) => {
    if (image) {
      const body: RecipeBody = {
        ...data,
        ingredients: data.ingredients.map((item) => item.name),
        image: image,
      };
      onSubmitForm(body);
      reset();
      setImage(null);
    } else {
      toast.error("Image is required");
    }
  };

  const onInvalid = () => {
    if (Object.keys(errors).length > 0) {
      Object.keys(errors).forEach((key) => {
        const errorMessage = errors[key as keyof FormData]?.message;
        if (errorMessage) {
          toast.error(errorMessage);
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="flex gap-10">
      {/* left side*/}
      <div className="flex flex-col gap-2">
        {image ? (
          <div className="relative">
            <button
              onClick={() => {
                setImage(null);
              }}
              className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 text-xs font-semibold  text-white rounded-full flex justify-center items-center shadow"
            >
              X
            </button>
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="h-60 w-64 shadow-lg"
            />
          </div>
        ) : (
          <div>
            <label
              htmlFor="image"
              className="text-secondary/60 flex justify-center items-center font-semibold h-60 w-64 bg-gray-100 border-2 border-gray-300 rounded border-dashed cursor-pointer"
            >
              <ImageUp size={32} />
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        )}
        {/* Cuisines */}
        <div>
          <label htmlFor="cuisine" className="text-lg font-semibold">
            Cuisine
          </label>
          <select
            id="cuisine"
            {...register("cuisineId")}
            className="w-full p-2 border rounded-lg shadow-md"
          >
            {cuisines.map((cuisine) => (
              <option key={cuisine.id} value={cuisine.id}>
                {cuisine.name}
              </option>
            ))}
          </select>
        </div>
        {/* Diets */}
        <div>
          <label htmlFor="diet" className="text-lg font-semibold">
            Diet
          </label>
          <select
            id="diet"
            {...register("dietId")}
            className="w-full p-2 border rounded-lg shadow-md"
          >
            {diets.map((diet) => (
              <option key={diet.id} value={diet.id}>
                {diet.name}
              </option>
            ))}
          </select>
        </div>
        {/* Difficulties */}
        <div>
          <label htmlFor="difficulty" className="text-lg font-semibold">
            Difficulty
          </label>
          <select
            id="difficulty"
            {...register("difficultyId")}
            className="w-full p-2 border rounded-lg shadow-md"
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty.id} value={difficulty.id}>
                {difficulty.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* right side*/}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <div>
          <label id="name" className="text-lg font-semibold">
            Title
          </label>
          <input
            type="string"
            id="name"
            {...register("name", { required: "Title is required" })}
            placeholder="Pasta al tartufo"
            className="w-full p-2 border rounded-lg shadow-md"
            min={0}
            max={5}
          />
        </div>
        {/* Instruction */}
        <div>
          <label id="instruction" className="text-lg font-semibold">
            Instruction
          </label>
          <textarea
            id="instruction"
            placeholder="Pasta al tartufo"
            {...register("instruction", {
              required: "Instruction are required",
            })}
            className="w-full p-2  border rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label className="text-lg font-semibold">Ingredients</label>
          <div className="w-full pl-3 p-0.5 border rounded-lg shadow-md flex">
            <input
              type="text"
              value={ingredientInput}
              onChange={handleIngredientChange}
              placeholder={`Ingredient`}
              className="flex-1  outline-none"
            />
            <button
              type="button"
              onClick={addIngredient}
              disabled={ingredientInput.length === 0}
              className="disabled:bg-slate-100 bg-black/70 text-white px-4 py-2 rounded"
            >
              Add Ingredient
            </button>
          </div>

          <ul className="flex-1 grid  grid-rows-6 grid-flow-col gap-x-10 auto-cols-min px-2 mt-4">
            {fields.map((ingredient, index) => (
              <li
                key={index}
                className="flex items-center justify-between w-24"
              >
                <input
                  {...register(`ingredients.${index}.name`)}
                  defaultValue={ingredient.name}
                  className="flex-1 outline-none"
                />
                <button type="button" onClick={() => removeIngredient(index)}>
                  <CircleX strokeWidth={2} size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full justify-end pb-2">
          <button
            type="submit"
            className="bg-primary-orange disabled:opacity-50 text-white py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewRecipeForm;
