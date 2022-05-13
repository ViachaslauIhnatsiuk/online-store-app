import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { RegistrationWarning } from '../Warnings/RegistrationWarning';
import logo from '../../../assets/images/logo-dark.png';
import s from './RegistrationForm.module.css';
import { useReg } from '../../../hooks/useReg';

const RegistrationForm = () => {
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

	const { registrationError, handleRegistration } = useReg();

	return (
		<>
			<div className={s.wrapper}>
				<Link to='/'><img src={logo} alt="logo" /></Link>
				{registrationError ? <RegistrationWarning /> : null}
				<form className={s.form} onSubmit={handleSubmit(() => reset())}>
					<h2 className={s.title}>Create account</h2>
					<div className={s.field}>
						<label htmlFor={s.name} className={s.label}>Your name</label>
						<input
							className={s.input}
							{...register('name', {
								required: 'Name field can not be empty',
								minLength: {
									value: 6,
									message: 'Minimum 6 characters required'
								},
								maxLength: {
									value: 13,
									message: 'Maximum 13 characters'
								}
							})}
						/>
						<p className={s.warning}>{errors?.name?.message}</p>
					</div>
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
						<label htmlFor={s.name} className={s.label}>Your country</label>
						<input
							className={s.input}
							{...register('country', {
								required: 'Name field can not be empty',
								pattern: {
									value: /[A-Za-z]/,
									message: 'Country name must contain only letters'
								},
							})}
						/>
						<p className={s.warning}>{errors?.name?.message}</p>
					</div>
					<div className={s.field}>
						<label htmlFor={s.name} className={s.label}>Your personal key</label>
						<input
							className={s.input}
							type="password"
							{...register('key', {
								required: 'Name field can not be empty',
								minLength: {
									value: 4,
									message: 'Your personal key must contain 4 numbers'
								},
								maxLength: {
									value: 4,
									message: 'Your personal key must contain 4 numbers'
								},
								pattern: {
									value: /[0-9]/,
									message: 'Your personal key must contain 4 numbers'
								},
							})}
						/>
						<p className={s.warning}>{errors?.key?.message}</p>
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
					<div className={s.field}>
						<label htmlFor={s.password} className={s.label}>Re-enter password</label>
						<input
							className={s.input}
							type="password"
							{...register('password_repeat', {
								required: 'Name field can not be empty',
								minLength: {
									value: 8,
									message: 'Minimum 8 characters required'
								},
								pattern: {
									value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
									message: 'Password must contain at least one number and uppercase characters'
								},
								validate: value =>
									value === watch("password") || 'Passwords must match'
							})}
						/>
						<p className={s.warning}>{errors?.password_repeat?.message}</p>
					</div>
					<input className={s.button} type="submit" disabled={!isDirty} value='Continue' onClick={() => handleRegistration(watch("name"), watch("email"), watch("country"), watch("key"), watch("password"))} />
					<p className={s.text}>Already have an account? <Link to='/authorization' className={s.link}>Sign in</Link></p>
				</form>
			</div>
			<div className={s.shadow}></div>
			<div className={s.about}>© 2022, Marathon Store, Inc. </div>
		</>
	)
}

export { RegistrationForm };