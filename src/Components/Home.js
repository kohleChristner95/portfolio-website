import React from "react";

const Home = () => {
  return (
    <div className="empty-color container-fluid yellow-font">
      <div style={{ height: "15px" }}></div>
      <div className="label">
        <img
          className="img-fluid img-home-page"
          alt=""
          src="Sam-me-and-Miles.jpg"
        />
      </div>
      <div className="label">
        <div className="my-4" style={{ lineHeight: 1.7 }}>
          Hi! Welcome to my website portfolio. My name is Kohle Christner and
          I'm a software developer based out of Shipshewana, Indiana. I
          currently help maintain several mobile apps at a RV tech company in
          Middlebury, Indiana called{" "}
          <a target="_blank" rel="noreferrer" href="https://fireflyint.com/">
            Firefly Integrations
          </a>
          . Being self taught, I have a huge passion for learning and expanding
          my programming skills. I have experience using javascript with ionic
          capacitor as well as devops experience deploying new app releases to
          the android and iOS stores. Please take a look at my github account to
          see my latest projects or contact me for inquiries!
          <h2>Personal Interests</h2>
          <div style={{ lineHeight: 1.7 }}>
            I have a beautiful wife Samantha and a 6 month old son Miles. We
            love to do life together. It's not abnormal for us to get home from
            work and just chill on the floor while we have something playing on
            tv. Other personal interests I have are hunting, video games, and I
            love listening to music.
          </div>
        </div>
      </div>
      <div className="label mb">
        <img className="img-fluid img-home-page" alt="" src="Sam-and-I.jpg" />
      </div>
      <div style={{ height: "15px" }}></div>
    </div>
  );
};

export default Home;
