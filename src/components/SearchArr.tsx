import React, { useState } from "react";

/**  question  : Seach and display the seached fruit

steps : 
1. store the search arr in some kind of state
2. store the search text in some state
3. on text change, set the search text to whatver searched
4. filter the searched data, stored filtered data into another const and loop through it

*/

const SearchArr = () => {
  const fruits = ["apple", "banana", "kiwis", "cherries", "grapes"];
  const [fruitsData, setFruitsData] = useState(fruits);
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  const fruitDataFiltered = fruitsData.filter((fruit) =>
    fruit.toLowerCase().includes(searchText.toLocaleLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search here.."
          onChange={handleChange}
        />
        {fruitDataFiltered.length > 0 ? (
          fruitDataFiltered.map((fruit, index) => <p key={index}>{fruit}</p>)
        ) : (
          <p>No match found</p>
        )}
      </div>
    </>
  );
};

export default SearchArr;
