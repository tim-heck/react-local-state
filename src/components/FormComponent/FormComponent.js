import React, { Component } from 'react';

class FormComponent extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <form>
                <label>User:</label>
                <input type="text" value={this.props.newMessage.user}
                    placeholder="Enter name" onChange={(event) => this.props.handleChange(event, 'user')} /><br />
                <label>Message:</label>
                <input type="text" value={this.props.newMessage.message}
                    placeholder="Enter message" onChange={(event) => this.props.handleChange(event, 'message')} />
                <button onClick={this.props.handleSubmit}>Submit</button>
            </form>
        );
    }
}

export default FormComponent;
