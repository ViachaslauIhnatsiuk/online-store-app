import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.js';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.js';

export function useAuth() {
	const [loginError, setLoginError] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cart = useSelector(state => state.user.cart);

	return {
		loginError,
		handleLogin(email, password) {
			signInWithEmailAndPassword(auth, email, password)
				.then(({ user }) => {
					getDoc(doc(db, "users", user.uid))
						.then(response => {
							const userID = response._document.data.value.mapValue.fields;
							if (userID) {
								dispatch({
									type: 'ADD_USER', payload: {
										name: userID.name.stringValue,
										email: userID.email.stringValue,
										id: userID.id.stringValue,
										token: userID.token.stringValue,
										country: userID.country.stringValue,
										cart: cart
									}
								})
								return navigate('/')
							}
						})
				})
				.catch(() => setLoginError(true));
		}
	}
}