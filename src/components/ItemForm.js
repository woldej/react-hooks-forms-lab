import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName,setNewName]=useState("")
const [itemCategory,setNewCategory]=useState("Produce")

function handleNameChange(e){
  setNewName(e.target.value)
}
function handleCategoryChange(e){
  setNewCategory(e.target.value)
}

  function handleSubmit(e){
e.preventDefault();
const newItem = {
  id: uuid(), // the `uuid` library can be used to generate a unique id
  name: itemName,
  category: itemCategory,
};

onItemFormSubmit(newItem)

  }
  return (
    <form className="NewItem" onSubmit={(e)=>{handleSubmit(e)}}>
      <label>
        Name:
        <input type="text" onChange={(e)=>{handleNameChange(e)}} name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e)=>{handleCategoryChange(e)}}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
