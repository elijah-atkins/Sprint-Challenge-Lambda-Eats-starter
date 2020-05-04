import React, { useState } from "react";
import axios from "axios";

const Form = () => {
    const initialPizza = {
        name: "",
        size: "",
        pepperoni: "",
        sausage: "",
        blkOlives: "",
        garlic: "",
        comments: ""
      };
    const [post, setPost] = useState([]);
    const [pizza, setPizza] = useState(initialPizza);

    const formSubmit = e => {
        e.preventDefault();

        axios
          .post("https://reqres.in/api/users", pizza)
          .then(response => {

            setPost(response.data); // get just the form data from the REST api

            console.log("success", response.data, post);
            // reset form if successful
            setPizza(initialPizza);

          })
          .catch(err => console.log(err.response));
      };
      const handleChanges = e => {
        const newPizza = {
            ...pizza,
            [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        setPizza(newPizza);

    
      };
  return (
    <div className="pizza-order-form">
      <h1>Order Some Pizza Y'all</h1>
      <form onSubmit={formSubmit}>
        <label htmlFor="name" />
        Name
        <input id="name" data-cy="name" type="text" name="name" minLength="2" onChange={handleChanges} value={pizza.name}/>
        <label htmlFor="size" />
        How big you want it?
        <select id="size" name="size" onChange={handleChanges}>
          <option value="">--Please choose size--</option>
          <option value="Small">Smallr</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="X-Large">X-Large</option>
        </select>
        <label htmlFor="pepperoni" className="pepperoni">
          <input type="checkbox" name="pepperoni" data-cy="pepperoni" checked={pizza.pepperoni} onChange={handleChanges}/>
          Pepperoni
        </label>
        <label htmlFor="sausage" className="sausage">
          <input type="checkbox" name="sausage" data-cy="sausage" checked ={pizza.sausage} onChange={handleChanges}/>
          Sausage
        </label>
        <label htmlFor="blkOlives" className="blkOlives">
          <input type="checkbox" name="blkOlives" data-cy="blkOlives" checked={pizza.blkOlives} onChange={handleChanges}/>
          Black Olives
        </label>
        <label htmlFor="garlic" className="garlic">
          <input type="checkbox" name="garlic" data-cy="garlic" checked={pizza.garlic} onChange={handleChanges}/>
          Roasted Garlic
        </label>
        <label htmlFor="comments" className="comments">
            Special Instructions
            <textarea name="comments" onChange={handleChanges}/>
        </label>
        <button type="submit">
            Submit
        </button>
      </form>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
};

export default Form;
