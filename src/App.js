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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <footer className="empty-color yellow-font">
          Made by Kohle Christner 🔥
        </footer>
      </div>
    </Router>
  );
};

export default App;
