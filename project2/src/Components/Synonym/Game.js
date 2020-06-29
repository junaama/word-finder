import React, { useState, useEffect } from 'react';
import WordList from './WordList';

const Game = () => {
    // const [arrayOfWords, setArrayOfWords] = useState([]);
    const randomWords = [];
    // const [objectOfWords, setObjectOfWords] = useState({})

    // function renderData(apiOne, apiTwo){
    //     console.log("synonyms - ", apiTwo)
    //     let things = apiTwo.map((item, i)=>{
    //         return (
    //             <h1>{item}</h1>
    //         )
    //     })
    // }
    function apiCallOne(){
        fetch('https://raw.githubusercontent.com/junaama/word-guesser/master/random-word.json')
            .then(res => res.json())
            .then(resOne => {
                let tally = 0;
                while (tally < 30){
                    let randomNum = Math.floor(Math.random()* 2982);
                    let newWord = resOne[randomNum]
                    randomWords.push(newWord)
                    tally++;
                }
                console.log(randomWords)
                return randomWords
                    //  getSynonyms(),
                    // ,
                    // renderData(resOne, resTwo)
                // )
            });
            
    }
    // function apiCallTwo(){
    //     fetch(`https://wordsapiv1.p.rapidapi.com/words/ugly/synonyms`, {
    //         headers: {
    //             "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    //             "x-rapidapi-key": "4c9c4d7bdbmsh5c0c6dfda6f586dp172c76jsn1f5c896e75d7",
    //         },
    //     })
    //         .then(res => {
    //             return (
    //             res.json()
    //             .then((data) => {return data.synonyms})
    //             )
    //         })
    //         .then(resTwo => {
    //             apiCallOne()
    //         });
    // };


  function apiCallTwo(){
      let objectOfWords = {};
      for(let i = 0; i < randomWords.length; i++){
          let word = randomWords[i];
          fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`, {
            headers: {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": "4c9c4d7bdbmsh5c0c6dfda6f586dp172c76jsn1f5c896e75d7",
            },
        })
            .then(res => res.json())
            .then((data) => {
                // console.log(data)
                 objectOfWords[word] = data.synonyms;
                //setObjectOfWords({...objectOfWords, data})
                //setObjectOfWords({word: data.synonyms})
                //setArrayOfWords(data)
                })
            // })
      }//close for loop
      console.log(objectOfWords)
      return objectOfWords;
    }
    
    console.log(randomWords)

    

    return (
        <div>
            {/* <WordList listOfWords={listOfWords}/> */}
            {/* {apiCallTwo()} */}
            Hi
            {/* {randomWords} */}
          
           <WordList />
        </div>
        
    )
}
export default Game;