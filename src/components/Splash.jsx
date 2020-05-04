import React from 'react';

const Splash = ({history}) => {

    return(
        <div className="pizza-splash">
            <button onClick={()=>{
                history.push('/pizza')
            }}>Pizza?</button>
        </div>
    )
}

export default Splash;