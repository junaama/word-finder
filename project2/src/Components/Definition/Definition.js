// import React , {useState, useEffect} from 'react';
// //api - https://www.datamuse.com/api/
// const Definition = () => {
//     let [input, setInput] = useState('');
//     let [similar, setSimilar] = useState([]);
//     let [replacement, setReplacement] = useState('');
//     let [inputArr, setInputArr] = useState([]);


//     let newWord = '';
//     const makeApiCall = async () => {
//         const url = `https://api.datamuse.com/words?ml=${input}`;
//         const res = await fetch(url);
//         const data = await res.json();
//         setSimilar(data)
//     }

//     useEffect(()=> {
//         makeApiCall(input)
//     },[input])

//     const handleChange = (e) => {
//         console.log(e.target.value)
//         setInputArr(e.target.value)
//         setInput(e.target.value)
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log("In submit")
//     }
//     let cur = 0;
//     const handleTextChange = (e) => {
//         // console.log(e.target.value)
//         // let next = textEssay.slice(cur, cur + 5);
//         // e.target.value += next;
//         // cur += 5;
//         updateText(e)

//         e.target.value += newWord;
//     }

//     console.log(similar)
//     if(!similar[0]){
//     } else {
//         let random = Math.floor(Math.random() * similar.length);
//         newWord = similar[random].word   
//     }
//     const updateText = (e) =>{
//         console.log("array -",inputArr)
//         let splitOnWord = inputArr.split(' ')
//         console.log("split array -",splitOnWord)
//         console.log('e -', e.target.value)
//         // e.target.value = "no matter what";
//         let next = splitOnWord.slice(cur, cur + 5)
//         e.target.value += next;
//         cur += 5;
//     }
//     const handleKeyUp = (e) => {
//         console.log("inside handle key up - ", e.target.value);
//         let value = e.target.value;

//     }
//     return (
//         <div>
//             In Definition
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="words">Type: </label>
//                 <br/>
//                 <input type="text" id="words" name="words" onChange={handleChange} onKeyUp={handleKeyUp} ></input>
//                 <input type="submit"></input>
//                 <br/>
//                 <label htmlFor="body">Body</label>
//                 <br/>
//                 <textarea id="body" name="body"  onChange={handleTextChange}></textarea>
//             </form>
//         </div>
//     )
// }
// export default Definition;