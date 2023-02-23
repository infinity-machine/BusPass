import React from 'react';
import Header from '../components/Header/Header';
import Headline from '../components/Headline/Headline';
import Icon from '../components/Icon/Icon';
import Clock from '../components/Clock/Clock';
import ExpressIcon from '../components/ExpressIcon/ExpressIcon';
import Footer from '../components/Footer/Footer';

const Ticket = (props) => {
  return (
    <div>
      < Header setTicketSelected={props.setTicketSelected} />
      <div className="margin_lock">
        < Headline />
        < Icon />
        < Clock />
        {
          props.ticketSelected === 'express' ? (
            < ExpressIcon />
          ) : <></>
        }

        < Footer express={
          props.ticketSelected === 'express' ? true : false
        } />
      </div>
    </div>
  );
};

export default Ticket;