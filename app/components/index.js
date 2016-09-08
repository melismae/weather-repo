import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialFetch } from '../actions/index.js';
import Container from './container';

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
        ui: state.ui
    };
};

class App extends Component {
    /**
        on the React lifecycle event componentWillMount() the fetch for the data occurs - occurs only once
        date is parsed here per the forecast.io docs (eg '2016-06-09')
        date is looped for number of days in June
        url is assembled in the Redux reducer after being dispatched
    **/
    componentWillMount() {
        let date = '2016-06-';
        let newDate;
        for (let i = 1; i < 4; i++) {
            newDate = `${date}${i}`;
            if (i < 10) {
                newDate = `${date}0${i}`;
            }
            this.props.dispatch(initialFetch(newDate));
        }
    }

    render() {
        let { weather, dispatch, ui } = this.props;
        let errorMessage = ui.error ? "Oh no! Something went wrong. Please reload and try again." : "";
        return (
            <div>
                { errorMessage ? errorMessage : <Container weather={weather} dispatch={dispatch} /> }
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
