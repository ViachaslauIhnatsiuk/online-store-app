import filterProducts from "../../js/filterProducts";
import sortProducts from "../../js/sortProducts";
import { SET_FILTER, SET_PRODUCTS, SET_CHOSEN_PRODUCT, SET_SORT, SET_SEARCH_QUERY } from "../actions/productsActions";


const initialState = {
	all: [],
	visible: [],
	sort: "Feature",
	filter: {
		priceMin: 0,
		priceMax: 0,
		brands: [],
		searchQuery: '',
		category: ''
	}
};

function productsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_PRODUCTS:
			return Object.assign({}, state, {
				all: [...action.payload],
				visible: filterProducts(state.filter, sortProducts(state.sort, [...action.payload]))
			})
		case SET_CHOSEN_PRODUCT:
			return Object.assign({}, state, {
				visible: [action.payload]
			})
		case SET_SORT:
			return Object.assign({}, state, {
				sort: action.payload,
				visible: sortProducts(action.payload, state.visible)
			})
		case SET_FILTER:
			const queryReset = {}
			if (action.payload.category) {
				queryReset.searchQuery = ''
			}
			return Object.assign({}, state, {
				filter: Object.assign({}, state.filter, action.payload, queryReset),
				visible: filterProducts(Object.assign({}, state.filter, action.payload, queryReset),
					sortProducts(state.sort, [...state.all]))
			})
		case SET_SEARCH_QUERY:
			return Object.assign({}, state, {
				filter: Object.assign({}, state.filter, {searchQuery: action.payload, category: ''}),
				visible: filterProducts(Object.assign({}, state.filter, {searchQuery: action.payload}),
					sortProducts(state.sort, [...state.all]))
			})
		default:
			return state
	}
};

export { productsReducer };