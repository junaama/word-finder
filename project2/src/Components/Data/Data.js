import React, { useState, useEffect } from "react";
//https://www.carlrippon.com/drop-down-data-binding-with-react-hooks/
const Data = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState([]);
  let [constraint, setConstraint] = useState("");
  let handler = constraint;
//  
  const makeApiCall = async () => {
    const url = `https://api.datamuse.com/words?${constraint}=${input}`;
    console.log("in api call -", url)
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    makeApiCall();
    console.log(data)
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const handleSelectChange = (e)=> {
      console.log("inside handle select - ", e.target.value)
      setConstraint(e.target.value)
  }
  let results;
 if(data[0]){
     results = data.map((item,i)=>{
        console.log(item)
        return(
            <p>Similar word: {item.word}</p>
        )
     })
 }
 
  return (
    <div>
      Hello in Data - I have a word for that
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <br/>
        <label htmlFor="cars">Dropdown: </label>
        <select name="options" id="options" onChange={handleSelectChange}>
            <option value="null">Select an option</option>
          <option value="ml">Find Meaning Similar To</option>
          <option value="rel_syn">Find Synonyms</option>
          <option value="rel_ant">Find Antonyms</option>
          <option value="rel_rhy">Find Rhymes</option>
          <option value="rel_hom">Find Homophones</option>
        </select>
        <input type="submit" value="Submit"/>
      </form>
      Results: {results}
    </div>
  );
};

export default Data;
