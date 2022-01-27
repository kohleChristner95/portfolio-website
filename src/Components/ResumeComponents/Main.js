/* eslint-disable no-unused-expressions */
import React from "react";
import List from "./List";

const Main = (props) => {
  const listArray = [];
  const experience = [
    {
      timeLine: "September 2020 - Present",
      jobTitle: "Software Developer",
      location: "Firefly Integrations - Middlebury, IN",
      responsibilities: [
        "Programmed config files written in JSON",
        "Helped maintain mobile apps written in Angular.js combined with Ionic Capacitor for cross platform capabilities",
        "Helped upload new builds and test flights to both the google play store and app store",
        "Started as an entry-level developer and worked up to a team lead role within 10 months",
      ],
    },
    {
      timeLine: "April 2019 - September 2020",
      jobTitle: "Fire Saftety Technician",
      location: "M&M Fire Protection & Security - Goshen, IN",
      responsibilities: [
        "Inspected, serviced, and installed fire extinguishers per NFPA standards",
        "Inspected and serviced emergency lighting per NFPA standards",
        "Communicated with customers regarding service needs",
      ],
    },
    {
      timeLine: "April 2018 - April 2019",
      jobTitle: "Assistant Service Manager",
      location: "Hawkins Water Tech. - Middlebury, IN",
      responsibilities: [
        "Coordinated water softener installation schedule",
        "Communicated with customers with questions regarding water quality needs",
        "Recorded customer information on Watertight software",
        "Coordinated service schedule with service manager",
      ],
    },
  ];

  const education = [
    {
      timeLine: "August 2015 - December 2015",
      jobTitle: "Undecided",
      location: "Grace College - Winona Lake, IN",
      responsibilities: [],
    },
    {
      timeLine: "August 2014 - May 2015",
      jobTitle: "Undecided",
      location: "Indiana University South Bend",
      responsibilities: [],
    },
  ];

  const skills = [
    "Problem-solving",
    "Attention to detail",
    "Clear communication",
    "Self-driven",
    "Strong desire to learn",
  ];

  listArray.push(experience, education, skills);

  function mappingList(arg) {
    if (arg === "Experience") {
      for (const x of listArray) {
        console.log(x.length);
        if (x.length === 3) {
          return x.map((list) => {
            return <List list={list} />;
          });
        }
      }
    }
    if (arg === "Education") {
      for (const x of listArray) {
        if (x.length === 2) {
          return x.map((list) => {
            return <List list={list} />;
          });
        }
      }
    }
    if (arg === "Skills") {
      for (const x of listArray) {
        if (x.length > 3) {
          return (
            <div className="container">
              {x.map((list) => {
                return <li className="text-start ms-5">{list}</li>;
              })}
              <div style={{ height: "30px" }}></div>
            </div>
          );
        }
      }
    }
  }

  return (
    <div className="container-fluid">
      {props.headerTitles.map((headerName) => {
        return (
          <>
            <h3 className="container text-start mb-4" key={headerName}>
              {headerName}
            </h3>
            {mappingList(headerName)}
          </>
        );
      })}
    </div>
  );
};

export default Main;
