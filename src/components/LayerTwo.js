import React from 'react';
import LayerThreeForm from './LayerThreeForm';

const LayerTwo = (props) => {

      return (
        <div className="LayerTwo">
            <h1> --------------- </h1>
            <h2>Layer Two</h2>
            <h4> I'm not adding any state or functions, just saying 'Hi' and passing down all the props given to me by LayerOne</h4>
            <p> That's going to be props.message and our Big Red Button</p>
            <LayerThreeForm
            message={props.message}
            onMessageChange={props.onMessageChange}
            />
        </div>
      );
    
  }

export default LayerTwo;