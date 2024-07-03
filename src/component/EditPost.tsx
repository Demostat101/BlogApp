import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Props, blogContextProvider } from "../contextComponent/Context"

interface PostTypes {
    posts:Props[],
    handleEdit: (id:string) => void,
    editTitle: string,
    editPost:string,
    setEditTitle: React.Dispatch<React.SetStateAction<string>>,
    setEditPost: React.Dispatch<React.SetStateAction<string>>
  }

const EditPost = () => {
    const {id} = useParams();

    const {posts, handleEdit, editTitle, editPost, setEditTitle, setEditPost}:PostTypes = blogContextProvider();

    const post:any = posts.filter((post)=> (post.id).toString() === id)
    console.log(posts);
    

    useEffect(()=>{

        if (post) {

            setEditPost(post.body)
            setEditTitle(post.title)
        } 

    },[post, setEditPost, setEditTitle])
    

  return (
    <main className="w-full h-screen bg-blue">

        {/* { editTitle && */

       <>
            <h2>Edit Post</h2>
            <form className="mt-96 border-solid border-2 w-full h-screen" action="" onSubmit={(e)=> e.preventDefault()}>
                <input type="text" placeholder="edit title"  value={editTitle} onChange={(e)=> setEditTitle(e.target.value)} /> <br />

                <textarea  name="" id="" placeholder="edit post" value={editPost} onChange={(e)=> setEditPost(e.target.value)}></textarea>

                <button onClick={()=> handleEdit(post.id)}>SubMit Edit</button>
            </form>
       </>


        }

      
    </main>
  )
}

export default EditPost
