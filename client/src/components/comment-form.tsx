import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { postComment } from "../api/comments";
import { useParams } from "react-router-dom";
import clsx from "clsx";

type Inputs = {
  comment: string;
  rating: number;
};

function CommentForm() {
  const { recipeId } = useParams();

  if (!recipeId) return;

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Inputs>();

  const ratingValue = watch("rating", 0);

  //Create a new Comment
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (req: CommentBody) => postComment(req, recipeId),
    onError: (error: Error) => {
      toast.error(`Something went wrong: ${error.message}`);
    },
    onSuccess: () => {
      toast.success("Comment created 🎉");
      queryClient.invalidateQueries({ queryKey: [`comments_${recipeId}`] });
    },
  });

  const onSubmitForm: SubmitHandler<Inputs> = (data) => {
    const request: CommentBody = { ...data, date: new Date() };
    mutation.mutate(request);
    reset();
  };

  const onInvalid = () => {
    if (Object.keys(errors).length > 0) {
      Object.keys(errors).forEach((key) => {
        const errorMessage = errors[key as keyof Inputs]?.message;
        if (errorMessage) {
          toast.error(errorMessage);
        }
      });
    }
  };

  return (
    <section className="bg-gray-100 rounded-md shadow-md p-4">
      <h1 className="text-lg font-semibold mb-2">Add a comment</h1>
      <form onSubmit={handleSubmit(onSubmitForm, onInvalid)}>
        <div className="mb-2">
          <textarea
            id="comment"
            {...register("comment", { required: "Comment is required" })}
            placeholder="Type your comment here..."
            className="w-full p-2 border rounded-lg"
            rows={4}
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="rating" className="text-gray-700 font-bold mb-2">
            Rating
          </label>
          <div className="flex gap-x-2">
            {Array.from(Array(5)).map((_, i) => (
              <Controller
                key={i}
                control={control}
                rules={{ required: true }}
                name="rating"
                render={({ field: { onChange } }) => (
                  <span
                    className={clsx(
                      "text-2xl cursor-pointer drop-shadow-sm",
                      i + 1 > ratingValue
                        ? "text-slate-300"
                        : "text-primary-orange"
                    )}
                    onClick={() => onChange(i + 1)}
                  >
                    ★
                  </span>
                )}
              />
            ))}
          </div>
        </div>
        <div className="mb-4 w-full flex justify-end">
          <button
            disabled={!isValid || isSubmitting}
            type="submit"
            className="bg-primary-orange disabled:opacity-50 text-white py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default CommentForm;
