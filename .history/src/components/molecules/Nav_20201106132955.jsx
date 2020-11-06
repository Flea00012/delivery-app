import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../../components/'

export default function Nav() {
  return (
    <Router>
      <Route>
      <Home />

        <div>Nav Bar</div>
      </Route>
      
      <Switch>
        
      </Switch>
    </Router>
  );
}
