import { useState } from 'react'
import { postData } from '../dbComponent/db';
import { useNavigate } from 'react-router-dom'


export  interface Props {
    id:number,
    title:string,
    body:string,
    addTitle:string,
    setAddTitle: React.Dispatch<React.SetStateAction<string>>,
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
  }



import { createContext, useContext } from "react";

 const blogContext = createContext<null | any>({})

 export const blogContextProvider = ()=>{
        return useContext(blogContext)
 }

 
 export const Context = ({children}:any) => {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [posts, setPost] = useState(postData)
    const [addTitle, setAddTitle] = useState("")
    const [addPost, setAddPost] = useState("")
    const [open, setOpen] = useState(false)

   const searchPost = posts.filter((post)=> post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1).reverse()

    const handleDelete = (id:number) => {
        let poster = posts.filter((post) => post.id !== id );
        setPost(poster)
        navigate("/")
       }

       const openPost = () => {
        
        setOpen(true);
      
      };
      const closePost = () => {
     
        setOpen(false);
       
      };

   return (
     <blogContext.Provider value={{search,setSearch,posts,setPost,addTitle,setAddTitle,addPost, setAddPost,open,setOpen,searchPost, handleDelete, openPost,closePost}}>
        {children}
     </blogContext.Provider>
   )
 }
 