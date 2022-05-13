import React from 'react';
import { useSelector } from 'react-redux';
import s from './Cart.module.css';
import cartIcon from '../../assets/icons/cart.svg';
import getItemCount from '../../js/getItemCount';

const Cart = () => {
	const cart = useSelector(state => state.user.cart);
	const countItems = getItemCount(cart);

	return (
		<div className={s.wrapper}>
			<div className={s.cart}>
				<img src={cartIcon} alt="cartIcon" />
				<div className={s.counter}>{countItems}</div>
			</div>
			<p className={s.name}>Cart</p>
		</div>
	)
}

export default Cart;