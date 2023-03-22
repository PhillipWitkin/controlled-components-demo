import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { LayerOne } from './components/LayerOne'

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
        <h1>Message App</h1>
        <LayerOne
          message={this.state.message}
          onMessageChange={this.handleMessageChange}
        />
      </div>
    );
  }
}

export default App;
