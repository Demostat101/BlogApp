import { useNavigate } from "react-router-dom";
import NewPost from "./NewPost";
import Form from "./Form";
import { Props, blogContextProvider } from "../contextComponent/Context";
import {format} from "date-fns"

interface Propss {
  searchPost: Props[],
}

const Home = () => {
  const {searchPost}:Propss = blogContextProvider()

    const navigate = useNavigate()


  return (
    <main className="p-4 md:mt-20 xl:xl:max-w-[1000px] sm:mt-52 w-full shadow-md h-full border-solid border-r-2 border-l-2  ">
      <NewPost>
        <Form/>
      </NewPost>
      {
       searchPost.length 
       ?  searchPost.map((data)=>{
        return <section key={data.id} onClick={()=> navigate(`/post/${data.id}`)} className=" cursor-pointer odd:bg-white even:bg-slate-500 even:text-white pl-2 ">
        <h3 className="font-bold">{data.title}</h3>
        <small>
            {
              format(new Date(), 'MMMM dd, yyyy pp')
            }
        </small>
        <div className="mt-3">{data.body.length > 25 ? <div>{data.body.slice(0,26)}...</div> : <div>{data.body}</div>}</div>
        <hr className="mt-5 mb-3" />
      </section>
    }) 
    : <p className="mt-56 text-center">No post to display</p>
      }
    </main>
  )
}

export default Home
