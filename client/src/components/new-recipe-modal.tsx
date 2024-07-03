import { useMutation, useQueryClient } from "@tanstack/react-query";
import NewRecipeForm from "./new-recipe-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { createRecipe } from "../api/recipes";
import toast from "react-hot-toast";
import { useState } from "react";

const CreateRecipe = () => {
  const [open, setOpen] = useState<boolean>(false);

  //Create newRecipe
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (req: RecipeBody) => createRecipe(req),
    onError: (error: Error) => {
      toast.error(`Something went wrong: ${error.message}`);
    },
    onSuccess: () => {
      toast.success("Recipe created 🎉");
      queryClient.invalidateQueries({ queryKey: [`recipes`] });
      setOpen(false);
    },
  });

  const onSubmit = (newComment: RecipeBody) => {
    mutation.mutate(newComment);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-btn-primary hover:bg-btn-primary-hovered px-6 py-1.5 rounded-md text-white font-medium">
          Upload your recipe
        </button>
      </DialogTrigger>
      <DialogContent className="p-10">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Share with us your recipe
          </DialogTitle>
        </DialogHeader>
        {/* FORM  */}
        <NewRecipeForm onSubmitForm={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateRecipe;
