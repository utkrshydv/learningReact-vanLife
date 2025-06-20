import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export default function VanDetails(){

  const params = useParams()
  const [van, setVan ] = useState(null)

  useEffect(() => {
    const fetchSpecificVanData = async () => {
      const specificVanDataApi = await fetch(`/api/vans/${params.id}`)
      const specificVanData = await specificVanDataApi.json()
     setVan(specificVanData.vans)
  }
  fetchSpecificVanData()
}, [params.id])




  return (
      <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
  )
}