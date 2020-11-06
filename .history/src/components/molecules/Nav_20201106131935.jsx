import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages'

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
