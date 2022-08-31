import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <h3>{props.logo}</h3>
      <nav>
        {props.user ? (
          <>
            <span>Welcome, {props.user.email}</span>
            <NavLink to="/todos">View Todos</NavLink>
            <NavLink to="/todo-form">Create New Todo</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/auth-form">Register/Login</NavLink>
          </>
        )}

      </nav>
    </header>
  )
}

export default Header;