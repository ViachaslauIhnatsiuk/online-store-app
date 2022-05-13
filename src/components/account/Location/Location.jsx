import React, { useState } from 'react';
import s from './Location.module.css';
import { countriesList } from '../../../js/countriesList.js'
import { useSelector, useDispatch } from 'react-redux';
import { setUserCountry } from '../../../redux-store/actions/userActions';
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase.js';

const Location = () => {
	const [popupToggle, setPopupToggle] = useState(false);
	const [expandList, setExpandList] = useState(false);
	const [country, setCountry] = useState(null);

	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	const handleCountry = (e) => {
		setCountry(e.target.textContent);
		setExpandList(!expandList)
	}

	const handleSubmit = () => {
		dispatch(setUserCountry(country))
		getDoc(doc(db, "users", user.id))
			.then(response => {
				const userID = response._document.data.value.mapValue.fields;
				if (userID) {
					setDoc(doc(db, "users", user.id), {
						name: userID.name.stringValue,
						email: userID.email.stringValue,
						country: country,
						key: userID.key.stringValue,
						password: userID.password.stringValue,
						id: userID.id.stringValue,
						token: userID.token.stringValue,
					});
				}
			})
		setPopupToggle(!popupToggle)
	}

	return (
		<>
			<div className={s.wrapper} onClick={() => setPopupToggle(!popupToggle)}>
				<div className={popupToggle ? s.blur : undefined} />
				<div className={s.main} >
					<p className={s.deliver}>{user.country == null ? 'Hello' : 'Deliver to'}</p>
					<p className={s.location}>{user.country == null ? 'Select your address' : user.country}</p>
				</div>
			</div>
			<div className={popupToggle ? s.popup : s.popup__off}>
				<div className={s.popup__title}>Choose your location</div>
				<div className={s.popup__main}>
					<div className={s.popup__notification}>Delivery options and delivery speeds may vary for different locations</div>
					<div className={s.popup__select} onClick={() => { setExpandList(!expandList) }}>{country}</div>
					<div className={expandList ? s.popup__options_active : s.popup__options}>
						{countriesList.map((option) => {
							return (
								<div className={s.popup__option}
									key={option}
									onClick={handleCountry}>
									{option}
								</div>
							);
						})}
					</div>
					<button className={s.popup__button} onClick={handleSubmit}>Done</button>
				</div>
			</div>
		</>
	)
}

export { Location };