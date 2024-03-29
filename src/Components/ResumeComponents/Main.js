/* eslint-disable no-unused-expressions */
import React from "react";
import List from "./List";

const Main = ({ headerTitles }) => {
  const credentials = [];
  const experience = [
    {
      timeLine: "September 2020 - Present",
      jobTitle: "Software Developer",
      location: "Firefly Integrations",
      responsibilities: [
        "Programmed config files written in JSON",
        "Maintained cross platform mobile apps using AngularJS and Ionic Capacitor",
        "Maintained legacy software working with Altia Design software",
        "Uploaded new app builds and test flights to both the Google Play Store and Apple App Store",
        "Started out as an entry-level developer and worked up to a team lead role within 1 year",
      ],
    },
    {
      timeLine: "April 2019 - September 2020",
      jobTitle: "Fire Safety Technician",
      location: "M&M Fire Protection & Security",
      responsibilities: [
        "Inspected, serviced, and installed fire extinguishers per NFPA standards",
        "Inspected and serviced emergency lighting per NFPA standards",
        "Communicated with customers regarding service needs",
      ],
    },
    {
      timeLine: "April 2018 - April 2019",
      jobTitle: "Assistant Service Manager",
      location: "Hawkins Water Tech.",
      responsibilities: [
        "Independently coordinated water softener installation schedule",
        "Coordinated service schedule with service manager",
        "Took customer service calls for questions regarding water quality needs",
        "Recorded customer information on Watertight software",
      ],
    },
    {
      timeLine: "January 2016 - April 2018",
      jobTitle: "Delivery / Warehouse Personnel",
      location: "Hawkins Water Tech.",
      responsibilities: [
        "Delivered water softener salt and bottled water to both residential and commercial customers",
        "Maintained inventory and helped restore used equipment to be reused as rentals for customers",
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
    "Proven ability to learn new skills",
  ];

  credentials.push(experience, education, skills);

  function mappingList(header) {
    if (header === "Experience") {
      for (const x of credentials) {
        if (x.length === 4) {
          return x.map((list) => {
            return <List list={list} />;
          });
        }
      }
    }
    if (header === "Education") {
      for (const x of credentials) {
        if (x.length === 2) {
          return x.map((list) => {
            return <List list={list} />;
          });
        }
      }
    }
    if (header === "Skills") {
      for (const x of credentials) {
        if (x.length > 4) {
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
      {headerTitles.map((headerName) => {
        return (
          <>
            <h3 className="container text-start mb-3" key={headerName}>
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
