import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createContext, useContext } from "react";


export  interface Props {
    id:number,
    title:string,
    body:string,
    addTitle:string,
    setAddTitle: React.Dispatch<React.SetStateAction<string>>,
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
  }




 const blogContext = createContext<null | any>({})

 export const blogContextProvider = ()=>{
        return useContext(blogContext)
 }

 
 export const Context = ({children}:any) => {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [posts, setPost] = useState<Props[]>([])
    const [addTitle, setAddTitle] = useState("")
    const [addPost, setAddPost] = useState("")
    const [open, setOpen] = useState(false)

    const Api = async()=>{
      try {
        const data = await fetch("http://localhost:4000/postData")
        if (!data.ok) {
          throw new Error("No data Found!");
          
        } else {
          const response = await data.json();
          setPost(response)

          
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }

    useEffect(()=>{
      Api()
    },[])

   const searchPost = posts.filter((post)=> post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1).reverse()

   useEffect (()=>{
        searchPost
   },[posts,search])
  

   

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

      const submitBlog = () => {
        
        const add = {
          id:posts.length + 1,
          title:addTitle,
          body:addPost
        }

        if (addTitle==="" || addPost==="") {
          return;
        } else {
          return setPost((prev:any) => {
            setAddTitle("")
            setAddPost("")
            setOpen(false)
            return [...prev, add]
          })
        }

        
      }


   return (
     <blogContext.Provider value={{search,setSearch,posts,setPost,addTitle,setAddTitle,addPost, setAddPost,open,setOpen,searchPost, handleDelete, openPost,closePost, submitBlog}}>
        {children}
     </blogContext.Provider>
   )
 }
 