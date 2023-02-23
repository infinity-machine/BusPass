import React from 'react';
// import { useState, useEffect } from 'react';
import Clock from '../../components/Clock/Clock';
import Icon from '../../components/Icon/Icon';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ticket.css'

const Ticket = () => {
  return (
    <div className="margin_lock">
      <div id="headline">
          <h1>Metro Transit</h1>
          <h2>Show operator your ticket</h2>
      </div>
      < Header />
      < Icon />
      < Clock />
      < Footer />
    </div>
  );
};

export default Ticket;