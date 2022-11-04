import React from 'react'
import { useState, useEffect } from 'react';
import icon from '../assets/gif/bus-graphic.gif';
import moment from 'moment'

const Regular = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [digitTime, setDigitTime] = useState('');
  const [expDateTime, setExpDateTime] = useState('');
  const [rushStatus, setRushStatus] = useState('');

  const handleTime = () => {
    setInterval(() => {
      setCurrentTime(moment().format('h:mm:ss A'));
      setDigitTime(moment().format('Hm'));
      const is_rush = isRush();
      if (is_rush) setRushStatus('Rush');
      if(!is_rush) setRushStatus('Non-Rush');
    }, 1000);
  };

  const handleExp = () => {
    setExpDateTime(moment().add(2, 'h').add(17, 'm').format('LLL'));
  };

  const handleReload = () => {
    window.location.reload();
  };

  const isRush = () => {
    if (digitTime > 600 && digitTime < 901) return true;
    if (digitTime > 1500 && digitTime < 1831) return true;
    else return false
  };

  useEffect(handleTime);
  useEffect(handleExp, [currentTime]);

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
          <img src={icon} id="icon" alt="icon"></img>
        </div>
        <div>
          <h1 className="center-text">{currentTime}</h1>
          <div id="footer">
            <p id="f-1">Adult / {rushStatus ? rushStatus : '...'} Hour Fare</p>
            <p id="f-2">Minneapolis/St Paul Metro Area</p>
            <p id="f-3">Expires {expDateTime}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Regular