import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formState, setFormState] = useState({
    name: '',
    category: 'Produce'
  })

  function handleChange(e){
    setFormState(formState => {
     return { ...formState, [e.target.name]: e.target.value}
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: formState.name,
      category: formState.category
    }
    onItemFormSubmit(newItem);
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formState.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
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
