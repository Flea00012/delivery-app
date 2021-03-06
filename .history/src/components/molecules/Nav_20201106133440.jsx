import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../components/pages/Home.jsx';
import Login from '../pages/Login';

export default function Nav() {
  return (
    <Router>
      <Route>
        <div>Nav Bar</div>
      </Route>
      <Switch>
        <Home />
        <Login />
      </Switch>
    </Router>
  );
}
