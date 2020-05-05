import React from 'react';

const Navbar = ({ history }) => {

    return(
        <nav className="navbar">
            <h1 className="logo">Lambda Eats</h1>
            <ul className="nav-links">
                <li className="nav-item">
                    <button 
                    className="nav-button-home"
                    onClick={()=>{
                        history.push("/");
                    }}>Home
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-button-help">Help</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;