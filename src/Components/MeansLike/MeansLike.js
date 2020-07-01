import React from "react";

const MeansLike = (props) => {
  let results;
  if (props.data[0]) {
    results = props.data.map((item, i) => {
      return <p key={i}>{item.word}</p>;
    });
  }

  return (
    <div>
      Similar Meanings
      {results}
    </div>
  );
};
export default MeansLike;
