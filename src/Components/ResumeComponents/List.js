import React from "react";

const List = ({ list }) => {
  return (
    <div key={list.jobTitle} className="container text-start">
      <div className="ms-4">{list.timeLine}</div>
      <div className="ms-4">
        <b className="h5">{list.jobTitle}</b>, {list.location}
      </div>
      <div className="my-3 lh-base">
        {list.responsibilities.map((item) => {
          return (
            <div className="list-group ms-5">
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
