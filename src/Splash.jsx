import React from 'react';
import { useHistory } from 'react-router-dom';

const Splash = () => {
    const history = useHistory();
    return(
        <div className="pizza-splash">
            <button onClick={()=>{
                history.push('/pizza')
            }}>Pizza?</button>
        </div>
    )
}

export default Splash;