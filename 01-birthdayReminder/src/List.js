import React from "react";

const List = (people) => {
  return (
    <div className="listView">
      {people.people.map((people) => {
        const { id, name, image, age } = people;
        return (
          <div className="allList" key={id}>
            <div className="image">
              <img src={image} alt="img" className="img" />
            </div>
            <div className="info">
              <div className="forName">{name}</div>
              <p className="forAge">{age}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
