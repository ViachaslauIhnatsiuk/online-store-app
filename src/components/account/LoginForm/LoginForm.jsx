import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { LoginWarning } from '../Warnings/LoginWarning';
import logo from '../../../assets/images/logo-dark.png';
import s from './LoginForm.module.css';
import { useAuth } from '../../../hooks/useAuth';

const LoginForm = () => {
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

	const { loginError, handleLogin } = useAuth();

	return (
		<>
			<div className={s.wrapper}>
				<Link to='/'><img src={logo} alt="logo" /></Link>
				{loginError ? <LoginWarning /> : null}
				<form className={s.form} onSubmit={handleSubmit(() => reset())}>
					<h2 className={s.title}>Sign-In</h2>
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
					<div className={s.field}>
						<label htmlFor={s.password} className={s.label}>Password</label>
						<input
							className={s.input}
							type="password"
							{...register('password', {
								required: 'Name field can not be empty',
								minLength: {
									value: 8,
									message: 'Minimum 8 characters required'
								},
								pattern: {
									value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
									message: 'Password must contain at least one number and uppercase characters'
								},
							})}
						/>
						<p className={s.warning}>{errors?.password?.message}</p>
					</div>
					<input className={s.button} type="submit" disabled={!isDirty} value='Continue' onClick={() => handleLogin(watch("email"), watch("password"))} />
					<Link to='/forgot-password' className={s.forgot}>Forgot your password?</Link>
				</form>
				<div className={s.subtitle}>
					<p className={s.subtitle__text}>New to Marathon Store?</p>
				</div>
				<Link to='/registration' className={s.button_grey}>Create your Marathon Store account</Link>
			</div>
			<div className={s.shadow}></div>
			<div className={s.about}>© 2022, Marathon Store, Inc. </div>
		</>
	)
}

export { LoginForm };