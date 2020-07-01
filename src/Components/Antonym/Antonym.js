import React from 'react';

const Antonym = (props) => {
    let results;
    if (props.data[0]) {
      results = props.data.map((item, i) => {
        return <p key={i}> {item.word}</p>;
      });
    }
    return (
        <div>
            Antonyms
            {results}
        </div>
    )
}
export default Antonym;