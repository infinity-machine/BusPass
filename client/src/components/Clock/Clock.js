import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../../index.css';
import './clock.css';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState('');
  const handleTime = () => {
    setInterval(() => {
      setCurrentTime(moment().format('h:mm:ss A'));
    }, 1000);
  };
  useEffect(() => {
    handleTime()
  })
  return (
      <h1 id="clock" className="txt_center">{currentTime ? currentTime : '...loading...'}</h1>

  )
}

export default Clock