import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue,setSearchValue]=useState("")
const [searchObj,setSearchObj]=useState({name:"",category:"All"})
  

  function onSearchChange(event){

  setSearchValue(event.target.value)
setSelectedCategory(event.target.value);
const itemss={name:searchValue,category:selectedCategory}
setSearchObj(itemss)
  }
  
  

const [newList,setNewList]=useState([])


 function onItemFormSubmit(newItem){
setNewList(...items,newItem)
 }
 
const itemsToDisplay = items.filter((item) => {
    // Filter by search value
    if (searchValue !== "") {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    }
  
    // Filter by category
    if (searchObj.category !== "All") {
      return item.category === selectedCategory;
    }
  
    // Return all items if no filter is applied
    return true;
  });return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={onSearchChange} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
