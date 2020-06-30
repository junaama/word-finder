import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Redirect, useHistory } from "react-router-dom";
import Synonym from "../Synonym/Synonym";
import Antonym from "../Antonym/Antonym";
import MeansLike from "../MeansLike/MeansLike";
import Homophone from "../Homophone/Homophone";
import Rhyme from "../Rhyme/Rhyme";
import Home from "../Home/Home";

const Main = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState([]);
  let [constraint, setConstraint] = useState("");

  let results;
  const history = useHistory();

  const makeApiCall = async () => {
    const url = `https://api.datamuse.com/words?${constraint}=${input}`;
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    makeApiCall();
  }, [input, constraint]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${e.target.options.value}`)
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSelectChange = (e) => {
    setConstraint(e.target.value);
  };

  // if (constraint) {
  //   switch (handler) {
  //     case "ml":
  //       results = data.map((item, i) => {
  //         return <p key={i}>Similar word: {item.word}</p>;
  //       });
  //       break;
  //     case "rel_ant":
  //       results = data.map((item, i) => {
  //         if (!item) {
  //           console.log("dne");
  //         }
  //         return <p key={i}>Antonym: {item.word}</p>;
  //       });
  //       break;
  //     case "rel_syn":
  //       results = data.map((item, i) => {
  //         return <p key={i}>Synonym: {item.word}</p>;
  //       });
  //       break;
  //     case "rel_rhy":
  //       results = data.map((item, i) => {
  //         return <p key={i}>Rhyme: {item.word}</p>;
  //       });
  //       break;
  //     case "rel_hom":
  //       results = data.map((item, i) => {
  //         return <p key={i}>Homophone: {item.word}</p>;
  //       });
  //       break;
  //     default:
  //       console.log("default");
  //   }
  // } else {
  //   console.log("DNE");
  // }
  //     return (
  //       <div>
  //         <form onSubmit={handleSubmit}>
  //             <label htmlFor="userWord">Word: </label>
  //           <input type="text" onChange={handleChange} id="userWord"></input>
  //           <select name="options" id="options" onChange={handleSelectChange}>
  //             <option value="null">Select an option</option>
  //             <option value="ml">Find Meaning Similar To</option>
  //             <option value="rel_syn">Find Synonyms</option>
  //             <option value="rel_ant">Find Antonyms</option>
  //             <option value="rel_rhy">Find Rhymes</option>
  //             <option value="rel_hom">Find Homophones</option>
  //           </select>
  //           <input type="submit" value="Search" />
  //         </form>
  //         Results: {mlResults} {synResults} {antResults} {rhyResults} {homResults}

  //       </div>
  //     );
  //   };
  return (
    <>
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
      <main>
        <Switch>
          <Route exact path="/home" exact component={Home} />
          <Route path="/rel_syn" render={props => <Synonym {...props} data={data}/>} />
          <Route path="/rel_ant" render={props => <Antonym {...props} data={data}/>} />
          <Route path="/ml" render={props => <MeansLike {...props} data={data}/>} />
          <Route path="/rel_hom" render={props => <Homophone {...props} data={data}/>} />
          <Route path="/rel_rhy" render={props => <Rhyme {...props} data={data}/>}/>
        </Switch>
      </main>
    </>
  );
};
export default Main;
