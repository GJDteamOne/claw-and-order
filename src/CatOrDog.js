import React, { useState } from 'react';

function CatOrDog() {
  const [message, setMessage] = useState("Hello, World!");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Hello, React Hooks!")}>
        Change Message
      </button>
    </div>
  );
}

export default CatOrDog;