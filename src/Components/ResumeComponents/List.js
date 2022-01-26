import React from "react";

const List = (props) => {
  let list = props.list;
  return (
    <div key={props.jobTitle} className="container">
      <h4>{list.timeLine}</h4>
      <div>
        {list.jobTitle}, {list.location}
      </div>
      <div>
        {list.responsibilities.map((item) => {
          return <div key={item}>• {item}</div>;
        })}
      </div>
    </div>
  );
};

export default List;
