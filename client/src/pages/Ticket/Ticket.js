import React from 'react';
import Header from '../components/Header/Header';
import Headline from '../components/Headline/Headline';
import Icon from '../components/Icon/Icon';
import Clock from '../components/Clock/Clock';
// import ExpressIcon from '../components/ExpressIcon/ExpressIcon';
import Footer from '../components/Footer/Footer';

const Ticket = () => {
  return (
    <div>
      < Header />
      <div className="margin_lock">
        < Headline />
        < Icon />
        < Clock />
        {/* < ExpressIcon /> */}
        < Footer express={false}/>
      </div>
    </div>
  );
};

export default Ticket;