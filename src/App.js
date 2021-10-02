import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import ProductDetails from './components/ProductDetails';
import Details from './Pages/Details';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Cart from './Pages/Cart';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/test'>
         <Cart></Cart>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
