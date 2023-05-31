import CartWidget from "./CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="NavBar"  class="navbar navbar-expand-lg navbar-light p-3"  id="menu">
        <div class="container">
         <Link to = '/'>
              <span class="fs-5 text-primary fw-bold">MainJeans.</span>
              </Link>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="*}navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
         <div className= 'Categorias'>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
          <NavLink to = {'/category/1'} className={({isActive}) => isActive ? 'ActiveOption' :' Option'}class="nav-link" aria-current="page" href="*">Jean Cargo</NavLink>
              </li>
              <li class="nav-item">
              <NavLink to = {'/category/2'} className={({isActive}) => isActive ? 'ActiveOption' :' Option'} class="nav-link" href="*equipo">Jean Roto</NavLink>
              </li>
              <li class="nav-item">
              <NavLink to = {'/category/3'} className={({isActive}) => isActive ? 'ActiveOption' :' Option'}  class="nav-link" href="*seccion-contacto">Jean Oversize</NavLink>
              </li>
            </ul>
            </div>
            <form class="d-flex">
              
              <button class="btn btn-primary btn-primary-outline-success" type="button"><CartWidget/></button>
            </form>
          </div>

        </div>
      </nav>
    )
}

export default NavBar;
