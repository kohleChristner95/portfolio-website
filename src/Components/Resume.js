import Main from "./ResumeComponents/Main";
import Overview from "./ResumeComponents/Overview";

const Resume = () => {
  const headerTitles = ["Experience", "Education", "Skills"];
  return (
    <div>
      <div className="empty-color yellow-font">
        <Overview />
        <Main headerTitles={headerTitles} />
      </div>
    </div>
  );
};

export default Resume;
