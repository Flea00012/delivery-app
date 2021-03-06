//react core
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

//import components
import Home from '../../components/pages/Home.jsx';
import Login from '../pages/Login';


  const navStyle = {
    color: 'black',
  };
}

export default function Nav() {
  return (
    <nav>
      <h3> Logo </h3>
      <ul>
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>

        <Link style={navStyle} to="/login">
          <li>Login</li>
        </Link>

        <Link style={navStyle} to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}
