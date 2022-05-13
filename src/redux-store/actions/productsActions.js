import { actionCreator } from "./actionCreator";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_CHOSEN_PRODUCT = "SET_CHOSEN_PRODUCT";
const SET_SORT = "SET_SORT";
const SET_FILTER = "SET_FILTER";
const SET_SEARCH_QUERY = "SET_SEARCH_QUERY"


const setProducts = actionCreator(SET_PRODUCTS);
const setChosenProduct = actionCreator(SET_CHOSEN_PRODUCT);
const setSort = actionCreator(SET_SORT);
const setFilter = actionCreator(SET_FILTER);
const setSearchQuery = actionCreator(SET_SEARCH_QUERY);

export { SET_PRODUCTS, SET_CHOSEN_PRODUCT, SET_SORT, SET_FILTER, SET_SEARCH_QUERY, setProducts, setChosenProduct, setSort, setFilter, setSearchQuery };