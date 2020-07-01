import React from "react";
import "../pagesstyles.css";

const Rhyme = (props) => {
  let results;
  if (props.data[0]) {
    results = props.data.map((item, i) => {
      return <p key={i}>{i + 1}. {item.word}</p>;
    });
  } else {
    results = "(0 Results)";
  }
  return (
    <>
    <div className="input-word">{props.input.toUpperCase()} </div>
    <div className="wrapper">
      <div className="title">Rhymes With</div>
      <div className="results">{results}</div>
    </div>
    </>
  );
};
export default Rhyme;
