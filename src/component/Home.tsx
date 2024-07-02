import { useNavigate } from "react-router-dom";
import NewPost from "./NewPost";
import Form from "./Form";
import { Props, blogContextProvider } from "../contextComponent/Context";
import { format } from "date-fns";

interface Propss {
  searchPost: Props[];
  fetchError: boolean;
  isLoading: boolean;
}

const Home = () => {
  const { searchPost, fetchError, isLoading }: Propss = blogContextProvider();

  const navigate = useNavigate();

  return (
    <main className="p-4 md:mt-36 xl:xl:max-w-[1000px] sm:mt-52 w-full shadow-md h-full border-solid border-r-2 border-l-2  ">
      <NewPost>
        <Form />
      </NewPost>
      {isLoading && (
        <div className="w-full h-96 flex flex-col justify-center place-items-center">
          <div className="loader"></div>
        </div>
      )}

      {!isLoading && fetchError && (
        <div className="w-full h-32 flex flex-col justify-center place-items-center text-center">
          <div className="text-red-600">{fetchError}</div>
        </div>
      )}

      {!isLoading && !fetchError && searchPost.length ? (
        searchPost.map((data) => {
          return (
            <section
              key={data.id}
              onClick={() => navigate(`/post/${data.id}`)}
              className=" cursor-pointer odd:bg-white even:bg-slate-500 even:text-white pl-2 "
            >
              <h3 className="font-bold">{data.title}</h3>
              <small>{format(new Date(), "MMMM dd, yyyy pp")}</small>
              <div className="mt-3">
                {data.body.length > 25 ? (
                  <div>{data.body.slice(0, 26)}...</div>
                ) : (
                  <div>{data.body}</div>
                )}
              </div>
              <hr className="mt-5 mb-3" />
            </section>
          );
        })
      ) : !isLoading && !fetchError && !searchPost.length ? (
        <p className=" text-center">No post to display</p>
      ) : (
        ""
      )}
    </main>
  );
};

export default Home;
