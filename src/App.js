import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import LayerOne  from './components/LayerOne'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleMessageChange(newMessage) {
    this.setState({ message: newMessage });
  }

  render() {
    return (
      <div className="App">
        <h2>App - This is the top level component</h2>
        <p>It has a state 'message': <b>{this.state.message}</b></p>
        <h3>I'll pass it down to the first layer of components, along with a Big Red Button to change it (onMessageChange)</h3>
        <LayerOne
          message={this.state.message}
          onMessageChange={this.handleMessageChange}
        />
      </div>
    );
  }
}

export default App;
