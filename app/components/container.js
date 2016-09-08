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

    /**
        sortWeatherObj() takes the weatherObj from the store and sorts it
        Because the calls to the API happen async, the data that is returned isn't necessarily in the correct order
        This function takes the object, pushes it into an array, and then sorts the array by UNIX timestamp
    **/
    sortWeatherObj(weatherObj) {
        let weatherArr = [];
        let prop;
        for (prop in weatherObj) {
            if (weatherObj.hasOwnProperty(prop)) {
                weatherArr.push({
                    'key': weatherObj[prop].time,
                    'value': weatherObj[prop]
                });
            }
        }
        weatherArr.sort(function(a, b) {
            return a.key - b.key;
        });
        return weatherArr;
    }

    render() {
        let weather = this.props.weather;
        let sortedWeather = this.sortWeatherObj(weather);
        return (
            <div className="container">
                <h1>HVAC Report for June 2016</h1>
                <div className="row header">
                    <div className="column">Date</div>
                    <div className="column">Heat</div>
                    <div className="column">AC</div>
                </div>
                {
                    sortedWeather.map((key) => {
                        let date = key.value.date;
                        let heat = key.value.heat ? "Yes" : "No";
                        let ac = key.value.ac ? 'Yes' : "No";
                        return (
                            <div key={key.key} className="date-row-container">
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
