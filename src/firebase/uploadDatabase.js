import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase.js';
import { catalog } from './database.js';

export function uploadDatabase() {
	addDoc(collection(db, "database"), catalog);
}