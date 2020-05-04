import React from "react";

const Form = () => {
  return (
    <div className="pizza-order-form">
      <h1>Order Some Pizza Y'all</h1>
      <form>
        <label htmlFor="name" />
        Name
        <input id="name" type="text" name="name" minLength="2" />
        <label htmlFor="size" />
        How big you want it?
        <select id="size" name="size">
          <option value="">--Please choose size--</option>
          <option value="Small">Smallr</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="X-Large">X-Large</option>
        </select>
        <label htmlFor="pepperoni" className="pepperoni">
          <input type="checkbox" name="pepperoni" />
          Pepperoni
        </label>
        <label htmlFor="sausage" className="sausage">
          <input type="checkbox" name="sausage" />
          Sausage
        </label>
        <label htmlFor="blk-olives" className="blk-olives">
          <input type="checkbox" name="blk-olives" />
          Black Olives
        </label>
        <label htmlFor="garlic" className="garlic">
          <input type="checkbox" name="garlic" />
          Roasted Garlic
        </label>
        <label htmlFor="comments" className="comments">
            Special Instructions
            <textarea name="comments" />
        </label>
        <button type="submit">
            Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
