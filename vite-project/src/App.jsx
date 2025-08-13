import React, { useState } from 'react';


function App() {
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];


  return (
    <>

<ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
    </>
  );
}

export default App;

