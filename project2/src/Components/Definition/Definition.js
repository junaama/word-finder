import React , {useState, useEffect} from 'react';
//api - https://www.datamuse.com/api/
const Definition = () => {
    let [input, setInput] = useState('');
    let [similar, setSimilar] = useState([]);
    let [replacement, setReplacement] = useState('');
    let newWord = '';
    const makeApiCall = async () => {
        const url = `https://api.datamuse.com/words?ml=${input}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setSimilar(data)
    }
    useEffect(()=> {
        makeApiCall(input)
        console.log(similar)
    },[input])
    const handleChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("In submit")
    }
    const handleTextChange = (e) => {
        console.log(e.target.value)
        
    }
// 
    console.log(similar)
    if(!similar[0]){
        console.log("nothing")
    } else {
        let tally = 0;
        while(tally < 2){
        let random = Math.floor(Math.random() * similar.length);
        console.log(random)
        console.log("random - ", similar[random])
        tally++;
        newWord = similar[random].word
        }
        console.log(newWord)
    }
    return (
        <div>
            In Definition
            <form onSubmit={handleSubmit}>
                <label htmlFor="words">Type: </label>
                <br/>
                <input type="text" id="words" name="words" onChange={handleChange}></input>
                <input type="submit"></input>
                <br/>
                <label htmlFor="body">Body</label>
                <br/>
                <textarea id="body" name="body"  onChange={handleTextChange}></textarea>
            </form>
        </div>
    )
}
export default Definition;