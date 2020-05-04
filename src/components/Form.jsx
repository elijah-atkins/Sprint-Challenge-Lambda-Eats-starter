import React from 'react';

const Form = () => {
    return (
        <div className="pizza-order-form">
            <h1>Order Some Pizza Y'all</h1>
            <form>
                <label htmlFor="name" />
        Name
        <input
                    id="name"
                    type="text"
                    name="name"
                    minLength="2"
                />
                <label htmlFor="size" />
                    How big you want it?
        <select id="size" name="size" >
                    <option value="">--Please choose size--</option>
                    <option value="Small">Smallr</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="X-Large">X-Large</option>
                </select>
            </form>
        </div>
    )
};

export default Form;