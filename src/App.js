import './App.css';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./components/main";

function App() {
  return ( <HashRouter basename='/'>
    <Switch>
 
    <Route exact={true} path="/">
      <Main/>
    </Route>
  </Switch>
  </HashRouter>)
}

export default App;
