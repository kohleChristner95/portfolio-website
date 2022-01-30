import Main from "./ResumeComponents/Main";
import Overview from "./ResumeComponents/Overview";

const Resume = () => {
  const headerTitles = ["Experience", "Education", "Skills"];
  return (
    <div>
      <h1>RESUME</h1>
      <div className="empty-color">
        <Overview />
        <Main headerTitles={headerTitles} />
      </div>
    </div>
  );
};

export default Resume;
