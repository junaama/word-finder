import React, { useState, useEffect } from "react";
import Synonym from '../Synonym/Synonym';
import Antonym from '../Antonym/Antonym';
import MeansLike from '../MeansLike/MeansLike';
import Homophone from '../Homophone/Homophone';
import Rhyme from '../Rhyme/Rhyme';
import {Link, Route} from 'react-router-dom';
//https://www.carlrippon.com/drop-down-data-binding-with-react-hooks/
const Form = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState([]);
  let [constraint, setConstraint] = useState("");
  let handler = constraint;
  //
  const makeApiCall = async () => {
    const url = `https://api.datamuse.com/words?${constraint}=${input}`;
    console.log("in api call -", url);
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    makeApiCall();
    console.log(data);
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const handleSelectChange = (e) => {
    console.log("inside handle select - ", e.target.value);
    setConstraint(e.target.value);
  };

  let results;

  let [mlResults, setMlResults] = useState();
  let [antResults, setAntResults] = useState();
  let [synResults, setSynResults] = useState();
  let [rhyResults, setRhyResults] = useState();
  let [homResults, setHomResults] = useState();
/*
Previous way
results = data.map((item, i) => {
console.log(item);
return <p key={i}>Similar word: {item.word}</p>;
})
*/
  if (constraint) {
    switch (handler) {
      case "ml":
        console.log(" in switch - ml");
        mlResults = data.map((item, i) => {
        console.log(item);
        return <p key={i}>Similar word: {item.word}</p>;
        })
        break;
      case "rel_ant":
        console.log(" in switch - rel_ant");
        results = data.map((item, i) => {
            console.log(item);
            return <p key={i}>Antonym: {item.word}</p>;
            })
        break;
      case "rel_syn":
        console.log(" in switch - rel_syn");
        results = data.map((item, i) => {
            console.log(item);
            return <p key={i}>Synonym: {item.word}</p>;
            })
        break;
      case "rel_rhy":
        console.log(" in switch - rel_rhy");
        results = data.map((item, i) => {
            console.log(item);
            return <p key={i}>Rhyme: {item.word}</p>;
            })
        break;
      case "rel_hom":
        console.log(" in switch - rel_hom");
        results = data.map((item, i) => {
            console.log(item);
            return <p key={i}>Homophone: {item.word}</p>;
            })
        break;
      default:
        console.log("default");
    }
  } else {
    console.log("DNE");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label htmlFor="userWord">Word: </label>
        <input type="text" onChange={handleChange} id="userWord"></input>
        <select name="options" id="options" onChange={handleSelectChange}>
          <option value="null">Select an option</option>
          <option value="ml">Find Meaning Similar To</option>
          <option value="rel_syn">Find Synonyms</option>
          <option value="rel_ant">Find Antonyms</option>
          <option value="rel_rhy">Find Rhymes</option>
          <option value="rel_hom">Find Homophones</option>
        </select>
        <input type="submit" value="Search" />
      </form>
      Results: {results}
    </div>
  );
};

export default Form;
