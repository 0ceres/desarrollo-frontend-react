import { createStore } from 'redux';

// here we import our reducer
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;