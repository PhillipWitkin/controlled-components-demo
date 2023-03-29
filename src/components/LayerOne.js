import React from 'react';
import LayerTwo from './LayerTwo';

const LayerOne = (props) => {
    
      return (
        <div className="LayerOne">
            <h1> --------------- </h1>
            <h2>Its the first layer of components</h2>
            <h3> all the props are beings passed through from the top level</h3>
            <p> Including the message: <b>{props.message} </b></p>
            <p>...Passing props.message, and the Big Red Button props.onMessageChange to LayerTwo </p>
            
            <LayerTwo
                message={props.message}
                onMessageChange={props.onMessageChange}
            />
          
        </div>
      );
    
}

export default LayerOne;