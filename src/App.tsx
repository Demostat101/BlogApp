import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './component/Header'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import Home from './component/Home'
import PostPage from './component/PostPage'
import About from './component/About'
import Error404 from './component/Error404'
// import { useState } from 'react'
// import { postData } from './dbComponent/db'


// export  interface Props {
//   id:number,
//   title:string,
//   body:string,
//   addTitle:string,
//   setAddTitle: React.Dispatch<React.SetStateAction<string>>,
//   open:boolean,
//   setOpen:React.Dispatch<React.SetStateAction<boolean>>
// }






function App() {
  // const navigate = useNavigate()

  // const [search, setSearch] = useState("");
  // const [posts, setPost] = useState<Props[]>(postData)
  // const [addTitle, setAddTitle] = useState("")
  // const [addPost, setAddPost] = useState("")
  // const [open, setOpen] = useState(false)

  // const handleDelete = (id:number) => {
  //  let poster = posts.filter((post) => post.id !== id );
  //  setPost(poster)
  //  navigate("/")
  // }

  
  

  return (
    <>
    <div className='fixed top-0 w-full'>
    <Header/>
    <NavBar/>
    </div>
    
    <div className='mt-36'>
    <Routes>
      <Route path='/' element={<Home /* posts={posts.filter((post)=> post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1).reverse() } */ />}/>
      <Route path='/post/:id' element={<PostPage /* posts={posts}  handleDelete={ handleDelete} *//>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
    </div>

    <Footer/>
      
    </>
  )
}

export default App
