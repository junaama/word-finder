import React from 'react';

const Synonym = (props) => {
    let results;
    if (props.data[0]) {
      results = props.data.map((item, i) => {
        return <p key={i}>Synonym: {item.word}</p>;
      });
    }
    return (
        <div>
            In Synonym
            {results}
        </div>
    )
}
export default Synonym;