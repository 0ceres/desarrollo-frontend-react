import { combineReducers } from 'redux';

// Here we import all the reducers
import defaultReducer from './default/defaultReducers';

import productsReducers from './products/productsReducers';
import formReducer from './form/formReducers';

const rootReducer = combineReducers({
    default: defaultReducer, 
    product: productsReducers,
    form: formReducer,

});

export default rootReducer;