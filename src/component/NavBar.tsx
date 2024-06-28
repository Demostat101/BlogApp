import { NavLink } from "react-router-dom"
import Input from "./Input"

interface Props {
    search:string,
    setSearch:React.Dispatch<React.SetStateAction<string>>
}


const NavBar = ({search,setSearch}:Props) => {
  return (
    <nav className="flex gap-3 justify-between place-items-center text-center  w-full h-15 p-2 bg-black text-white">
      <Input search={search} setSearch={setSearch} />
      <div className="flex gap-8 font-bold h-10 mt-3">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/post"}>Post</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      
    </nav>
  )
}

export default NavBar
