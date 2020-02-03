import React from "react";
import "./style.css";
//I want to create a code to when button it's clicked a new search it's made

const RecentSearchBar = props => {
  return (
    <div className=" recentSearchDiv  col ">
      <span>
        <h6 className="recentTitle">Recent Searches</h6>
      </span>

      {props.searchedCities.map(item => (
        <button
          key={item}
          onClick={props.handleResecentSearch}
          onChange={props.handleInputChange}
          className="recentSearchBtn btn "
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default RecentSearchBar;
