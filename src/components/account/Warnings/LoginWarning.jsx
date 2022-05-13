import React from 'react';
import s from './LoginWarning.module.css';

const LoginWarning = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>There was a problem</div>
			<div className={s.subtitle}>We cannot find an account with that email address and password</div>
		</div>
	)
}

export { LoginWarning };