import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FormComponent from '../FormComponent/FormComponent';
import RenderComponent from '../RenderComponent/RenderComponent';
import HistoryComponent from '../HistoryComponent/HistoryComponent'

class App extends Component {

  //class constructor takes in props
  // constructor(props) {
  //   //call our parent class constructor
  //   super(props);
  //   //create our local component state - this will hold our message to show
  //   this.state = { message: 'React is fun!' };
  // }

  // shorthand w/o constructor
  state = {
    newMessage: {
      message: '',
      user: '',
    },
    history: []
  }

  // handleMessage = (e) => {
  //   this.setState({ message: e.target.value });
  // }

  // handleUser = (e) => {
  //   this.setState({ user: e.target.value });
  // }

  handleSubmit = (event) => {
    // pushing is wrong...
    // this.state.history.push({
    //   user: this.state.user,
    //   message: this.state.message
    // })

    // Prevent default form refresh behavior
    event.preventDefault();

    // setState is async
    this.setState({
      newMessage: {
        user: '',
        message: ''
      },
      history: [
        ...this.state.history,
        this.state.newMessage
      ]
    })
  }

  handleChange = (event, propToChange) => {
    this.setState({
      newMessage: {
        ...this.state.newMessage,
        [propToChange]: event.target.value
      }
    });
  }

  renderMessage = () => {
    let stuffToShow = '';
    if (this.state.history.length > 0) {
      let lastThingFromHistory = this.state.history[this.state.history.length - 1];
      stuffToShow = <p>{lastThingFromHistory.user}:{lastThingFromHistory.message}</p>
    }
    return (
      stuffToShow
    );
  }

  // Render is called everything the component is updated
  render() {
    // console.log('in render: current state', this.state);
    return (
      <div className="App">
        <Header />
        <main>
          <FormComponent handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            newMessage={this.state.newMessage} />
          {JSON.stringify(this.state)}
          <RenderComponent renderMessage={this.renderMessage} />
          <HistoryComponent history={this.state.history} />
        </main>
      </div>
    );
  }
}

export default App;
