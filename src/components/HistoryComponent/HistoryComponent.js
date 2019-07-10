import React, { Component } from 'react';

class HistoryComponent extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <h2>Message History</h2>

                {/* one way to conditionally render */}
                {/* {this.state.newMessage.user !== '' ?
                    <p>{this.state.newMessage.user}: {this.state.newMessage.message}</p>
                    : ''
                } */}

                {/* another way */}
                <ul>
                    {this.props.history.map((item, i) =>
                        <li key={i}>{item.user}: {item.message}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default HistoryComponent;