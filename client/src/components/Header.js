import { NavLink } from 'react-router-dom';
import { useStore } from '../store';

function Header(props) {
  const { state: { title } } = useStore();

  return (
    <header>
      <h3>{title}</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/starwars">StarWars!</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </nav>
    </header>
  )
}

export default Header;

// const data = {
//   state: {
//     title: 'Example Title'
//   }
// }

// const {state: {title}} = data;