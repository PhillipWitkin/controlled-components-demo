import React, {Component}  from 'react';
import LayerTwo from './LayerTwo';

class LayerOne extends Component {
    render() {
      return (
        <div className="LayerOne">
            <h1> --------------- </h1>
            <h2>Its the first layer of components</h2>
            <h3> all the props are beings passed through from the top level</h3>
            <p> Including the message: <b>{this.props.message} </b></p>
            <p>...Passing this.props.message, and the Big Red Button this.props.onMessageChange to LayerTwo </p>
            
            <LayerTwo
                message={this.props.message}
                onMessageChange={this.props.onMessageChange}
            />
          
        </div>
      );
    }
}

export default LayerOne;