import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <h3>{props.logo}</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/starwars">StarWars!</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </nav>
    </header>
  )
}

export default Header;