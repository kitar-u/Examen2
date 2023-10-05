import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/damas"}>Damas Chinas</Link></li>
            <li><Link to={"/first"}>Mi primera pagina</Link></li>
            <li><Link to={"/snake"}>Snake</Link></li>
            <li><Link to={"/pokedex"}>Pokedex</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar