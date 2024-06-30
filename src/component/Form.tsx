

// interface Pass {
//     addTitle:string,
//     addPost:string,
//     setAddPost:React.Dispatch<React.SetStateAction<string>>,
//     setAddTitle:React.Dispatch<React.SetStateAction<string>>
// }

import { blogContextProvider } from "../contextComponent/Context"

const Form = () => {
  const {addTitle, setAddTitle,addPost, setAddPost, closePost} = blogContextProvider()
  return (
    <form className="absolute z-20 w-full max-h-screen flex flex-col">
        <input className="w-full border-solid border-2" type="text" value={addTitle} onChange={(e)=> setAddTitle(e.target.value)} placeholder="Add Title" />

        <textarea name="" id="" value={addPost} onChange={(e)=> setAddPost(e.target.value)} placeholder="add your blog message" className="w-full border-solid border-2"></textarea>

        <button onClick={closePost}>Submit</button>
     
    </form>
  )
}

export default Form
