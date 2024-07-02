import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createContext, useContext } from "react";
import useAxiosFetch from '../useAxiosFetch/UseAxiosFetch';
import axios from 'axios';


export  interface Props {
    id:string,
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

    const {data, fetchError, isLoading} = useAxiosFetch("http://localhost:4000/postData");
    
    useEffect(()=>{
      setPost(data);
    },[data])


   const searchPost = posts.filter((post)=> post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1).reverse()

   useEffect (()=>{
        searchPost
   },[posts,search])
   
    const handleDelete = async(id:string) => {
          await axios.delete(`http://localhost:4000/postData/${id}`)
          try {
            let poster = posts.filter((post) => post.id !== id );
            setPost(poster)
            navigate("/")
          } catch (error:any) {
            console.log(`Error: ${error.message}`);
          }
       }

       const openPost = () => {
        
        setOpen(true);
      
      };

      const closePost = () => {
        setOpen(false);
       
      };

      const submitBlog = async() => {
        
        const add = {
          id:(posts.length + 1).toString(),
          title:addTitle,
          body:addPost
        }

        try {

          const response = await axios.post("http://localhost:4000/postData",add);
          if (addTitle==="" || addPost==="") {

            return;
          } else {
            return setPost((prev:any) => {
              setAddTitle("")
              setAddPost("")
              setOpen(false)
              return [...prev, response.data]
            })
          }
        } catch (error:any) {
          console.log(`Error: ${error.message}`);
          
        }

       

        
      }


   return (
     <blogContext.Provider value={{search,setSearch,posts,setPost,addTitle,setAddTitle,addPost, setAddPost,open,setOpen,searchPost, handleDelete, openPost,closePost, submitBlog,fetchError,isLoading}}>
        {children}
     </blogContext.Provider>
   )
 }
 