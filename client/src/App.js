import { useEffect, useState } from 'react';
import './index.css'
import icon from './assets/gif/bus-graphic.gif'
import moment from 'moment'

function App() {

  const [currentTime, setCurrentTime] = useState('')
  const [expDateTime, setExpDateTime] = useState('')

  const handleCurrentTime = () => {
    setInterval(() => {
     setCurrentTime(moment().format('h:mm:ss A'))
    }, 1000);
  }

  const handleExp = () => {
    setExpDateTime(moment().add(2, 'h').add(17, 'm').format('LLL'))
    console.log('hey')
  }

  useEffect(handleCurrentTime, []);
  useEffect(handleExp, [])


  return (
    <div className="margin-lock">
      <div>
        <h2>Metro Transit</h2>
        <p>Show operator your ticket</p>
      </div>
      <div className="center">
        <img onClick={handleExp} src={icon} id="icon"></img>
      </div>
    <div>
      <h1 className="center-text">{currentTime}</h1>
      <div id="footer">
        <p id="f-1">Adult / Non-Rush Hour Fare</p>
        <p id="f-2">Minneapolis/St Paul Metro Area</p>
        <p id="f-3">Expires {expDateTime}</p>
      </div>
    </div>

    </div>
  );
}

export default App;
