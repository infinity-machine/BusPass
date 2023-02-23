import React from 'react';
import Clock from '../components/Clock/Clock';
import Icon from '../components/Icon/Icon';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './ticket.css'

const Ticket = () => {
  return (
    <div>
      < Header />
      <div className="margin_lock">
        <div id="headline">
          <h1>Metro Transit</h1>
          <p>Show operator your ticket</p>
        </div>
        < Icon />
        < Clock />
        < Footer />
      </div>
    </div>
  );
};

export default Ticket;