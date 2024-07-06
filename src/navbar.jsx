import { Link } from "react-router-dom";
function Navbar({ children, ...props }) {
  return (
    <nav id={props.id}>
      <Link to="/">
        <span id="site-title">React</span>
      </Link>
      <ul>
        <li>
          <Link to="/essentials">React Essentials</Link>
        </li>
        <li>
          <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
