import React from "react";

function Search({onSetSearch}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={e => onSetSearch(prevSearch => e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
