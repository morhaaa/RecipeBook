import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
  comment: string;
  rating: number;
};

function CommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div className="mb-2">
          <textarea
            id="comment"
            {...register("comment", { required: "Comment is required" })}
            placeholder="Type your comment here..."
            className="w-full p-2 border rounded-lg"
            rows={4}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="text-gray-700 font-bold mb-2">
            Rating{" "}
            <span className="font-medium"> (number between 0 and 5)</span>
          </label>
          <input
            type="number"
            id="rating"
            {...register("rating", {
              required: "Rating is required",
              min: { value: 0, message: "Rating must be at least 0" },
              max: { value: 5, message: "Rating cannot exceed 5" },
            })}
            className="w-full p-2 border rounded-lg"
            min={0}
            max={5}
          />
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
