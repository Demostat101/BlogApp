import { NavLink } from "react-router-dom";
import Input from "./Input";
import { blogContextProvider } from "../contextComponent/Context";

// interface Props {
//     search:string,
//     setSearch:React.Dispatch<React.SetStateAction<string>>
// }

const NavBar = () => {
  const { openPost } = blogContextProvider();
  return (
    <nav className="gap-3 justify-between place-items-center text-center  w-full h-15 p-2 bg-black text-white md:flex xl:max-w-[1000px]">
      <Input />
      <div className="flex gap-8 font-bold h-10 mt-3">
        <NavLink to={"/"}>Home</NavLink>
        <div onClick={openPost} className="cursor-pointer">
          Add Post
        </div>
        <NavLink to={"/about"}>About</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
