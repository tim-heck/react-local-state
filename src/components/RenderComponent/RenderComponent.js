import React, { Component } from 'react';

class RenderComponent extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <>
                <h2>Last Message</h2>
                {this.props.renderMessage()}
            </>
        );
    }
}

export default RenderComponent;