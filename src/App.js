import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LayerOne  from './components/LayerOne'

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: '',
//     };
//     this.handleMessageChange = this.handleMessageChange.bind(this);
//   }

//   handleMessageChange(newMessage) {
//     this.setState({ message: newMessage });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h2>App - This is the top level component</h2>
//         <p>It has a state 'message': <b>{this.state.message}</b></p>
//         <h3>I'll pass it down to the first layer of components, along with a Big Red Button to change it (onMessageChange)</h3>
//         <LayerOne
//           message={this.state.message}
//           onMessageChange={this.handleMessageChange}
//         />
//       </div>
//     );
//   }
// }

const App = () => {

  const [message, setMessage] = useState("Initial Message");

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  }

  return (
          <div className="App">
            <h2>App - This is the top level component</h2>
            <p>It has a state 'message': <b>{message}</b> which is being declared with the <b>useState</b> hook, along with a setMessage() function to change that state</p>
            <h3>I'll pass the state down to the first layer of components, along with a Big Red Button to change it (onMessageChange, which calls the hook-created function)</h3>
            <LayerOne
              message={message}
              onMessageChange={handleMessageChange}
            />
          </div>
        );
}

export default App;
