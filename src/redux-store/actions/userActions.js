const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const SET_USER_COUNTRY = 'SET_USER_COUNTRY';

function addUser(payload) {
	return {
		type: ADD_USER,
		payload,
	};
}

function removeUser() {
	return {
		type: REMOVE_USER,
	};
}

function setUserCountry(payload) {
	return {
		type: SET_USER_COUNTRY,
		payload,
	};
}

export {
	ADD_USER,
	REMOVE_USER,
	SET_USER_COUNTRY,
	addUser,
	removeUser,
	setUserCountry,
};
