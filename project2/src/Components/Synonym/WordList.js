import React from 'react';

const WordList = (props) => {
    let list;
    let array = [];
    if(!props.listOfWords[0]){
        console.log("NOT AGAIN")
    } else {
        console.log("again")
            let tally = 0;
            while(tally < 30){
                let randomNum = Math.floor(Math.random() * 2982)
                array.push(props.listOfWords[randomNum])
                tally++;
            }
            console.log(array)
list = array.map((item, i)=> {
    return (
        <ul key={i}>
            {item}
        </ul>
    )
})
        }

    return (
        <>
        {/* {!array[0] ? "Bye" : array} */}
        {list} 
         
        </>
    )
}
export default WordList;