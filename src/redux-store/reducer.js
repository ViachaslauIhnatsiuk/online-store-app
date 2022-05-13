import { combineReducers } from 'redux';
import { productsReducer } from './reducers/productsReducer';
import { userReducer } from './reducers/userReducer';

const rootReducers = combineReducers({
	products: productsReducer,
	user: userReducer,
});

export { rootReducers };