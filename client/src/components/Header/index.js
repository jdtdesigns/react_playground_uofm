import './header.css';

function Header(props) {
  return (
    <header className={`row ${props.isLoggedIn ? 'orange' : ''}`} >
      <h1>{props.title}</h1>
      <nav>
        {props.isLoggedIn ?
          <a href="/logout">Log Out</a> :
          <a href="/login">Log In</a>}
      </nav>
    </header >
  );
}

export default Header;