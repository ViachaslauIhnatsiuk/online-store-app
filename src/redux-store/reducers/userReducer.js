import {
	ADD_USER,
	REMOVE_USER,
	SET_USER_COUNTRY,
} from '../actions/userActions';
import {
	CART_ADD_PRODUCT,
	CHANGE_COUNT,
	DELETE_CARD,
	TOGGLE_CHOISE,
	CLEAR_CART,
	DELETE_CHOSEN_CARDS,
} from '../actions/cartActions';

const initialState = {
	name: null,
	email: null,
	key: null,
	id: null,
	token: null,
	country: null,
	cart: [],
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_USER:
			return { ...action.payload };
		case REMOVE_USER:
			return { ...initialState };
		case SET_USER_COUNTRY:
			return { ...state, country: action.payload };
		case CART_ADD_PRODUCT:
			return { ...state, cart: [...state.cart, { ...action.payload }] };
		case CHANGE_COUNT:
			return {
				...state,
				cart: [
					...state.cart.map((item) => {
						if (item.id === action.payload.id) {
							return { ...item, count: action.payload.newCount };
						}
						return item;
					}),
				],
			};
		case TOGGLE_CHOISE:
			return {
				...state,
				cart: [
					...state.cart.map((item) => {
						if (item.id === action.payload) {
							return { ...item, isChoise: !item.isChoise };
						}
						return item;
					}),
				],
			};
		case DELETE_CARD:
			return {
				...state,
				cart: [
					...state.cart.filter((item) => {
						return item.id !== action.payload;
					}),
				],
			};
		case CLEAR_CART:
			return { ...state, cart: [] };
		case DELETE_CHOSEN_CARDS:
			return {
				...state,
				cart: [...state.cart.filter((item) => !item.isChoise)],
			};
		default:
			return state;
	}
}

export { userReducer };
