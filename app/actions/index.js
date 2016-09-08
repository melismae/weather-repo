import jsonp from 'jsonp-es6';
import {
    INITIAL_FETCH,
    FETCH_SUCCESS,
    FETCH_FAIL
} from '../constants/index';

const API_KEY = '51df83dc2cfad22bb0db0fdb83ebc965';
const LAT = 45.5898;
const LON = -122.5951
const ROOT_URL = `https://api.forecast.io/forecast/${API_KEY}/${LAT},${LON}`

export function initialFetch(date) {
    const url = `${ROOT_URL},${date}T12:00:00-0700?exclude=[currently,minutely,hourly]`;
    return dispatch =>
    jsonp(url)
        .then(
            (response) => {
                console.log("response", response)
                dispatch({ type: FETCH_SUCCESS, response, date })
            },
        ).catch(
          err => dispatch({ type: FETCH_FAIL, err })
        );
}
