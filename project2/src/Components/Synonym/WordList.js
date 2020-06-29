import React, {useState} from "react";
import Button from "./Form";

const WordList = (props) => {
    console.log("inside wordlist - ", props)
    console.log(props.things)
// const [thesaurus, setThesaurus] = useState([]);
//   let list;
//   let array = [];
//   if (!props.listOfWords[0]) {
//     console.log("NOT AGAIN");
//   } else {
//     console.log("again");
//     let tally = 0;
//     while (tally < 30) {
//       let randomNum = Math.floor(Math.random() * 2982);
//       array.push(props.listOfWords[randomNum]);
//       tally++;
//     }
//     console.log(array);
//     list = array.map((item, i) => {

//     //   });
// //   };  
//       return <ul key={i}>{item}</ul>;
//     });
//   }
//           // const handleSubmit = () => {

//     // fetch(`https://wordsapiv1.p.rapidapi.com/words/${item}/synonyms`, {
//     //   headers: {
//     //     "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
//     //     "x-rapidapi-key": "4c9c4d7bdbmsh5c0c6dfda6f586dp172c76jsn1f5c896e75d7",
//     //   },
//     // })
//     //   .then((res) => res.json())
//     //   .then((data) => {
//     //     console.log("inside - ", data);
//     //     setThesaurus(data);
//     //   })
//     //   .catch((err) => {
//     //     console.log(err);
// // handleSubmit={handleSubmit}
  return (
    <>
      {/* {list} */}
      <Button  />
    </>
  );
};
export default WordList;
