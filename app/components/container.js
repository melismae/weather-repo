import React, { Component } from 'react';

export default class Container extends Component {

    render() {
        let weather = this.props.weather;

        return (
            <div>
                <div className="container">
                    <div className="row header">
                        <div className="column">Column A</div>
                        <div className="column">Column B</div>
                        <div className="column">Column C</div>
                    </div>
                    <div className="row">
                        <div className="column">Column A</div>
                        <div className="column">Column B</div>
                        <div className="column">Column C</div>
                    </div>
                    <div className="row">
                        <div className="column">Column A</div>
                        <div className="column">Column B</div>
                        <div className="column">Column C</div>
                    </div>
                    <div className="row">
                        <div className="column">Column A</div>
                        <div className="column">Column B</div>
                        <div className="column">Column C</div>
                    </div>
                    <div className="row footer">
                        <div className="column">Column A</div>
                        <div className="column">Column B</div>
                        <div className="column">Column C</div>
                    </div>
                </div>
            </div>
        );
    }
}
