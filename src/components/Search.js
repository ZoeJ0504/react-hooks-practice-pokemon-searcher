import React from "react";

function Search({ handleOnChange }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleOnChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
