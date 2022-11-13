import React from 'react'
import { useState, useEffect } from 'react';
import icon from '../assets/gif/bus-graphic.gif';
import moment from 'moment'

const Ticket = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [digitTime, setDigitTime] = useState('');
  const [expDateTime, setExpDateTime] = useState('');
  const [rushStatus, setRushStatus] = useState('');

  const handleTime = () => {
    setInterval(() => {
      console.log('hello')
      setCurrentTime(moment().format('h:mm:ss A'));
      setCurrentDay(moment().format('dddd'));
      setDigitTime(moment().format('Hm'));
      handleRush()
    }, 1000);
  };

  const handleRush = () => {
    const is_rush = isRush();
    if (is_rush) setRushStatus('Rush');
    if (!is_rush) setRushStatus('Non-Rush');
  }

  const handleExp = () => {
    setExpDateTime(moment().add(2, 'h').add(17, 'm').format('LLL'));
  };

  const handleReload = () => {
    window.location.reload();
  };

  const isRush = () => {
    if (currentDay === 'Saturday' || currentDay === 'Sunday') return false;
    if (digitTime > 600 && digitTime < 901) return true;
    if (digitTime > 1500 && digitTime < 1831) return true;
    return false;

  };

  useEffect(handleTime, []);
  useEffect(handleExp, [currentTime]);

  return (
    <div>
      <div id="top" className="right-align-text">
        <h3 id="x">x</h3>
      </div>
      <div className="container margin-lock">
        <div>
          <h2 id="h-1">Metro Transit</h2>
          <p id="h-2">Show operator your ticket</p>
        </div>
        <div className="center">
          <img onClick={handleReload} src={icon} id="icon" alt="icon"></img>
        </div>
        <div>
          <h1 className="center-text">{currentTime ? currentTime : '...loading...'}</h1>
          <div id="footer">
            <p id="f-1">Adult / {rushStatus ? rushStatus : '...loading...'} Hour Fare</p>
            <p id="f-2">Minneapolis/St Paul Metro Area</p>
            <p id="f-3">Expires {expDateTime}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ticket