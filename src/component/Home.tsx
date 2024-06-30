import { useNavigate } from "react-router-dom";

// import { Props } from "../App";
import NewPost from "./NewPost";
import Form from "./Form";
import { Props, blogContextProvider } from "../contextComponent/Context";

interface Propss {
  posts: Props[],
  addTitle:string,
  addPost:string,
  setAddPost:React.Dispatch<React.SetStateAction<string>>
  setAddTitle:React.Dispatch<React.SetStateAction<string>>

}

const Home = () => {
  const {posts}:Propss = blogContextProvider()



    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const day = [1,2,3,4,5,6,7]

    const navigate = useNavigate()

    // const handleNavigate = ()=>{
    //   navigate(/post/)
    // }

  
    


  return (
    <main className="p-4">
      <NewPost>
        <Form/>
      </NewPost>
      {
       posts.length 
       ?  posts.map((data)=>{
        return <section key={data.id} onClick={()=> navigate(`/post/${data.id}`)} >
        <h3 className="font-bold">{data.title}</h3>
        <small>
            
            <span>{month[new Date().getMonth()]}</span> 
            <span> {day[new Date().getDay()]}</span>,
            <span> {new Date().getFullYear()}</span>
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
