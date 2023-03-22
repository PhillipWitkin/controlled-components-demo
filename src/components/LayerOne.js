import React, {Component}  from 'react';

class LayerOne extends Component {
    render() {
      return (
        <div className="LayerOne">
          <h2>Its the first layer of components</h2>
          <h3> all the props are beings passed through</h3>
          <h4> Including the message {this.props.message} </h4>
          

          
        </div>
      );
    }
}

export default LayerOne;