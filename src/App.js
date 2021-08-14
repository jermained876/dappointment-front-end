
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './component/home'
import Admin from './component/admin/dashboard'

function App() {
  return (
    <Router>
      <div>
       
           <Switch>
          <Route path="/home">
            <Home />
          </Route>


          <Route path="/admin">
            <Admin />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
