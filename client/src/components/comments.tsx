import { useQuery } from "@tanstack/react-query";
import { getComments } from "../api/comments";
import dayjs from "dayjs";

interface CommentsProps {
  recipeId: string;
}

function Comments({ recipeId }: CommentsProps) {
  // Fetch data
  const { data, isLoading, isError, error } = useQuery<any, Error>({
    queryKey: [`comments_${recipeId}`],
    queryFn: () => getComments(recipeId),
  });

  return (
    <section className="">
      <h1 className="text-2xl font-semibold mb-4 border-b pb-2">Comments</h1>
      {data && data.length > 0 ? (
        data.map((comment: CommentRecipe) => (
          <div
            key={comment.id}
            className="flex items-start mb-4 p-4 bg-gray-100 rounded-md shadow-md"
          >
            <img
              src="/assets/user.png"
              alt="user"
              className="h-20 w-20 rounded-full mr-4"
            />
            <div>
              <span className="text-primary-orange text-lg font-medium">
                {comment.rating} ★
              </span>
              <p className="font-semibold text-secondary">{comment.comment} </p>
              <p className="text-gray-500 text-sm">
                {dayjs(comment.date).format("DD/MM/YYYY")}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No comments available</p>
      )}
    </section>
  );
}

export default Comments;
