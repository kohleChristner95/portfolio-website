import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
        <footer>Made by Kohle Christner 🔥</footer>
      </div>
    </Router>
  );
};

export default App;
