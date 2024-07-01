import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './component/Header'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import Home from './component/Home'
import PostPage from './component/PostPage'
import About from './component/About'
import Error404 from './component/Error404'






function App() {

  return (
    <div className=' min-h-screen flex flex-col place-items-center'>
    <div className='fixed top-0 w-full flex flex-col place-items-center '>
    <Header/>
    <NavBar/>
    </div>
    
    <div className='mt-36'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/post/:id' element={<PostPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
    </div>

    <Footer/>
      
    </div>
  )
}

export default App
