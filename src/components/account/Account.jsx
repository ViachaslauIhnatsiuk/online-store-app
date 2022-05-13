import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/arrow.svg';
import s from './Account.module.css';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase';

const Account = () => {
	const [popupToggle, setPopupToggle] = useState(false);

	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	const handleLogOut = () => {
		signOut(auth);
		dispatch({ type: 'REMOVE_USER' });
	}

	return (
		<div className={s.wrapper} onClick={() => setPopupToggle(!popupToggle)}>
			<div className={popupToggle ? s.blur : undefined} />
			<div className={s.main} >
				<p className={s.greeting}>Hello, {user.name ? user.name : 'Sign in'}</p>
				<p className={s.accounts}>Accounts & Lists</p>
				<img className={s.arrow} src={arrow} alt="arrow" />
			</div>
			<div className={popupToggle ? s.popup : s.popup__off}>
				<div className={s.triangle}></div>
				{user.name
					? <button className={s.button} onClick={handleLogOut}>Sign out</button>
					: <Link to='/authorization' className={s.button}>Sign in</Link>}
				{user.name
					? null
					: <p className={s.text}>New customer? <Link to='/registration' className={s.link}>Start here</Link></p>}
			</div>
		</div>
	)
}

export { Account };