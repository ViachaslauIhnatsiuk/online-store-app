import { doc, getDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../firebase/firebase.js';


function useUserData() {
	const userId = useSelector(state => state.user.id);
	const [key, setKey] = useState(null);

	return {
		key,
		async getUserData(){
			await getDoc(doc(db, "users", userId)).then(response => setKey(response.data().key));
		}
	}
}

export { useUserData };
