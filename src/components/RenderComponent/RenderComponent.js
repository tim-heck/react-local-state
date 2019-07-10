import React, { Component } from 'react';

class RenderComponent extends Component {

    // constructor(props) {
    //     super(props);
    // }

    renderMessage = () => {
        let stuffToShow = '';
        if (this.props.history.length > 0) {
            let lastThingFromHistory = this.props.history[this.props.history.length - 1];
            stuffToShow = <p>{lastThingFromHistory.user}:{lastThingFromHistory.message}</p>
        }
        return (
            stuffToShow
        );
    }

    render() {
        return (
            <>
                <h2>Last Message</h2>
                {this.renderMessage()}
            </>
        );
    }
}

export default RenderComponent;