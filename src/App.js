import "./App.css";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="empty-color full-height row">
        <div className="label col-md-4"></div>
        <div className="label col-md-4">
          <h1>About</h1>
          <div>
            Hi! Welcome to my website portfolio. My name is Kohle Christner and
            I'm a software developer based out of Shipshewana, Indiana. I
            currently help maintain several mobile apps at a RV tech company in
            Middlebury, Indiana called Firefly Integrations. I have a huge
            passion for learning and expanding my programming skills. I have
            experience using javascript with ionic capacitor and deploying new
            app releases to the android and iOS stores. Please take a look at my
            github account to see my latest projects or contact me for
            inquiries!
            <h2>Personal interests</h2>
            <div>
              I have a beautiful wife Samantha and a 6 month old son Miles. We
              love to do life together. It's not abnormal for us to get home
              from work and just chill on the floor while we have something
              playing on tv. Other personal interests I have are hunting, video
              games, and I'm a big music enthusiast.
            </div>
          </div>
        </div>
        <div className="label col-md-4"></div>
      </div>
    </div>
  );
};

export default App;
