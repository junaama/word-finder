import React from 'react';
import './home.css';
const Home = (props) => {
    
    return (
        <div className="form-wrapper">
        <form onSubmit={props.handleSubmit}>
          <div className={props.active ? "user-word-wrapper active" : "user-word-wrapper"}>
            <label htmlFor="user-word" id="user-word-label">
              Type a word here!
            </label>
            <input type="text" 
            onChange={props.handleChange} 
            id="user-word"
            onFocus={props.handleFocus}
            onBlur={props.handleBlur}
            className="user-word"  
            >
            </input>
          </div>
          <br />
          <label htmlFor="options" id="options-label">
            What constraints do you want?
          </label>
          <br />
          <select name="options" id="options" onChange={props.handleSelectChange}>
            <option value="null">Select an option</option>
            <option value="ml">Find Similar Meaning</option>
            <option value="rel_syn">Find Synonyms</option>
            <option value="rel_ant">Find Antonyms</option>
            <option value="rel_rhy">Find Rhymes</option>
            <option value="rel_hom">Find Homophones</option>
          </select>
          <br />
          <input type="submit" value="" id="search-button" alt="submit button"/>
        </form>
      </div>
    )
}
export default Home;