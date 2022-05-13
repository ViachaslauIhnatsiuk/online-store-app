import { useDispatch } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase.js';

export function useResponse() {
	const dispatch = useDispatch();

	return {
		getDatabase() {
			const database = collection(db, "database")
			getDocs(database)
				.then(response => {
					const products = response.docs.map(doc => ({
						data: doc.data(),
						id: doc.id
					}))
					dispatch({
						type: "SET_PRODUCTS",
						payload: products[0].data.products,
					});
				})
				.catch(error => console.log(error.message))
		}
	}
}