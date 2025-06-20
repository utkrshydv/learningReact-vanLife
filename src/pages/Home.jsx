import { Link } from "react-router-dom"

function Home(){
  return (
    <div className="home-container">
      <h1>You got the travel plans, we got the travel vans!</h1>

      <p>Add Adventure to your life by joining the #vanLife movement. Rent the perfect van to make your perfect road trip. </p>
      <Link to="/vans">Find your van</Link>
    </div>
    )
}


export default Home