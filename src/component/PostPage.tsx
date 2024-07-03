import { useParams } from "react-router-dom";
import { Props, blogContextProvider } from "../contextComponent/Context";
import NewPost from "./NewPost";
import Form from "./Form";
import { format } from "date-fns";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface PostTypes {
  posts: Props[];
  handleDelete: (id: number) => void;
  navigate: any;
}

const PostPage = () => {
  const { posts, handleDelete, navigate }: PostTypes = blogContextProvider();

  const { id } = useParams();
  const postPageFilter = posts.filter((post) => post.id.toString() === id);

  return (
    <article className="w-full max-h-screen flex flex-col xl:max-w-[1000px] mt-28 sm:mt-36 border-l-2 border-r-2 border-solid">
      <NewPost>
        <Form />
      </NewPost>

      {postPageFilter.map((postPage: any) => {
        return (
          <div
            key={postPage.id}
            className="border-solid border-2 shadow-md max-w-96 h-full m-10 p-2"
          >
            <h2 className="text-2xl font-bold">{postPage.title}</h2>
            <small>{format(new Date(), "MMMM dd, yyyy pp")}</small> <br />
            <small>{postPage.body}</small> <br />
            <div className="flex gap-5">
              <button
                className="mt-3 mb-3 "
                onClick={() => navigate(`/edit/${postPage.id}`)}
              >
                <FaRegEdit className="text-blue-500 hover:text-blue-600" size={40}/>
              </button>
              <button
                className=" mt-3 mb-3 rounded"
                type="button"
                onClick={() => handleDelete(postPage.id)}
              >
                <MdDelete className="text-red-500 hover:text-red-600" size={40}/>
              </button>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default PostPage;
