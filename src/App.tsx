import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './component/Header'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import Home from './component/Home'
import NewPost from './component/NewPost'
import PostPage from './component/PostPage'
import About from './component/About'
import Error404 from './component/Error404'
import { useState } from 'react'
import { postData } from './dbComponent/db'

export  interface Props {
  id:number,
  title:string,
  body:string
}




function App() {

  const [search, setSearch] = useState("");
  const [posts, setPost] = useState<Props[]>(postData)

  
  

  return (
    <>
    <div className='fixed top-0 w-full'>
    <Header/>
    <NavBar search={search} setSearch={setSearch}/>
    </div>
    
    <div className='mt-36'>
    <Routes>
      <Route path='/' element={<Home posts={posts.filter((post)=> post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)}/>}/>
      <Route path='/post' element={<NewPost/>}/>
      <Route path='/post/:id' element={<PostPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
    </div>

    <Footer/>
      
    </>
  )
}

export default App
