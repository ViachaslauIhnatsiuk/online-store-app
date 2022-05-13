import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-dark.png';
import s from './ForgotPassword.module.css';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
	const navigate = useNavigate();

	const {
		register,
		formState: {
			errors,
			isDirty
		},
		handleSubmit,
		reset,
		watch
	} = useForm({ mode: "onBlur" });

	const handleForgotPassword = (email) => {
		sendPasswordResetEmail(auth, email, {
			url: 'http://localhost:3000/authorization'
		})
		navigate('/authorization')
	}

	return (<>
		<div className={s.wrapper}>
			<Link to='/'><img src={logo} alt="logo" /></Link>
			<form className={s.form} onSubmit={handleSubmit(() => reset())}>
				<h2 className={s.title}>Password assistance</h2>
				<h3 className={s.subtitle}>Enter the email address associated with your Marathon Store account.</h3>
				<div className={s.field}>
					<label htmlFor={s.email} className={s.label}>Your email</label>
					<input
						className={s.input}
						type="email"
						{...register('email', {
							required: 'Name field can not be empty',
							pattern: {
								value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Wrong or Invalid email address. Please correct and try again.'
							}
						})}
					/>
					<p className={s.warning}>{errors?.email?.message}</p>
				</div>
				<input className={s.button} type="submit" disabled={!isDirty} value='Continue' onClick={() => handleForgotPassword(watch("email"))} />
			</form>
		</div>
		<div className={s.shadow}></div>
		<div className={s.about}>© 2022, Marathon Store, Inc. </div>
	</>
	)
}

export { ForgotPassword };