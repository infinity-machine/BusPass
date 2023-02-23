import React, { useState } from 'react';
import '../../index.css';
import './home.css'

const Home = (props) => {
  const [inputValue, setInputValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue)
    props.setTicketSelected(inputValue)
  };

  const handleValueChange = (e) => {
    setInputValue(e.target.value)
  };

  return (
    <div id="home_container"
        className="txt_center">
      <form onChange={handleValueChange}
      onSubmit={handleSubmit}
      id="select_form"
      className="margin_lock flex_container flex_stack">
      <div>
        <input type="radio"
          value="regular"
          name="ticket_select" />
        <label id="regular_label"> REGULAR</label>
      </div>
      <div>
        <input type="radio"
          value="express"
          name="ticket_select" />
        <label id="express_label"> EXPRESS</label>
      </div>
      <button 
        id="render_btn">RENDER TICKET</button>
    </form>
    </div>
  )
}

export default Home