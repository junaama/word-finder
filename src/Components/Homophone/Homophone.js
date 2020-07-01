import React from 'react';

const Homophone = (props) => {
    let results;
    if (props.data[0]) {
      results = props.data.map((item, i) => {
        return <p key={i}> {item.word}</p>;
      });
    }
    return (
        <div>
            Homophones
            {results}
        </div>
    )
}
export default Homophone;