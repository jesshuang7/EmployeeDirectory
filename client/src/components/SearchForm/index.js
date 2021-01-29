import React from "react";
import "./style.css";


function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee"></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="searchName"
          list="searchNames"
          type="search"
          className="form-control"
          placeholder="filter by employee's name"
          id="searchName"
        />
      
      </div>
    </form>
  );
}

export default SearchForm;
