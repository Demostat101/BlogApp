import { useParams } from "react-router-dom"
import { Props, blogContextProvider } from "../contextComponent/Context";
import NewPost from "./NewPost";
import Form from "./Form";
import {format} from "date-fns"



interface PostTypes {
  posts:Props[],
  handleDelete: (id:number) => void
}


const PostPage = () => {
  const {posts, handleDelete}:PostTypes = blogContextProvider()

  const {id} = useParams();
  const postPageFilter = posts.filter((post)=> post.id.toString()=== id)
  console.log(postPageFilter);
  

  
  return (
    <article className="w-full max-h-screen flex flex-col xl:max-w-[1000px]">
      <NewPost>
        <Form/>
      </NewPost>

      {
        postPageFilter.map((postPage)=>{

          return <div key={postPage.id} className="border-solid border-2 shadow-sm max-w-96 h-full m-4 p-2">
            <h2 className="text-2xl font-bold">{postPage.title}</h2>
            <small>
            
            {
              format(new Date(), 'MMMM dd, yyyy pp')
            }
            </small> <br />
            <small>{postPage.body}</small> <br />
            <button className="bg-red-500 text-white font-bold w-40 h-9 mt-3 mb-3 rounded" type="button" onClick={()=> handleDelete(postPage.id)}>Delete</button>
          </div>
        })
      }
      
    </article>
  )
}

export default PostPage
