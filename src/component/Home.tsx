

const Home = ({posts}) => {

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const day = [1,2,3,4,5,6,7]
    
    

    


  return (
    <main className="p-4">
      {
       posts.length 
       ?  posts.map((data)=>{
        return <section key={data.id} >
        <h3 className="font-bold">{data.title}</h3>
        <small>
            <span>{month[new Date().getMonth()]}</span> 
            <span> {day[new Date().getDay()]}</span>,
            <span> {new Date().getFullYear()}</span>
        </small>
        <p className="mt-3">{data.body}...</p>
        <hr className="mt-5 mb-3" />
      </section>
    }) 
    : <p className="mt-56 text-center">No post to display</p>
      }
    </main>
  )
}

export default Home
