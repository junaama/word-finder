import React from 'react';
import './synonym.css';

const Synonym = (props) => {
    let results;
    
    if (props.data[0]) {
      results = props.data.map((item, i) => {
      return <p key={i}> {i + 1}. {item.word}</p>;
      });
    }
    return (
      <>
      {props.input}
        <div>
            Synonyms
            {results}
        </div>
        </>
    )
}
export default Synonym;