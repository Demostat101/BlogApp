import { blogContextProvider } from "../contextComponent/Context"

// interface Props {
//     search:string,
//     setSearch:React.Dispatch<React.SetStateAction<string>>
// }

const Input = () => {
  const {search, setSearch} = blogContextProvider()
  return (
    <form onSubmit={(e)=> e.preventDefault()} className="w-1/2 ">

        <input type="text" placeholder="Search posts" className="w-full h-10 border-none outline-none text-black p-2" value={search} onChange={(e) => setSearch(e.target.value)} />
      
    </form>
  )
}

export default Input
