
//Nav() is used to supply all pages with a Navigation 

//react core
import { Link } from 'react-router-dom';

//import styles
import '../../css/styles.css';

//import components

//navigation bar component
export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/home">
          <li>Home</li>
        </Link>

        <Link to="/login">
          <li>Login</li>
        </Link>

        <Link to="/signup">
          <li>Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
}
