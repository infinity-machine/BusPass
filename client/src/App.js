import React, { useState, useEffect } from 'react';
import Ticket from './pages/Ticket/Ticket';
import Home from './pages/Home/Home';

const App = () => {
  const [ticketSelected, setTicketSelected] = useState(null);

  useEffect(() => {
    console.log(ticketSelected)
  }, [ticketSelected])

  return (
    <div>
      {
        ticketSelected ? (
          < Ticket ticketSelected={ticketSelected} 
            setTicketSelected={setTicketSelected} />
        ) : (
          < Home setTicketSelected={setTicketSelected} />
        )
      }
    </div>
  );
};

export default App
