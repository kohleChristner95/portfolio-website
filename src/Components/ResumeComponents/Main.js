import React from "react";
import List from "./List";

const Main = ({ headerTitles }) => {
  // console.log(props.headerTitles);
  const experience = [
    {
      timeLine: "September 2020 - Present",
      jobTitle: "Software Developer",
      company: "Firefly Integrations",
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
      location: "M&M Fire Protection & Security",
      responsibilities: [
        "Inspected, serviced, and installed fire extinguishers per NFPA standards",
        "Inspected and serviced emergency lighting per NFPA standards",
        "• Communicated with customers regarding service needs",
      ],
    },
    {
      timeLine: "April 2018 - April 2019",
      jobTitle: "Assistand Service Manager",
      location: "Hawkins Water Tech.",
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

  const softSkills = [
    "Problem-solving",
    "Attention to detail",
    "Clear communication",
    "Self-driven",
    "Strong desire to learn",
  ];

  return (
    <div>
      {headerTitles.map((headerName) => {
        return (
          <div>
            <h3>{headerName}</h3>
            <List />
          </div>
        );
      })}
    </div>
  );
};

export default Main;
