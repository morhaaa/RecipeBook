import NewRecipeForm from "./new-recipe-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const CreateRecipe = () => {
  return (
    <Dialog>
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
        <NewRecipeForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateRecipe;
