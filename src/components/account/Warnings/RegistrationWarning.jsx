import React from 'react';
import s from './RegistrationWarning.module.css';

const RegistrationWarning = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>Email address already in use</div>
			<div className={s.subtitle}>You indicated you're a new customer, but an account with such email already exists</div>
		</div>
	)
}

export { RegistrationWarning };