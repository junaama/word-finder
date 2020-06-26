# word-guesser
# Project Overview
![word blob](https://media1.giphy.com/media/3o6ozjrPeWQifzyA6Y/giphy.gif?cid=ecf05e475e3af07b49adfba11666ca079a56fea76afecdba&rid=giphy.gif)
## Project Links

- [add your github repo link]()
- [add your deployment link]()

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.
##### I am creating a game website where the user will get to guess a word given its synonym, antonym, or definition! I will pull random words and a thesaurus from APIs and use them to display the data.
##### Reference https://playknoword.com/
## API


The API I have chosen is WordsAPI (https://rapidapi.com/dpventures/api/wordsapi). It will take in a word and return data for the synonyms, antonyms, and definition for that word. I am using it to create a game where the user will be shown the synonym, antonym, definition of a word and have to guess the corresponding word for that synonym/antonym/definition.

API Codesandbox: https://codesandbox.io/s/word-guesser-rzg0i?file=/src/App.js

### API RESPONSE
```
{
  word: "mean",
  synonyms: 
  ["beggarly",
   "have in mind",
   "think of",
   "bastardly",
   "intend",
   "signify",
   "stand for",
   "entail",
   "imply",
   "mingy",
   "miserly",
   "tight",
   "mean value",
   "average",
   "think",
   "base",
   "meanspirited",
   "hateful"]
}
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

Wireframe: https://www.figma.com/file/E2zWjzqUcveDBCwJpcYu4Y/Untitled?node-id=0%3A1

React Architecture: https://www.figma.com/file/fOpdgvkEW2ht21QX0tJX06/Untitled?node-id=0%3A1


#### MVP 
- Fully functionable guessing game
- Find and use external api 
- Render data on page 
- Allow user to navigate through multiple pages
- Allow user to submit form to determine answer to question
- Mobile first responsive design

#### PostMVP 

- Add localStorage for storage to implement user leaderboard

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Synonym | This will render the synonym game |
| Antonym | This will render the antonym game |
| Definition | This will render the definition game |
| Leaderboard | This will render the leaderboard |
| Home | This will render the homepage including the rules |
| Form | This will render the form to submit answers for each game |

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 2hrs| -hrs | -hrs |
| Working with API | H | 6hrs| -hrs | -hrs |
| Creating Header including Nav | H | 3hrs | -hrs | -hrs
| Linking/Routing pages | H | 5hrs | -- | --
| Creating Synonym Game | H | 5hrs | -- | --
| Creating Antonym Game | H | 2hrs | -- | --
| Creating Definiton Game | M | 2hrs | -- | --
| Creating Leaderboard/Using localStorage | L | 6hrs | -- | --
| Responsive Design/Styling | H | 6hrs | --hrs | --hrs
| Total | H | 37hrs| -hrs | -hrs |

## Additional Libraries
- React Bootstrap for navigation and submit form

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
