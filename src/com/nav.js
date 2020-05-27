import React from 'react';
import {Link} from 'react-router-dom';



function nav(){
    return(
        <nav>
       <ul className='nav-link'>
           <Link to="/why"><li>Why 2 like?</li></Link>
           <Link to="/home"><li>Home</li></Link>
            
          
       </ul>
       </nav>
    );
}

export default nav;