import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../../../.history/src/components/Home_20201106125828';

export default function Nav() {
  return (
    <Router>
      <Route>
        <div>Nav Bar</div>
      </Route>
      <Switch>
      <Home/>
      </Switch>
    </Router>
  );
}
