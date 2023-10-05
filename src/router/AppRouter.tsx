import Damas from "../pages/Damas"
import FirstPage from "../pages/FirstPage"
import HomePage from "../pages/HomePage"
import Pokedex from "../pages/Pokedex"
import Snake from "../pages/Snake"
import Navbar from "./Navbar"
import {Routes,Route} from 'react-router-dom'


const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/*" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/damas" element={<Damas/>}/>
            <Route path="/first" element={<FirstPage/>}/>
            <Route path="/snake" element={<Snake/>}/>
            <Route path="/pokedex" element={<Pokedex/>}/>
        </Routes>
    </>
  )
}

export default AppRouter