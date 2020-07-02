# word-finder
# Project Overview
![word blob](https://media1.giphy.com/media/3o6ozjrPeWQifzyA6Y/giphy.gif?cid=ecf05e475e3af07b49adfba11666ca079a56fea76afecdba&rid=giphy.gif)
## Project Links

- [github repo link](https://github.com/junaama/word-finder)
- [netlify deployment link](https://heuristic-euler-2d4e61.netlify.app/)

## Project Description

##### I am creating a website where the user will search for a word/phrase and find synonyms, antonyms, homophones, rhymes and words with a similar meaning.
##### Reference https://rhymezone.com/
## API


The API I have chosen is Datamuse. It will take in a word and return data for the synonyms, antonyms, and other desired constraints for that word. I am using it to create an application where the user will input a word or phrase and select a desired constraint to output a find a word.

The API I have chosen is Datamuse (https://datamuse.com/api/)

### API RESPONSE
```
[  
   {  
      "word":"tinnitus",
      "score":57312
   },
   {  
      "word":"ring",
      "score":50952
   },
   {  
      "word":"cinchonism",
      "score":50552
   },
   {  
      "word":"acouasm",
      "score":48952
   }
]
```

## Wireframes


Mobile Wireframe: https://www.figma.com/file/CkDrin1p8m9ulobSPyNXHS/new-wireframe?node-id=0%3A1
Desktop Wireframe: https://www.figma.com/file/CkDrin1p8m9ulobSPyNXHS/new-wireframe?node-id=1%3A24

React Architecture: https://www.figma.com/file/kEOP1EzspQDhaDWDfvOuuo/react-arc


#### MVP 
- Fully functionable word finder
- Find and use external api 
- Render data from API on page 
- Allow user to navigate through multiple pages
- Allow user to submit form to find synonyms/antonyms/homophones etc
- Mobile first responsive design

#### PostMVP 

- Call API for each user input so user can toggle between different constraints

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will render the Header| 
| Header | This will render the Main and NavBar | 
| Footer | This will render the footer information |
| Main | This will render the Home, Synonym, Antonym, MeansLike, Homophone, Rhyme components and handle the Routes/Props of each component | 
| NavBar | This will render the sticky navigation bar to be displayed across all pages and deal with the Links to each page |
| Home | This will render the home page and include the form for the user search |
| Synonym | This will render the results for the words that are synonyms of the user input word |
| Antonym | This will render the results for the words that are antonyms of the user input word |
| MeansLike | This will render the results for the words that have a similar meaning to the user input word |
| Homophone | This will render the results for the words that are homophones of the user input word |
| Rhyme | This will render the results for the words that rhymes with the user input word |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 2hrs| 6hrs | 4hrs |
| Working with API | H | 6hrs| 20hrs | 12hrs |
| Creating Header including Nav/Footer | H | 3hrs | 3hrs | 3hrs
| Linking/Routing pages | H | 5hrs | 2hrs | 2hrs
| Displaying Results to Components | H | 4hrs | 2hrs | 2hrs
| Responsive Design/Styling | H | 8hrs | 12hrs | 12hrs
| Total | H | 28hrs| 45hrs | 33hrs |


## Code Snippet

Here is the React.js code to create a custom floating label.These functions pair to JSX listeners and CSS transition stylings. I am proud of it because I needed to utilize my knowledge of React/JSX/Javascript and CSS in order to display a label over the text input and then while the user is typing the label floats to the top and changes size.

```

 const [active, setActive] = useState(false)
  const handleFocus = (e) => {
    setActive(true)
  }
  const handleBlur = (e) => {
    let target = e.target;
    if(target.value){
      setActive(true)
      return;
    }
    setActive(false);
  }

```
