import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialFetch } from '../actions/index.js';
import Container from './container';

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    };
};

class App extends Component {
    componentWillMount() {
        let date = '2016-06-';
        let newDate;
        for (let i = 1; i < 3; i++) {
            newDate = `${date}${i}`;
            if (i < 10) {
                newDate = `${date}0${i}`;
            }
            // this.props.dispatch(initialFetch(newDate));
        }
    }

    render() {
        let { weather, dispatch } = this.props;
        return (
            <div>
                <Container weather={weather} dispatch={dispatch} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
