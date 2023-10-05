import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='main-header'>
      <nav>
            <Link to={"/home"}>Home</Link>
            <Link to={"/damas"}>Damas Chinas</Link>
            <Link to={"/first"}>Mi primera pagina</Link>
            <Link to={"/snake"}>Snake</Link>
            <Link to={"/pokedex"}>Pokedex</Link>
      </nav>
    </header>
  )
}

export default Navbar