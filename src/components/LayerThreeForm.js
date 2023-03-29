import React, { useState } from 'react';


const LayerThreeForm = (props) => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
      setInputValue(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onMessageChange(inputValue);
    }
  
      return (
        <div className="LayerThree">
            <h1> --------------- </h1>
            <h2>Layer Three</h2>
            <h4> I'm receiving the props from LayerTwo</h4> 
            <p> I also have my own special local state variable <b>inputValue</b>, which keeps track of any changes to the input</p>
            <p> I'm using the <b>useState</b> hook to declare the local state, along with a function to change it within this component</p>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                />
            <button type="submit">Submit</button>
            <p>Press the 'submit' Button to use the Big Red Button (props.onMessageChanged) and modify App level state <b>message</b>message to match component local state <b>inputValue</b></p>
            </form>
            <p>Local state inputValue: <b>{inputValue}</b> </p>
            <p>Current (App level) message: <b>{props.message}</b></p>
        </div>
      );
}
  
export default LayerThreeForm