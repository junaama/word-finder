import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
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
  const history = useHistory();

  useEffect(() => {
    const makeApiCall = async () => {
      const url = `https://api.datamuse.com/words?${constraint}=${input}`;
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    makeApiCall();
  }, [input, constraint]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${e.target.options.value}`);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSelectChange = (e) => {
    setConstraint(e.target.value);
  };
  //reference  to floating label - https://itnext.io/how-to-build-a-floating-label-input-field-f9b21669fe2f
  const [active, setActive] = useState(false)
  const handleFocus = (e) => {
    setActive(true)
    console.log(e.target)
  }
  const handleBlur = (e) => {
    let target = e.target;
    if(target.value){
      console.log(target.value)
      setActive(true)
      return;
    }
    setActive(false);
  }
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/" render={(props)=> <Home {...props} handleBlur={handleBlur} handleChange={handleChange} handleFocus={handleFocus} handleSelectChange={handleSelectChange} handleSubmit={handleSubmit} active={active}/>}  />
          <Route
            path="/rel_syn"
            render={(props) => <Synonym {...props} data={data} input={input} />}
          />
          <Route
            path="/rel_ant"
            render={(props) => <Antonym {...props} data={data} input={input}/>}
          />
          <Route
            path="/ml"
            render={(props) => <MeansLike {...props} data={data} input={input}/>}
          />
          <Route
            path="/rel_hom"
            render={(props) => <Homophone {...props} data={data} input={input}/>}
          />
          <Route
            path="/rel_rhy"
            render={(props) => <Rhyme {...props} data={data} input={input} />}
          />
        </Switch>
      </main>
    </>
  );
};
export default Main;
