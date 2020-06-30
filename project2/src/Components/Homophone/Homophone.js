import React from 'react';

const Homophone = (props) => {
    let results;
    if (props.data[0]) {
      results = props.data.map((item, i) => {
        return <p key={i}>Homophone: {item.word}</p>;
      });
    }
    return (
        <div>
            In Homophone
            {results}
        </div>
    )
}
export default Homophone;