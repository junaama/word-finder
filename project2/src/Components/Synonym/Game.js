import React, { useState, useEffect } from 'react';
import WordList from './WordList';
// import { logDOM } from '@testing-library/react';

const Game = () => {
    const [arrayOfWords, setArrayOfWords] = useState([]);
    const randomWords = [];
    function renderData(apiOne, apiTwo){
        console.log("synonyms - ", apiTwo)
        return (
        <h1>{apiOne}: {apiTwo}</h1>
        )
    }
    function apiCallOne(){
        return fetch('https://raw.githubusercontent.com/junaama/word-guesser/master/random-word.json')
            .then(res => res.json())
            
    }
    function apiCallTwo(){
        fetch(`https://wordsapiv1.p.rapidapi.com/words/ugly/synonyms`, {
            headers: {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": "4c9c4d7bdbmsh5c0c6dfda6f586dp172c76jsn1f5c896e75d7",
            },
        })
            .then(res => {
                return (
                res.json()
                .then((data) => {return data.synonyms})
                )
            })
            .then(resTwo => {
                apiCallOne()
                    .then(resOne => {
                        // let randomWords = [];
                        let tally = 0;
                        while (tally < 30){
                            let randomNum = Math.floor(Math.random()* 2982);
                            let newWord = resOne[randomNum]
                            randomWords.push(newWord)
                            tally++;
                        }
                        console.log(randomWords)
                        return (
                            randomWords,
                            renderData(resOne, resTwo)
                        )
                        
                    });
            });
    };
    /*
  function apiCallOne(){
        return fetch('https://raw.githubusercontent.com/junaama/word-guesser/master/random-word.json')
            .then(res => res.json())
            
    }
    */
    console.log(randomWords)

    // if(!randomWords[0]){
    //     console.log("HELLO")
    // } else {
    //     for(let i = 0; i < randomWords.length; i++){
    //     console.log(randomWords[i])
    //     let word = 'ugly'
    //     let url = `https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`;
    // }
    // }
    

    return (
        <div>
            {/* <WordList listOfWords={listOfWords}/> */}
            {apiCallTwo()}
            Hi
            {/* {randomWords} */}
            {/* {thing} */}
        </div>
        
    )
}
export default Game;