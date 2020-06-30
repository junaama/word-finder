import React from 'react';

const Antonym = (props) => {
    let results;
    if (props.data[0]) {
      results = props.data.map((item, i) => {
        return <p key={i}>Antonym: {item.word}</p>;
      });
    }
    return (
        <div>
            In Antonym
            {results}
        </div>
    )
}
export default Antonym;