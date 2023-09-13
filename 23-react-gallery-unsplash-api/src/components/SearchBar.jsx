import { useState } from "react";
import { useGlobalContext } from "../context";
const SearchBar = () => {
  const { setSearchQuery } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchQuery(searchValue);
    e.target.reset();
  };
  return (
    <div>
      <h1 className="title">Search for your favorite image</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="type the name of your image"
          name="search"
          className="form-input search-input"
        ></input>
        <button type="submit" className="submit-btn">
          submit
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
