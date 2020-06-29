import React, { useState, useEffect } from 'react';
import WordList from './WordList';

const Game = () => {
    const [arrayOfWords, setArrayOfWords] = useState([]);
    // const randomWords = [];
    const [objectOfWords, setObjectOfWords] = useState({})
    const [randomWords, setRandomWords] = useState([])
    // function renderData(apiOne, apiTwo){
    //     console.log("synonyms - ", apiTwo)
    //     let things = apiTwo.map((item, i)=>{
    //         return (
    //             <h1>{item}</h1>
    //         )
    //     })
    // }

  async function apiCallOne(){
        // fetch('https://raw.githubusercontent.com/junaama/word-guesser/master/random-word.json')
        //     .then(res => res.json())
        //     .then(data => {
        //         let tally = 0;
        //         while (tally < 30){
        //             let randomNum = Math.floor(Math.random()* 2982);
        //             let newWord = data[randomNum];
        //             // randomWords.push(newWord);
        //             //setRandomWords([...randomWords, newWord])
        //             tally++;
        //         }
        //         console.log(randomWords);
        //         return randomWords;
        //     });
            const res = await fetch('https://raw.githubusercontent.com/junaama/word-guesser/master/random-word.json');
            const data = await res.json();
            let tally=0;
            while(tally < 30){
                let randomNum = Math.floor(Math.random()* 2982);
                let newWord = data[randomNum];
                // randomWords.push(newWord);
                //setRandomWords(newWord)
                tally++;
            }

    }

//loops not working?
  function apiCallTwo(){
      let objectOfWords = {};
      console.log(randomWords)
    //   for(let i = 0; i < randomWords.length; i++){
          let word = randomWords[1];
          console.log(word)
 
          fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`, {
            headers: {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": "4c9c4d7bdbmsh5c0c6dfda6f586dp172c76jsn1f5c896e75d7",
            },
        })
            .then(res => res.json())
            .then((data) => {
                 console.log(data)
                 objectOfWords[word] = data.synonyms;
                //setObjectOfWords({...objectOfWords, data})
                //setObjectOfWords({word: data.synonyms})
                //setArrayOfWords(data)
                })
    //   }
      console.log(objectOfWords)
      return objectOfWords;
    }
    useEffect(()=> {
        apiCallOne();
    },[])
    useEffect(()=> {
        apiCallOne();
    },[randomWords])

    console.log(randomWords)

    if(!randomWords[0]){
        console.log('bye')
    }else {
        apiCallTwo();
    }

    // useEffect(()=>{
    //     apiCallTwo()
    // }, [])

    return (
        <div>
            {/* <WordList listOfWords={listOfWords}/> */}
            {/* {apiCallTwo()} */}
            In Game
            {/* {randomWords} */}
          
           {/* <WordList /> */}
        </div>
        
    )
}