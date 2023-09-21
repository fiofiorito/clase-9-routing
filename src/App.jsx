import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Route, Routes } from "react-router";
import { Link, NavLink } from 'react-router-dom';
import Detalle from './pages/Detalle';

function App() {
  return <>
    <h1>Clase 9 React routing</h1>
    <p>Este es un na q se puede manipular sus estilos 👇</p>
    <nav>
      <ul>
        <li><NavLink className={({ isActive }) => { isActive ? "active" : "" }} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => { isActive ? "active" : "" }} to='/about'>About</NavLink></li>
        <li><NavLink style={({ isActive }) => { isActive ? { color: "green" } : { color: "blue" } }} to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
    <p>Esta es la manera "basica" de tener un nav 👇</p>
    <nav>
      <ul>
        {/* Para lograr que no se recargue la pagina con cada routing, usar el componente Link (o NavLink)
      dentro de cada <li> de la nav y en vez de usar href=, se usa to='' */}
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/detalle/:id'>Detalle</Link></li>
      </ul>
    </nav>
    {/* para hacer el ruteo dentro de una app de react, se debe importar de
    react-router-dom el componente Routes y Route 
    PARA Q ESTO FUNCIONE SE DEBE MODIFICAR EL MAIN */}
    <Routes>
      <Route path='/' element={<Home />} />
      {/* cada Route debe tener su path y su element */}
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/detalle/:id' element={<Detalle />} />
    </Routes>



  </>
}

export default App
