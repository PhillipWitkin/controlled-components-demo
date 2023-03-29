import React, { Component } from 'react';
import LayerThreeForm from './LayerThreeForm';

class LayerTwo extends Component {
    render() {
      return (
        <div className="LayerTwo">
            <h1> --------------- </h1>
            <h2>Layer Two</h2>
            <h4> I'm not adding any state or functions, just saying 'Hi' and passing down all the props given to me by LayerOne</h4>
            <p> That's going to be this.props.message and our Big Red Button</p>
            <LayerThreeForm
            message={this.props.message}
            onMessageChange={this.props.onMessageChange}
            />
        </div>
      );
    }
  }

export default LayerTwo;