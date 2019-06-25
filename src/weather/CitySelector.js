import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { actions as weatherActions } from '../weather/';

const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601,
};

class CitySelector extends React.Component{

    componentDidMount() {
        const defaultCity = Object.keys(CITY_CODES)[0];
        this.props.onSelectCity(CITY_CODES[defaultCity]);
    }

    onChange = (event) => {
        const cityCode = event.target.value;
        this.props.onSelectCity(cityCode);
    }

    render() {
        return (
            <select onChange={this.onChange}>
                {
                    Object.keys(CITY_CODES).map(
                        cityName => <option value={CITY_CODES[cityName]} key={cityName}>
                            {cityName}
                        </option>
                    )
                }
            </select>
        );
    }
}

CitySelector.propTypes = {
    onSelectCity: propTypes.func
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectCity: cityCode => {
            dispatch(weatherActions.fetchWeather(cityCode));
        }
    }
};

export default connect(null, mapDispatchToProps)(CitySelector);
