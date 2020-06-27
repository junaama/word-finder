import React, { useState, useEffect } from 'react';
import WordList from './WordList';

const Game = () => {
    /*
    // const [listOfWords, setListOfWords] = useState([])
    // // const [randomWordArray, setRandomWordArray] = useState([])
    // const [synonyms, setSynonyms] = useState([])
    // const url = 'https://raw.githubusercontent.com/junaama/word-guesser/master/random-word.json';
    // const url2 = ''
    
    // useEffect(()=> {
    //         const callApi = async () => { 
    //     const res = await fetch(url)
    //     const data = await res.json()
    //     setListOfWords(data)
    // }
    // callApi();
    // }, [])

    // useEffect(()=> {
    //     const callApi = async () => { 
    //     const res = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`)
    //     const data = await res.json()
    //     // console.log(data)
        
    //     }
    //     callApi();
    // }, [])
// let array = [];
//     if(!listOfWords[0]){
//         console.log("NOT AGAIN")
//     } else {
//         console.log("again")
            
//             let tally = 0;
//             while(tally < 30){
//                 let randomNum = Math.floor(Math.random() * 2982)
//                 console.log(randomNum)
//                 console.log(listOfWords[randomNum])
//                 array.push(listOfWords[randomNum])
//                 setRandomWordArray([...listOfWords, listOfWords[randomNum]])
//                 tally++;
//             }
//             console.log("END END END END END END");
//             console.log(array)
//             console.log(randomWordArray)
//         }
    */
    return (
        <div>
            {/* <WordList listOfWords={listOfWords}/> */}
        </div>
        
    )
}
export default Game;