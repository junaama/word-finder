// import React, { useState, useEffect } from "react";

// //https://www.carlrippon.com/drop-down-data-binding-with-react-hooks/

// const Form = () => {
//   let [input, setInput] = useState("");
//   let [data, setData] = useState([]);
//   let [constraint, setConstraint] = useState("");
//   let handler = constraint;
//   let results;
//   let mlResults;
//   let antResults;
//   let synResults;
//   let rhyResults;
//   let homResults;

//   const makeApiCall = async () => {
//     const url = `https://api.datamuse.com/words?${constraint}=${input}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     setData(data);
//   };

//   useEffect(() => {
//     makeApiCall();
//   }, [input]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };
//   const handleSelectChange = (e) => {
//     setConstraint(e.target.value);
//   };

//   if (constraint) {
//     switch (handler) {
//       case "ml":
//         mlResults = data.map((item, i) => {
//         return <p key={i}>Similar word: {item.word}</p>;
//         })
//         break;
//       case "rel_ant":
//         antResults = data.map((item, i) => {
//             if(!item){
//               console.log("dne")
//             }
//             return <p key={i}>Antonym: {item.word}</p>;
//             })
//         break;
//       case "rel_syn":
//         synResults = data.map((item, i) => {
//             return <p key={i}>Synonym: {item.word}</p>;
//             })
//         break;
//       case "rel_rhy":
//         rhyResults = data.map((item, i) => {
//             return <p key={i}>Rhyme: {item.word}</p>;
//             })
//         break;
//       case "rel_hom":
//         homResults = data.map((item, i) => {
//             return <p key={i}>Homophone: {item.word}</p>;
//             })
//         break;
//       default:
//         console.log("default");
//     }
//   } else {
//     console.log("DNE");
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//           <label htmlFor="userWord">Word: </label>
//         <input type="text" onChange={handleChange} id="userWord"></input>
//         <select name="options" id="options" onChange={handleSelectChange}>
//           <option value="null">Select an option</option>
//           <option value="ml">Find Meaning Similar To</option>
//           <option value="rel_syn">Find Synonyms</option>
//           <option value="rel_ant">Find Antonyms</option>
//           <option value="rel_rhy">Find Rhymes</option>
//           <option value="rel_hom">Find Homophones</option>
//         </select>
//         <input type="submit" value="Search" />
//       </form>
//       Results: {mlResults} {synResults} {antResults} {rhyResults} {homResults}
      
//     </div>
//   );
// };

// export default Form;
