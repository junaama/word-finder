import React from 'react';
import '../pagesstyles.css';

const Homophone = (props) => {
    let results;
    if (props.data[0]) {
      results = props.data.map((item, i) => {
        return <p key={i}> {i + 1}. {item.word}</p>;
      });
    } else {
      results = "(0 Results)";
    }
    return (
      <div className="wrapper">
      <div className="title">Homophones</div>
      <div className="results">{results}</div>
    </div>
    )
}
export default Homophone;