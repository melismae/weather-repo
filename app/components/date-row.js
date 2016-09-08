import React, { Component } from 'react';

export default class DateRow extends Component {
    render() {
        let { date, heat, ac } = this.props;
        return (
            <div className="row">
                <div className="column">{date}</div>
                <div className="column">{heat}</div>
                <div className="column">{ac}</div>
            </div>
        );
    }
}
