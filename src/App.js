import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="empty-color full-height row">
        <div className="label col-md-4"></div>
        <div className="label col-md-4"></div>
        <div className="label col-md-4"></div>
      </div>
    </div>
  );
}

export default App;
