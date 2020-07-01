import React from 'react';
import './rhyme.css';
const Rhyme = (props) => {
    let results;
    if (props.data[0]) {
      results = props.data.map((item, i) => {
        return <p key={i}> {item.word}</p>;
      });
    }
    return (
      <>
      <div className="head-word">{props.input}</div>
        <div className="results-wrapper">
            <div className="title">Rhymes With</div>
            <div className="results">{results}</div>
        </div>
        </>
    )
}
export default Rhyme;