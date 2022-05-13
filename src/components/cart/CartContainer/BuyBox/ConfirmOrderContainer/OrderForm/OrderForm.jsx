import React, { useEffect, useState } from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { ModalContainer } from './Modal/Modal';
import s from './OrderForm.module.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../../../firebase/firebase.js';
import { useDispatch } from 'react-redux';
import { deleteChosenCards } from '../../../../../../redux-store/actions/cartActions';

const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className={s.text_input}>
			<div className={s.label}>
				<label htmlFor={props.id || props.name}>{label}</label>
				{meta.touched && meta.error ? (
					<div className={s.error}>{meta.error}</div>
				) : (
					'✓'
				)}
			</div>
			<input className={s.input} {...field} {...props} />
		</div>
	);
};

const OrderForm = ({ userId, name, email, totalPrice }) => {
	const [key, setKey] = useState(null);
	const [modalData, setModalData] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		getDoc(doc(db, 'users', userId)).then((response) =>
			setKey(response.data().key)
		);
	}, []);

	const closeModal = () => setOpenModal(false);

	return (
		<div>
			<Formik
				initialValues={{
					address: '',
					secretKey: '',
				}}
				validationSchema={Yup.object({
					address: Yup.string()
						.min(3, 'Address length must be more 3 characters')
						.required('Required'),
					secretKey: Yup.string()
						.length(4, 'secretKey must contain 4 characters')
						.matches(/[0-9]{4}/, 'secretKey must contain characters [0-9]')
						.required('Required'),
				})}
				onSubmit={(values, actions) => {
					if (values.secretKey === key) {
						setModalData({name, email, totalPrice, success: true, address: values.address});
						setOpenModal(true);
						actions.resetForm({ values: { address: '', secretKey: '' } });
						dispatch(deleteChosenCards());
					} else {
						setOpenModal(true);
						actions.resetForm({ values: { ...values, secretKey: '' } });
					}
				}}
			>
				{({ dirty, isValid }) => (
					<>
						{openModal && (
							<ModalContainer
								data={modalData}
								closeModal={closeModal}
							/>
						)}
						<Form className={s.confirmForm}>
							<div className={s.user_data}>
								<div className={s.user_name}>Name: {name}</div>
								<div className={s.user_email}>E-mail: {email}</div>
							</div>
							<TextInput
								label='Enter your address:'
								name='address'
								type='text'
								placeholder='Address'
							/>
							<TextInput
								label='Enter your secretKey:'
								name='secretKey'
								type='text'
								placeholder='Secret'
							/>
							<button
								className={s.form_button}
								type='submit'
								disabled={!(dirty && isValid)}
							>
								Confirm
							</button>
						</Form>
					</>
				)}
			</Formik>
		</div>
	);
};

export { OrderForm };
