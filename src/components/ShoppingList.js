import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList(props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchTerm] = useState("")
  const [items, setItems] = useState(props.items);
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event){
    setSearchTerm(event.target.value)
  }

  function handleAddItem(newItem){
    setItems(items => [...items, newItem])
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"){
      return item.name.toLowerCase().includes(search.toLowerCase())
    }

    return item.category === selectedCategory && item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
