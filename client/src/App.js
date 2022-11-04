// import { useEffect, useState } from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';

function App() {

  return (
    <div>
      <div>
        <h1>Welcome to BusPass!!!</h1>
        <p>Because paying for the bus is for chumps!</p>
      </div>
      <div>
        <h2>SELECT TICKET</h2>
        <ul>
          <li><NavLink to="/regular">Regular</NavLink></li>
          <li>Express</li>
        </ul>
      </div>
    </div>

  );
}

export default App;
