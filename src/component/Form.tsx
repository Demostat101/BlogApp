import { FaTimes } from "react-icons/fa"

import { blogContextProvider } from "../contextComponent/Context"

const Form = () => {
  const {addTitle, setAddTitle,addPost, setAddPost, closePost, submitBlog} = blogContextProvider()
  return (
    <form className="absolute mt-6 sm:w-[300px] md:w-[400px] z-20 xl:max-w-96 w-96 h-96 flex flex-col border-2 justify-center bg-blue-300 p-3 gap-2  " onSubmit={(e)=> e.preventDefault()}>

        <FaTimes className="absolute top-2 right-2 text-red-500 cursor-pointer" size={30} onClick={ closePost}/>

        <input className="w-full outline-none" type="text" value={addTitle} onChange={(e)=> setAddTitle(e.target.value)} placeholder="Add Title" />

        <textarea name="" id="" value={addPost} onChange={(e)=> setAddPost(e.target.value)} placeholder="add your blog message" className="w-full outline-none h-56"></textarea>

        <button onClick={submitBlog} className="bg-blue-400 text-white font-bold h-8 text-2xl rounded">Submit</button>
     
    </form>
  )
}

export default Form
