import { FEACH_FAILURE, FEACH_STARTED, FEACH_SUCCESS } from './actionTypes';

export const fetchWeatherStarted = () => ({
    type: FEACH_STARTED
});

export const fetchWeatherSuccess = (result) => ({
    type: FEACH_SUCCESS,
    result
});

export const fetchWeatherFailure = (error) => ({
    type: FEACH_FAILURE,
    error
});

export const fetchWeather = (cityCode) => {
    return dispatch => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;

        dispatch(fetchWeatherStarted());

        return fetch(apiUrl).then(response => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then(responseJson => {
                dispatch(fetchWeatherSuccess(responseJson.weatherinfo));
            }).catch(error => {
                dispatch(fetchWeatherFailure(error));
            }).catch(error => {
                dispatch(fetchWeatherFailure(error));
            });
        })
    }
}
