import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='main-header'>
      <nav>
            <Link to={"/home"}>About Me</Link>
            <Link to={"/Convertidor"}>Convertidor</Link>
            <Link to={"/first"}>Mi primera pagina</Link>
            <Link to={"/snake"}>Snake</Link>
            <Link to={"/pokedex"}>Pokedex</Link>
      </nav>
    </header>
  )
}

export default Navbar