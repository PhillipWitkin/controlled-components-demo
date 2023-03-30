import '../App.css';
import React, { useState } from 'react';
import LayerOne  from './LayerOne'

const App = () => {

  const [message, setMessage] = useState("Initial Message");

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  }

  return (
          <div className="App">
            <h2>App - This is the top level component</h2>
            <p>It has a state 'message': <b>{message}</b> </p> 
            <p> That is being declared with the <b>useState</b> hook, along with a setMessage() function to change that state</p>
            <h3>I'll pass the state down to the first layer of components, along with a Big Red Button to change it (onMessageChange, which calls the hook-created function)</h3>
            <LayerOne
              message={message}
              onMessageChange={handleMessageChange}
            />
          </div>
        );
}

export default App;
