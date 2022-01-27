import React from "react";

const List = (props) => {
  console.log("look here", props.list);
  let list = props.list;
  return (
    <div key={list.jobTitle} className="container">
      <h4>{list.timeLine}</h4>
      <div style={{ fontWeight: "Bold" }}>
        {list.jobTitle}, {list.location}
      </div>
      <div className="mb-3 lh-base">
        {list.responsibilities.map((item) => {
          return (
            <div className="list-group">
              <li className="text-start" key={item}>
                {item}
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
