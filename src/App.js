import React from 'react';
import './App.css';
import Main from './main'
import Why from './com/why'
import Nav from './com/nav'
import {BrowserRouter as Router,Route} from 'react-router-dom';


function App() {
return(
  <Router>
    <div>
      
        <Main />
        <Nav />
        <Route path="/why" component={Why} />
        <div className='home'>
          <h2>NOTE: </h2>
          <p>Do not use paste same link twise this may lead to remove those like which was giver before</p>
          <footer>
         <a href='https://github.com/KichuMohan'><img src='git.png' width='30'/></a>
         
          </footer>

        </div>
        

    </div>
  </Router>
);  

}

export default App;
