import { useState } from 'react';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function useReg() {
	const [registrationError, setRegistrationError] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cart = useSelector(state => state.cart);

	return {
		registrationError,
		handleRegistration(name, email, country, key, password) {
			const auth = getAuth();
			createUserWithEmailAndPassword(auth, email, password)
				.then(({ user }) => {
					if (user) {
						dispatch({
							type: 'ADD_USER', payload: {
								name: name,
								email: email,
								key: key,
								id: user.uid,
								token: user.accessToken,
								country: country,
								cart: cart
							}
						})
						setDoc(doc(db, "users", user.uid), {
							name: name,
							email: email,
							country: country,
							key: key,
							password: password,
							id: user.uid,
							token: user.accessToken,
						});
						return navigate('/')
					}
				})
				.catch(() => setRegistrationError(true));
		}
	}
}

