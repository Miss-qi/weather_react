import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { stub } from 'sinon';
import { fetchWeather } from '../../weather/actions'
import { FEACH_STARTED } from '../../weather/actionTypes';

const middleware = [thunk];
const createMockStore = configureStore(middleware);

describe('fetchWeather', () => {
    describe('fetchWeather', () => {
        let stubbedFetch;
        beforeEach(() => {
            stubbedFetch = stub(global, 'fetch');
        });
        afterEach(() => {
            stubbedFetch.restore();
        });

        it('should dispatch fetchWeatherSuccess action type on fetch success', () => {
            const mockResponse = Promise.resolve({
                status: 200,
                json: () => Promise.resolve({
                    weatherinfo: {}
                })
            });
            const initialStore = {}
            const store = createMockStore(initialStore);
            stubbedFetch.returns(mockResponse);

            return store.dispatch(fetchWeather(1))
                .then(() => {
                    const dispatchedActions = store.getActions();
                    expect(dispatchedActions.length).toBe(2);
                    expect(dispatchedActions[0].type).toBe(FEACH_STARTED);
                })
        })
    });
})
