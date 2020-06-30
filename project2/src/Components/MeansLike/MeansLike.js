import React from "react";

const MeansLike = (props) => {
  let results;
  if (props.data[0]) {
    results = props.data.map((item, i) => {
      return <p key={i}>Similar word: {item.word}</p>;
    });
  }

  return (
    <div>
      In MeansLike
      {results}
    </div>
  );
};
export default MeansLike;
