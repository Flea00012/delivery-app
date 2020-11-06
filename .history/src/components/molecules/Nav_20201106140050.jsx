//react core
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

//import components
import Home from '../../components/pages/Home.jsx';
import Login from '../pages/Login';

function Nav(){

    const navStyle = {
        const navStyle = {
            color: 'white'
        }
    }
}

export default function Nav() {
  return (
    <nav>
      <h3> Logo </h3>
      <ul>
      
      <Link style={navStyle} to='/home'>
      <li></li>
      </Link>
      
      
      </ul>
    </nav>
  );
}
