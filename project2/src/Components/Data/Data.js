import React, { useState, useEffect } from "react";

const Data = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState([]);
  const makeApiCall = async () => {
    const url = `https://api.datamuse.com/words?ml=${input}`;
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    makeApiCall(input);
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  return (
    <div>
      Hello in Data
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <label htmlFor="cars">Dropdown: </label>
        <select name="cars" id="cars">
          <option>Find Definition</option>
          <option>Find Synonyms</option>
          <option>Find Antonyms</option>
          <option>Find Rhymes</option>
          <option>Find Homophones</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Data;
