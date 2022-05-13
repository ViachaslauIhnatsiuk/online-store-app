import { actionCreator } from './actionCreator';

const TOGGLE_CHOISE = 'TOGGLE_CHOISE';
const CHANGE_COUNT = 'CHANGE_COUNT';
const DELETE_CARD = 'DELETE_CARD';
const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
const CLEAR_CART = 'CLEAR_CART';
const DELETE_CHOSEN_CARDS = 'DELETE_CHOSEN_CARDS';

const toogleChoiseAction = actionCreator(TOGGLE_CHOISE);

const changeCountAction = actionCreator(CHANGE_COUNT);

const deleteCardAction = actionCreator(DELETE_CARD);

const cartAddProduct = actionCreator(CART_ADD_PRODUCT);

const clearCart = actionCreator(CLEAR_CART);

const deleteChosenCards = actionCreator(DELETE_CHOSEN_CARDS);

export {
	TOGGLE_CHOISE,
	CHANGE_COUNT,
	DELETE_CARD,
	CART_ADD_PRODUCT,
	CLEAR_CART,
	DELETE_CHOSEN_CARDS,
	toogleChoiseAction,
	changeCountAction,
	deleteCardAction,
	cartAddProduct,
	clearCart,
	deleteChosenCards,
};
