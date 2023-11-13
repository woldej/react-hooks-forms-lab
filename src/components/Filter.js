import React from "react";

function Filter({ search ,onSearchChange}) {
  return (
    <div className="Filter">
      <input
      onChange={onSearchChange}
      type="text" 
      name="search" 
      placeholder="Search..." />
      <select name="filter" onChange={search}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
