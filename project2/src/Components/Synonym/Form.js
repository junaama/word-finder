import React from "react";

const Button = props => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit();
  }
  return (
    <button type="button" onClick={handleSubmit}>
      Generate Synonyms
    </button>
  );
};
export default Button;
