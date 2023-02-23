import React from 'react';
import '../../../index.css';
import './header.css';

const Header = (props) => {
  const handleBack = (e) => {

    // WHY THIS NOT WORK?
    e.stopPropagation();
    //

    props.setTicketSelected(false)
  }
  return (
    <div id="header" className="txt_right">
        <p onClick={handleBack}>x</p>
      </div>
  );
};

export default Header;