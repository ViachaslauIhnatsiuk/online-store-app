import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Modal.module.css';

function Modal({ title, content, closeModal }) {
	return (
		<div className={s.modal_layout}>
			<div className={s.modal_wrapper}>
				<div className={s.modal_header}>
					<h2 className={s.modal_title}>{title}</h2>
					<div className={s.modal_close} onClick={() => closeModal()}></div>
				</div>
				<div className={s.modal_content}>{content}</div>
				<div className={s.modal_button} onClick={() => closeModal()}>
					Ok
				</div>
			</div>
		</div>
	);
}

function ModalContainer({ data, closeModal }) {
	const { name, email, totalPrice, success, address } = data;
	const navigate = useNavigate();

	const closeAndRedirect = () => {
		closeModal();
		return navigate('/cart');
	};

	if (success) {
		return (
			<Modal
				title={`Success!!! Dear, ${name}!`}
				content={`Your order in the amount of ${totalPrice} BYN has been sent to the address - ${address}.
				Detailed instructions have been sent to your email: ${email}.`}
				closeModal={() => closeAndRedirect()}
			/>
		);
	} else {
		return (
			<Modal
				title={'Failure!!!'}
				content={'SecretKey incorrect. Try again.'}
				closeModal={closeModal}
			/>
		);
	}
}

export { ModalContainer };
