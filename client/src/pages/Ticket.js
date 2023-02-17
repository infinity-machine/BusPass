import React from 'react'
import { useState, useEffect } from 'react';
import icon from '../assets/gif/bus_icon2.gif';
import moment from 'moment'

const Ticket = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [expDateTime, setExpDateTime] = useState('');
  const [rushStatus, setRushStatus] = useState('');

  const handleTime = () => {
    setInterval(() => {
      setCurrentTime(moment().format('h:mm:ss A'));
    }, 1000);
  };

  const handleRush = () => {
    const current_day = moment().format('dddd');
    const digit_time = moment().format('Hm');
    if (current_day === 'Saturday' || current_day === 'Sunday') return 'Non-Rush';
    if (digit_time > 600 && digit_time < 901) return 'Rush';
    if (digit_time > 1500 && digit_time < 1831) return 'Rush';
    return 'Non-Rush';
  };

  useEffect(() => {
    handleTime();
    setRushStatus(handleRush());
    setExpDateTime(moment().add(2, 'h').add(17, 'm').format('LLL'));
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

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
            <p></p>
            <p id="f-1">Adult / {rushStatus ? rushStatus : '...loading...'} Hour Fare</p>
            <p id="f-2">Minneapolis/St Paul Metro Area</p>
            <p id="f-3">Expires {expDateTime}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ticket;