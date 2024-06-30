import { useParams } from "react-router-dom"
import { Props, blogContextProvider } from "../contextComponent/Context";


interface PostTypes {
  posts:Props[],
  handleDelete: (id:number) => void
}


const PostPage = () => {
  const {posts, handleDelete}:PostTypes = blogContextProvider()

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const day = [1,2,3,4,5,6,7]
  const {id} = useParams();
  const postPageFilter = posts.filter((post)=> post.id.toString()=== id)
  console.log(postPageFilter);
  
  return (
    <article className="w-full max-h-screen flex flex-col">

      {
        postPageFilter.map((postPage)=>{
          return <div key={postPage.id} className="">
            <h2 className="text-2xl font-bold">{postPage.title}</h2>
            <small>
            
              <span>{month[new Date().getMonth()]}</span> 
              <span> {day[new Date().getDay()]}</span>,
              <span> {new Date().getFullYear()}</span>
            </small>
            <p>{postPage.body}</p>
            <button type="button" onClick={()=> handleDelete(postPage.id)}>Delete</button>
          </div>
        })
      }
      
    </article>
  )
}

export default PostPage
