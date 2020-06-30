import React from 'react';

const Rhyme = (props) => {
    let results;
    if (props.data[0]) {
      results = props.data.map((item, i) => {
        return <p key={i}>Rhyme: {item.word}</p>;
      });
    }
    return (
        <div>
            In Rhyme
            {results}
        </div>
    )
}
export default Rhyme;