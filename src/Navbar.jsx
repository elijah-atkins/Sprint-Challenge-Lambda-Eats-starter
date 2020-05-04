import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    return(
        <div className="navbar">
            <h1 className="Logo">Lambda Eats</h1>
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
        </div>
    )
}

export default Navbar