import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Props, blogContextProvider } from "../contextComponent/Context";

interface PostTypes {
  posts: Props[];
  handleEdit: (id: string) => void;
  editTitle: string;
  editPost: string;
  setEditTitle: React.Dispatch<React.SetStateAction<string>>;
  setEditPost: React.Dispatch<React.SetStateAction<string>>;
}

const EditPost = () => {
  const { id } = useParams();

  const {
    posts,
    handleEdit,
    editTitle,
    editPost,
    setEditTitle,
    setEditPost,
  }: PostTypes = blogContextProvider();

  const post: any = posts.find((post) => post._id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditPost(post.body);
      setEditTitle(post.title);
    }
  }, [post, setEditPost, setEditTitle]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center place-items-center">
      {
        <div className="md:max-w-[1000px] max-w-[1000px] p-4 h-96 sm:mt-40 md:mt-10">
          <h2 className="text-3xl mb-3 font-bold">Edit Post</h2>
          <form
            className=" w-full border-solid border-2 sm:w-[300px] md:w-[400px] xl:max-w-96 md:h-96  h-96 flex flex-col bg-blue-300 p-3 sm:h-56"
            action=""
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="h-14 w-full outline-none sm:h-10 md:h-14 pl-2"
              type="text"
              placeholder="edit title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />{" "}
            <br />
            <textarea
              className="w-full outline-none h-56 sm:h-28 md:h-56 pl-2"
              name=""
              id=""
              placeholder="edit post"
              value={editPost}
              onChange={(e) => setEditPost(e.target.value)}
            ></textarea>{" "}
            <br />
            <button
              className="bg-blue-400 text-white font-bold h-8 text-2xl rounded"
              onClick={() => handleEdit(post._id)}
            >
              Submit
            </button>
          </form>
        </div>
      }
    </div>
  );
};

export default EditPost;
