import {
    INITIAL_FETCH,
    FETCH_SUCCESS
} from '../constants/index';

const initialState = {};

export default function weatherReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SUCCESS:
            let maxTemp = action.response.daily.data[0].temperatureMax;
            let minTemp = action.response.daily.data[0].temperatureMin;
            let ac = maxTemp > 75;
            let heat = minTemp < 62;
            let time = action.response.daily.data[0].time;
            return [...state, {
                    date: action.date,
                    maxTemp: maxTemp,
                    minTemp: minTemp,
                    ac: ac,
                    heat: heat,
                    time: time
                }
            ]
        default:
            return state;
    }
}
