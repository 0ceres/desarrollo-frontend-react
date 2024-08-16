import { combineReducers } from 'redux';

// Here we import all the reducers
import defaultReducer from './default/defaultReducers';

const rootReducer = combineReducers({
    default: defaultReducer,
});

export default rootReducer;