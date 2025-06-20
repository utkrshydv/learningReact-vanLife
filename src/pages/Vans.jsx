import { useEffect, useState} from "react"
import { Link } from "react-router-dom"

function Vans(){

  const [ vans, setVans ] = useState([])

   useEffect(() => {
     const fetchData = async () =>{
     const vanDataApi = await fetch("/api/vans")
     const vanData = await vanDataApi.json()
     console.log(vanData)
     setVans(vanData.vans)
    }
    fetchData()
   
  }, [])

  const vanElements = vans.map((van) => {
    return (
      <Link key={van.id} to={`/vans/${van.id}`}>
      <div key={van.id} className="van-tile">
        <img src = {van.imageUrl}/>
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
    )
  })
 
  return(
   <div className="van-list-container">
    <h1>Explore our van options</h1>
    <div className="van-list">
      {vanElements}
    </div>
   </div>
  )
}

export default Vans
