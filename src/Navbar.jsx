import React from 'react';

const Navbar = () => {
    return(
        <div className="navbar">
            <h1 className="Logo">Lambda Eats</h1>
            <ul className="nav-links">
                <li className="nav-item">
                    <button className="nav-button-home">Home</button>
                </li>
                <li className="nav-item">
                    <button className="nav-button-help">Help</button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar