import React, { useState } from 'react';
import EventHandler from './EventHandler';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>

      {showMessage && <p>Hello, React Event Handling!</p>}

     
      <EventHandler />
    </>
  );
}

export default App;

