import React, { Component } from 'react';

class HistoryItem extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <li>{this.props.item.user}: {this.props.item.message}</li>
        );
    }
}

export default HistoryItem;