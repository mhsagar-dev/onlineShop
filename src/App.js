import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
