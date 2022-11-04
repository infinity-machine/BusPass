import React from 'react'
import { useState, useEffect } from 'react';
import icon from '../assets/gif/bus-graphic.gif';
import moment from 'moment'

const Ticket = () => {
  const [currentTime, setCurrentTime] = useState('')
  const [expDateTime, setExpDateTime] = useState('')
  const [rushStatus, setRushStatus] = useState('Non-Rush')

  const handleCurrentTime = () => {
    setInterval(() => {
      setCurrentTime(moment().format('h:mm:ss A'))
    }, 1000);
  }

  const handleExp = () => {
    setExpDateTime(moment().add(2, 'h').add(17, 'm').format('LLL'))
  }

  const handleRush = () => {
    if (rushStatus === 'Non-Rush') setRushStatus('Rush');
    if (rushStatus === 'Rush') setRushStatus('Non-Rush');
  }

  useEffect(handleCurrentTime, []);
  useEffect(handleExp, [])

  return (
    <div>
      <div id="top" className="right-align-text">
        <h3 id="x">x</h3>
      </div>
      <div className="container margin-lock">
        <div>
          <h2>Metro Transit</h2>
          <p>Show operator your ticket</p>
        </div>
        <div className="center">
          <img onClick={handleRush} src={icon} id="icon" alt="icon"></img>
        </div>
        <div>
          <h1 className="center-text">{currentTime}</h1>
          <div id="footer">
            <p id="f-1">Adult / {rushStatus} Hour Fare</p>
            <p id="f-2">Minneapolis/St Paul Metro Area</p>
            <p id="f-3">Expires {expDateTime}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Ticket