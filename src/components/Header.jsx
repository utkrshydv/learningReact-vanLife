import { Link } from 'react-router-dom'


export default function Header(){
  return(
     <header>
      <Link className="site-logo" to="/">#<span className="letter">V</span>anLife</Link>
    <nav>
      <Link to="/host">Host</Link>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
    </nav>
   </header>
  )
}