import React from "react";
import "./footer.css";
const Footer = (props) => {
  return (
    <div className="footer">
      <a href="/">
        <img src={props.wfSmall} alt="footer home icon"></img>
      </a>
      Word Finder © 2020 Naama Paulemont
    </div>
  );
};
export default Footer;
