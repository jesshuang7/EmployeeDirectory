import React from "react";
import "./style.css";


function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
  

        <li key={result} className="list-group-item">
          <p>{result.name.first} {result.name.last}</p>
          <img alt="Dog" src={result.picture.medium} className="img-fluid" />
          <p>{result.phone}</p>
          <p>{result.email}</p>
          <p>{result.dob.date}</p>
          
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
