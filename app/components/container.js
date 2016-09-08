import React, { Component } from 'react';
import DateRow from './date-row';

export default class Container extends Component {
    /**
        hvacOn() - calculates the number of days that the type of system was turned on
        takes the weather object & type ("heat" or "ac")
        returns the value based on the flag set in the store
    **/
    hvacOn(weather, type) {
        let days = 0;
        Object.keys(weather).map((key, value) => {
            if (weather[key][type]) {
                days++
            }
        });
        return days;
    }

    render() {
        let weather = this.props.weather;
        return (
            <div className="container">
                <h1>HVAC Report for June 2016</h1>
                <div className="row header">
                    <div className="column">Date</div>
                    <div className="column">Heat</div>
                    <div className="column">AC</div>
                </div>
                {
                    Object.keys(weather).map((key, value) => {
                        let date = weather[key].date;
                        let heat = weather[key].heat ? "Yes" : "No";
                        let ac = weather[key].ac ? 'Yes' : "No";
                        return (
                            <div key={key}>
                                <DateRow date={date} heat={heat} ac={ac}/>
                            </div>
                        )
                    })
                }
                <div className="row footer">
                    <div className="column">Days Systems Turned On</div>
                    <div className="column">{this.hvacOn(weather, 'heat')}</div>
                    <div className="column">{this.hvacOn(weather, 'ac')}</div>
                </div>
            </div>
        );
    }
}
