import React, { useState } from 'react';

const Home = (props) => {
    const [inputValue, setInputValue] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setTicketSelected(inputValue)
    };

    const handleValueChange = (e) => {
        setInputValue(e.target.value)
    };

  return (
    <form onChange={handleValueChange} onSubmit={handleSubmit}>
        <input type="radio" value="regular" name="ticket_select"></input>
        <label>REGULAR</label>
        <input type="radio" value="express" name="ticket_select"></input>
        <label>EXPRESS</label>
        <button>RENDER TICKET</button>
    </form>
  )
}

export default Home