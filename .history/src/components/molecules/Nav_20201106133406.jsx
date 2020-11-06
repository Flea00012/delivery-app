import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../components/pages/Home.jsx';
import Lo


export default function Nav() {
  return (
    <Router>
      <Route>
        <div>Nav Bar</div>
      </Route>
      <Switch>

        <Home />
      </Switch>
    </Router>
  );
}
