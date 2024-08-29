import React, { useState } from 'react';
import ChildComponent from './components/ChildComponent';
import './App.css';

function App() {
  const [message, setMessage] = useState('Hello, Newbie');

  return (
    <div className="sample">
      <h1>Sample React</h1>
      <ChildComponent message={message} />
      <button onClick={() => setMessage('Updated Message')}>Update Message</button>
    </div>
  );
}

export default App;