import React, { Component } from 'react';


class LayerThreeForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ inputValue: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.onMessageChange(this.state.inputValue);
    }
  
    render() {
      return (
        <div className="LayerThree">
            <h1> --------------- </h1>
            <h2>Layer Three</h2>
            <h4> I'm receiving the props from LayerTwo</h4> 
            <p> I also have my own special local state variable <b>this.state.inputValue</b>, which keeps track of any changes to the input</p>
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                value={this.state.inputValue}
                onChange={this.handleChange}
                />
            <button type="submit">Submit</button>
            <p>Press the 'submit' Button to use the Big Red Button (this.props.onMessageChanged) and modify App level state this.props.message to match component local state</p>
            </form>
            <p>Local state this.state.inputValue: <b>{this.state.inputValue}</b> </p>
            <p>Current message (App level): <b>{this.props.message}</b></p>
        </div>
      );
    }
  }
  
export default LayerThreeForm