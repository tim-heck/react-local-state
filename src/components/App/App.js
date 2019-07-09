import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {

  // class constructor takes in props
  // constructor(props) {
  // call our parent class constructor
  // super(props);
  // create our local component state - this will hold our message to show
  // this.state = { message: 'React is fun!' };
  // }

  // shorthand w/o constructor
  state = {
    message: '',
    user: '',
    history: []
  }

  handleMessage = (e) => {
    this.setState({ message: e.target.value });
  }

  handleUser = (e) => {
    this.setState({ user: e.target.value });
  }

  handleSubmit = () => {
    // pushing is wrong...
    // this.state.history.push({
    //   user: this.state.user,
    //   message: this.state.message
    // })

    // setState is async
    this.setState({
      history: [ ...this.state.history, {user:this.state.user, message:this.state.message} ]
    })
  }

  handleChange = (event, propToChange) => {
    this.setState({ [propToChange]: event.target.value });
  }

  // Render is called everything the component is updated
  render() {
    // console.log('in render: current state', this.state);
    return (
      <div className="App">
        <Header />
        <main>
          <label>User:</label><input type="text" onChange={(event) => this.handleChange(event, 'user')} /><br />
          <label>Message:</label><input type="text" onChange={(event) => this.handleChange(event, 'message')} />
          <button onClick={this.handleSubmit}>Submit</button>
          <p>{this.state.user}: {this.state.message}</p>
          <div>
            {JSON.stringify(this.state)}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
